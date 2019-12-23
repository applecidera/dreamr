class Api::FollowsController < ApplicationController

  def index
    @follows = Follow.where(follower_id: current_user.id)
  end

  def show
    @follow = Follow.find_by(params[:id])
  end

  def create
    @follow = Follow.new
    @follow.follower_id = current_user.id
    @follow.user_id = params[:id]
    if @follow.save 
      @user = @follow.user
      @follower = @follow.follower
      render :show
    else
      render json: @follow.errors.full_messages, status: 401
    end

  end


  def destroy
    @follow = Follow.find_by(follower_id: current_user.id, user_id: params[:id])
    @user = @follow.user
    @follower = @follow.follower
    @follow.destroy
    render :show
  end
end