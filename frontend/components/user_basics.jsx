const React = require("react");
const SessionStore = require("../stores/session_store.js");
const UserStore = require("../stores/user_store.js");
const UserActions = require("../actions/user_actions.js");
const ReactDOM = require("react-dom");
const TraitConstants = require("../constants/trait_constants.js");

const UserBasics = React.createClass({
  getInitialState(){
    const user = UserStore.find(this.props.userId);

    if (user === undefined){
      return this.renderBlank();
    } else{
      return (this.extractFromUser(user));
    }
  },

  renderBlank(){
    return ({
      username: " ",
      location: " ",
      age: " ",
      gender: " "
    });
  },

  extractFromUser(user){
    const username = user.username ? user.username : " ";
    const location = user.location ? user.location : " ";
    const gender = user.gender ? user.gender : " ";
    let age = " ";

    if (user.age && user.age !== " ") {
      age = parseInt(user.age);
    }

    return( {
      username: username,
      location: location,
      age: age,
      gender: gender
    });
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

  edgeModifier(property, value){
    if (property === "age") {
      if (value === "60"){
        return (value + "+");
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

          <label> Age: {that.edgeModifier("age", that.state.age)}
						<input type="range"
							min="18"
							max="60"
							defaultValue="30"
							onChange={this.update("age")}
							className="slider-small"/>
					</label>

          <br/>
          Location: <input className="basics-input"
            value={this.state.location}
            onChange={this.update("location")}/>

            <br />
  					Gender:
  					<select value={this.state.gender}
  						onChange={this.update("gender")}
  						className="react-select"
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

          <input className="submit" type="submit" value="Update Basic Info!"/>
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
