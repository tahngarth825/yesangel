const React = require("react");
const SessionStore = require("../stores/session_store.js");
const UserStore = require("../stores/user_store.js");

const UserBasics = React.createClass({
  getInitialState(){
    return(
      {

      }
    );
  },

  componentDidMount(){
    this.listener = UserStore.addListener(this.handleChange);
  },

  handleChange(){
    this.setState({

    });
  },

  componentWillUnmount(){
    this.listener.remove();
  },

  render(){
    let text;
    if (this.props.edit === true){
      text = "EDITABLE";
    } else if (this.props.edit === false) {
      text = "NOT EDITABLE";
    } else {
      text = "SOMETHING DONE GONE WRONG";
    }

    return(
      <div>
        User Basics, yo
        <br/>
        {text}
      </div>
    )
  }
});

module.exports = UserBasics;
