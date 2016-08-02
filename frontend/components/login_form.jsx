"use strict";

const React = require('react');
const Link = require('react-router').Link;
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store');
const ErrorStore = require('../stores/error_store');
const TraitConstants = require("../constants/trait_constants.js");
const ReactSlider = require('../../lib/assets/react-slider.js');


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

    return (function(event) {
			if (property === "lf_age") {
        const minAge = event[0];
        const maxAge = event[1];

        that.setState({"lf_min_age": minAge, "lf_max_age": maxAge});
        return;
      }

			if (property === "age") {
				that.setState({[property]: event});
				return;
			}

			let value = event.target.value;

			if (property === "lf_gender"){
				const lfGender = that.state.lf_gender.slice();
				const index = lfGender.indexOf(value);

				if (index === -1){
					lfGender.push(value);
				} else {
					lfGender.splice(index, 1);
				}

				that.setState({[property]: lfGender});
			} else {
				that.setState({[property]: value});
			}
		});
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
				<div className="login-column-2">
					<br />
						<div className="login-age">
							<label className="slider-label" htmlFor="age">
								Your Age:
								<br/>
								<p className="edge-modifier">
									{that.edgeModifier("age", that.state.age)}
								</p>
							</label>
							<ReactSlider
								min={18}
								max={60}
								defaultValue={that.state.age}
								onChange={that.update("age")}
								className="slider"
								id="age"
								withBars>

								<div id='left-handle' className='slider-handle'></div>
							</ReactSlider>
						</div>



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
					<br/>
					<ul className="checkbox-box" id="lf_gender">
						{
							TraitConstants.lf_gender.map( function(lf_gender){
								return (
									<li key={lf_gender.value}>
										<input type="checkbox"
											id={lf_gender.value}
											value={lf_gender.value}
											onChange={that.update("lf_gender")} />
										<label htmlFor={lf_gender.value} className="checkbox-label">
											<span></span>
											{lf_gender.label}
										</label>
									</li>
								);
							})
						}
					</ul>

					<br/> <br/>

					<div className="login-age">
						<label className="slider-label" htmlFor="lf_age">
							Desired Age Range
							<br/>
							<p className="edge-modifier">
								{that.edgeModifier("age", that.state.lf_min_age)} - {that.edgeModifier("age", that.state.lf_max_age)}
							</p>
						</label>
						<ReactSlider
							min={18}
							max={60}
							defaultValue={[that.state.lf_min_age, that.state.lf_max_age]}
							onChange={that.update("lf_age")}
							className="slider"
							id="lf_age"
							withBars>

							<div id='left-handle' className='slider-handle'></div>
							<div id='right-handle' className='slider-handle'></div>
						</ReactSlider>
					</div>
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
				<div className="login-form-container">
					<form onSubmit={this.handleSubmit} className="login-form-box">
						<div className="login-column-1">
							<h1>Welcome to Yes Angel!</h1>

							<br/>

							<h2>Find the love of your life!</h2>

							<br/>

							<button className="blue-button"
								onClick={this.demoLogin}>
								Browse as Guest
							</button>

							<br/>

							<br/>

							Please { this.formType() }, or { navLink }

							{ this.fieldErrors("base") }
							<div className="login-form">

								<br />

								<label htmlFor="username"> Username
									{ this.fieldErrors("username") }
								</label>
								<br/>
									<input type="text"
										id="username"
										value={this.state.username}
										onChange={this.update("username")}
										className="login-input" />

									<br/>

								<label htmlFor="password"> Password{passwordCheck}
									{ this.fieldErrors("password") }
								</label>
									<br/>
									<input type="password"
										id="password"
										value={this.state.password}
										onChange={this.update("password")}
										className="login-input" />
								<br/>
							</div>
						</div>

						{this.signUpForm()}

						<div className="login-submit">
							<input type="submit"
								value={this.formType().toUpperCase() + "!"}
								className="blue-button"/>
						</div>
					</form>
				</div>
		);
	}
});

module.exports = LoginForm;
