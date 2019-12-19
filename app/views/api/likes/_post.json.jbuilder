# json.extract! post, :id, :title, :text, :tags, :post_type, :user_id, :created_at
# if post.images.attached?
#       json.imageUrls post.images.map {|image| url_for(image) }
# end

# json.authorId post.user.id
# json.likes post.likes.count

# add likes as well, :created_at, :updated_at
json.likes @like.user_id, @like.post_id

