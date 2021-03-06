class Api::UsersController < ApplicationController
  
  def index
    # if params[:filters] != ""
      searchQuery = "%" + params[:filters] + "%"
      @users = User.where("username LIKE ?", searchQuery).limit(3)
    # else
      # searchQuery = nil
      # @users = nil
    # end
    
  end

  def create
    @user = User.new(user_params)
    @user.avatar = "cloud"
    if @user.save
      login!(@user)
      render 'api/users/dashboard'
    else
      # render json: @user.errors.full_messages, status: 401
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
    if @user
      render :show
    else
      render json: ["User does not exist"], status: 404
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :email)
  end
end
