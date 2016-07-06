const React = require("react");
const SessionStore = require("../stores/session_store.js");
const UserStore = require("../stores/user_store.js");
const UserActions = require("../actions/user_actions.js");
const TraitConstants = require("../constants/trait_constants.js");
const SessionAction = require("../actions/session_actions.js");

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
    const orientation = user.orientation ? user.orientation : " ";
    const ethnicity = user.ethnicity ? user.ethnicity : " ";
    const height = user.height ? user.height : " ";
    const body_type = user.body_type ? user.body_type : " ";
    const lf_gender = user.lf_gender ? user.lf_gender : " ";
    const lf_min_age = user.lf_min_age ? user.lf_min_age : " ";
    const lf_max_age = user.lf_max_age ? user.lf_max_age : " ";

    return ({
      edit: editState,
      orientation: orientation,
      ethnicity: ethnicity,
      height: height,
      body_type: body_type,
      lf_gender: lf_gender,
      lf_min_age: lf_min_age,
      lf_max_age: lf_max_age
    });
  },

  renderBlank(editState){
    return {
      edit: editState,
      orientation: " ",
      ethnicity: " ",
      height: " ",
      body_type: " ",
      lf_gender: " ",
      lf_min_age: " ",
      lf_max_age: " "
    };
  },

  extractUser(){
    return ({
      orientation: this.state.orientation,
      ethnicity: this.state.ethnicity,
      height: this.state.height,
      body_type: this.state.body_type,
      lf_gender: this.state.lf_gender,
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
          <h4>Orientation:</h4>
          {this.state.orientation}

          <h4>Ethnicity:</h4>
          {this.state.ethnicity}

          <h4>Height:</h4>
          {this.state.height}

          <h4>Body Type:</h4>
          {this.state.body_type}

          <h4>Gender of interest:</h4>
          {this.splitArray(this.state.lf_gender)}

          <h4>I'm looking for someone ages:</h4>
          {this.state.lf_min_age + "-" + this.state.lf_max_age}

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

				if (property === "lf_min_age" || property === "lf_max_age" ||
          property === "age" || property === "height")
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

  parser(property, value){
    if (property === "age") {
      if (value === 60){
        return (value + " or more");
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
    return (
      <form onSubmit={this.handleSubmit} className="user-details-editable">

        <label className="basic-orientation">	Orientation:
            <select value={this.state.orientation}
              onChange={this.update("orientation")}
              className="basics-input"
              >
              {
                TraitConstants.orientation.map( function(orientation){
                  return (
                    <option value={orientation.value} key={orientation.value}>
                      {location.label}
                    </option>
                  );
                })
              }
            </select>
          </label>

        <b>Ethnicity: </b>
        <input value={this.state.ethnicity}
          onChange={this.update("ethnicity")}/>
        <br/>

        <label> Height: {that.parser("height", this.state.height)}
          <input type="range"
            min="48"
            max="86"
            defaultValue={this.state.height}
            onChange={this.update("height")}
            className="slider"/>
        </label>
        <br/>

        <b>Body Type: </b>
        <input value={this.state.body_type}
          onChange={this.update("body_type")}/>
        <br/>

          <br />
          Gender(s) of interest:
          <div className="checkbox-box">
            {
              TraitConstants.gender.map( function(gender){
                return (
                  <div className="checkbox" key={gender.value}>
                    <label htmlFor={gender.value}> {gender.label} </label>
                      <input type="checkbox"
                        checked={that.checkGender(gender.value)}
                        id={gender.value}
                        value={gender.value}
                        onChange={that.update("lf_gender")} />
                  </div>
                );
              })
            }
          </div>

          <br />
					<label> Youngest desired age: {that.parser("age", that.state.lf_min_age)}
						<input type="range"
							min="18"
							max="60"
							defaultValue={that.state.lf_min_age}
							onChange={this.update("lf_min_age")}
							className="slider"/>
					</label>

					<br />
					<label> Oldest desired age:	{that.parser("age", that.state.lf_max_age)}
							<input type="range"
								min="18"
								max="60"
								defaultValue={that.state.lf_max_age}
								onChange={this.update("lf_max_age")}
								className="slider"/>
					</label>

          <div className="submit-box">
            <input className="submit" type="submit" value="Update Details!"/>
          </div>
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
