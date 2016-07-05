class User < ActiveRecord::Base

	attr_reader :password

	validates :username, :password_digest, :session_token, :age, :location,
		:gender, :lf_gender, :lf_min_age, :lf_max_age, presence: true
	validates :username, uniqueness: true
	validates :password, length: {minimum: 6}, allow_nil: true
	validates :age, :lf_min_age, :lf_max_age, numericality: true
	validates :height, numericality: true, allow_nil: true
	validates :age, numericality: { greater_than_or_equal_to: 18,
	 	less_than_or_equal_to: 60 }
	validates :lf_min_age, numericality: { greater_than_or_equal_to: 18 }
	validates :lf_max_age, numericality: { less_than_or_equal_to: 60}
	validates :height, numericality: { greater_than_or_equal_to: 48,
	 	less_than_or_equal_to: 84}

	after_initialize :ensure_session_token
	before_validation :ensure_session_token_uniqueness

	# has_many :responses
	# has_many :questions,
	# 	through: :responses,
	# 	source: :question
  # has_many :photos
  # has_many :messages

	def password= password
		self.password_digest = BCrypt::Password.create(password)
		@password = password
	end

	def self.find_by_credentials username, password
		user = User.find_by(username: username)
		return nil unless user
		user.password_is?(password) ? user : nil
	end

	def password_is? password
		BCrypt::Password.new(self.password_digest).is_password?(password)
	end

	def reset_session_token!
		self.session_token = new_session_token
		ensure_session_token_uniqueness
		self.save
		self.session_token
	end

	private

	def ensure_session_token
		self.session_token ||= new_session_token
	end

	def new_session_token
		SecureRandom.base64
	end

	def ensure_session_token_uniqueness
		while (User.find_by(session_token: self.session_token) &&
		self.id != User.find_by(session_token: self.session_token).id)
			self.session_token = new_session_token
		end
	end
end
