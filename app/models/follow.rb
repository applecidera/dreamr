class Follow < ApplicationRecord
  has_one :user
  has_many :followers
end
