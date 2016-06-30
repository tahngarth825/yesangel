# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create!({
  username: "Guest",
  password: "YesAngel",
  age: 27,
  location: "San Francisco",
  gender: "M",
  lf_gender: "F",
  lf_min_age: 23,
  lf_max_age: 31
})
