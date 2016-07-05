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
	},

  editUser(user, callback){
    $.ajax({
      url: `/api/users/${user.id}/edit`,
      method: "GET",
      data: {user: user},
      dataType: "json",
      success(response){
        callback(response);
      },
      error(){
        console.log("User unsuccessfully edited");
      }
    });
  },

  filterUsers(filter, callback){
    $.ajax({
      url: `/api/users`,
      method: 'GET',
      data: {filter: filter},
      dataType: "json",
      success(response){
        callback(response);
      },
      error(){
        console.log("ERROR IN FILTERING USERS");
      }
    });
  }
};

module.exports = UserApiUtil;
