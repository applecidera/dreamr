
#liked_posts = []
#@likes.each do |like|
    #liked_posts << like.post_id
#end
#json.array! liked_posts

@likes.each do |like|
    json.set! like.id do
        json.extract! like, :id, :post_id
    end
end