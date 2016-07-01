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
        visitedUser: UserStore.find(this.props.params.userId),
        editable: false
      }
    )
  },

  componentDidMount(){
    if (UserStore.all() === []) {
      UserActions.fetchUsers();
    }
    UserActions.fetchUser(this.props.params.userId);
    this.listener = UserStore.addListener(this.handleChange);
  },

  componentWillUnmount(){
    this.listener.remove();
  },

  handleChange(){
    this.setState({visitedUser: UserStore.find(this.props.params.userId)}, this.handleDisplay);
  },

  handleDisplay(){
    if (this.state.currentUser === this.state.visitedUser){
      this.setState({editable: true});
    }

    React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        edit: this.state.editable
      });
    });

    this.forceUpdate();
  },

  render(){
    return(
      <div>
        <UserBasics edit={this.state.editable}/>
        <UserTabs userId={this.props.params.userId}/>
        {this.props.children}
      </div>
    )
  }
});

module.exports = UserMain;
