class Api::PostsController < ApplicationController
  def index
    @posts = Posts.all
  end

  def show
    @post = Post.find(params[:id]) # TODO FINISH PARAMS
  end

  def new
    @post = Post.new
  end

  def create
    @post = Post.new(post_params)
  end

  def update

  end

  def destroy

  end

  private

  def post_params
    params.require(:post).permit() # TODO FINISH PARAMS
  end
end