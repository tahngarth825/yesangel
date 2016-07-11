const ResponseApiUtil = require("../util/response_api_util.js");
const AppDispatcher = require("../dispatcher/dispatcher.js");
const ResponseConstants = require("../constants/response_constants.js");

const ResponseActions = {
  fetchResponses(userId){
    ResponseApiUtil.fetchResponses(userId, this.receiveResponses);
  },

  receiveResponses(responses){
    AppDispatcher.dispatch({
      actionType: ResponseConstants.RECEIVE_RESPONSES,
      responses: responses
    });
  },

  createResponse(responseData){
    ResponseApiUtil.createResponse(responseData, this.receiveResponses);
  },

  editResponse(responseData){
    ResponseApiUtil.editResponse(responseData, this.receiveResponses);
  }
};

module.exports = ResponseActions;
