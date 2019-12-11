class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user
      login!(@user)
      # TODO render index page
      render 'api/posts/index'
    else
      # render :json @user.errors.full_messages, status: 401
      render 'api/sessions/errors', status: 401
    end
  end

  def errors
  end

  def destroy
    logout!
    # redirect to main screen
    render 'api/sessions/logout'
  end

end
