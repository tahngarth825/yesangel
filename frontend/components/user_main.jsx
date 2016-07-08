const React = require("react");
const UserBasics = require("./user_basics.jsx");
const UserTabs = require("./user_tabs.jsx");
const SessionStore = require("../stores/session_store.js");
const UserStore = require("../stores/user_store.js");
const UserActions = require("../actions/user_actions.js");
const SessionAction = require("../actions/session_actions.js");
const UserMessage = require("./user_message.jsx");

const UserMain = React.createClass({
  componentDidMount(){
    this.getUser();
  },

  componentWillReceiveProps(){
    this.getUser();
  },

  getUser(){
    if (this.editable()){
      SessionAction.fetchCurrentUser();
    } else {
      UserActions.fetchUser(parseInt(this.props.params.userId));
    }
  },

  editable(){
    if (parseInt(this.props.params.userId) === SessionStore.currentUser().id){
      return true;
    } else {
      return false;
    }
  },

  render(){
    return(
      <div>
        <UserBasics userId={this.props.params.userId}/>
        <UserTabs userId={this.props.params.userId}/>
        <UserMessage userId={this.props.params.userId}/>
        {this.props.children}
      </div>
    );
  }
});

module.exports = UserMain;
