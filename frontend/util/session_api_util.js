"use strict";

const SessionApiUtil = {
	logIn(user, callback, error) {
		$.ajax({
			url: '/api/session',
			type: 'POST',
			data: { user },
			success(response){
				callback(response);
			},
			error(xhr) {
				const errors = xhr.responseJSON;

				error("login", errors);
			}
		});
	},

	logOut(callback) {
		$.ajax({
			url: '/api/session',
			method: 'DELETE',
			success(response){
				callback(response);
			},
			error: function () {
			  console.log("Logout error in SessionApiUtil#logout");
			}
		});
	},

	signUp(user, success, error) {
		$.ajax({
			url: '/api/users',
			type: 'POST',
			dataType: 'json',
			data: { user: user },
			success(response){
				success(response);
			},
			error(xhr) {
				const errors = xhr.responseJSON;
				error("signup", errors);
			}
		});
	},

	fetchCurrentUser(callback) {
		$.ajax({
			url: '/api/session',
			method: 'GET',
			success(response){
				callback(response);
			},
			error (xhr) {
			  console.log("Error in SessionApiUtil#fetchCurrentUser");
			}
		});
	}
};

module.exports = SessionApiUtil;
