const UserActions = require('../actions/user_actions');
const UserStore = require('../stores/user_store');
const Filter = require("./filter.jsx");
const SessionActions = require("../actions/session_actions.js");
const SessionStore = require("../stores/session_store.js");
const ResponseStore = require("../stores/response_store.js");

const React = require("react");
//Router
const ReactRouter = require('react-router');
const Link = ReactRouter.Link;
const hashHistory = ReactRouter.hashHistory;

const UsersMain = React.createClass({
  getInitialState(){
    return {users: UserStore.all()};
  },

  componentDidMount(){
    this.userListener = UserStore.addListener(this.handleChange);
    this.sessionListener = SessionStore.addListener(this.handleChange);
    UserActions.fetchUsers();
  },

  handleChange(e){
    this.setState({users: UserStore.all()});
  },

  componentWillUnmount(){
    this.userListener.remove();
    this.sessionListener.remove();
  },

  displayUser(user){
    return (
      <ul className="browse-tile-detail">
        <li>
          <b>Username:</b> {user.username}
        </li>
        <li>
          <b>Age:</b> {user.age}
        </li>
        <li>
          <b>Location:</b> {user.location}
        </li>
        <li>
          <b>Gender:</b> {user.gender}
        </li>
      </ul>
    );
  },

  toUser(id){
    return function(){
      hashHistory.push(`${id}`);
    };
  },

  render () {
    const that = this;

    return(
      <div>
        <Filter/>
        <div className="browse-tile-box">
          {
            this.state.users.map(function (user) {
              return (
                <div onClick={that.toUser(user.id)} className="browse-tile" key={user.id}>
                  <img className="profile-pic" src={user.pic_url}/>
                  {that.displayUser(user)}
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
});

module.exports = UsersMain;
