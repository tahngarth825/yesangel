json.last_update message.last_update.time.to_formatted_s(:long_ordinal)
json.(message, :content, :user1_id, :user2_id, :id)
json.user2 message.user2.username
json.user1 message.user1.username
