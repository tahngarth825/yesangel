class CreateResponses < ActiveRecord::Migration
  def change
    create_table :responses do |t|
      t.integer :user_id, null:false
      t.string :response, null:false, array:true

      t.timestamps null: false
    end
  end
end
