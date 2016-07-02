const React = require("react");
const SessionStore = require("../stores/session_store.js");
const UserStore = require("../stores/user_store.js");

const UserAbout = React.createClass({
  getInitialState(){
    return (this.extractData());
  },

  extractData(){
    let edit = false;

    let user = UserStore.find(parseInt(this.props.params.userId));

    if (user === undefined){
      return {edit: edit};
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
          {this.state.favorites}
          <br/>

        </div>
      );
    } else {
      return this.handleEditable();
    }
  },

  handleEditable(){
    return (
      <div className="user-about-editable">
        I'm Editable!
      </div>
    );
  },

  render(){
    return(
      <div>
        {this.handleDisplay()}
      </div>
    )
  }
});

module.exports = UserAbout;
