class CommentsController < ApplicationController
  before_action :set_comment, only: [:show, :update, :destroy]

  # GET /comments
  def index
    @comments = Comment.where(todo_id: params[:todo_id])

    render :index
  end

  # GET /comments/1
  def show
    render :show
  end

  # POST /comments
  def create
    @comment = Comment.new(comment_params)

    if @comment.save
      render :show, status: :created
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /comments/1
  def update
    if @comment.update(comment_params)
      render :show
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  # DELETE /comments/1
  def destroy
    @comment.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_comment
      @comment = Comment.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def comment_params
      params.require(:comment).permit(:body, :todo_id)
    end
end
