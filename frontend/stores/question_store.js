const AppDispatcher = require("../dispatcher/dispatcher.js");
const Store = require("flux/utils").Store;
const QuestionConstants = require("../constants/question_constants.js");

const QuestionStore = new Store(AppDispatcher);

let _questions = [];

QuestionStore.__onDispatch = function (payload) {
  switch(payload.actionType){
    case QuestionConstants.RECEIVE_QUESTIONS:
      this.addQuestions(payload.questions);
      this.__emitChange();
      break;
  }
};

QuestionStore.addQuestions = function (questions) {
  _questions = questions;
};

QuestionStore.find = function(id) {
  let result;
  _questions.forEach(function (question) {
    if (question.id === id) {
      result = question;
    }
  });

  return result;
};

QuestionStore.all = function () {
  return _questions.slice();
};

module.exports = QuestionStore;
