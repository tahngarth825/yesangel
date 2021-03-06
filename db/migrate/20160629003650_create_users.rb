class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.integer :age, null:false
      t.string :location, null: false
      t.string :gender, null:false
      t.string :pic_url
      t.string :lf_gender, null:false, array: true
      t.integer :lf_min_age, null: false
      t.integer :lf_max_age, null: false
      t.text :summary
      t.text :favs
      t.text :hobbies
      t.string :ethnicity
      t.integer :height

      t.timestamps null: false
    end
  end
end
