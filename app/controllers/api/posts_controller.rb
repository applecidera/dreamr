class Api::PostsController < ApplicationController

  def index
    @posts = Post.order(id: :DESC).limit(10).includes(:user)
    # debugger
    # @posts = Posts.all.includes(:likes, :replies)
    # TODO includes to prefetch data, reduce n+1
    # render :index
  end

  def show
    @post = Post.find(params[:id]) 
  end

  def new
    @post = Post.new
  end

  def create
    @post = Post.new(post_params)
    if @post.save
      # debugger
      render :show
    else 
      # debugger
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    @post = Post.find(params[:id])
    if post.update(user_params)
      render :index
    else
      render :index
    end
  end

  def destroy
    @post = Post.find(params[:id])
  end

  private

  def post_params
    params.require(:post).permit(:title, :text, :content_url, :tags, :user_id) 
  end
end