"use strict";

const React = require('react');
const Link = require('react-router').Link;
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store');
const ErrorStore = require('../stores/error_store');

//Router
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;
const hashHistory = ReactRouter.hashHistory;


const LoginForm = React.createClass({

	contextTypes: {
		router: React.PropTypes.object.isRequired
	},

  getInitialState() {
    return {
      username: "",
      password: "",
			age: undefined,
			location: undefined,
			gender: undefined,
			lf_gender: undefined,
			lf_min_age: 18,
			lf_max_age: 99,
    };
  },

  componentDidMount() {
    this.errorListener = ErrorStore.addListener(this.forceUpdate.bind(this));
    this.sessionListener = SessionStore.addListener(this.redirectIfLoggedIn);
  },

  componentWillUnmount() {
    this.errorListener.remove();
    this.sessionListener.remove();
  },

  redirectIfLoggedIn() {
    if (SessionStore.isUserLoggedIn()) {
      hashHistory.push("/users");
    }
  },

	handleSubmit(e) {
		e.preventDefault();

		let formData = {};

		if (this.formType() === "login"){
			formData = {
				username: this.state.username,
				password: this.state.password
			}
		}
		else {
			Object.assign(formData, this.state);
		}


    if (this.props.location.pathname === "/login") {
      SessionActions.logIn(formData);
    } else {
      SessionActions.signUp(formData);
    }
	},

  fieldErrors(field) {
    const errors = ErrorStore.formErrors(this.formType());

    if (!errors[field]) { return; }

    const messages = errors[field].map( (errorMsg, i) => {
      return <li key={ i }>{ errorMsg }</li>;
    });

    return <ul>{ messages }</ul>;
  },

  formType() {
    return this.props.location.pathname.slice(1);
  },

  update(property) {
		const that = this;
    return (
			function(event) {
				let prop = event.target.value;

				if (property === "age" || property === "lf_min_age" ||
					property === "lf_max_age" || property === "height")
				{
					if (prop === undefined) {
						prop = parseInt(prop);
					}
				}
				that.setState({[property]: prop});
			}
		);
  },

	signUpForm(){
		if (this.formType() === "signup"){
			return (
				<div>
					<br />
					<label> Age:
						<input type="text"
							onChange={this.update("age")}
							className="login-input"/>
					</label>

					<br />
					<label> Location:
						<input type="text"
							onChange={this.update("location")}
							className="login-input"/>
					</label>

					<br />
					<label> Gender:
						<input type="text"
							onChange={this.update("gender")}
							className="login-input"/>
					</label>

					<br />
					<label> What gender are you interested in?
						<input type="text"
							onChange={this.update("lf_gender")}
							className="login-input"/>
					</label>

					<br />
					<label> What is the youngest age your desired person can be?
						<input type="text"
							onChange={this.update("lf_min_age")}
							className="login-input"/>
					</label>

					<br />
					<label> What is the oldest age your desired person can be?
						<input type="text"
							onChange={this.update("lf_max_age")}
							className="login-input"/>
					</label>
				</div>
			);
		}
		else {
			return;
		}
	},

	render() {

    let navLink;
    if (this.formType() === "login") {
      navLink = <Link to="/signup">sign up instead</Link>;
    } else {
      navLink = <Link to="/login">log in instead</Link>;
    }

		return (
			<div className="login-form-container">
				<form onSubmit={this.handleSubmit} className="login-form-box">
	        Welcome to Yes Angel!
					<br/>
					Please { this.formType() }, or { navLink }

	        { this.fieldErrors("base") }
					<div className="login-form">
		        <br />
						<label> Username:
		          { this.fieldErrors("username") }
							<input type="text"
		            value={this.state.username}
		            onChange={this.update("username")}
								className="login-input" />
						</label>

		        <br />
						<label> Password:
		          { this.fieldErrors("password") }
		          <input type="password"
		            value={this.state.password}
		            onChange={this.update("password")}
								className="login-input" />
						</label>

						{this.signUpForm()}

		        <br />
						<input type="submit" value={this.formType().toUpperCase() + "!"} />
					</div>
				</form>
			</div>
		);
	}
});

module.exports = LoginForm;
