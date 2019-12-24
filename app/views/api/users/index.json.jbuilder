if @users.length > 0
    @users.each do |user|
        json.set! user.id do
            json.partial! "api/users/user", user: user
        end
    end
else
    json.null!
end