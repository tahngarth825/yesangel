"use strict";

const AppDispatcher = require('../dispatcher/dispatcher.js');
const Store = require('flux/utils').Store;
const SessionConstants = require('../constants/session_constants');

const SessionStore = new Store(AppDispatcher);

let _currentUser = {};
let _currentUserHasBeenFetched = false;

const _login = function(currentUser) {
  _currentUser = parseUser(currentUser);
  _currentUserHasBeenFetched = true;
};

const _logout = function() {
  _currentUser = {};
  _currentUserHasBeenFetched = true;
};

const parseUser = function (user) {
  let result = user;

  if (result["lf_gender"] && !Array.isArray(result["lf_gender"])){
    result["lf_gender"] = JSON.parse(result["lf_gender"]);
  }

  if ( result["age"] ) {
    result["age"] = parseInt(result["age"]);
  }

  if ( result["lf_min_age"] ) {
    result["lf_min_age"] = parseInt(result["lf_min_age"]);
    result["lf_max_age"] = parseInt(result["lf_max_age"]);
  }

  if (result["height"]) {
    result["height"] = parseInt(result["height"]);
  }

  return result;
};

SessionStore.__onDispatch = payload => {
  switch(payload.actionType) {
    case SessionConstants.LOGIN:
      _login(payload.currentUser);
      SessionStore.__emitChange();
      break;
    case SessionConstants.LOGOUT:
    	_logout();
      SessionStore.__emitChange();
      break;
  }
};

SessionStore.currentUser = function() {
  return Object.assign({}, _currentUser);
};

SessionStore.currentUserHasBeenFetched = function () {
  return !!_currentUserHasBeenFetched;
};

SessionStore.isUserLoggedIn = function() {
  return !!_currentUser.id;
};

module.exports = SessionStore;
