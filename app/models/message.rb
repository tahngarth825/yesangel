class Message < ActiveRecord::Base
  validates :user_id1, :user_id2, :content, presence: true

  belongs_to :user1,
  class_name: "User",
  foreign_key: :user1_id,
  primary_key: :id

  belongs_to :user2,
  class_name: "User",
  foreign_key: :user2_id,
  primary_key: :id

  def append_message(message_id, sender_id, added_content)
    message = Message.find(message_id)
    user = User.find(sender_id)

    if (message.user1_id == user.id || message.user2_id == user.id)
      message.content.push("#{user.username} at #{parse_time}: #{added_content}")
      return message
    else
      raise "Message does not belong to user"
    end
  end

  private

  def parse_time
    date = DateTime.current.readable_inspect
    date = date.slice(0, date.length-6)
    return date
  end
end
