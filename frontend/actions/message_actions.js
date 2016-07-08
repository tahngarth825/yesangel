const MessageApiUtil = require("../util/message_api_util.js");
const MessageConstants = require("../constants/message_constants.js");
const AppDispatcher = require("../dispatcher/dispatcher.js");

const MessageActions = {
  fetchMessages(userId){
    MessageApiUtil.fetchMessages(userId, this.receiveMessages);
  },

  fetchMessage(messageId){
    MessageApiUtil.fetchMessage(messageId, this.receiveMessage);
  },

  receiveMessage(message){
    AppDispatcher.dispatch({
      actionType: MessageConstants.RECEIVE_MESSAGE,
      message: message
    });
  },

  receiveMessages(messages){
    AppDispatcher.dispatch({
      actionType: MessageConstants.RECEIVE_MESSAGES,
      messages: messages
    });
  },

  createMessage(message){
    MessageApiUtil.createMessage(message, this.receiveMessage);
  },

  editMessage(messageId, message){
    MessageApiUtil.editMessage(messageId, message,
      this.receiveMessage);
  }
};

module.exports = MessageActions;
