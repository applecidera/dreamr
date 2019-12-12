class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user
      login!(@user)
      render 'api/users/dashboard'
    else
      render json: ["Your email or password were incorrect."], status: 401
    end
  end

  def destroy
    @user = current_user
    # debugger
    if @user
      logout!
      render "api/users/logout"
    else
      render json: ["Nobody signed in"], status: 404
    end
  end

end
