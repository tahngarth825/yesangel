# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  age             :integer          not null
#  location        :string           not null
#  gender          :string           not null
#  pic_url         :string
#  lf_gender       :string           not null, is an Array
#  lf_min_age      :integer          not null
#  lf_max_age      :integer          not null
#  summary         :text
#  favs            :text
#  hobbies         :text
#  ethnicity       :string
#  height          :integer
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
