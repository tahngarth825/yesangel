json.extract! photo, :id, :url, :user_id
json.age time_ago_in_words(photo.created_at)
