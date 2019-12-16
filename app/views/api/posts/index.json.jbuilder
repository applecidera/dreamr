
@posts.each do |post|
  json.set! post.id do
    json.partial! 'post', post: post
    
    if post.images.attached?
      json.imageUrls post.images.map {|image| url_for(image) }
    end
  end
end