const React = require("react");
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;

const UserTabs = React.createClass({
  toAbout(){
    hashHistory.push(`${this.props.userId}/about`);
  },

  toPhotos(){
    hashHistory.push(`${this.props.userId}/photos`);
  },

  toQuestions(){
    hashHistory.push(`${this.props.userId}/questions`);
  },

  render(){
    return(
      <div>
        <button className="user-tabs" onClick={this.toAbout}>About</button>
        <button className="user-tabs" onClick={this.toPhotos}>Photos</button>
        <button className="user-tabs" onClick={this.toQuestions}>Questions</button>
      </div>
    )
  }
});

module.exports = UserTabs;
