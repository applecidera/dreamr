json.extract! post, :id, :title, :text, :tags

# add likes as well, :created_at, :updated_at
json.user do
  json.extract! post.user, :avatar, :email, :id, :username
end
