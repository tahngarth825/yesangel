const React = require("react");
const SessionStore = require("../stores/session_store.js");
const UserStore = require("../stores/user_store.js");
const UserActions = require("../actions/user_actions.js");

const UserAbout = React.createClass({
  getInitialState(){
    return (this.extractData());
  },

  extractData(){
    let edit = false;

    let user = UserStore.find(parseInt(this.props.params.userId));

    if (user === undefined){
      return {
        edit: edit,
        summary: " ",
        favs: " ",
        hobbies: " "
      };
    }

    if (SessionStore.currentUser().id === user.id){
      edit = true;
    }

    return( {
      edit: edit,
      summary: user.summary,
      favs: user.favs,
      hobbies: user.hobbies
    } );
  },

  extractUser(){
    debugger
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
          <b>Summary: </b> <br/>
          <br/>
          {this.state.username}

          <b>Hobbies: </b> <br/>
          {this.state.hobbies}
          <br/>

          <b>Favorites: </b> <br/>
          {this.state.favs}
          <br/>

        </div>
      );
    } else {
      return this.handleEditable();
    }
  },

  handleSubmit(){
    UserActions.updateUser(this.extractUser());
  },

  handleUpdate(trait){
    const that = this;
    return(function(event){
      that.setState({[trait]: event.currentTarget.value});
    });
  },

  handleEditable(){
    return (
      <form onSubmit={this.handleSubmit} className="user-about-editable">
          <b>About me: </b> <br/>
          <input onChange={this.handleUpdate("summary")} value={this.state.summary}/>
            <br/>

          <b>What I like to do for fun: </b> <br/>
          <input onChange={this.handleUpdate("hobbies")} value={this.state.hobbies}/>
            <br/>

          <b>Some of my favorite things: </b> <br/>
          <input onChange={this.handleUpdate("favs")} value={this.state.favs}/>
          <br/>

          <input type="submit" value="Update Profile!"/>
      </form>
    );
  },

  render(){
    return(
      <div>
        {this.handleDisplay()}
      </div>
    );
  }
});

module.exports = UserAbout;
