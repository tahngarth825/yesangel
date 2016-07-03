class Api::UsersController < ApplicationController

	def index
		if (params.include?("filter"))
			@users = filter_users
		else
			@users = User.all
		end

		render "api/users/index"
	end

	def show
		@user = User.find(params[:id])

		render "api/users/show"
	end

	def create
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
		render "api/users/show"
	end

	private

	def user_params
		params.require(:user).permit(:username, :password, :age, :location,
			:gender, :lf_gender, :lf_min_age, :lf_max_age, :summary, :hobbies,
			:favs, :pic_url, :orientation, :ethnicity, :height, :body_type)
	end

	def filter_params
		params.require(:filter).permit(:location, :lf_min_age, :lf_max_age,
		:lf_gender)
	end

	def filter_users
		filter = filter_params

		filter = {
			location: filter[:location],
			age: (filter[:lf_min_age]..filter[:lf_max_age]),
			gender: filter[:lf_gender]
		}

		if (filter[:gender] == "any")
			filter.delete(:gender)
		end

		return User.where(filter)
	end
end
