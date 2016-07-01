const React = require("react");
const UserBasics = require("./user_basics.jsx");
const UserTabs = require("./user_tabs.jsx");
const SessionStore = require("../stores/session_store.js");
const UserStore = require("../stores/user_store.js");
const UserActions = require("../actions/user_actions.js");

const UserMain = React.createClass({
  getInitialState(){
    return (
      {
        currentUser: SessionStore.currentUser(),
        visitedUser: UserStore.find(parseInt(this.props.params.userId)),
        edit: false
      }
    );
  },

  componentDidMount(){
    if (UserStore.all() === []) {
      UserActions.fetchUsers();
    }
    UserActions.fetchUser(parseInt(this.props.params.userId));
    this.listener = UserStore.addListener(this.handleChange);
  },

  componentWillUnmount(){
    this.listener.remove();
  },

  handleChange(){
    const currentUser = SessionStore.currentUser();
    const visitedUser = UserStore.find(parseInt(this.props.params.userId));
    let edit = false;
    if (currentUser.id === visitedUser.id) {
      edit = true
    }
    this.setState({
      currentUser: currentUser,
      visitedUser: visitedUser,
      edit: edit
    });
  },

  render(){
    return(
      <div>
        <UserBasics edit={this.state.edit}/>
        <UserTabs userId={this.props.params.userId}/>
        {this.props.children}
      </div>
    )
  }
});

module.exports = UserMain;
