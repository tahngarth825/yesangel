const React = require("react");
const PhotoActions = require("../actions/photo_actions.js");

module.exports = React.createClass({
  handleDelete(){
    const choice = confirm("Are you sure you want to delete the photo?");

    if (choice === true){
      PhotoActions.deletePhoto(this.props.photo.id);
    }
  },

  render() {
    return (
      <div className="photo-item">
        <img src={this.props.photo.url}/>
        <button onClick={this.handleDelete}>Delete Photo</button>
      </div>
    );
  }
});
