const QuestionApiUtil = require("../util/question_api_util.js");
const AppDispatcher = require("../dispatcher/dispatcher.js");
const QuestionConstants = require("../constants/question_constants.js");

const QuestionActions = {
  fetchQuestions(){
    QuestionApiUtil.fetchQuestions(this.receiveQuestions);
  },

  receiveQuestions(questions){
    AppDispatcher.dispatch({
      actionType: QuestionConstants.RECEIVE_QUESTIONS,
      questions: questions
    });
  },
};

module.exports = QuestionActions;
