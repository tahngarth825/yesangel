class CreateMessages < ActiveRecord::Migration
  def change
    create_table :messages do |t|
      t.integer :user1_id, null:false, index: true
      t.integer :user2_id, null:false, index: true
      t.text :content, null:false, array: true
      t.datetime :last_update, null:false

      t.timestamps null: false
    end
  end
end
