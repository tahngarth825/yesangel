class Photo < ActiveRecord::Base
  validates :url, :user_id, presence: true

  belongs_to :user
end
