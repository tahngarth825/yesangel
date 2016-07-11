const AppDispatcher = require("../dispatcher/dispatcher.js");
const Store = require("flux/utils").Store;
const ResponseConstants = require("../constants/response_constants.js");

const ResponseStore = new Store(AppDispatcher);

let _responses = [];

ResponseStore.__onDispatch = function (payload) {
  switch(payload.actionType){
    case ResponseConstants.RECEIVE_RESPONSES:
      this.addResponses(payload.responses);
      this.__emitChange();
      break;
  }
};

ResponseStore.addResponses = function (responses) {
  _responses = responses.response;
};

ResponseStore.find = function(idx) {
  return _responses[idx];
};

ResponseStore.all = function () {
  return _responses.slice();
};

module.exports = ResponseStore;
