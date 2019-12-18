class Api::LikesController < ApplicationController
  def create
    # debugger  
    @like = Like.new
    @like.user_id = current_user.id
    @like.post_id = params[:id]
    # debugger  
    if @like.save 
      @post = @like.post
      render 'api/posts/show'
    else
      render json: @like.errors.full_messages, status: 401
    end

  end


  def destroy
    # debugger
    @like = Like.find_by(user_id: current_user.id, post_id: params[:id])
    @like.destroy
    @post = @like.post
    render 'api/posts/show'
  end
end