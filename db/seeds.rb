# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
Post.destroy_all

#USERS
user1 = User.create(username: "demo-user", password: "demo-user-ftw", email: "demo@user.com", avatar: "cloud")
user2 = User.create(username: "ash_ketchum", password: "123123123", email: "pokemon@master.com", avatar: Faker::Avatar.image)
user3 = User.create(username: "admin", password: "123123123", email: "very_secure@password.com", avatar: Faker::Avatar.image)
user4 = User.create(username: "ron_weasley", password: "123123123", email: "very_secure1@password.com", avatar: Faker::Avatar.image)
user5 = User.create(username: "hermione_granger", password: "123123123", email: "very_secure2@password.com", avatar: Faker::Avatar.image)
user6 = User.create(username: "edelgard_von_hresvelg", password: "123123123", email: "very_secure3@password.com", avatar: Faker::Avatar.image)
user7 = User.create(username: "calvin", password: "123123123", email: "1231ds23123@gmail.com", avatar: Faker::Avatar.image)
user8 = User.create(username: "hobbes", password: "123123123", email: "12as3123123@gmail.com", avatar: Faker::Avatar.image) 

# POSTS
user2.posts.create(title: "Your Limitation",text: "It's only your imagination", post_type: "quote")


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




