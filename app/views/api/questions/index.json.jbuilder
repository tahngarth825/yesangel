json.array! @questions do |question|
  json.extract! question, :id, :content
end
