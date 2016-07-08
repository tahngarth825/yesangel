const React = require("react");

const UserMessage = React.createClass({
  getInitialState(){
    return this.setupState();
  },

  setupState(){
    if (this.existing()){
      return ({
        existing: true,
        message: MessageStore.find(this.props.userId)
      });
    } else {
      return ({
        existing: false,
        message: {
          content: "",
          user1_id: SessionStore.currentUser().id,
          user2_id: MessageStore.find(this.props.userId)
        }
      });
    }
  },

  existing(){
    if (MessageStore.find(this.props.userId) === undefined){
      return false;
    } else {
      return true;
    }
  },

  componentDidMount(){
    this.sessionListener = SessionStore.addListener(this.handleChange);
    this.messageListener = MessageStore.addListener(this.handleChange);
    SessionAction.fetchCurrentUser();
    MessageAction.fetchMessages(SessionStore.currentUser().id);
  },

  componentWillUnmount(){
    this.sessionListener.remove();
    this.messageListener.remove();
  },

  handleChange(){

  },

  render () {
    const that = this;
    return (
    );
  }
});

module.exports = UserMessage;
