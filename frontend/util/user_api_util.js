const UserApiUtil = {
  fetchUsers(callback) {
		$.ajax({
			url: '/api/users',
			type: 'GET',
			success(response){
        callback(response);
      },
			error() {
				console.log("Error fetching user");
			}
		});
	},

	fetchUser(id, callback) {
		$.ajax({
			url: `/api/users/${id}`,
			method: 'GET',
			success(response){
        callback(response);
      },
			error() {
			  console.log("Error in UserApiUtil#fetchCurrentUser");
			}
		});
	}
};

module.exports = UserApiUtil;
