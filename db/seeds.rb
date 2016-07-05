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
  age: 24,
  location: "San Francisco",
  gender: "Male-to-female transgender",
  lf_gender: ["Female-to-male transgender", "Male", "Female"],
  lf_min_age: 18,
  lf_max_age: 30,
  summary: "I'm new to San Francisco and looking for someone to explore the city!",
  hobbies: "Hiking and exploring",
  favs: "I love action movies",
  pic_url: "http://res.cloudinary.com/tahngarth825/image/upload/v1467494653/bradpitt_dqqcrg.jpg",
  orientation: "non-conforming",
  ethnicity: "mixed",
  height: 72,
  body_type: "average"
})

User.create!({
  username: "Rich",
  password: "YesAngel",
  age: 27,
  location: "San Francisco",
  gender: "Male",
  lf_gender: ["Female"],
  lf_min_age: 23,
  lf_max_age: 31,
  summary: "I'm an affectionate and sensitive guy looking for his other half.",
  hobbies: "I like to karaoke and play video games.",
  favs: "I like lemon cake. My favorite movie is Ruby Sparks.",
  pic_url: "http://res.cloudinary.com/tahngarth825/image/upload/v1467494208/Richard_Lau_e7cvij.jpg",
  orientation: "straight",
  ethnicity: "Asian",
  height: 67,
  body_type: "skinny"
})

User.create!({
  username: "Emily",
  password: "YesAngel",
  age: 41,
  location: "San Francisco",
  gender: "Female",
  lf_gender: ["Male-to-female transgender", "Male", "Female"],
  lf_min_age: 18,
  lf_max_age: 24,
  summary: "I'm a little bit evil and a lot of fun!",
  hobbies: "I enjoy hunting for prey.",
  favs: "I like beer and classic karaoke songs.",
  pic_url: "http://res.cloudinary.com/tahngarth825/image/upload/v1467494246/Emily_Cheng_r2lw3x.jpg",
  orientation: "bisexual",
  ethnicity: "Asian",
  height: 51,
  body_type: "chubby"
})
