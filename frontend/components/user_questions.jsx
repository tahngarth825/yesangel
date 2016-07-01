const React = require("react");
const SessionStore = require("../stores/session_store.js");
const UserStore = require("../stores/user_store.js");

const UserQuestions = React.createClass({
  getInitialState(){
    let edit = false;
    if (SessionStore.currentUser().id === parseInt(this.props.params.userId)){
      edit = true;
    }
    return {edit: edit};
  },

  componentDidMount(){
    this.listener = UserStore.addListener(this.handleChange);
  },

  handleChange(){
    if (SessionStore.currentUser().id === parseInt(this.props.params.userId)){
      this.setState({edit: true});
    }
  },

  componentWillUnmount(){
    this.listener.remove();
  },

  render(){
    let text;
    if (this.state.edit === true){
      text = "EDITABLE";
    } else if (this.state.edit === false) {
      text = "NOT EDITABLE";
    } else {
      text = "SOMETHING DONE GONE WRONG";
    }

    return(
      <div>
        User Questions
        <br/>
        {text}
      </div>
    )
  }
});

module.exports = UserQuestions;
