# debugger
@posts.each do |post|
  json.set! post.id do
    json.partial! 'post', post: post
    # debugger
    json.imageUrl url_for(post.image)
  end
end