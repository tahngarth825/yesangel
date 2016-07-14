const React = require("react");
const SessionStore = require("../stores/session_store.js");
const UserStore = require("../stores/user_store.js");
const PhotoStore = require("../stores/photo_store.js");
const PhotoActions = require("../actions/photo_actions.js");
const UploadButton = require("./upload_button.jsx");
const Photo = require("./photo.jsx");

const UserPhotos = React.createClass({
  getInitialState(){
    return {
      photos: PhotoStore.all()
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
    this.setState({photos: PhotoStore.all()});
  },

  handleDisplay(){
    if ( this.editable() ){
      return (
        <div>
          <h2>Add a Photo!</h2>
          <ul>
            {
              this.state.photos.map(function (photo){
                return (
                  <li className="user-photos-item" key={photo.id}>
                    <Photo photo={photo} edit={true}/>
                  </li>
                );
              })
            }
          </ul>
          <UploadButton/>
        </div>
      );
    } else {
      return(
        <div>
          {
            this.state.photos.map(function (photo){
              return (
                <Photo photo={photo} key={photo.id} edit={false}/>
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
