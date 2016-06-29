const React = require("react");
const UserActions = require("../actions/user_actions");
const LoginForm = require('./LoginForm');

const App = React.createClass({
  componentDidMount(){
    // debugger
    // UserActions.fetchCurrentUser();
  },

  render(){
    return (
      <div>
        <h1>Front End Auth Demo</h1>
        <LoginForm/>
      </div>
    );
  }
});

module.exports = App;
