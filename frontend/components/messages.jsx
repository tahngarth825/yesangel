const React = require("react");
const SessionStore = require("../stores/session_store.js");
const SessionAction = require("../actions/session_actions.js");
// const MessagesStore = require("../stores/message_store.js");

const Messages = React.createClass({
  getInitialState(){
    const user = SessionStore.currentUser();
    return ({
      user: user,
      messages: MessagesStore.messagesForUser(user.id)
    });
  },

  componentDidMount(){
    this.sessionListener = SessionStore.addListener(this.handleChange);
    this.messageListener = MessagesStore.addListener(this.handleChange);
    SessionAction.fetchCurrentUser();
  },

  componentWillUnmount(){
    this.listener.remove();
  },

  handleChange(){
    // this.setState({user: })
  },

  render () {
    return (
      <div>

      </div>
    );
  }
});

module.exports = Messages;
