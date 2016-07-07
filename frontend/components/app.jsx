"use strict";

const React = require('react');
const SessionStore = require('../stores/session_store');
const SessionActions = require('../actions/session_actions');

const ReactRouter = require('react-router');
const Link = ReactRouter.Link;
const hashHistory = ReactRouter.hashHistory;


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
          {this.renderProfile()}
          {this.renderBrowse()}
          {this.renderMessages()}
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

  toProfile(e){
    e.preventDefault();
    hashHistory.push(`/${SessionStore.currentUser().id}/about`);
  },

  renderProfile(){
    let pic = (
      <h2>Profile</h2>
    );

    if (SessionStore.currentUser().pic_url !== " "){
      pic = (<img
        className="navbar-profile-pic"
        src={SessionStore.currentUser().pic_url}/>);
    }

    return (
      <div className="navbar-profile" onClick={this.toProfile}>
          <div className="navbar-profile-pic-box">
            {pic}
          </div>
      </div>
    );
  },

  render() {
    return (
      <div>
        <header>
          <div className="logo">
            <Link to="/" className="header-link">
              <img className="logo-pic"
                src="http://res.cloudinary.com/tahngarth825/image/upload/v1467914754/yesangel_d8mvr3.png"/>
            </Link>
          </div>

          { this.greeting() }

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
