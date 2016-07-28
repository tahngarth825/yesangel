# == Schema Information
#
# Table name: messages
#
#  id          :integer          not null, primary key
#  user1_id    :integer          not null
#  user2_id    :integer          not null
#  content     :text             not null, is an Array
#  last_update :datetime         not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

require 'test_helper'

class MessageTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
