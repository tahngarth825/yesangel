const AppDispatcher = require('../dispatcher/dispatcher.js');
const Store = require("flux/utils").Store;
const MessageConstants = require("../constants/message_constants.js");

const MessageStore = new Store(AppDispatcher);

let _messages = [];

MessageStore.all = function (){
  return _messages.slice();
};

MessageStore.find = function(id){
  let result = undefined;
  _messages.forEach(function(message){
    if (message.id === parseInt(id)){
      result = message;
    }
  });
  return result;
};

MessageStore.addMessage = function (message) {
  let found = this.find(message.id);

  if (found === undefined) {
    _messages.unshift(message);
  } else {
    _messages[_messages.indexOf(found)] = message;
  }
};

MessageStore.addMessages = function (messages) {
  _messages = messages;
};

MessageStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case MessageConstants.RECEIVE_MESSAGE:
      this.addMessage(payload.message);
      this.__emitChange();
      break;
    case MessageConstants.RECEIVE_MESSAGES:
      this.addMessages(payload.messages);
      this.__emitChange();
      break;
  }
};

module.exports = MessageStore;
