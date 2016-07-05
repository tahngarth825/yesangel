const AppDispatcher = require('../dispatcher/dispatcher.js');
const Store = require("flux/utils").Store;
const UserConstants = require("../constants/user_constants.js");
const SessionStore = require("./session_store.js");

let _users = [];

const UserStore = new Store(AppDispatcher);

UserStore.all = function(){
  return _users.slice();
};

UserStore.find = function(id){
  let result = undefined;
  _users.forEach(function(user){
    if (user.id === parseInt(id)){
      result = user;
    }
  });
  return result;
};

UserStore.addUser = function (user){
  if (user.id === SessionStore.currentUser().id){
    return;
  }

  const found = UserStore.find(user.id);
  const userParsed = parseUser(user);

  if (found === undefined){
    _users.push(userParsed);
  } else {
    _users[_users.indexOf(found)] = userParsed;
  }
};

UserStore.addUsers = function (users) {
  let result = [];
  users.forEach(function (user) {
    if (user.id !== SessionStore.currentUser().id){
      result.push(parseUser(user));
    }
  });

  _users = result;
};

UserStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case UserConstants.RECEIVE_USERS:
      UserStore.addUsers(payload.users);
      UserStore.__emitChange();
      break;
    case UserConstants.RECEIVE_USER:
      UserStore.addUser(payload.user);
      UserStore.__emitChange();
      break;
  }
};

function parseUser (user) {
  let result = user;

  if (result["lf_gender"] && !Array.isArray(result["lf_gender"])){
    result["lf_gender"] = JSON.parse(result["lf_gender"]);
  }

  if( result["age"] ) {
    result["age"] = parseInt(result["age"]);
  }

  if ( result["lf_min_age"] ){
    result["lf_min_age"] = parseInt(result["lf_min_age"]);
    result["lf_max_age"] = parseInt(result["lf_max_age"]);
  }

  if (result["height"]) {
    result["height"] = parseInt(result["height"]);
  }

  return result;
}

module.exports = UserStore;
