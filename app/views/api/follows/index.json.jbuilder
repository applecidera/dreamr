@follows.each do |follow|
    json.set! follow.id do
        json.extract! follow, :id, :user_id, :follower_id
    end
end