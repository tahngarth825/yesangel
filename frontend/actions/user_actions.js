"use strict";

const AppDispatcher = require('../dispatcher/dispatcher');
const SessionActions = require('../actions/session_actions');
const UserApiUtil = require('../util/user_api_util');
const hashHistory = require('react-router').hashHistory;
const UserConstants = require("../constants/user_constants.js");

const UserActions = {
  fetchUsers(){
    UserApiUtil.fetchUsers(UserActions.receiveUsers);
  },

  receiveUsers(users){
    AppDispatcher.dispatch({
      actionType: UserConstants.RECEIVE_USERS,
      users: users
    });
  },

  fetchUser(id){
    UserApiUtil.fetchUser(id, UserActions.receiveUser);
  },

  receiveUser(user){
    AppDispatcher.dispatch({
      actionType: UserConstants.RECEIVE_USER,
      user: user
    });
  },

  updateUser(user, callback){
    UserApiUtil.editUser(user, SessionActions.receiveCurrentUser);
    if (callback){
      callback();
    }
  },

  filterUsers(filter){
    UserActions.updateUser(filter,
    UserApiUtil.filterUsers.bind(this, filter, UserActions.receiveUsers));
  }
};

module.exports = UserActions;
