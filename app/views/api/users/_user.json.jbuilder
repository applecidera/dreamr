
json.extract! user, :id, :username, :email, :avatar
json.follows user.follows
json.likedPosts do
  liked_ids = []
  user.liked_posts.each do |post|
    liked_ids << post.id
  end
  json.array! liked_ids
end
json.following do
  followed_user_ids = []
  user.following.each do |user|
    followed_user_ids << user.id
  end
  json.array! followed_user_ids
end
json.authored_posts do
  authored_posts = []
  user.posts.each do |post|
    authored_posts << post.id
  end
  json.array! authored_posts
end