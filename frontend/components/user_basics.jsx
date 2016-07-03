const React = require("react");
const SessionStore = require("../stores/session_store.js");
const UserStore = require("../stores/user_store.js");
const UserActions = require("../actions/user_actions.js");
const ReactDOM = require("react-dom");

const UserBasics = React.createClass({
  getInitialState(){
    const user = UserStore.find(this.props.userId);

    if (user === undefined){
      return null;
    } else{
      return (this.extractFromUser(user));
    }
  },

  extractFromUser(user){
    return( {
      username: user.username,
      location: user.location,
      age: parseInt(user.age),
      gender: user.gender
    } );
  },

  extractUser(){
    return ({
      id: parseInt(this.props.userId),
      username: this.state.username,
      location: this.state.location,
      age: parseInt(this.state.age),
      gender: this.state.gender
    });
  },

  componentDidMount(){
    this.listener = UserStore.addListener(this.handleChange);
  },

  handleChange(){
    const user = UserStore.find(this.props.userId);
    this.setState(this.extractFromUser(user));
  },

  componentWillUnmount(){
    this.listener.remove();
  },

  displayBasics(){
    if (this.state === null){
      return (<div></div>);
    }

    if (this.props.edit === false) {
      return (
        <div className="user-basics">
          <b>{this.state.username}</b>
          <br/>

          {this.state.age} • {this.state.location} • {this.state.gender}
          <br/>

        </div>
      );
    } else {
      return this.handleEditable();
    }
  },

  handleEditable(){
    return(
      <div>
        <form className="user-basics-editable" onSubmit={this.handleSubmit}>
          <h3>Your Basic Info: </h3>
          {"Username: "}
          <b>{this.state.username}</b>
            <br/>

          Age: <input className="basics-input"
            value={this.state.age}
            onChange={this.handleUpdate("age")}/>

          <br/>
          Location: <input className="basics-input"
            value={this.state.location}
            onChange={this.handleUpdate("location")}/>

          <br/>
          Gender: <input className="basics-input"
            value={this.state.gender}
            onChange={this.handleUpdate("gender")}/>
          <br/>

          <input className="submit" type="submit" value="Update Basic Info!"/>
        </form>
      </div>
    );
  },

  handleUpdate(trait){
    const that = this;
    return(function(event){
      event.preventDefault();
      that.setState({[trait]: event.currentTarget.value});
    });
  },

  handleSubmit(){
    UserActions.updateUser(this.extractUser());
  },

  render(){
    return(
      <div>
        {this.displayBasics()}
      </div>
    )
  }
});

module.exports = UserBasics;
