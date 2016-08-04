const React = require("react");
const SessionStore = require("../stores/session_store.js");
const SessionAction = require("../actions/session_actions.js");
const MessageStore = require("../stores/message_store.js");
const MessageAction = require("../actions/message_actions.js");

const MessageItem = React.createClass({
  getInitialState(){
    return {
      clicked: false,
      message: {content: "", user1_id: SessionStore.currentUser().id}
    };
  },

  toggleContent(content, idx){
    if (this.state.clicked === false){
      if (this.props.message.content.length > 1) {
        if (idx === this.props.message.content.length-1) {
          return (
            <div className="message-item-item-more" key={idx}>
              <p className="ellipses">
                {" . . ."}
              </p>

              <br/><br/>

              {content}
            </div>
          );
        } else {
          return;
        }
      }
    }

    return (
      <div className="message-item-item" key={idx}>
        {content}
      </div>
    );
  },

  handleClick(e){
    e.preventDefault();
    if (this.state.clicked === false){
      this.setState({clicked: true});
    } else {
      this.setState({clicked: false});
    }
  },

  handleSubmit(e){
    e.preventDefault();
    MessageAction.editMessage(this.props.message.id, this.state.message);
  },

  handleChange(e){
    e.preventDefault();

    this.setState({
      message: {
        content: e.currentTarget.value,
        user1_id: SessionStore.currentUser().id
      }
    });
  },

  toggleReply(){
    // if (this.state.clicked === true){
      return (
        <form className="message-reply" onSubmit={this.handleSubmit}>
          <input type="textarea"
            value={this.state.message.content}
            onChange={this.handleChange}/>

          <input type="submit" value="Reply!"/>
        </form>
      );
    // }
  },

  render () {
    const that = this;
    return (
      <div className="message-item">
        <div className="message-item-content" onClick={this.handleClick}>
          {
            that.props.message.content.map(function(content, idx){
              return that.toggleContent(content, idx);
            })
          }
        </div>
        {that.toggleReply()}
      </div>
    );
  }
});

module.exports = MessageItem;
