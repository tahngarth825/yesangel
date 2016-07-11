const ResponseApiUtil = {
  createResponse(responseData, callback){
    $.ajax({
      url: "/api/responses",
      method: "POST",
      dataType: "json",
      data: {response: responseData},
      success(response){
        callback(response);
      },
      error(response){
        alert(response);
      }
    });
  },

  fetchResponses(userId, callback){
    $.ajax({
      url: `/api/responses/${userId}`,
      method: "GET",
      success(response){
        callback(response);
      },
      error(response){
        alert(response);
      }
    });
  },

  editResponse(responseData, callback){
    $.ajax({
      url: `/api/responses/${responseData.user_id}/edit`,
      method: "GET",
      dataType: "json",
      data: {response: responseData},
      success(response){
        callback(response);
      },
      error(response){
        alert(response);
      }
    });
  }
};

module.exports = ResponseApiUtil;
