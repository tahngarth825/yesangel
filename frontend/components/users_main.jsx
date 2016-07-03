const UserActions = require('../actions/user_actions');
const UserStore = require('../stores/user_store');
const Filter = require("./filter.jsx");

const React = require("react");
//Router
const ReactRouter = require('react-router');
const Link = ReactRouter.Link;
const hashHistory = ReactRouter.hashHistory;

const UsersMain = React.createClass({
  getInitialState(){
    return {users: UserStore.all()};
  },

  componentWillMount(){
    this.listener = UserStore.addListener(this.handleChange);
    UserActions.fetchUsers();
  },

  handleChange(e){
    this.setState({users: UserStore.all()});
  },

  componentWillUnmount(){
    this.listener.remove();
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
    }
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

//TODO DELETE THESE LATER
window.UserActions = UserActions;
window.UserStore = UserStore;
