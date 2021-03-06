# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  age             :integer          not null
#  location        :string           not null
#  gender          :string           not null
#  pic_url         :string
#  lf_gender       :string           not null, is an Array
#  lf_min_age      :integer          not null
#  lf_max_age      :integer          not null
#  summary         :text
#  favs            :text
#  hobbies         :text
#  ethnicity       :string
#  height          :integer
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ActiveRecord::Base

	attr_reader :password

	validates :username, :password_digest, :session_token, :age, :location,
		:gender, :lf_gender, :lf_min_age, :lf_max_age, presence: true
	validates :username, uniqueness: true
	validates :password, length: {minimum: 6}, allow_nil: true
	validates :age, :lf_min_age, :lf_max_age, numericality: true
	validates :age, numericality: { greater_than_or_equal_to: 18,
	 	less_than_or_equal_to: 60 }
	validates :lf_min_age, numericality: { greater_than_or_equal_to: 18 }
	validates :lf_max_age, numericality: { less_than_or_equal_to: 60}

	after_initialize :ensure_session_token
	before_validation :ensure_session_token_uniqueness

	has_many :messages
	has_many :photos
	has_many :responses

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
