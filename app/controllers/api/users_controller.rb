class Api::UsersController < ApplicationController

	def index
		@users = User.all

		debugger
	end

	def show
		render "api/users/show"
	end

	def create
		debugger

		@user = User.new(user_params)

		if @user.save
			login(@user)
			render "api/users/show"
		else
			render json: @user.errors, status: 422
		end
	end

	def edit
		@user = current_user

		@user.update!(user_params)
		render "api/users/show" # TO CHANGE LATER
	end

	private

	def user_params
		params.require(:user).permit(:username, :password, :age, :location,
			:gender, :lf_gender, :lf_min_age, :lf_max_age)
	end
end
