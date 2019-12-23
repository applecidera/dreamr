class Api::LikesController < ApplicationController
  
  def index
    @likes = Like.where(user_id: current_user.id)
    #@likes = Like.where(user_id: 85)
  end

  def show
    @like = Like.find_by(params[:id])
  end

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
    @user = @like.user
    render :show
  end
end