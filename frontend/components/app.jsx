"use strict";

const React = require('react');
const Link = require('react-router').Link;
const SessionStore = require('../stores/session_store');
const SessionActions = require('../actions/session_actions');

const App = React.createClass({

  componentDidMount() {
    SessionStore.addListener(this.forceUpdate.bind(this));
  },

  _handleLogOut(){
    SessionActions.logOut();
  },

  greeting() {
    if (SessionStore.isUserLoggedIn()) {
    	return (
    		<hgroup className="header-group">
    			<h3 className="header-name">Welcome, {SessionStore.currentUser().username}!</h3>
    			<input className="header-button" type="submit" value="logout" onClick={ this._handleLogOut } />
    		</hgroup>
    	);
    } else if ( !["/login", "/signup"].includes(this.props.location.pathname) ) {
      return (
        <nav className="login-signup">
          <Link to="/login" activeClassName="current">Login</Link>
          &nbsp;or&nbsp;
          <Link to="/signup" activeClassName="current">Sign up!</Link>
        </nav>
      );
    }
  },

  renderNavBar(){
    if (SessionStore.isUserLoggedIn()){
      return(
        <div className="navbar">
          {this.renderBrowse()}
          {this.renderMessages()}
          {this.renderProfile()}
        </div>
      );
    }
  },

  renderBrowse(){
    return (
      <div className="navbar-browse">
        <Link className="navbar-link" to="/users">
            <h2>Browse</h2>
        </Link>
      </div>
    );
  },

  renderMessages(){
    return (
      <div className="navbar-messages">
        <Link className="navbar-link" to="/users">
          <img
            className="navbar-messages-icon"
            src="http://res.cloudinary.com/tahngarth825/image/upload/v1467848945/envelope_icon_r8yvzh.png"/>
        </Link>
      </div>
    );
  },

  renderProfile(){
    return (
      <div className="navbar-profile">
        <Link className="navbar-link" to={`/${SessionStore.currentUser().id}`}>
          <img
            className="navbar-profile-pic"
            src={SessionStore.currentUser().pic_url}/>
        </Link>
      </div>
    );
  },

  render() {
    return (
      <div>
        <header>
          <div className="logo">
            <Link to="/" className="header-link"><h1>Yes Angel!</h1></Link>
            { this.greeting() }
          </div>

            {this.renderNavBar()}
        </header>

        <div className="body">
          {this.props.children}
        </div>
      </div>
    );
  }
});

module.exports = App;
