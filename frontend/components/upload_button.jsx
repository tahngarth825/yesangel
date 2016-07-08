const React = require("react");
const PhotoActions = require("../actions/photo_actions.js");
const SessionStore = require("../stores/session_store.js");

var UploadButton = React.createClass({
  upload(e) {
    e.preventDefault();
    const that = this;
    cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, function(error, results){
      if(!error){
        let photoData = {
          url: results[0].url,
          user_id: SessionStore.currentUser().id
        }
        PhotoActions.createPhoto(photoData);
      }
    });
  },

  render: function () {
    return (
      <div className="upload-form">
        <button onClick={this.upload}>Upload new image!</button>
      </div>
    );
  }
});

module.exports = UploadButton;
