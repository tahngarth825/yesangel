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

		@user = fill_in_the_blanks(@user)

		if @user.save
			login(@user)
			response = []
			10.times {response.push("")}
			Response.create({
				user_id: @user.id,
				response: response
			})
			render "api/users/show"
		else
			render json: @user.errors, status: 422
		end
	end

	def edit
		@user = current_user
		@user.update!(user_params)
		@user
		render "api/users/show"
	end

	private

	def user_params
		result = params.require(:user).permit(:username, :password, :age, :location,
			:gender, :lf_min_age, :lf_max_age, :summary, :hobbies,
			:favs, :pic_url, :ethnicity, :height,
			:lf_gender => [])

		result[:age] = result[:age].to_i if result[:age]

		result[:lf_min_age] = result[:lf_min_age].to_i if result[:lf_min_age]

		result[:lf_max_age] = result[:lf_max_age].to_i if result[:lf_max_age]

		result[:height] = result[:height].to_i if result[:height]

		return result
	end

	def filter_params
		result = params.require(:filter).permit(:location, :lf_min_age, :lf_max_age,
		:lf_gender => [])

		result[:lf_min_age] = result[:lf_min_age].to_i if result[:lf_min_age]

		result[:lf_max_age] = result[:lf_max_age].to_i if result[:lf_max_age]

		return result
	end

	def filter_users
		filter = filter_params

		filter = {
			location: filter[:location],
			age: (filter[:lf_min_age]..filter[:lf_max_age]),
			gender: filter[:lf_gender] #Gets user where is other's lf_gender
		}

		return User.where(filter)
	end

	def fill_in_the_blanks(user)
		user[:pic_url] = " "
		user[:summary] = " "
		user[:favs] = " "
		user[:hobbies] = " "
		user[:ethnicity] = " "
		user[:height] = " "

		return user
	end
end
