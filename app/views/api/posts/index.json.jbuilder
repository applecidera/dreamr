# debugger
@posts.each do |post|
  json.set! post.id do
    json.partial! 'post', post: post
    # debugger
    if post.images.attached?
      # debugger
      json.imageUrls post.images.map {|image| url_for(image) }
    end
  end
end