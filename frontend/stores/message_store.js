const AppDispatcher = require('../dispatcher/dispatcher.js');
const Store = require("flux/utils").Store;
const MessageConstants = require("../constants/message_constants.js");

const MessageStore = new Store(AppDispatcher);

let _messages = [];

MessageStore.messagesForUser = function (id){

};

MessageStore.__onDispatch = function (payload) {

};

module.exports = MessageStore;
