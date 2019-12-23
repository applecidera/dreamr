json.likedPosts do
    liked_posts = []
    @likes.each do |like|
        liked_posts << like.post_id
    end
    json.array! liked_posts
end