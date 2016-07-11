class Response < ActiveRecord::Base
  validates :user_id, :response, presence: true

  belongs_to :user
end
