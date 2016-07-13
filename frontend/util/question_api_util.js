const QuestionApiUtil = {
  fetchQuestions(callback){
    $.ajax({
      url: "/api/questions",
      method: "GET",
      success(response){
        callback(response);
      }
    });
  },
};

module.exports = QuestionApiUtil;
