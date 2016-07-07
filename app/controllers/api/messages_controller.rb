class Api::MessagesController < ApplicationController
  def create
    @message = Message.new(message_params)

    if @message.save
      render "api/messages/show"
    else
      raise "Message unsuccessfully created"
    end
  end

  def edit
  end

  def show
  end

  def message_params
    params.require(:message).permit(:content, :user1_id, :user2_id)
  end
end
