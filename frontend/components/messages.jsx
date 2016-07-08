const React = require("react");
const SessionStore = require("../stores/session_store.js");
const SessionAction = require("../actions/session_actions.js");
const MessageStore = require("../stores/message_store.js");
const MessageAction = require("../actions/message_actions.js");
const MessageItem = require("./message_item.jsx");

const Messages = React.createClass({
  getInitialState(){
    return this.extractData();
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

  extractData(){
    return ({
      user: SessionStore.currentUser(),
      messages: MessageStore.all()
    });
  },

  handleChange(){
    this.setState(this.extractData());
  },

  extractUser(message){
    const result = message.user1_id === this.state.user.id ?
      message.user2 : message.user1;
    return result;
  },

  renderContent(){
    const that = this;
    if (this.state.messages === undefined || this.state.messages.length === 0) {
      return (
        <div>
          It looks like you don't have any messages!
     <br/>Go forth and message another user from their profile!
        </div>
      );
    }

    return (
      <table>
        <thead>
          <tr>
            <th className="th-user">User</th>
            <th className="th-time">Last Update</th>
            <th className="th-content">Content</th>
          </tr>
        </thead>
        <tbody>
          {
            that.state.messages.map(function (message) {
              return (
                <tr key={message.id}>
                  <td>{that.extractUser(message)}</td>

                  <td>{message.last_update}</td>

                  <td>
                    <MessageItem
                      message={message}
                      user={that.state.user}/>
                  </td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    );
  },

  render () {
    return (
      <div className="messages-box">
        <div className="messages">
          <h2>Messages</h2>
          {this.renderContent()}
        </div>
      </div>
    );
  }
});

module.exports = Messages;
