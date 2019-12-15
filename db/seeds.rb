# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
Post.destroy_all
user1 = User.create(username: "demo-user", password: "demo-user-ftw", email: "demo@user.com")
user2 = User.create(username: "ash_ketchum", password: "pokemon", email: "pokemon@master.com")
user3 = User.create(username: "admin", password: "password", email: "very_secure@password.com")
user4 = User.create(username: "ron_weasley", password: "hermione", email: "very_secure1@password.com")
user5 = User.create(username: "hermione_granger", password: "hogwartz", email: "very_secure2@password.com")
user6 = User.create(username: "edelgard von hresvelg", password: "fire_nation", email: "very_secure3@password.com")
user7 = User.create(username: "calvin", password: "hobbes", email: "very_secure4@password.com")
user8 = User.create(username: "hobbes", password: "calvin", email: "very_secure5@password.com")
 
user2.posts.create(text: "gotta catch them all")


# User.destroy_all
# Post.destroy_all
# user1 = User.create(username: "demo-user", password: "demo-user-ftw", email: "demo@user.com")
# user2 = User.create(username: "username", password: "password", email: "username@password.com")
# user3 = User.create(username: "admin", password: "password", email: "very_secure@password")

# 5.times do 
#   user = User.create(
#     username: Faker::Name.name,
#     password: Faker::Lorem.characters(number: 12),
#     email: Faker::Internet.email,
#     avatar: Faker::Avatar.image
#   )
#   2.times do 
#     post = user.posts.create(-
#       title: Faker::Company.industry,
#       text: Faker::Company.bs,
#       tags: Faker::Company.buzzword,
#       content_url: Faker::Internet.url
#     ) 
#   end
# end




