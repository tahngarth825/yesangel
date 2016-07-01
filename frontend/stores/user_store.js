const AppDispatcher = require('../dispatcher/dispatcher.js');
const Store = require("flux/utils").Store;
const UserConstants = require("../constants/user_constants.js");

let _users = {};

const UserStore = new Store(AppDispatcher);

UserStore.all = function(){
  return Object.assign([], _users);
};

UserStore.find = function(id){
  return Object.assign({},_users[id]);
};

UserStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case UserConstants.RECEIVE_USERS:
      _users = payload.users;
      UserStore.__emitChange();
      break;
    case UserConstants.RECEIVE_USER:
      _users[payload.user.id] = payload.user;
      UserStore.__emitChange();
      break;
  }
};

module.exports = UserStore;
