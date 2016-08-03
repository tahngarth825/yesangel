const React = require("react");
const SessionStore = require("../stores/session_store.js");
const UserStore = require("../stores/user_store.js");
const UserActions = require("../actions/user_actions.js");
const ReactDOM = require("react-dom");
const TraitConstants = require("../constants/trait_constants.js");
const SessionAction = require("../actions/session_actions.js");
const ReactSlider = require('../../lib/assets/react-slider.js');

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
        return (value + "+");
      }
    }

    return value;
  },

  handleEditable(){
    const that = this;

    return(
        <form className="user-basics-editable" onSubmit={this.handleSubmit}>
          <h3>Your Basic Info: </h3>

          <label htmlFor="username"> Username: </label>
            <p id="username">{this.state.username}</p>

              <div className="profile-age">
  							<label className="slider-label" htmlFor="age">
  								Your Age:
  								<br/>
  								<p className="profile-edge-modifier">
  									{that.edgeModifier("age", that.state.age)}
  								</p>
  							</label>
  							<ReactSlider
  								min={18}
  								max={60}
  								defaultValue={that.state.age}
  								onChange={that.update("age")}
  								className="profile-age-slider"
  								id="age"
  								withBars>

  								<div id='left-handle' className='slider-handle'></div>
  							</ReactSlider>
  						</div>

          <label className="basic-location" htmlFor="location">
            Location:
            <br/>
          </label>
              <select value={this.state.location}
                onChange={this.update("location")}
                className="basics-input"
                id="location"
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

            <br/><br/>

  				<label htmlFor="gender">
            Gender
            <br/>
          </label>
              <select value={this.state.gender}
                onChange={this.update("gender")}
                className="basics-input"
                id="gender">
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
        </form>
    );
  },

  update(property){
    const that = this;

    return(function(event){
      if (property === "age") {
				that.setState({[property]: event});
				return;
			}

      let value = event.currentTarget.value;

      that.setState({[property]: value});

      window.setTimeout(that.handleSubmit, 1);
    });
  },

  handleSubmit(){
    UserActions.updateUser(this.extractUser());
  },

  displayPic(){
    let user = undefined;
    if (this.editable()){
      user = SessionStore.currentUser();
    } else {
      user = UserStore.find(this.props.userId);
    }

    if (user === undefined || user.pic_url === " " || !user.pic_url) {
      return (
        <div>
          No picture to show
        </div>
      );
    } else {
      return (
        <img className="profile-pic" src={user.pic_url}/>
      );
    }
  },

  render(){
    return(
      <div className="user-basics-box">
        {this.displayPic()}
        {this.displayBasics()}
      </div>
    );
  }
});

module.exports = UserBasics;
