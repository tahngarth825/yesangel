const MessageApiUtil = {
  fetchMessages(userId, callback){
    $.ajax({
      url: "api/messages",
      method: "GET",
      data: {message: {user1_id: userId}},
      dataType: "json",
      success (response) {
        callback(response);
      },
      error (response) {
        alert(response);
      }
    });
  },

  fetchMessage(messageId, callback){
    $.ajax({
      url: `api/messages/${messageId}`,
      method: "GET",
      success (response) {
        callback(response);
      },
      error (response) {
        alert(response);
      }
    });
  },

  editMessage(messageId, message, callback){
    $.ajax({
      url: `api/messages/${messageId}/edit`,
      method: "GET",
      data: {message: message},
      dataType: "json",
      success (response) {
        callback(response);
      },
      error (response) {
        alert(response);
      }
    });
  },

  createMessage(message, callback){
    $.ajax({
      url: `api/messages/`,
      method: "POST",
      data: {message: message},
      dataType: "json",
      success (response) {
        callback(response);
      },
      error (response) {
        alert(response);
      }
    });
  }
};

module.exports = MessageApiUtil;
