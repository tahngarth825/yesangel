const React = require("react");
const SessionStore = require("../stores/session_store.js");
const UserStore = require("../stores/user_store.js");
const UserActions = require("../actions/user_actions.js");

const UserDetails = React.createClass({
  getInitialState(){
    return (this.extractData());
  },

  extractData(initial){
    let edit = false;

    let user = UserStore.find(parseInt(this.props.userId));

    if (user === undefined || user.height === undefined){
      return {
        edit: edit,
        orientation: " ",
        ethnicity: " ",
        height: " ",
        body_type: " ",
        lf_gender: " ",
        lf_min_age: " ",
        lf_max_age: " "
      };
    }

    if (SessionStore.currentUser().id === user.id){
      edit = true;
    }

    return( {
      edit: edit,
      orientation: user.orientation,
      ethnicity: user.ethnicity,
      height: user.height,
      body_type: user.body_type,
      lf_gender: user.gender,
      lf_min_age: user.lf_min_age,
      lf_max_age: user.lf_max_age
    } );
  },

  extractUser(){
    return ({
      id: parseInt(this.props.userId),
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
        <div className="user-details">
          <h4>Orientation:</h4>
          {this.state.orientation}

          <h4>Ethnicity:</h4>
          {this.state.ethnicity}

          <h4>Height:</h4>
          {this.state.height}

          <h4>Body Type:</h4>
          {this.state.body_type}

          <h4>Gender of interest:</h4>
          {this.state.ethnicity}

          <h4>I'm looking for someone ages:</h4>
          {this.state.lf_min_age + "-" + this.state.lf_max_age}

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
      event.preventDefault();
      that.setState({[trait]: event.currentTarget.value});
    });
  },

  handleEditable(){
    return (
      <form onSubmit={this.handleSubmit} className="user-details-editable">
        <b>Orientation: </b>
        <input value={this.state.orientation}
          onChange={this.handleUpdate("orientation")}/>
        <br/>

        <b>Ethnicity: </b>
        <input value={this.state.ethnicity}
          onChange={this.handleUpdate("ethnicity")}/>
        <br/>

        <b>Height: </b>
        <input value={this.state.height}
          onChange={this.handleUpdate("height")}/>
        <br/>

        <b>Body Type: </b>
        <input value={this.state.body_type}
          onChange={this.handleUpdate("body_type")}/>
        <br/>

        <b>Gender of interest: </b>
        <input value={this.state.lf_gender}
          onChange={this.handleUpdate("lf_gender")}/>
        <br/>

        <b>I'm looking for someone ages: </b>
        <input className="small-input" value={this.state.lf_min_age}
          onChange={this.handleUpdate("lf_min_age")}/>{"-"}
        <input className="small-input" value={this.state.lf_max_age}
          onChange={this.handleUpdate("lf_max_age")}/>
        <br/>

        <input type="submit" value="Update Details!"/>
      </form>
    );
  },

  render(){
    return(
      <div className="user-details-box">
        <h3>My Details:</h3>
        {this.handleDisplay()}
      </div>
    );
  }
});

module.exports = UserDetails;
