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

  componentDidMount(){
    this.sessionListener = SessionStore.addListener(this.handleChange);
    this.userListener = UserStore.addListener(this.handleChange);
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
    this.sessionListener.remove();
    this.userListener.remove();
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
        const gender = that.data.lf_gender.slice();
        const old_gender = gender.splice();
        const index = gender.indexOf(value);

        if (index === -1){
          gender.push(value);
        } else {
          gender.splice(index, 1);
        }

        if (gender.length === 0){
          alert("You must have at least one gender selected");
        } else {
          that.data.lf_gender = gender;
          UserActions.filterUsers(that.data);
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


            <div className="filter-gender">
              Gender(s) of interest:
                  {
                    TraitConstants.lf_gender.map( function(lf_gender){
                      return (
                        <div className="lf_gender-checkbox" key={lf_gender.value}>
                          <label htmlFor={lf_gender.value} className="checkbox-label">
                            {lf_gender.label}
                          </label>
                          <input type="checkbox"
                            checked={that.checkGender(lf_gender.value)}
                            id={lf_gender.value}
                            value={lf_gender.value}
                            onChange={that.update("lf_gender")} />
                        </div>
                      );
                    })
                  }
            </div>

            <label className="filter-location">	Location:
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
      );
    }
  }
});

module.exports = Filter;
