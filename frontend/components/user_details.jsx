const React = require("react");
const SessionStore = require("../stores/session_store.js");
const UserStore = require("../stores/user_store.js");
const UserActions = require("../actions/user_actions.js");
const TraitConstants = require("../constants/trait_constants.js");
const SessionAction = require("../actions/session_actions.js");
const ReactSlider = require('../../lib/assets/react-slider.js');

const UserDetails = React.createClass({
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
    const lf_gender = user.lf_gender ? user.lf_gender : " ";
    const ethnicity = user.ethnicity ? user.ethnicity : " ";
    const height = user.height ? user.height : " ";
    const lf_min_age = user.lf_min_age ? user.lf_min_age : " ";
    const lf_max_age = user.lf_max_age ? user.lf_max_age : " ";

    return ({
      edit: editState,
      lf_gender: lf_gender,
      ethnicity: ethnicity,
      height: height,
      lf_min_age: lf_min_age,
      lf_max_age: lf_max_age
    });
  },

  renderBlank(editState){
    return {
      edit: editState,
      lf_gender: " ",
      ethnicity: " ",
      height: " ",
      lf_min_age: " ",
      lf_max_age: " "
    };
  },

  extractUser(){
    return ({
      lf_gender: this.state.lf_gender,
      ethnicity: this.state.ethnicity,
      height: this.state.height,
      lf_min_age: this.state.lf_min_age,
      lf_max_age: this.state.lf_max_age
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

  splitArray(arr){
    if (!Array.isArray(arr)){
      return arr;
    }

    let result = arr[0];

    arr.forEach(function(el, idx) {
      if(idx !== 0){
        result = result + ", " + el;
      }
    });
    return result;
  },

  handleDisplay(){
    if (this.state === null){
      return (<div></div>);
    }

    if (this.state.edit === false) {
      return (
        <div className="user-details">

          <div className="detail">
            <h4>Gender(s) of interest:</h4>
            {this.splitArray(this.state.lf_gender)}
          </div>

          <div className="detail">
            <h4>Ethnicity:</h4>
            {this.state.ethnicity}
          </div>

          <div className="detail">
            <h4>Height:</h4>
            {this.state.height}
          </div>

          <div className="detail">
            <h4>I'm looking for someone ages:</h4>
            {this.state.lf_min_age + "-" + this.state.lf_max_age}
          </div>

        </div>
      );
    } else {
      return this.handleEditable();
    }
  },

  handleSubmit(){
    if (this.state.lf_min_age > this.state.lf_max_age){
      alert("Minimum age must be less than or equal to maximum age!");
      return;
    }

    if (this.state.lf_gender.length === 0) {
      alert("Please select at least one gender to be interested in!");
      return;
    }
    UserActions.updateUser(this.extractUser());
  },

  update(property) {
		const that = this;
    return (
			function(event) {
        if (property === "lf_age") {
  				that.setState({[property]: event}, function() {
            UserActions.updateUser(this.extractUser());
          });
  				return;
  			}

				let value = event.target.value;

				if (property === "lf_gender"){
					const gender = that.state.lf_gender;
					const index = gender.indexOf(value);

					if (index === -1){
						gender.push(value);
						that.setState({[property]: gender});
					} else {
						gender.splice(index, 1);
            that.setState({[property]: gender});
					}

					return;
				}

				if (property === "height")
				{
					value = parseInt(value);
				}
				that.setState({[property]: value});
			}
		);
  },

  checkGender(gender){
    if (this.state.lf_gender.indexOf(gender) !== -1) {
      return "checked";
    } else {
      return false;
    }
  },

  edgeModifier(property, value){
    if (property === "age") {
      if (value === 60){
        return (value + "+");
      }
    }

    if (property === "height" && value !== " ") {
      const feet = Math.floor(value/12);
      const inches = (value%12);
      let result = (feet.toString() + "\'" + inches + "\"");

      if (value === 86) {
        result = result + " or more";
      } else if (value === 48) {
        result = result + " or less";
      }
      return result;
    }

    return value;
  },

  handleEditable(){
    const that = this;
    let num1 = 18;
    let num2 = 60;

    if (that.refs.slider) {
      num1 = that.refs.slider.getValue()[0];
      num2 = that.refs.slider.getValue()[1];
    }

    return (
      <form onSubmit={this.handleSubmit} className="user-details-editable">
        <div className="detail">
          <label htmlFor="lf_gender">
            Desired gender
          </label>
            <br/>
            <ul className="checkbox-box" id="lf_gender">
              {
                TraitConstants.lf_gender.map( function(lf_gender){
                  return (
                    <li key={lf_gender.value}>
                      <input type="checkbox"
                        checked={that.checkGender(lf_gender.value)}
                        id={lf_gender.value}
                        value={lf_gender.value}
                        onChange={that.update("lf_gender")} />
                      <label htmlFor={lf_gender.value} className="checkbox-label">
                        <span></span>
                        {lf_gender.label}
                      </label>
                    </li>
                  );
                })
              }
            </ul>
        </div>

        <div className="detail">
          <label htmlFor="ethnicity">
            Ethnicity
            <br/>
          </label>
            <input value={this.state.ethnicity}
              onChange={this.update("ethnicity")}
              className="basics-input"
              id="ethnicity"/>
        </div>

        <div className="detail">
          Height
          <br/>
          <label htmlFor="height" className="profile-edge-modifier">
            {that.edgeModifier("height", this.state.height)}
          </label>
          <input type="range"
            min="48"
            max="86"
            defaultValue={this.state.height}
            onChange={this.update("height")}
            className="slider"
            id="height"/>
        </div>

        <div className="detail">
          <label className="slider-label" htmlFor="lf_age">
            Desired Age Range
            <br/>
            <p className="profile-edge-modifier">
              {that.edgeModifier("age", num1)} - {that.edgeModifier("age", num2)}
            </p>
          </label>
          <ReactSlider
            min={18}
            max={60}
            defaultValue={[that.state.lf_min_age, that.state.lf_max_age]}
            onChange={that.update("lf_age")}
            className="slider"
            id="lf_age"
            ref="slider"
            withBars>

            <div id='left-handle' className='slider-handle'></div>
            <div id='right-handle' className='slider-handle'></div>
          </ReactSlider>
        </div>

        <div className="submit-box">
          <input className="submit" type="submit" value="Update Details!"/>
        </div>
      </form>
    );
  },

  render(){
    return(
      <div className="user-details-box">
        <h3>My Details</h3>
        {this.handleDisplay()}
      </div>
    );
  }
});

module.exports = UserDetails;
