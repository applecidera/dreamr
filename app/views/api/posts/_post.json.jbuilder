json.extract! post, :id, :title, :text, :tags, :post_type, :user_id, :created_at
if post.images.attached?
      json.imageUrls post.images.map {|image| url_for(image) }
      json.imageFiles post.images.map {|image| (image.blob_id) }
      json.imageFiles2 post.images.map {|image| (image) }
end

json.authorId post.user.id
json.likes post.likes.count

# add likes as well, :created_at, :updated_at

