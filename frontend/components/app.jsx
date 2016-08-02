"use strict";

const React = require('react');
const SessionStore = require('../stores/session_store');
const SessionActions = require('../actions/session_actions');

const ReactRouter = require('react-router');
const Link = ReactRouter.Link;
const hashHistory = ReactRouter.hashHistory;


const App = React.createClass({
  componentDidMount() {
    this.listener = SessionStore.addListener(this.forceUpdate.bind(this));
  },

  componentWillUnmount(){
    this.listener.remove();
  },

  _handleLogOut(){
    SessionActions.logOut();
  },

  greeting() {
    if (SessionStore.isUserLoggedIn()) {
    	return (
    		<hgroup className="header-welcome-box">
    			<h3 className="header-welcome">Welcome, {SessionStore.currentUser().username}!</h3>
    			<input className="blue-button-logout"
            type="submit"
            value="Log out"
            onClick={ this._handleLogOut } />
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
          {this.renderMessages()}
          {this.renderProfile()}
          { this.greeting() }
        </div>
      );
    }
  },

  toUsers(e){
    e.preventDefault();
    hashHistory.push("/users");
  },

  renderBrowse(){
    return (
      <h2 className="browse" onClick={this.toUsers}>Browse</h2>
    );
  },

  toMessages(e){
    e.preventDefault();
    hashHistory.push("/messages");
  },

  renderMessages(){
    return (
      <div className="navbar-messages">
        <div className="navbar-messages-icon" onClick={this.toMessages}/>
      </div>
    );
  },

  toProfile(e){
    e.preventDefault();
    hashHistory.push(`/${SessionStore.currentUser().id}/about`);
  },

  renderProfile(){
    let pic = (
      <h2 className="navbar-profile-words">Profile</h2>
    );

    if (SessionStore.currentUser().pic_url !== " "){
      pic = (<img
        className="navbar-profile-pic"
        src={SessionStore.currentUser().pic_url}/>);
    }

    return (
      <div className="navbar-profile" onClick={this.toProfile}>
        {pic}
      </div>
    );
  },

  render() {
    return (
      <div>
        <header>
          <div className="header-inner">
            <div className="header-left">
              <div className="logo">
                <Link to="/" className="header-link">
                  <img className="logo-pic"
                    src="https://res.cloudinary.com/tahngarth825/image/upload/v1467914754/yesangel_d8mvr3.png"/>
                </Link>
              </div>
              {this.renderBrowse()}
            </div>

            {this.renderNavBar()}
          </div>
        </header>

        <div className="body">
          {this.props.children}
        </div>
      </div>
    );
  }
});

module.exports = App;
