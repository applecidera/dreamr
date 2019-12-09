class UsersController < ApplicationController

  def new
    @user = User.new
    if @user.save! 
      render json: "user created"
      # TODO redirect to index
    else
      flash[:error]
    end
  end


  def show
    @user = User.find(params[:id])
    if @user
      render json: "found user"
    else
      flash[:error]
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
