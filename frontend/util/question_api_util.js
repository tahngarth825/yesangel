const QuestionApiUtil = {
  fetchQuestions(callback){
    $.ajax({
      url: "/api/questions",
      method: "GET",
      success(response){
        callback(response);
      },
      error(response){
        alert(response);
      }
    });
  },
};

module.exports = QuestionApiUtil;
