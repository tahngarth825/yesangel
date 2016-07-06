const React = require("react");
const SessionStore = require("../stores/session_store.js");
const UserActions = require("../actions/user_actions.js");
const UserStore = require("../stores/user_store.js");
const TraitConstants = require("../constants/trait_constants.js");
const SessionActions = require("../actions/session_actions.js");

const Filter = React.createClass({
  getInitialState(){
    return(this.extractData());
  },

  extractData(){
    const user = SessionStore.currentUser();

    return ({
      lf_gender: user.lf_gender,
      location: user.location,
      lf_min_age: user.lf_min_age,
      lf_max_age: user.lf_max_age
    });
  },

  handleChange(){
    this.setState(this.extractData());
  },

  componentWillMount(){
    this.listener = SessionStore.addListener(this.handleChange);
    SessionActions.fetchCurrentUser();
    UserActions.filterUsers(this.state);
  },

  shouldComponentUpdate(nextProp, nextState){
    const user = SessionStore.currentUser();
    if (Object.keys(user).length === 0 && user.constructor === Object){
      return false;
    }
    return true;
  },

  componentWillUnmount(){
    this.listener.remove();
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

    UserActions.filterUsers(this.state);
  },

  update(property){
    const that = this;

    return (function(event){

      let value = event.currentTarget.value;

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

      if (property === "lf_min_age" || property === "lf_max_age")
      {
        value = parseInt(value);
      }

      that.setState({[property]: value});
    });
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
    return value;
  },

  render(){
    const that = this;

    if (SessionStore.currentUser() === {}){
      return (
        <div>

        </div>
      );
    } else {
      return (
        <form onSubmit={this.handleSubmit} className="filter-box">
          <h2>Your desired traits in your partner: </h2>

            <br />
            <div className="filter-gender">
              Gender(s) of interest:
              {
                TraitConstants.gender.map( function(gender){
                  return (
                    <div className="gender-checkbox" key={gender.value}>
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

            <label>	Location:
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
          <div className="filter-location">
            <h4>Location:</h4>
            <input onChange={this.update("location")} value={this.state.location} disabled={"disabled"}/>
            <h6>Only premium users can look for users in other locations!</h6>
          </div>

          <div className="filter-age">
            <br />
            <label className="slider-label"> Youngest desired age: {that.parser("age", that.state.lf_min_age)}
              <input type="range"
                min="18"
                max="60"
                defaultValue={that.state.lf_min_age}
                onChange={this.update("lf_min_age")}
                className="slider"/>
            </label>
          </div>

          <div className="filter-age">
            <br />
            <label className="slider-label"> Oldest desired age:	{that.parser("age", that.state.lf_max_age)}
                <input type="range"
                  min="18"
                  max="60"
                  defaultValue={that.state.lf_max_age}
                  onChange={this.update("lf_max_age")}
                  className="slider"/>
            </label>
          </div>

          <br/>
          <input type="submit" value="Update Results!" className="submit"/>
        </form>
      )
    }
  }
});

module.exports = Filter;
