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
const UserMain = require("./components/user_main.jsx");
const UserAbout = require("./components/user_about.jsx");
const UserPhotos = require("./components/user_photos.jsx");
const UserQuestions = require("./components/user_questions.jsx");
const Messages = require("./components/messages.jsx");
const MessageItem = require("./components/message_item.jsx");

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
      <Route path="messages" component={ Messages } onEnter={ _ensureLoggedIn } >
        <Route path=":messageId" component={ MessageItem } onEnter={ _ensureLoggedIn }/>
      </Route>
      <Route path=":userId" component={ UserMain } onEnter={ _ensureLoggedIn } >
        <IndexRedirect to="about" />
        <Route path="about" component={ UserAbout } onEnter={ _ensureLoggedIn } />
        <Route path="photos" component={ UserPhotos } onEnter={ _ensureLoggedIn } />
        <Route path="questions" component={ UserQuestions } onEnter={ _ensureLoggedIn } />
      </Route>
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

const UserStore = require ("./stores/user_store.js");
window.UserStore = UserStore;
window.SessionStore = SessionStore;
window.TraitConstants = require("./constants/trait_constants.js");
window.MessageStore = require("./stores/message_store.js");
window.PhotoStore = require("./stores/photo_store.js");
