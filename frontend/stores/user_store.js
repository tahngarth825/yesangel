const AppDispatcher = require('../dispatcher/dispatcher.js');
const Store = require("flux/utils").Store;
const UserConstants = require("../constants/user_constants.js");

let _users = [];

const UserStore = new Store(AppDispatcher);

UserStore.all = function(){
  return _users.slice();
};

UserStore.find = function(id){
  let result = undefined
  _users.forEach(function(user){
    if (user.id === parseInt(id)){
      result = user;
    }
  });
  return result;
};

UserStore.addUser = function (user){
  const found = UserStore.find(user.id);

  if (found === undefined){
    _users.push(user);
  } else {
    _users[_users.indexOf(found)] = user;
  }
};

UserStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case UserConstants.RECEIVE_USERS:
      _users = payload.users;
      UserStore.__emitChange();
      break;
    case UserConstants.RECEIVE_USER:
      UserStore.addUser(payload.user);
      UserStore.__emitChange();
      break;
  }
};

module.exports = UserStore;
