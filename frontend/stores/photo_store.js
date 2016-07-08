const AppDispatcher = require("../dispatcher/dispatcher.js");
const Store = require("flux/utils").Store;
const PhotoConstants = require("../constants/photo_constants.js");

const PhotoStore = new Store(AppDispatcher);

let _photos = [];

PhotoStore.__onDispatch = function (payload) {
  switch(payload.actionType){
    case PhotoConstants.RECEIVE_PHOTOS:
      this.addPhotos(payload.photos);
      this.__emitChange();
      break;
    case PhotoConstants.RECEIVE_PHOTO:
      this.addPhoto(payload.photo);
      this.__emitChange();
      break;
  }
}

PhotoStore.addPhoto = function (photo) {
  _photos.push(photo);
};

PhotoStore.addPhotos = function (photos) {
  _photos = photos;
};

PhotoStore.find = function(id) {
  let result;
  _photos.forEach(function (photo) {
    if (photo.id === id) {
      result = photo;
    }
  });

  return result;
};

PhotoStore.all = function () {
  return _photos.slice();
};

module.exports = PhotoStore;
