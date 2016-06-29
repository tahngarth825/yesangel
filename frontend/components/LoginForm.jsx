var React = require("react");
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var UserActions = require("../actions/user_actions");
var UserStore = require('../stores/user_store');

var LoginForm = React.createClass({
	mixins: [LinkedStateMixin],
	getInitialState: function(){
		return {
			form: "login",
			currentUser: UserStore.currentUser(),
			userErrors: UserStore.errors(),
			username: "",
			password: ""
		};
	},

	componentDidMount: function(){
		UserStore.addListener(this._updateUser);
		// UserActions.fetchCurrentUser();
	},

	_updateUser: function(){
		this.setState({
			currentUser: UserStore.currentUser(),
			userErrors: UserStore.errors()
		});
	},
	_setForm: function(e){
		this.setState({form: e.currentTarget.value});
	},
	handleSubmit: function(e){
		e.preventDefault();
		UserActions[this.state.form]({
			username: this.state.username,
			password: this.state.password
		});
	},
	logout: function(e){
		e.preventDefault();
		UserActions.logout();
	},
	greeting: function(){
		if (!this.state.currentUser) {
			return;
		}

		return (
			<div>
				<h2>Hi, {this.state.currentUser.username}!</h2>
				<input type="submit" value="logout" onClick={this.logout}/>
			</div>
		);
	},
	errors: function(){
		if (!this.state.userErrors){
			return;
		}
		var self = this;
		return (<ul>
		{
			Object.keys(this.state.userErrors).map(function(key, i){
				return (<li key={i}>{self.state.userErrors[key]}</li>);
			})
		}
		</ul>);
	},
	form: function(){
		if (this.state.currentUser) {
			return;
		}
		return(
				<form onSubmit={this.handleSubmit}>
					<section>
						<label> Username:
							<input type="text" valueLink={this.linkState("username")}/>
						</label>

						<label> Password:
							<input type="password" valueLink={this.linkState("password")}/>
						</label>
					</section>

					<section>
						<label> Login
							<input type="Radio" name="action" value="login" onChange={this._setForm}/>
						</label>

						<label> Sign Up
							<input type="Radio" name="action" value="signup" onChange={this._setForm}/>
						</label>
					</section>

					<input type="Submit"/>
				</form>
		);
	},

	render: function(){
		return (
			<div id="login-form">
				{this.greeting()}
				{this.errors()}
				{this.form()}
			</div>
		);
	}
});

module.exports = LoginForm;
