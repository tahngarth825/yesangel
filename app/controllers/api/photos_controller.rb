class Api::PhotosController < ApplicationController
  def index
    @photos = Photo.where(user_id: photo_params[:user_id]).order(created_at: :desc)
    render :index
  end

  def create
    @photo = Photo.new(photo_params)
    if @photo.save
      render :show
    else
      raise "Photo unsuccessfully created"
    end
  end

  def destroy
    @photo = Photo.find(params[:id])
    if (@photo.delete)
      @photos = Photo.all
      render :index
    else
      raise "Photo could not be deleted"
    end
  end

  private

  def photo_params
    params.require(:photo).permit(:url, :user_id)
  end
end
