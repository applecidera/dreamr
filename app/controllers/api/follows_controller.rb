class Api::FollowsController < ApplicationController
  def create
    @follow = Follow.new
    @follow.user_id = current_user.id
    @follow.post_id = params[:id]

    if @follow.save 
      @post = @follow.post
      render 'api/posts/show'
    else
      render json: @follow.errors.full_messages, status: 401
    end

  end


  def destroy
    @follow = follow.find_by(user_id: current_user.id, post_id: params[:id])
    @follow.destroy
    @post = @follow.post
    render 'api/posts/show'
  end
end