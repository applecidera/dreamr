# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  avatar          :string
#

class User < ApplicationRecord
  validates :username, presence: true
  validates :session_token, presence: true
  validates :email, presence: true
  validates :password_digest, presence: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  has_many :posts
  has_many :follows
  
  after_initialize :ensure_session_token

  attr_reader :password

  def avatar=(string)
    self.avatar=string
    self.save!
    self.avatar
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

end
