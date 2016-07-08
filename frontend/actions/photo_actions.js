const PhotoApiUtil = require("../util/photo_api_util.js");
const AppDispatcher = require("../dispatcher/dispatcher.js");
const PhotoConstants = require("../constants/photo_constants.js");

const PhotoActions = {
  fetchPhotos(userId){
    PhotoApiUtil.fetchPhotos(userId, this.receivePhotos);
  },

  receivePhotos(photos){
    AppDispatcher.dispatch({
      actionType: PhotoConstants.RECEIVE_PHOTOS,
      photos: photos
    });
  },

  createPhoto(photoData){
    PhotoApiUtil.createPhoto(photoData, this.receivePhoto);
  },

  receivePhoto(photo){
    AppDispatcher.dispatch({
      actionType: PhotoConstants.RECEIVE_PHOTO,
      photo: photo
    });
  },

  deletePhoto(photoId){
    PhotoApiUtil.deletePhoto(photoId, this.receivePhotos);
  }
};

module.exports = PhotoActions;
