class SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user
      login!(@user)
      flash[:success]
      # TODO render index page
    else
      flash[:error]
    end
  end

  def destroy
    logout!
    # TODO redirect to login screen
  end

end
