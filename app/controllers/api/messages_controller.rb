class Api::MessagesController < ApplicationController
  def create
    @message = create_message

    if @message.save
      render "api/messages/show"
    else
      raise "Message unsuccessfully created"
    end
  end

  def edit
    @message = Message.find(params[:id])

    @message = @message.append_message(message_params[:user1_id],
      message_params[:content])

    if (@message.save)
      render "api/messages/show"
    else
      raise "Message unsuccessfully edited"
    end
  end

  def show
    @message = Message.find(params[:id])

    if (@message)
      render "api/messages/show"
    else
      raise "Message not found"
    end
  end

  def index
    @messages = Message.order(last_update: :desc).where("user1_id = ? OR user2_id = ?",
      message_params[:user1_id], message_params[:user1_id])

    render "api/messages/index"
  end

  private
  def message_params
    #Initial sender is always user1_id
    params.require(:message).permit(:content, :user1_id, :user2_id)
  end

  def create_message
    new_params = {}
    new_params[:user1_id] = message_params[:user1_id]
    new_params[:user2_id] = message_params[:user2_id]

    new_message = Message.new(new_params)

    new_message = new_message.create_message(new_params[:user1_id],
      message_params[:content])

    return new_message
  end
end
