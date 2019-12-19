# == Schema Information
#
# Table name: follows
#
#  id          :bigint           not null, primary key
#  user_id     :integer          not null
#  follower_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Follow < ApplicationRecord
  belongs_to :user,
    class_name: :User,
    foreign_key: :user_id,
    primary_key: :id


  belongs_to :follower,
    class_name: :User,
    foreign_key: :follower_id,
    primary_key: :id
end
