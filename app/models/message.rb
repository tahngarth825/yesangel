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
end
