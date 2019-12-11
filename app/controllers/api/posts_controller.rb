class Api::PostsController < ApplicationController
  def index
    @posts = Posts.all
    # @posts = Posts.all.includes(:likes, :replies)
    # TODO includes to prefetch data, reduce n+1
    render :index
  end

  def show
    @post = Post.find(params[:id]) 
  end

  def new
    @post = Post.new
  end

  def create
    @post = Post.new(post_params)
    render :index
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
    params.require(:post).permit(:title, :text, :content_url, :tags) 
  end
end