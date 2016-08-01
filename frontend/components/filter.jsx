const React = require("react");
const SessionStore = require("../stores/session_store.js");
const UserActions = require("../actions/user_actions.js");
const UserStore = require("../stores/user_store.js");
const TraitConstants = require("../constants/trait_constants.js");
const SessionActions = require("../actions/session_actions.js");

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

      if (property === "lf_min_age" || property === "lf_max_age") {
        value = parseInt(value);
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

  parser(property, value){
    if (property === "age") {
      if (value === 60){
        return (value + "+");
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
        <form className="filter-box">
          <h2>Your desired traits in your partner: </h2>


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

            <label className="filter-location">	Location:
                <select value={this.data.location}
                  onChange={this.update("location")}
                  className="react-select"
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
            <label className="slider-label" htmlFor="lf_min_age">
              Youngest desired age
              <br/>
              <p className="edge-modifier">
                {that.parser("age", that.data.lf_min_age)}
              </p>
            </label>
              <input type="range"
                min="18"
                max="60"
                defaultValue={that.data.lf_min_age}
                onChange={this.update("lf_min_age")}
                className="slider"
                id="lf_min_age"/>
          </div>

          <div className="filter-age">
            <label className="slider-label" htmlFor="lf_max_age">
              Oldest desired age
              <br/>
              <p className="edge-modifier">
                {that.parser("age", that.data.lf_max_age)}
              </p>
            </label>
                <input type="range"
                  min="18"
                  max="60"
                  defaultValue={that.data.lf_max_age}
                  onChange={this.update("lf_max_age")}
                  className="slider"
                  id="lf_max_age"/>
          </div>
        </form>
      );
    }
  }
});

module.exports = Filter;
