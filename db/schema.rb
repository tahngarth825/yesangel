# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160711033202) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "messages", force: :cascade do |t|
    t.integer  "user1_id",    null: false
    t.integer  "user2_id",    null: false
    t.text     "content",     null: false, array: true
    t.datetime "last_update", null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "messages", ["user1_id"], name: "index_messages_on_user1_id", using: :btree
  add_index "messages", ["user2_id"], name: "index_messages_on_user2_id", using: :btree

  create_table "photos", force: :cascade do |t|
    t.string   "url",        null: false
    t.integer  "user_id",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "photos", ["user_id"], name: "index_photos_on_user_id", using: :btree

  create_table "questions", force: :cascade do |t|
    t.string   "content",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "responses", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.string   "response",   null: false, array: true
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.integer  "age",             null: false
    t.string   "location",        null: false
    t.string   "gender",          null: false
    t.string   "pic_url"
    t.string   "lf_gender",       null: false, array: true
    t.integer  "lf_min_age",      null: false
    t.integer  "lf_max_age",      null: false
    t.text     "summary"
    t.text     "favs"
    t.text     "hobbies"
    t.string   "ethnicity"
    t.integer  "height"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

end
