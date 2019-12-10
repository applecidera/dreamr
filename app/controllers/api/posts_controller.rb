class Api::PostsController < ApplicationController
  def index
    @posts = Posts.all
  end

  def show
    @post = Post.find(params[:id]) 
  end

  def new
    @post = Post.new
  end

  def create
    @post = Post.new(post_params)
  end

  def update
    @post = Post.find(params[:id])
    if post.update(user_params)
      # do something
    else
      # failed
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