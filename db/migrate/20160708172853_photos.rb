class Photos < ActiveRecord::Migration
  def change
    create_table "photos", force: :cascade do |t|
      t.string :url, null:false
      t.integer :user_id, null:false, index: true
      t.timestamps null: false
    end
  end
end
