const React = require("react");
const SessionStore = require("../stores/session_store.js");
const UserActions = require("../actions/user_actions.js");
const UserStore = require("../stores/user_store.js");
const TraitConstants = require("../constants/trait_constants.js");
const SessionActions = require("../actions/session_actions.js");
const ReactSlider = require('../../lib/assets/react-slider.js');

window.SessionStore = SessionStore;
window.UserStore = UserStore;

const Filter = React.createClass({
  componentWillUpdate(){
    this.extractData();
  },

  extractData(callback){
    const user = SessionStore.currentUser();

    this.data = ({
      lf_gender: user.lf_gender,
      location: user.location,
      lf_min_age: user.lf_min_age,
      lf_max_age: user.lf_max_age
    });

    if (callback !== undefined) {
      callback(this.data);
    }
  },

  getUser(callback){
    SessionActions.fetchCurrentUser();
    this.extractData(callback);
  },

  componentWillMount(){
    this.sessionListener = SessionStore.addListener(this.extractData);
    this.userListener = UserStore.addListener(this.extractData);
    this.getUser(UserActions.filterUsers.bind(this));
  },

  componentWillUnmount(){
    this.sessionListener.remove();
    this.userListener.remove();
  },

  update(property){
    const that = this;

    return (function(event){
      if (property === "lf_age") {
        const minAge = event[0];
        const maxAge = event[1];

        that.data["lf_min_age"] = minAge;
        that.data["lf_max_age"] = maxAge;

        UserActions.filterUsers(that.data);
        return;
      }

      let value = event.currentTarget.value;

      if (property === "lf_gender"){
        const lfGender = that.data.lf_gender.slice();
        const index = lfGender.indexOf(value);

        if (index === -1){
          lfGender.push(value);
        } else {
          lfGender.splice(index, 1);
        }

        if (lfGender.length === 0){
          alert("You must have at least one gender selected");
        } else {
          that.data.lf_gender = lfGender;
          UserActions.filterUsers(that.data);
        }
        return;
      }

      that.data[property] = value;

      UserActions.filterUsers(that.data);
    });
  },

  checkGender(gender){
    if (this.data.lf_gender.indexOf(gender) !== -1) {
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
    return value;
  },

  render(){
    const that = this;

    let num1 = 18;
    let num2 = 60;

    if (that.refs.slider) {
      num1 = that.refs.slider.getValue()[0];
      num2 = that.refs.slider.getValue()[1];
    }

    if (SessionStore.currentUser() === {}){
      return (
        <div>

        </div>
      );
    } else {
      return (
        <div className="filter-box">
          <h2>Your desired traits in your partner: </h2>
          <form className="filter-form">
            <div className="filter-lf_gender">
              <label htmlFor="lf_gender">Gender(s) of interest</label>
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

            <div className="filter-location">
              <label htmlFor="location">
                Location:
              </label>
              <br/>
              <select value={this.data.location}
                onChange={this.update("location")}
                className="react-select"
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
            </div>

            <div className="filter-age">
              <label className="slider-label" htmlFor="lf_age">
                Desired Age Range
                <br/>
                <p className="edge-modifier">
                  {that.edgeModifier("age", num1)} - {that.edgeModifier("age", num2)}
                </p>
              </label>
              <ReactSlider
                min={18}
                max={60}
                defaultValue={[that.data.lf_min_age, that.data.lf_max_age]}
                onChange={that.update("lf_age")}
                className="slider"
                id="lf_age"
                ref="slider"
                withBars>

                <div id='left-handle' className='slider-handle'></div>
                <div id='right-handle' className='slider-handle'></div>
              </ReactSlider>
            </div>
          </form>
        </div>
      );
    }
  }
});

module.exports = Filter;
