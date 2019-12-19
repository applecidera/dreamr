class Api::LikesController < ApplicationController
  def create
    @like = Like.new
    @like.user_id = current_user.id
    @like.post_id = params[:id]
    if @like.save 
      @post = @like.post
      render :show
    else
      render json: @like.errors.full_messages, status: 401
    end

  end


  def destroy
    @like = Like.find_by(user_id: current_user.id, post_id: params[:id])
    @like.destroy
    @post = @like.post
    render :show
  end
end