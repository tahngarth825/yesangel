# == Schema Information
#
# Table name: questions
#
#  id         :integer          not null, primary key
#  content    :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Question < ActiveRecord::Base
  validates :content, presence: true, uniqueness:true
end
