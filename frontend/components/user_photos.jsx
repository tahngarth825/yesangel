const React = require("react");
const SessionStore = require("../stores/session_store.js");
const UserStore = require("../stores/user_store.js");
const PhotoStore = require("../stores/photo_store.js");
const PhotoActions = require("../actions/photo_actions.js");
const UploadButton = require("./upload_button.jsx");

const UserPhotos = React.createClass({
  getInitialState(){
    return {
      photos: PhotoStore.findByUser(parseInt(this.props.params.userId))
    };
  },

  editable(){
    if (SessionStore.currentUser().id === parseInt(this.props.params.userId)){
      return true;
    } else {
      return false;
    }
  },

  componentDidMount(){
    if (this.editable()){
      this.sessionListener = SessionStore.addListener(this.handleChange);
    } else {
      this.userListener = UserStore.addListener(this.handleChange);
    }
    this.photoListener = PhotoStore.addListener(this.handleChange);
    PhotoActions.fetchPhotos(parseInt(this.props.params.userId));
  },

  componentWillUnmount(){
    if (this.sessionListener) {
      this.sessionListener.remove();
    }
    if (this.photoListener){
      this.photoListener.remove();
    }
    if (this.userListener){
      this.userListener.remove();
    }
  },

  handleChange(){
    this.setState({photos: PhotoStore.findByUser(parseInt(this.props.params.userId))});
  },

  handleDelete(photoId){
    return (function (event){
      event.preventDefault();

      const choice = confirm("Are you sure you want to delete the photo?");

      if (choice === true){
        PhotoActions.deletePhoto(photoId);
      }
    })
  },

  handleDisplay(){
    const that = this;

    if ( this.editable() ){
      return (
        <div>
          <UploadButton/>
          <ul>
            {
              this.state.photos.map(function (photo){
                return (
                  <li className="user-photos-item" key={photo.id}>
                    <div className="photo-container">
                      <img src={photo.url} className="photo"/>
                      <br/>
                      <button onClick={that.handleDelete(photo.id)}
                        className="photo-delete">
                        X
                      </button>
                    </div>
                  </li>
                );
              })
            }
          </ul>
        </div>
      );
    } else {
      return(
        <div>
          {
            this.state.photos.map(function (photo){
              return (
                <img src={photo.url} key={photo.id}/>
              );
            })
          }
        </div>
      );
    }
  },

  render(){
    return(
      <div className="user-photos-box">
        {this.handleDisplay()}
      </div>
    );
  }
});

module.exports = UserPhotos;
