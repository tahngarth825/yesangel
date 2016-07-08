json.extract! photo, :id, :url
json.age time_ago_in_words(photo.created_at)
