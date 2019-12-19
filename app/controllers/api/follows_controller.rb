class Api::FollowsController < ApplicationController
  def create
    @follow = Follow.new
    @follow.follower_id = current_user.id
    @follow.user_id = params[:id]
    if @follow.save 
      @user = @follow.user
      @follower = @follow.follower
      render 'api/posts/show'
    else
      render json: @follow.errors.full_messages, status: 401
    end

  end


  def destroy
    @follow = Follow.find_by(follower_id: current_user.id, user_id: params[:id])
    @user = @follow.user
    @follower = @follow.follower
    @follow.destroy
    render 'api/posts/show'
  end
end