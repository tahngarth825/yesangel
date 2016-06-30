const UserActions = require('../actions/user_actions');
const UserStore = require('../stores/user_store');

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
      <div>
        Username: {user.username}
        <br/>
        Age: {user.age}
      </div>
    )
  },

  render () {
    const that = this;

    return(
      <ul>
        {
          this.state.users.map(function (user) {
            return (
              <li className="browse-tile" key={user.id}>
                {that.displayUser(user)}
              </li>
            );
          })
        }
      </ul>
    );
  }
});

module.exports = UsersMain;

//TODO DELETE THESE LATER
window.UserActions = UserActions;
window.UserStore = UserStore;

// {
//   Object.keys(this.state.users).map(function(key){
//
//   })
// }
