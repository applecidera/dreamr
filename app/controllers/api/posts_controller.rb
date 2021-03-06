class Api::PostsController < ApplicationController

  def index
    @posts = Post.order(id: :DESC).includes(:user)
    # @posts = Posts.all.includes(:likes, :replies)
    # TODO includes to prefetch data reduce n+1
    
  end

  def show
    @post = Post.find(params[:id]) 
  end

  def new
    @post = Post.new
  end

  def create
    @post = Post.new(post_params)
    @post.user_id = current_user.id
    if @post.save
      render :show
    else 
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    @post = Post.find(params[:id])
    
    if (@post && @post.update(post_params))
      #@post.images.purge if post_params[:purge_images]
      render :show
    else
      render :show
    end
  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy
    render :show
  end

  def delete_attachment
    @image = ActiveStorage::Blob.find_signed(params[:id])
    @image.purge_later
    render :show
  end

  private

  def post_params
    params.require(:post).permit(:title, :text, :tags, :post_type, images: []) 
  end

end