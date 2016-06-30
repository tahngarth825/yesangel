//React
const React = require('react');
const ReactDOM = require('react-dom');
//Router
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;
const IndexRedirect = ReactRouter.IndexRedirect;
const hashHistory = ReactRouter.hashHistory;
//Components
const App = require('./components/app.jsx');
const LoginForm = require('./components/login_form');
const UsersMain = require("./components/users_main.jsx");
//Auth
const SessionStore = require('./stores/session_store');
const SessionActions = require('./actions/session_actions');

const appRouter = (
  <Router history={ hashHistory }>
    <Route path="/" component={ App }>
      <IndexRedirect to="/users" />
      <Route path="login" component={ LoginForm } onEnter={_ensureLoggedOut}/>
      <Route path="signup" component={ LoginForm } onEnter={_ensureLoggedOut}/>
      <Route path="users" component={ UsersMain } onEnter={ _ensureLoggedIn }  />
    </Route>
  </Router>
);

function _ensureLoggedIn(nextState, replace) {
  // Re-routes user to log-in page if not logged in
    if (!SessionStore.isUserLoggedIn()) {
      replace('/login');
    }
}

function _ensureLoggedOut(nextState, replace){
  if (SessionStore.isUserLoggedIn()) {
    replace('/users');
  }
}

document.addEventListener('DOMContentLoaded', function() {
  if (window.currentUser) {
    SessionActions.receiveCurrentUser(window.currentUser);
  }

  const root = document.getElementById('content');
  ReactDOM.render(appRouter, root);
});
