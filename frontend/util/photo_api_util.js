const PhotoApiUtil = {
  fetchPhotos(userId, callback){
    $.ajax({
      url: "/api/photos",
      method: "GET",
      dataType: "json",
      data: {photo: {user_id: userId}},
      success(response){
        callback(response);
      },
      error(response){
        alert(response);
      }
    });
  },

  createPhoto(photoData, callback){
    $.ajax({
      url: "/api/photos",
      method: "POST",
      dataType: "json",
      data: {photo: photoData},
      success(response){
        callback(response);
      },
      error(response){
        alert(response);
      }
    });
  },

  deletePhoto(photoId, callback){
    $.ajax({
      url: `/api/photos/${photoId}`,
      method: "DELETE",
      success(response){
        callback(response);
      },
      error(response){
        alert(response);
      }
    });
  }
};

module.exports = PhotoApiUtil;
