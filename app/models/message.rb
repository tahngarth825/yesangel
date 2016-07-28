# == Schema Information
#
# Table name: messages
#
#  id          :integer          not null, primary key
#  user1_id    :integer          not null
#  user2_id    :integer          not null
#  content     :text             not null, is an Array
#  last_update :datetime         not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Message < ActiveRecord::Base
  validates :user1_id, :user2_id, :content, :last_update, presence: true

  belongs_to :user1,
  class_name: "User",
  foreign_key: :user1_id,
  primary_key: :id

  belongs_to :user2,
  class_name: "User",
  foreign_key: :user2_id,
  primary_key: :id

  def append_message(sender_id, added_content)
    message = self
    user = User.find(sender_id)
    message.last_update = DateTime.current

    if (message.user1_id == user.id || message.user2_id == user.id)
      message.content.push("#{user.username}: #{added_content}")
      return message
    else
      raise "Message does not belong to user"
    end
  end

  def create_message(sender_id, content)
    message = self
    user = User.find(sender_id)
    message.last_update = DateTime.current

    message.content = ["#{user.username}: #{content}"]
    
    return message
  end
end
