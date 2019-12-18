
json.extract! user, :id, :username, :email, :avatar
json.follows user.follows
json.likedPosts do
  liked_ids = []
  user.liked_posts.each do |post|
    liked_ids << post.id
  end
  json.array! liked_ids
end
# end
# add followers as well