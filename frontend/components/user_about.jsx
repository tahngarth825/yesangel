const React = require("react");
const SessionStore = require("../stores/session_store.js");
const UserStore = require("../stores/user_store.js");
const UserActions = require("../actions/user_actions.js");
const UserDetails = require("./user_details.jsx");

const UserAbout = React.createClass({
  getInitialState(){
    return (this.extractData());
  },

  extractData(){
    let edit = false;

    let user = UserStore.find(parseInt(this.props.params.userId));

    if (user === undefined){
      return this.renderBlank(edit);
    }

    if (SessionStore.currentUser().id === user.id){
      edit = true;
    }

    return this.renderGiven(user, edit);
  },

  renderGiven(user, editState){
    const summary = user.summary ? user.summary : " ";
    const favs = user.favs ? user.favs : " ";
    const hobbies = user.hobbies ? user.hobbies : " ";

    return ({
      edit: editState,
      summary: summary,
      favs: favs,
      hobbies: hobbies
    });
  },

  renderBlank(editState){
    return {
      edit: editState,
      summary: " ",
      favs: " ",
      hobbies: " "
    };
  },

  extractUser(){
    return ({
      id: parseInt(this.props.params.userId),
      summary: this.state.summary,
      favs: this.state.favs,
      hobbies: this.state.hobbies
    });
  },

  componentDidMount(){
    this.listener = UserStore.addListener(this.handleChange);
  },

  handleChange(){
    this.setState(this.extractData());
  },

  componentWillUnmount(){
    this.listener.remove();
  },

  handleDisplay(){
    if (this.state === null){
      return (<div></div>);
    }

    if (this.state.edit === false) {
      return (
        <div className="user-about">
          <h3>About me: </h3>
          {this.state.summary}
          <br/>

          <h3>What I like to do for fun: </h3>
          {this.state.hobbies}
          <br/>

          <h3>Some of my favorite things: </h3>
          {this.state.favs}
          <br/>

        </div>
      );
    } else {
      return this.handleEditable();
    }
  },

  handleSubmit(e){
    e.preventDefault();
    UserActions.updateUser(this.extractUser());
  },

  update(trait){
    const that = this;
    return(function(event){
      that.setState({[trait]: event.currentTarget.value});
    });
  },

  handleEditable(){
    return (
      <form onSubmit={this.handleSubmit} className="user-about-editable">
        <h3>About me:</h3>
        <textarea onChange={this.update("summary")}
          value={this.state.summary}/>
        <br/>

        <h3>What I like to do for fun: </h3>
        <textarea onChange={this.update("hobbies")}
          value={this.state.hobbies}/>
        <br/>

        <h3>Some of my favorite things: </h3>
        <textarea onChange={this.update("favs")}
          value={this.state.favs}/>
        <br/>

        <input type="submit" value="Update Profile!"/>
      </form>
    );
  },

  render(){
    return(
      <div>
        <UserDetails userId={parseInt(this.props.params.userId)}/>
        {this.handleDisplay()}
      </div>
    );
  }
});

module.exports = UserAbout;
