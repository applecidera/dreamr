class Api::UsersController < ApplicationController

  def new
    @user = User.new
    if @user.save
      render :show
      # TODO users show page or posts index page
    else
      render json: @user.errors.full_messages, status: 401
    end
  end

  def create
    @user= User.new(user_params)
    if @user.save
      # yay
    else
      # failed
    end
  end

  def show
    @user = User.find(params[:id])
    if @user
      render :show
      # TODO users show page
    else
      flash[:error]
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :email)
  end
end
