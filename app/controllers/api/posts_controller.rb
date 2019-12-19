class Api::PostsController < ApplicationController

  def index
    @posts = Post.order(id: :DESC).limit(10).includes(:user)
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
    #ActiveStorage::Attachment.find(params[:id])

    @post = Post.find(params[:post][:id])
    # debugger
    # real_images = []
    # post_params[:images].each do |maybe_image|
    #   if maybe_image.class == String 
      
    #   end
      
    # end
    if @post.update(post_params)
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

  private

  def post_params
    params.require(:post).permit(:title, :text, :tags, :user_id, :post_type, images: []) 
  end

end