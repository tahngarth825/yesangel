const React = require("react");
const UserBasics = require("./user_basics.jsx");
const UserTabs = require("./user_tabs.jsx");
const SessionStore = require("../stores/session_store.js");
const UserStore = require("../stores/user_store.js");
const UserActions = require("../actions/user_actions.js");
const SessionAction = require("../actions/session_actions.js");
const UserMessage = require("./user_message.jsx");
const MessageStore = require("../stores/message_store.js");

const UserMain = React.createClass({
  componentDidMount(){
    this.userListener = UserStore.addListener(this.forceUpdate.bind(this));
    this.messageListener = MessageStore.addListener(this.forceUpdate.bind(this));
    this.sessionListener = SessionStore.addListener(this.forceUpdate.bind(this));
    this.getUser();
  },

  componentWillReceiveProps(){
    this.getUser();
  },

  componentWillUnmount(){
    this.userListener.remove();
    this.messageListener.remove();
    this.sessionListener.remove();
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

  handleMessage(){
    if (SessionStore.currentUser().id !== parseInt(this.props.params.userId)
      && Object.keys(SessionStore.currentUser()).length > 0){
      return (<UserMessage userId={this.props.params.userId}/>);
    }
  },

  render(){
    return(
      <div className="user-main-box">
        <div className="user-main">
          <div className="profile-top-left">
            <UserBasics userId={this.props.params.userId}/>
            <UserTabs userId={this.props.params.userId}/>
          </div>
          {this.handleMessage()}
          {this.props.children}
        </div>
      </div>
    );
  }
});

module.exports = UserMain;
