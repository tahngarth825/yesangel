const React = require("react");
const SessionStore = require("../stores/session_store.js");
const UserStore = require("../stores/user_store.js");
const UserActions = require("../actions/user_actions.js");
const ReactDOM = require("react-dom");
const TraitConstants = require("../constants/trait_constants.js");
const SessionAction = require("../actions/session_actions.js");

const UserBasics = React.createClass({
  getInitialState(){
    return (this.extractData());
  },

  extractData(){
    const edit = this.editable();

    if (edit){
      return this.renderGiven(SessionStore.currentUser(), edit);
    }

    let user = UserStore.find(parseInt(this.props.userId));

    if (user === undefined){
      return this.renderBlank(edit);
    }

    return this.renderGiven(user, edit);
  },

  renderGiven(user, editState){
    const username = user.username ? user.username : " ";
    const location = user.location ? user.location : " ";
    const gender = user.gender ? user.gender : " ";
    let age = " ";

    if (user.age && user.age !== " ") {
      age = parseInt(user.age);
    }

    return( {
      edit: editState,
      username: username,
      location: location,
      age: age,
      gender: gender
    });
  },

  renderBlank(edit){
    return ({
      edit: edit,
      username: " ",
      location: " ",
      age: " ",
      gender: " "
    });
  },

  extractUser(){
    return ({
      username: this.state.username,
      location: this.state.location,
      age: parseInt(this.state.age),
      gender: this.state.gender
    });
  },

  editable(){
    if (parseInt(this.props.userId) === SessionStore.currentUser().id){
      return true;
    } else {
      return false;
    }
  },

  componentDidMount(){
    if (this.editable()){
      this.listener = SessionStore.addListener(this.handleChange);
      SessionAction.fetchCurrentUser();
    } else {
      this.listener = UserStore.addListener(this.handleChange);
    }
  },

  handleChange(){
    this.setState(this.extractData());
  },

  componentWillUnmount(){
    this.listener.remove();
  },

  displayBasics(){
    if (this.state === null){
      return (<div></div>);
    }

    if (this.state.edit === false) {
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

  edgeModifier(property, value){
    if (property === "age") {
      if (value === 60){
        return (value + " or more");
      }
    }

    return value;
  },

  handleEditable(){
    const that = this;
    return(
      <div>
        <form className="user-basics-editable" onSubmit={this.handleSubmit}>
          <h3>Your Basic Info: </h3>
          {"Username: "}
          <b>{this.state.username}</b>
            <br/>

          <label className="slider-label"> Age: {that.edgeModifier("age", that.state.age)}
						<input type="range"
							min="18"
							max="60"
							defaultValue={this.state.age}
							onChange={this.update("age")}
							className="slider-small"/>
					</label>

          <label className="basic-location">	Location:
              <select value={this.state.location}
                onChange={this.update("location")}
                className="basics-input"
                >
                {
                  TraitConstants.location.map( function(location){
                    return (
                      <option value={location.value} key={location.value}>
                        {location.label}
                      </option>
                    );
                  })
                }
              </select>
            </label>

            <br />
  				<label>	Gender:
              <select value={this.state.gender}
                onChange={this.update("gender")}
                className="basics-input"
                >
                {
                  TraitConstants.gender.map( function(gender){
                    return (
                      <option value={gender.value} key={gender.value}>
                        {gender.label}
                      </option>
                    );
                  })
                }
              </select>
  					</label>

          <div className="submit-box">
            <input className="submit" type="submit" value="Update Basic Info!"/>
          </div>
        </form>
      </div>
    );
  },

  update(trait){
    const that = this;

    return(function(event){
      event.preventDefault();
      let value = event.currentTarget.value;

      if (trait === "age") {
        value = parseInt(value);
      }

      that.setState({[trait]: value});
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
    );
  }
});

module.exports = UserBasics;
