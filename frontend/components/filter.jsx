const React = require("react");
const SessionStore = require("../stores/session_store.js");
const UserActions = require("../actions/user_actions.js");
const UserStore = require("../stores/user_store.js");
const TraitConstants = require("../constants/trait_constants.js");

const Filter = React.createClass({
  getInitialState(){
    return(this.extractData());
  },

  extractData(){

    if (this.state === null) {
      const curUser = SessionStore.currentUser();

      if (curUser["lf_gender"] && !Array.isArray(curUser["lf_gender"])){
        curUser["lf_gender"] = JSON.parse(curUser["lf_gender"]);
      }

      return ({
        lf_gender: curUser.lf_gender,
        location: curUser.location,
        lf_min_age: curUser.lf_min_age,
        lf_max_age: curUser.lf_max_age
      });
    }
    else {
      return ({
        lf_gender: this.state.lf_gender,
        location: this.state.location,
        lf_min_age: this.state.lf_min_age,
        lf_max_age: this.state.lf_max_age
      });
    }
  },

  handleChange(){
    this.setState(this.extractData());
  },

  componentDidMount(){
    this.listener = UserStore.addListener(this.handleChange);
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

    UserActions.filterUsers(this.extractData());
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

  render(){
    const that = this;
    return (
      <form onSubmit={this.handleSubmit} className="filter-box">
        <h3>Your desired traits in your partner: </h3>

          <br />
          <div className="filter-item">
            Gender(s) of interest:
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


        <div className="filter-item">
          <h4>Location:</h4>
          <input onChange={this.update("location")} value={this.state.location} disabled={"disabled"}/>
          <h6>Only premium users can look for users in other locations!</h6>
        </div>

        <div className="filter-item">
          <h4>Age</h4>
          <input onChange={this.update("lf_min_age")}
            className="small-input"
            value={this.state.lf_min_age}/>
          {"-"}
          <input onChange={this.update("lf_max_age")}
            className="small-input"
            value={this.state.lf_max_age}/>
          <h6>Ages range from 18 to 60</h6>
        </div>

        <br/>
        <input type="submit" value="Update Results!" className="submit"/>
      </form>
    );
  }
});

module.exports = Filter;
