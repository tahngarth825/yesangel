"use strict";

const React = require('react');
const Link = require('react-router').Link;
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store');
const ErrorStore = require('../stores/error_store');
const TraitConstants = require("../constants/trait_constants.js");

//Router
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;


const LoginForm = React.createClass({

	contextTypes: {
		router: React.PropTypes.object.isRequired
	},

  getInitialState() {
    return {
      username: "",
      password: "",
			age: 30,
			location: "San Francisco",
			gender: "Male",
			lf_gender: [],
			lf_min_age: 18,
			lf_max_age: 60,
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
		let formData = {};

		if (this.formType() === "login"){
			formData = {
				username: this.state.username,
				password: this.state.password
			};
			SessionActions.logIn(formData);
		}
		else {
			if (this.state.lf_min_age > this.state.lf_max_age){
				e.preventDefault();
				alert("Minimum age must be less than or equal to maximum age!");
				return;
			}

			if (this.state.lf_gender.length === 0) {
				e.preventDefault();
				alert("Please select at least one gender to be interested in!");
				return;
			}

			if (this.state.password.length < 6) {
				e.preventDefault();
				alert("Your password must have a minimum length of 6!");
				return;
			}

			Object.assign(formData, this.state);
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
				let value = event.target.value;

				if (property === "lf_gender"){
					const lf_gender = that.state.lf_gender;
					const index = lf_gender.indexOf(value);

					if (index === -1){
						lf_gender.push(value);
						that.setState({[property]: lf_gender});
					} else {
						lf_gender.splice(index, 1);
						that.setState({[property]: lf_gender});
					}

					return;
				}

				if (property === "age" || property === "lf_min_age" ||
					property === "lf_max_age")
				{
					value = parseInt(value);
				}
				that.setState({[property]: value});
			}
		);
  },

	edgeModifier(property, value){
		if (property === "age") {
			if (value === 60){
				return (value + "+");
			}
		}

		return value;
	},

	signUpForm(){
		const that = this;

		if (this.formType() === "signup"){
			return (
				<div className="login-form">
					<br />

					<label className="unbold" htmlFor="age">
						<b>Age: </b>
							<p className="edge-modifier">
								{that.edgeModifier("age", that.state.age)}
							</p>
					</label>
						<input type="range"
							min={18}
							max={60}
							defaultValue={30}
							onChange={this.update("age")}
							id="age"
							className="slider"/>

					<br />


					<label htmlFor="location">
						Location:
					</label>

					<div className="select-box">
						<select value={this.state.location}
							onChange={this.update("location")}
							className="react-select"
							id="location"
							>
							{
								TraitConstants.location.map( function(location){
									return (
										<option value={location.value} key={location.value}>
											{location.label}
										</option>
									);
								})
							}
						</select>
					</div>


					<br />
					<label htmlFor="gender">Gender:</label>
					<div className="select-box">
						<select value={this.state.gender}
							onChange={this.update("gender")}
							className="react-select"
							id="gender"
							>
							{
								TraitConstants.gender.map( function(gender){
									return (
										<option value={gender.value} key={gender.value}>
											{gender.label}
										</option>
									);
								})
							}
						</select>
					</div>

					<br />

					<label htmlFor="lf_gender">Which gender(s) are you interested in?</label>
					<div className="checkbox-box" id="lf_gender">
						{
							TraitConstants.lf_gender.map( function(lf_gender){
								return (
									<div key={lf_gender.value}>
										<label htmlFor={lf_gender.value} className="checkbox-label">
											{lf_gender.label}
										</label>
											<input type="checkbox"
												className="checkbox"
												id={lf_gender.value}
												value={lf_gender.value}
												onChange={that.update("lf_gender")} />
									</div>
								);
							})
						}
					</div>

					<br />

					<label htmlFor="lf_min_age">
						What is the youngest age your desired person can be?
						<br/>
						<p className="edge-modifier">
							{that.edgeModifier("age", that.state.lf_min_age)}
						</p>
					</label>
						<input type="range"
							id="lf_min_age"
							min="18"
							max="60"
							defaultValue="18"
							onChange={this.update("lf_min_age")}
							className="slider"/>

					<br />

					<label htmlFor="lf_max_age">
						What is the oldest age your desired person can be?
						<br/>
						<p className="edge-modifier">
							{that.edgeModifier("age", that.state.lf_max_age)}
						</p>
					</label>
						<br/>
							<input type="range"
								id="lf_max_age"
								min="18"
								max="60"
								defaultValue="60"
								onChange={this.update("lf_max_age")}
								className="slider"/>
				</div>
			);
		}
		else {
			return;
		}
	},

	demoLogin(e){
		e.preventDefault();

		const formData = {
			username: "Guest",
			password: "YesAngel"
		};

		SessionActions.logIn(formData);
	},

	render() {

    let navLink, text, link, passwordCheck;

    if (this.formType() === "login") {
			link = "/signup";
			text = "sign up instead";
			passwordCheck = "";
    } else {
			link = "/login";
			text = "log in instead";
			passwordCheck = " (minimum length 6) ";
    }

		navLink = <Link className="link" to={link}><b>{text}</b></Link>;

		return (
			<div className="login-background-box">
				<div className="login-background">
				</div>

				<div className="login-form-container">
					<form onSubmit={this.handleSubmit} className="login-form-box">
						<h1>Welcome to Yes Angel!</h1>

						<br/>

						<h2>Find the love of your life!</h2>

						<br/>

						<br/>
						<button className="yellow-button"
							onClick={this.demoLogin}>
							Browse as Guest
						</button>
						<br/>

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
							<label> Password{passwordCheck}:
								{ this.fieldErrors("password") }
								<input type="password"
									value={this.state.password}
									onChange={this.update("password")}
									className="login-input" />
							</label>

							{this.signUpForm()}

							<br />
							<input type="submit"
								value={this.formType().toUpperCase() + "!"}
								className="yellow-button"/>
						</div>
					</form>
				</div>
			</div>
		);
	}
});

module.exports = LoginForm;
