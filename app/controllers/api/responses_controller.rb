class Api::ResponsesController < ApplicationController
  def show
    @response = Response.find(params[:id])
    if @response
      render "api/responses/show"
    else
      raise "Response not found"
    end
  end

  def edit
    @response = Response.find(params[:id])
    if @response.update(response_params)
      render "api/responses/show"
    else
      raise "Response could not be edited"
    end
  end

  def create
    @response = Response.new(response_params)
    if @response.save
      render "api/responses/show"
    else
      raise "Response could not be created"
    end
  end

  def response_params
    params.require(:response).permit(:user_id, :response => [])
  end
end
