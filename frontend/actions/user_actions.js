"use strict";

const AppDispatcher = require('../dispatcher/dispatcher');
const UserConstants = require('../constants/user_constants');
const UserApiUtil = require('../util/user_api_util');
const hashHistory = require('react-router').hashHistory;

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

  updateUser(user){
    UserApiUtil.editUser(user, UserActions.receiveUser);
  }
};

module.exports = UserActions;
