//React
const React = require('react');
const ReactDOM = require('react-dom');
//Components
const App = require('./components/App');
const UserActions = require('./actions/user_actions');

document.addEventListener('DOMContentLoaded', function(){
  if(window.currentUser){
    UserActions.receiveCurrentUser(currentUser);
  }
  const root = document.getElementById('content');
  ReactDOM.render(<App />, root);
});
