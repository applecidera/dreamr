class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user
      login!(@user)
      # TODO render index page
      render 'api/users/show'
    else
      render json: ['Incorrect credentials, please try again.'], status: 401
    end
  end

  def destroy
    logout!
    # redirect to main screen
    render 'api/posts/index'
  end

end
