const React = require("react");
const SessionStore = require("../stores/session_store.js");
const SessionAction = require("../actions/session_actions.js");
const MessageStore = require("../stores/message_store.js");
const MessageAction = require("../actions/message_actions.js");
const MessageItem = require("./message_item.jsx");
const UserStore = require("../stores/user_store.js");

const UserMessage = React.createClass({
  getInitialState(){
    return this.setupState();
  },

  setupState(){
    if (this.existing()){
      return ({
        existing: true,
        message: MessageStore.findByUser(this.props.userId)
      });
    } else {
      return ({
        existing: false,
        message: {
          content: "",
          user1_id: SessionStore.currentUser().id,
          user2_id: this.props.userId
        }
      });
    }
  },

  existing(){
    if (MessageStore.findByUser(this.props.userId) === undefined){
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
    this.setState(this.setupState());
  },

  extractUser(message){
    const result = message.user1_id === this.props.userId ?
      message.user2 : message.user1;
    return result;
  },

  handleDisplay(){
    const that = this;
    if (this.state.existing === true) {
      return (
        <table className="user-message-table">
          <thead>
            <tr>
              <th className="th-user">User</th>
              <th className="th-time">Last Update</th>
              <th className="th-content">Content</th>
            </tr>
          </thead>
          <tbody>
              <tr>
                <td>{that.extractUser(that.state.message)}</td>

                <td>{that.state.message.last_update}</td>

                <td>
                  <MessageItem
                    message={that.state.message}/>
                </td>
              </tr>
          </tbody>
        </table>
      );
    } else {
      return (
        <div className="message-maker-box">
          {that.messageMaker()}
        </div>
      );
    }
  },

  handleSubmit(e){
    e.preventDefault();
    MessageAction.createMessage(this.state.message);
  },

  changeContent(e){
    e.preventDefault();

    this.setState({
      existing: false,
      message: {
        content: e.currentTarget.value,
        user1_id: SessionStore.currentUser().id,
        user2_id: this.props.userId
      }
    });
  },

  messageMaker(){
    return (
      <form className="message-maker" onSubmit={this.handleSubmit}>
        <textarea
          onChange={this.changeContent}
          value={this.state.message.content}
          className="message-maker-content"/>

        <input type="submit" value="Send a Message!" className="small-grey-button"/>
      </form>
    );
  },

  render () {
    const that = this;
    return (
      <div className="user-message">
        <h2>Messages</h2>
        {that.handleDisplay()}
      </div>
    );
  }
});

module.exports = UserMessage;
