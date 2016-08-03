const React = require("react");
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;
const Link = require('react-router').Link;

const UserTabs = React.createClass({
  determineActive(otherPath){
    const that = this;
    const length = this.props.userId.toString().length
    const path = this.props.location.pathname.slice(length+2);
    if (path === otherPath){
      return "user-tabs-item-active";
    } else {
      return "user-tabs-item";
    }
  },

  render(){
    const id = this.props.userId;
    const about = `${id}/about`;
    const photos = `${id}/photos`;
    const questions = `${id}/questions`;
    const that = this;

    return(
      <div className="user-tabs-box">
        <Link className={that.determineActive("about")} to={about}>
          About
        </Link>

        <Link className={that.determineActive("photos")} to={photos}>
          Photos
        </Link>

        <Link className={that.determineActive("questions")} to={questions}>
          Questions
        </Link>

      </div>
    );
  }
});

module.exports = UserTabs;
