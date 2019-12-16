json.extract! post, :id, :title, :text, :content_url, :tags, :created_at, :updated_at
json.user do
  json.extract! post.user, :avatar, :email, :id, :username
end
