"use strict";

const React = require('react');
const Link = require('react-router').Link;
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store');
const ErrorStore = require('../stores/error_store');

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
			lf_min_age: undefined,
			lf_max_age: undefined,
			lf_location: undefined
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
      this.context.router.push("/");
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

		debugger

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
					prop = parseInt(prop);
				}
				that.setState({[property]: prop});
			}
		);
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

						<br />
						<label> Age:
							<input type="text"
								value={this.state.age}
								onChange={this.update("age")}
								className="login-input"/>
						</label>

						<br />
						<label> Location:
							<input type="text"
								value={this.state.location}
								onChange={this.update("location")}
								className="login-input"/>
						</label>

						<br />
						<label> Gender:
							<input type="text"
								value={this.state.gender}
								onChange={this.update("gender")}
								className="login-input"/>
						</label>

						<br />
						<label> What gender are you interested in?
							<input type="text"
								value={this.state.lf_gender}
								onChange={this.update("lf_gender")}
								className="login-input"/>
						</label>

						<br />
						<label> What is the youngest age your desired person can be?
							<input type="text"
								value={this.state.lf_min_age}
								onChange={this.update("lf_min_age")}
								className="login-input"/>
						</label>

						<br />
						<label> What is the oldest age your desired person can be?
							<input type="text"
								value={this.state.lf_max_age}
								onChange={this.update("lf_max_age")}
								className="login-input"/>
						</label>

		        <br />
						<input type="submit" value={this.formType().toUpperCase() + "!"} />
					</div>
				</form>
			</div>
		);
	}
});

module.exports = LoginForm;