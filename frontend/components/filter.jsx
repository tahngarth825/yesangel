const React = require("react");
const SessionStore = require("../stores/session_store.js");
const UserActions = require("../actions/user_actions.js");

const Filter = React.createClass({
  getInitialState(){
    return(this.extractData());
  },

  extractData(){
    if(this.state === null){
      const curUser = SessionStore.currentUser();

      return ({
        lf_gender: curUser.lf_gender,
        location: curUser.location,
        lf_min_age: curUser.lf_min_age,
        lf_max_age: curUser.lf_max_age,
      });
    } else {
      return ({
        lf_gender: this.state.lf_gender,
        location: this.state.location,
        lf_min_age: this.state.lf_min_age,
        lf_max_age: this.state.lf_max_age,
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

  handleSubmit(event){
    event.preventDefault();

    UserActions.filterUsers(this.extractData());
  },

  handleUpdate(trait){
    const that = this;
    return (function(event){
      event.preventDefault();
      that.setState({[trait]: event.currentTarget.value});
    });
  },

  render(){
    return (
      <form onSubmit={this.handleSubmit} className="filter-box">
        <h3>Your desired traits in your partner: </h3>

        <div className="filter-item">
          <h4>Gender:</h4>
          <input onChange={this.handleUpdate("lf_gender")} value={this.state.lf_gender}/>
          <h6>Type "any" to see all genders</h6>
        </div>


        <div className="filter-item">
          <h4>Location:</h4>
          <input onChange={this.handleUpdate("location")} value={this.state.location} disabled={"disabled"}/>
          <h6>Only premium users can look for users in other locations!</h6>
        </div>

        <div className="filter-item">
          <h4>Age</h4>
          <input onChange={this.handleUpdate("lf_min_age")}
            className="small-input"
            value={this.state.lf_min_age}/>
          {"-"}
          <input onChange={this.handleUpdate("lf_max_age")}
            className="small-input"
            value={this.state.lf_max_age}/>
        </div>

        <br/>
        <input type="submit" value="Update Results!" className="submit"/>
      </form>
    );
  }
});

module.exports = Filter;
