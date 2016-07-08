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
  lf_gender: ["Female-to-male transgender", "Male", "Female",
    "Male-to-female transgender", "Non-conforming/other"],
  lf_min_age: 18,
  lf_max_age: 60,
  summary: "I'm new to San Francisco and looking for someone to explore the city!",
  hobbies: "Hiking and exploring",
  favs: "I love action movies",
  pic_url: "https://res.cloudinary.com/tahngarth825/image/upload/c_scale,h_600,w_600/v1467850837/bradpitt_dqqcrg.jpg",
  orientation: "Bisexual",
  ethnicity: "Mixed",
  height: 72,
  body_type: "Average"
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
  pic_url: "https://res.cloudinary.com/tahngarth825/image/upload/v1467494208/Richard_Lau_e7cvij.jpg",
  orientation: "Straight",
  ethnicity: "Asian",
  height: 67,
  body_type: "Skinny"
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
  pic_url: "https://res.cloudinary.com/tahngarth825/image/upload/v1467858492/50mayim_b_vs7dse.jpg",
  orientation: "Bisexual",
  ethnicity: "Asian",
  height: 51,
  body_type: "Chubby"
})

User.create!({
  username: "321ManOfIron123",
  password: "YesAngel",
  age: 44,
  location: "Los Angeles",
  gender: "Male",
  lf_gender: ["Female", "Male-to-female transgender", "Non-conforming/other"],
  lf_min_age: 18,
  lf_max_age: 21,
  summary: "I'm rich and awesome! Who wouldn't want me?",
  hobbies: "Working out and sharp-shooting",
  favs: "I love pretty girls! ;)",
  pic_url: "https://res.cloudinary.com/tahngarth825/image/upload/v1467858099/1robert_downey_lpmbfb.jpg",
  orientation: "Straight",
  ethnicity: "Caucasian",
  height: 65,
  body_type: "Ripped"
})

User.create!({
  username: "Lightning4Wielder",
  password: "YesAngel",
  age: 50,
  location: "San Francisco",
  gender: "Female-to-male transgender",
  lf_gender: ["Female-to-male transgender", "Male", "Female",
    "Male-to-female transgender", "Non-conforming/other"],
  lf_min_age: 18,
  lf_max_age: 60,
  summary: "Check out these guns, baby!",
  hobbies: "Working out and traveling",
  favs: "My favorite cake is Angel food cake",
  pic_url: "https://res.cloudinary.com/tahngarth825/image/upload/v1467858099/2chris_hemsworth_lw6sfb.jpg",
  orientation: "Other",
  ethnicity: "Caucasian",
  height: 70,
  body_type: "Athletic"
})

User.create!({
  username: "LoveIsBeautiful",
  password: "YesAngel",
  age: 52,
  location: "San Francisco",
  gender: "Non-conforming/other",
  lf_gender: ["Female-to-male transgender", "Male", "Female",
    "Male-to-female transgender", "Non-conforming/other"],
  lf_min_age: 40,
  lf_max_age: 55,
  summary: "I have to admit, I have a pretty bad temper :/ But I'm a very loving person, otherwise!",
  hobbies: "Skateboarding and tennis",
  favs: "I love the color green",
  pic_url: "https://res.cloudinary.com/tahngarth825/image/upload/v1467858099/3mark_ruffalo_vatvq8.jpg",
  orientation: "Gay/Lesbian",
  ethnicity: "Mixed",
  height: 72,
  body_type: "Average"
})

User.create!({
  username: "RighteousGuy",
  password: "YesAngel",
  age: 35,
  location: "Los Angeles",
  gender: "Male",
  lf_gender: ["Female"],
  lf_min_age: 18,
  lf_max_age: 33,
  summary: "I'm a pretty chill guy just looking for someone to have fun with!",
  hobbies: "Traveling the world and lookin' good ;)",
  favs: "My favorite food is pizza and my favorite vacation destination is Machu Pichu.",
  pic_url: "https://res.cloudinary.com/tahngarth825/image/upload/v1467858099/4chris_evans_ktzz2b.jpg",
  orientation: "Straight",
  ethnicity: "Caucasian",
  height: 80,
  body_type: "Muscular"
})

User.create!({
  username: "PrayingMantis<3",
  password: "YesAngel",
  age: 40,
  location: "San Francisco",
  gender: "Male-to-female transgender",
  lf_gender: ["Female-to-male transgender", "Male", "Non-conforming/other"],
  lf_min_age: 18,
  lf_max_age: 30,
  summary: "I'm looking to enjoy the company of a younger guy",
  hobbies: "Hiking, surfing, back-stabbing people, shopping",
  favs: "I love thriller movies",
  pic_url: "https://res.cloudinary.com/tahngarth825/image/upload/v1467858099/5scarlett_johansson_y5lhsp.jpg",
  orientation: "Straight",
  ethnicity: "Caucasian",
  height: 54,
  body_type: "Slim"
})

User.create!({
  username: "CupidsArrow",
  password: "YesAngel",
  age: 30,
  location: "Los Angeles",
  gender: "Male",
  lf_gender: ["Female-to-male transgender", "Male", "Female",
    "Male-to-female transgender", "Non-conforming/other"],
  lf_min_age: 22,
  lf_max_age: 32,
  summary: "I'm tired of wandering the streets of LA alone; will you join me?",
  hobbies: "Traveling and exploring",
  favs: "My favorite thing to eat is steak and eggs for breakfast :)",
  pic_url: "https://res.cloudinary.com/tahngarth825/image/upload/v1467858099/6jeremy_renner_cr0hxq.jpg",
  orientation: "Other",
  ethnicity: "Caucasian",
  height: 67,
  body_type: "Thin"
})

User.create!({
  username: "BillionaireFTW",
  password: "YesAngel",
  age: 60,
  location: "San Francisco",
  gender: "Male",
  lf_gender: ["Female"],
  lf_min_age: 18,
  lf_max_age: 22,
  summary: "I'm a billionaire looking for a hot-young-thang to share my money with ;)",
  hobbies: "Spending money",
  favs: "My favorite day of the year is every day because every day is wonderful when you've got money!",
  pic_url: "https://res.cloudinary.com/tahngarth825/image/upload/v1467858099/7james_spader_ldsbvu.jpg",
  orientation: "Straight",
  ethnicity: "Caucasian",
  height: 65,
  body_type: "Fit"
})

User.create!({
  username: "IndianaJones",
  password: "YesAngel",
  age: 45,
  location: "Los Angeles",
  gender: "Female-to-male transgender",
  lf_gender: ["Female-to-male transgender", "Male", "Female",
    "Male-to-female transgender", "Non-conforming/other"],
  lf_min_age: 18,
  lf_max_age: 60,
  summary: "My friends forced me to try this \"online dating\" crap.",
  hobbies: "Sulking and moping",
  favs: "I hate everything.",
  pic_url: "https://res.cloudinary.com/tahngarth825/image/upload/v1467858100/8sam_jackson_dk1ini.jpg",
  orientation: "Other",
  ethnicity: "African American",
  height: 68,
  body_type: "Athletic"
})

User.create!({
  username: "PokemonMaster",
  password: "YesAngel",
  age: 30,
  location: "San Francisco",
  gender: "Male",
  lf_gender: ["Female-to-male transgender", "Male", "Female",
    "Male-to-female transgender", "Non-conforming/other"],
  lf_min_age: 18,
  lf_max_age: 60,
  summary: "I'm a huge Pokemon fan and I'm looking for someone to trade and battle with.",
  hobbies: "Gaming",
  favs: "My favorite game is Pokemon (any version).",
  pic_url: "https://res.cloudinary.com/tahngarth825/image/upload/v1467858100/9don_cheadle_hdfvva.jpg",
  orientation: "Other",
  ethnicity: "African American",
  height: 74,
  body_type: "Slim"
})

User.create!({
  username: "SwimTheWorld",
  password: "YesAngel",
  age: 26,
  location: "San Francisco",
  gender: "Female-to-male transgender",
  lf_gender: ["Female", "Male-to-female transgender", "Non-conforming/other"],
  lf_min_age: 18,
  lf_max_age: 30,
  summary: "I'm looking for someone to love and be loved.",
  hobbies: "I love swimming",
  favs: "This might sound funny, but my favorite pizza place is Domino's pizza...",
  pic_url: "https://res.cloudinary.com/tahngarth825/image/upload/v1467858100/10aaron_johnson_fseopd.jpg",
  orientation: "Straight",
  ethnicity: "Mixed",
  height: 65,
  body_type: "Average"
})

User.create!({
  username: "BarbieGirl",
  password: "YesAngel",
  age: 18,
  location: "Los Angeles",
  gender: "Female",
  lf_gender: ["Female-to-male transgender", "Male", "Non-conforming/other"],
  lf_min_age: 22,
  lf_max_age: 35,
  summary: "\"I'm a Barbie girl, in a Barbie world. Life in plastic, it's fantastic!\"",
  hobbies: "Shopping",
  favs: "I love Couture!",
  pic_url: "https://res.cloudinary.com/tahngarth825/image/upload/v1467858100/11liz_olsen_ymnzrq.jpg",
  orientation: "Straight",
  ethnicity: "White",
  height: 55,
  body_type: "Skinny"
})

User.create!({
  username: "LonelySoul",
  password: "YesAngel",
  age: 45,
  location: "Los Angeles",
  gender: "Female-to-male transgender",
  lf_gender: ["Male"],
  lf_min_age: 40,
  lf_max_age: 60,
  summary: "I'm a sensitive person, and I'm looking for someone to take care of me.",
  hobbies: "Learning magic tricks",
  favs: "Disneyland is my favorite theme park!",
  pic_url: "https://res.cloudinary.com/tahngarth825/image/upload/v1467858100/12paul_bettany_tvs15v.jpg",
  orientation: "Gay/Lesbian",
  ethnicity: "Caucasian",
  height: 72,
  body_type: "Average"
})

User.create!({
  username: "ShyBel",
  password: "YesAngel",
  age: 30,
  location: "San Francisco",
  gender: "Female",
  lf_gender: ["Male"],
  lf_min_age: 28,
  lf_max_age: 35,
  summary: "I don't have time to meet anyone at work, so I'm trying online dating...",
  hobbies: "Walking, traveling, and shopping",
  favs: "My favorite place to travel is Australia!",
  pic_url: "https://res.cloudinary.com/tahngarth825/image/upload/v1467858100/13colby_smulders_y27cno.jpg",
  orientation: "Straight",
  ethnicity: "Caucasian",
  height: 62,
  body_type: "Slim"
})

User.create!({
  username: "TheWindRunner",
  password: "YesAngel",
  age: 32,
  location: "San Francisco",
  gender: "Male",
  lf_gender: ["Female"],
  lf_min_age: 18,
  lf_max_age: 27,
  summary: "I'm pretty \"fly\" ;P",
  hobbies: "Flying kites, training falcons, and aerial sports such as skydiving",
  favs: "My favorite bird is the falcon",
  pic_url: "https://res.cloudinary.com/tahngarth825/image/upload/v1467858100/14anthony_mackie_xscwzm.jpg",
  orientation: "Straight",
  ethnicity: "African American",
  height: 69,
  body_type: "Athletic"
})

User.create!({
  username: "BeautyOfTheWild",
  password: "YesAngel",
  age: 32,
  location: "San Francisco",
  gender: "Female",
  lf_gender: ["Female"],
  lf_min_age: 26,
  lf_max_age: 36,
  summary: "I'm looking for someone fun and exciting! I'd love to meet someone who challenges me and pushes me to be a better person!",
  hobbies: "Walking along the beach and sitting by bonfires",
  favs: "I love romance movies. One of my favorite feelings is generated when it has just finished raining outside, and it's starting to clear up.",
  pic_url: "https://res.cloudinary.com/tahngarth825/image/upload/v1467858100/15hayley_atwell_fugcqh.jpg",
  orientation: "Straight",
  ethnicity: "Caucasian",
  height: 52,
  body_type: "Skinny"
})

User.create!({
  username: "MotherHunter",
  password: "YesAngel",
  age: 34,
  location: "Los Angeles",
  gender: "Male",
  lf_gender: ["Female"],
  lf_min_age: 35,
  lf_max_age: 50,
  summary: "I love older women ;)",
  hobbies: "Snowboarding and skiing",
  favs: "Older women are my favorite ;)",
  pic_url: "https://res.cloudinary.com/tahngarth825/image/upload/v1467858100/16josh_radnor_glq9zf.jpg",
  orientation: "Straight",
  ethnicity: "Mixed",
  height: 68,
  body_type: "Athletic"
})

User.create!({
  username: "TheLaw",
  password: "YesAngel",
  age: 42,
  location: "San Francisco",
  gender: "Male",
  lf_gender: ["Female"],
  lf_min_age: 34,
  lf_max_age: 46,
  summary: "I'm a lawyer establishing his career.",
  hobbies: "Hiking and working out at the gym",
  favs: "I like romance comedies and sappy love songs",
  pic_url: "https://res.cloudinary.com/tahngarth825/image/upload/v1467858100/17jason_segel_du5bri.jpg",
  orientation: "Straight",
  ethnicity: "Caucasian",
  height: 72,
  body_type: "Athletic"
})

User.create!({
  username: "ZedMaster",
  password: "YesAngel",
  age: 35,
  location: "San Francisco",
  gender: "Male",
  lf_gender: ["Female"],
  lf_min_age: 28,
  lf_max_age: 36,
  summary: "I play League of Legends; in particular, I'm really good with Zed.",
  hobbies: "Video games and board games",
  favs: "My favorite League of Legends character is Zed.",
  pic_url: "https://res.cloudinary.com/tahngarth825/image/upload/v1467858100/18neil_harris_dpxvaf.jpg",
  orientation: "Straight",
  ethnicity: "Caucasian",
  height: 66,
  body_type: "Average"
})

User.create!({
  username: "YourAngel",
  password: "YesAngel",
  age: 22,
  location: "Los Angeles",
  gender: "Male-to-female transgender",
  lf_gender: ["Female-to-male transgender", "Male", "Female",
    "Male-to-female transgender", "Non-conforming/other"],
  lf_min_age: 18,
  lf_max_age: 30,
  summary: "I am a very happy person :) I'm enjoying what life has to offer!",
  hobbies: "Exploring the outdoors!",
  favs: "My favorite movie is \"Up\" by Pixar!",
  pic_url: "https://res.cloudinary.com/tahngarth825/image/upload/v1467858101/19aly_hannigan_oop9yb.jpg",
  orientation: "Bisexual",
  ethnicity: "Mixed",
  height: 52,
  body_type: "Chubby"
})

User.create!({
  username: "Hottie4ever",
  password: "YesAngel",
  age: 18,
  location: "San Francisco",
  gender: "Female",
  lf_gender: ["Male"],
  lf_min_age: 22,
  lf_max_age: 40,
  summary: "Hi, I'm Sunny! I'm a cheerful, fun-loving gal ;) Sorry, but I'm only into older white guys!",
  hobbies: "Clubbing and shopping",
  favs: "High heels are my fav! They shape my legs so well ;)",
  pic_url: "https://res.cloudinary.com/tahngarth825/image/upload/v1467858101/20lyndsy_fonseca_fwkpfv.jpg",
  orientation: "Bisexual",
  ethnicity: "Mixed",
  height: 65,
  body_type: "Thin"
})
#
# User.create!({
#   username: "Guest",
#   password: "YesAngel",
#   age: 24,
#   location: "San Francisco",
#   gender: "Male-to-female transgender",
#   lf_gender: ["Female-to-male transgender", "Male", "Female",
#     "Male-to-female transgender", "Non-conforming/other"],
#   lf_min_age: 18,
#   lf_max_age: 60,
#   summary: "I'm new to San Francisco and looking for someone to explore the city!",
#   hobbies: "Hiking and exploring",
#   favs: "I love action movies",
#   pic_url: "https://res.cloudinary.com/tahngarth825/image/upload/c_scale,h_600,w_600/v1467850837/bradpitt_dqqcrg.jpg",
#   orientation: "Bisexual",
#   ethnicity: "Mixed",
#   height: 72,
#   body_type: "Average"
# })
#
# User.create!({
#   username: "Guest",
#   password: "YesAngel",
#   age: 24,
#   location: "San Francisco",
#   gender: "Male-to-female transgender",
#   lf_gender: ["Female-to-male transgender", "Male", "Female",
#     "Male-to-female transgender", "Non-conforming/other"],
#   lf_min_age: 18,
#   lf_max_age: 60,
#   summary: "I'm new to San Francisco and looking for someone to explore the city!",
#   hobbies: "Hiking and exploring",
#   favs: "I love action movies",
#   pic_url: "https://res.cloudinary.com/tahngarth825/image/upload/c_scale,h_600,w_600/v1467850837/bradpitt_dqqcrg.jpg",
#   orientation: "Bisexual",
#   ethnicity: "Mixed",
#   height: 72,
#   body_type: "Average"
# })
#
# User.create!({
#   username: "Guest",
#   password: "YesAngel",
#   age: 24,
#   location: "San Francisco",
#   gender: "Male-to-female transgender",
#   lf_gender: ["Female-to-male transgender", "Male", "Female",
#     "Male-to-female transgender", "Non-conforming/other"],
#   lf_min_age: 18,
#   lf_max_age: 60,
#   summary: "I'm new to San Francisco and looking for someone to explore the city!",
#   hobbies: "Hiking and exploring",
#   favs: "I love action movies",
#   pic_url: "https://res.cloudinary.com/tahngarth825/image/upload/c_scale,h_600,w_600/v1467850837/bradpitt_dqqcrg.jpg",
#   orientation: "Bisexual",
#   ethnicity: "Mixed",
#   height: 72,
#   body_type: "Average"
# })

# User.create!({
#   username: "Guest",
#   password: "YesAngel",
#   age: 24,
#   location: "San Francisco",
#   gender: "Male-to-female transgender",
#   lf_gender: ["Female-to-male transgender", "Male", "Female",
#     "Male-to-female transgender", "Non-conforming/other"],
#   lf_min_age: 18,
#   lf_max_age: 60,
#   summary: "I'm new to San Francisco and looking for someone to explore the city!",
#   hobbies: "Hiking and exploring",
#   favs: "I love action movies",
#   pic_url: "https://res.cloudinary.com/tahngarth825/image/upload/c_scale,h_600,w_600/v1467850837/bradpitt_dqqcrg.jpg",
#   orientation: "Bisexual",
#   ethnicity: "Mixed",
#   height: 72,
#   body_type: "Average"
# })
#
# User.create!({
#   username: "Guest",
#   password: "YesAngel",
#   age: 24,
#   location: "San Francisco",
#   gender: "Male-to-female transgender",
#   lf_gender: ["Female-to-male transgender", "Male", "Female",
#     "Male-to-female transgender", "Non-conforming/other"],
#   lf_min_age: 18,
#   lf_max_age: 60,
#   summary: "I'm new to San Francisco and looking for someone to explore the city!",
#   hobbies: "Hiking and exploring",
#   favs: "I love action movies",
#   pic_url: "https://res.cloudinary.com/tahngarth825/image/upload/c_scale,h_600,w_600/v1467850837/bradpitt_dqqcrg.jpg",
#   orientation: "Bisexual",
#   ethnicity: "Mixed",
#   height: 72,
#   body_type: "Average"
# })
#
# User.create!({
#   username: "Guest",
#   password: "YesAngel",
#   age: 24,
#   location: "San Francisco",
#   gender: "Male-to-female transgender",
#   lf_gender: ["Female-to-male transgender", "Male", "Female",
#     "Male-to-female transgender", "Non-conforming/other"],
#   lf_min_age: 18,
#   lf_max_age: 60,
#   summary: "I'm new to San Francisco and looking for someone to explore the city!",
#   hobbies: "Hiking and exploring",
#   favs: "I love action movies",
#   pic_url: "https://res.cloudinary.com/tahngarth825/image/upload/c_scale,h_600,w_600/v1467850837/bradpitt_dqqcrg.jpg",
#   orientation: "Bisexual",
#   ethnicity: "Mixed",
#   height: 72,
#   body_type: "Average"
# })
#
# User.create!({
#   username: "Guest",
#   password: "YesAngel",
#   age: 24,
#   location: "San Francisco",
#   gender: "Male-to-female transgender",
#   lf_gender: ["Female-to-male transgender", "Male", "Female",
#     "Male-to-female transgender", "Non-conforming/other"],
#   lf_min_age: 18,
#   lf_max_age: 60,
#   summary: "I'm new to San Francisco and looking for someone to explore the city!",
#   hobbies: "Hiking and exploring",
#   favs: "I love action movies",
#   pic_url: "https://res.cloudinary.com/tahngarth825/image/upload/c_scale,h_600,w_600/v1467850837/bradpitt_dqqcrg.jpg",
#   orientation: "Bisexual",
#   ethnicity: "Mixed",
#   height: 72,
#   body_type: "Average"
# })
#
# User.create!({
#   username: "Guest",
#   password: "YesAngel",
#   age: 24,
#   location: "San Francisco",
#   gender: "Male-to-female transgender",
#   lf_gender: ["Female-to-male transgender", "Male", "Female",
#     "Male-to-female transgender", "Non-conforming/other"],
#   lf_min_age: 18,
#   lf_max_age: 60,
#   summary: "I'm new to San Francisco and looking for someone to explore the city!",
#   hobbies: "Hiking and exploring",
#   favs: "I love action movies",
#   pic_url: "https://res.cloudinary.com/tahngarth825/image/upload/c_scale,h_600,w_600/v1467850837/bradpitt_dqqcrg.jpg",
#   orientation: "Bisexual",
#   ethnicity: "Mixed",
#   height: 72,
#   body_type: "Average"
# })
#
# User.create!({
#   username: "Guest",
#   password: "YesAngel",
#   age: 24,
#   location: "San Francisco",
#   gender: "Male-to-female transgender",
#   lf_gender: ["Female-to-male transgender", "Male", "Female",
#     "Male-to-female transgender", "Non-conforming/other"],
#   lf_min_age: 18,
#   lf_max_age: 60,
#   summary: "I'm new to San Francisco and looking for someone to explore the city!",
#   hobbies: "Hiking and exploring",
#   favs: "I love action movies",
#   pic_url: "https://res.cloudinary.com/tahngarth825/image/upload/c_scale,h_600,w_600/v1467850837/bradpitt_dqqcrg.jpg",
#   orientation: "Bisexual",
#   ethnicity: "Mixed",
#   height: 72,
#   body_type: "Average"
# })
#
# User.create!({
#   username: "Guest",
#   password: "YesAngel",
#   age: 24,
#   location: "San Francisco",
#   gender: "Male-to-female transgender",
#   lf_gender: ["Female-to-male transgender", "Male", "Female",
#     "Male-to-female transgender", "Non-conforming/other"],
#   lf_min_age: 18,
#   lf_max_age: 60,
#   summary: "I'm new to San Francisco and looking for someone to explore the city!",
#   hobbies: "Hiking and exploring",
#   favs: "I love action movies",
#   pic_url: "https://res.cloudinary.com/tahngarth825/image/upload/c_scale,h_600,w_600/v1467850837/bradpitt_dqqcrg.jpg",
#   orientation: "Bisexual",
#   ethnicity: "Mixed",
#   height: 72,
#   body_type: "Average"
# })
#
# User.create!({
#   username: "Guest",
#   password: "YesAngel",
#   age: 24,
#   location: "San Francisco",
#   gender: "Male-to-female transgender",
#   lf_gender: ["Female-to-male transgender", "Male", "Female",
#     "Male-to-female transgender", "Non-conforming/other"],
#   lf_min_age: 18,
#   lf_max_age: 60,
#   summary: "I'm new to San Francisco and looking for someone to explore the city!",
#   hobbies: "Hiking and exploring",
#   favs: "I love action movies",
#   pic_url: "https://res.cloudinary.com/tahngarth825/image/upload/c_scale,h_600,w_600/v1467850837/bradpitt_dqqcrg.jpg",
#   orientation: "Bisexual",
#   ethnicity: "Mixed",
#   height: 72,
#   body_type: "Average"
# })
#
# User.create!({
#   username: "Guest",
#   password: "YesAngel",
#   age: 24,
#   location: "San Francisco",
#   gender: "Male-to-female transgender",
#   lf_gender: ["Female-to-male transgender", "Male", "Female",
#     "Male-to-female transgender", "Non-conforming/other"],
#   lf_min_age: 18,
#   lf_max_age: 60,
#   summary: "I'm new to San Francisco and looking for someone to explore the city!",
#   hobbies: "Hiking and exploring",
#   favs: "I love action movies",
#   pic_url: "https://res.cloudinary.com/tahngarth825/image/upload/c_scale,h_600,w_600/v1467850837/bradpitt_dqqcrg.jpg",
#   orientation: "Bisexual",
#   ethnicity: "Mixed",
#   height: 72,
#   body_type: "Average"
# })
#
# User.create!({
#   username: "Guest",
#   password: "YesAngel",
#   age: 24,
#   location: "San Francisco",
#   gender: "Male-to-female transgender",
#   lf_gender: ["Female-to-male transgender", "Male", "Female",
#     "Male-to-female transgender", "Non-conforming/other"],
#   lf_min_age: 18,
#   lf_max_age: 60,
#   summary: "I'm new to San Francisco and looking for someone to explore the city!",
#   hobbies: "Hiking and exploring",
#   favs: "I love action movies",
#   pic_url: "https://res.cloudinary.com/tahngarth825/image/upload/c_scale,h_600,w_600/v1467850837/bradpitt_dqqcrg.jpg",
#   orientation: "Bisexual",
#   ethnicity: "Mixed",
#   height: 72,
#   body_type: "Average"
# })
#
# User.create!({
#   username: "Guest",
#   password: "YesAngel",
#   age: 24,
#   location: "San Francisco",
#   gender: "Male-to-female transgender",
#   lf_gender: ["Female-to-male transgender", "Male", "Female",
#     "Male-to-female transgender", "Non-conforming/other"],
#   lf_min_age: 18,
#   lf_max_age: 60,
#   summary: "I'm new to San Francisco and looking for someone to explore the city!",
#   hobbies: "Hiking and exploring",
#   favs: "I love action movies",
#   pic_url: "https://res.cloudinary.com/tahngarth825/image/upload/c_scale,h_600,w_600/v1467850837/bradpitt_dqqcrg.jpg",
#   orientation: "Bisexual",
#   ethnicity: "Mixed",
#   height: 72,
#   body_type: "Average"
# })
#
# User.create!({
#   username: "Guest",
#   password: "YesAngel",
#   age: 24,
#   location: "San Francisco",
#   gender: "Male-to-female transgender",
#   lf_gender: ["Female-to-male transgender", "Male", "Female",
#     "Male-to-female transgender", "Non-conforming/other"],
#   lf_min_age: 18,
#   lf_max_age: 60,
#   summary: "I'm new to San Francisco and looking for someone to explore the city!",
#   hobbies: "Hiking and exploring",
#   favs: "I love action movies",
#   pic_url: "https://res.cloudinary.com/tahngarth825/image/upload/c_scale,h_600,w_600/v1467850837/bradpitt_dqqcrg.jpg",
#   orientation: "Bisexual",
#   ethnicity: "Mixed",
#   height: 72,
#   body_type: "Average"
# })
#
# User.create!({
#   username: "Guest",
#   password: "YesAngel",
#   age: 24,
#   location: "San Francisco",
#   gender: "Male-to-female transgender",
#   lf_gender: ["Female-to-male transgender", "Male", "Female",
#     "Male-to-female transgender", "Non-conforming/other"],
#   lf_min_age: 18,
#   lf_max_age: 60,
#   summary: "I'm new to San Francisco and looking for someone to explore the city!",
#   hobbies: "Hiking and exploring",
#   favs: "I love action movies",
#   pic_url: "https://res.cloudinary.com/tahngarth825/image/upload/c_scale,h_600,w_600/v1467850837/bradpitt_dqqcrg.jpg",
#   orientation: "Bisexual",
#   ethnicity: "Mixed",
#   height: 72,
#   body_type: "Average"
# })
#
# User.create!({
#   username: "Guest",
#   password: "YesAngel",
#   age: 24,
#   location: "San Francisco",
#   gender: "Male-to-female transgender",
#   lf_gender: ["Female-to-male transgender", "Male", "Female",
#     "Male-to-female transgender", "Non-conforming/other"],
#   lf_min_age: 18,
#   lf_max_age: 60,
#   summary: "I'm new to San Francisco and looking for someone to explore the city!",
#   hobbies: "Hiking and exploring",
#   favs: "I love action movies",
#   pic_url: "https://res.cloudinary.com/tahngarth825/image/upload/c_scale,h_600,w_600/v1467850837/bradpitt_dqqcrg.jpg",
#   orientation: "Bisexual",
#   ethnicity: "Mixed",
#   height: 72,
#   body_type: "Average"
# })
#
# User.create!({
#   username: "Guest",
#   password: "YesAngel",
#   age: 24,
#   location: "San Francisco",
#   gender: "Male-to-female transgender",
#   lf_gender: ["Female-to-male transgender", "Male", "Female",
#     "Male-to-female transgender", "Non-conforming/other"],
#   lf_min_age: 18,
#   lf_max_age: 60,
#   summary: "I'm new to San Francisco and looking for someone to explore the city!",
#   hobbies: "Hiking and exploring",
#   favs: "I love action movies",
#   pic_url: "https://res.cloudinary.com/tahngarth825/image/upload/c_scale,h_600,w_600/v1467850837/bradpitt_dqqcrg.jpg",
#   orientation: "Bisexual",
#   ethnicity: "Mixed",
#   height: 72,
#   body_type: "Average"
# })
#
# User.create!({
#   username: "Guest",
#   password: "YesAngel",
#   age: 24,
#   location: "San Francisco",
#   gender: "Male-to-female transgender",
#   lf_gender: ["Female-to-male transgender", "Male", "Female",
#     "Male-to-female transgender", "Non-conforming/other"],
#   lf_min_age: 18,
#   lf_max_age: 60,
#   summary: "I'm new to San Francisco and looking for someone to explore the city!",
#   hobbies: "Hiking and exploring",
#   favs: "I love action movies",
#   pic_url: "https://res.cloudinary.com/tahngarth825/image/upload/c_scale,h_600,w_600/v1467850837/bradpitt_dqqcrg.jpg",
#   orientation: "Bisexual",
#   ethnicity: "Mixed",
#   height: 72,
#   body_type: "Average"
# })
#
# User.create!({
#   username: "Guest",
#   password: "YesAngel",
#   age: 24,
#   location: "San Francisco",
#   gender: "Male-to-female transgender",
#   lf_gender: ["Female-to-male transgender", "Male", "Female",
#     "Male-to-female transgender", "Non-conforming/other"],
#   lf_min_age: 18,
#   lf_max_age: 60,
#   summary: "I'm new to San Francisco and looking for someone to explore the city!",
#   hobbies: "Hiking and exploring",
#   favs: "I love action movies",
#   pic_url: "https://res.cloudinary.com/tahngarth825/image/upload/c_scale,h_600,w_600/v1467850837/bradpitt_dqqcrg.jpg",
#   orientation: "Bisexual",
#   ethnicity: "Mixed",
#   height: 72,
#   body_type: "Average"
# })
#
# User.create!({
#   username: "Guest",
#   password: "YesAngel",
#   age: 24,
#   location: "San Francisco",
#   gender: "Male-to-female transgender",
#   lf_gender: ["Female-to-male transgender", "Male", "Female",
#     "Male-to-female transgender", "Non-conforming/other"],
#   lf_min_age: 18,
#   lf_max_age: 60,
#   summary: "I'm new to San Francisco and looking for someone to explore the city!",
#   hobbies: "Hiking and exploring",
#   favs: "I love action movies",
#   pic_url: "https://res.cloudinary.com/tahngarth825/image/upload/c_scale,h_600,w_600/v1467850837/bradpitt_dqqcrg.jpg",
#   orientation: "Bisexual",
#   ethnicity: "Mixed",
#   height: 72,
#   body_type: "Average"
# })
#
# User.create!({
#   username: "Guest",
#   password: "YesAngel",
#   age: 24,
#   location: "San Francisco",
#   gender: "Male-to-female transgender",
#   lf_gender: ["Female-to-male transgender", "Male", "Female",
#     "Male-to-female transgender", "Non-conforming/other"],
#   lf_min_age: 18,
#   lf_max_age: 60,
#   summary: "I'm new to San Francisco and looking for someone to explore the city!",
#   hobbies: "Hiking and exploring",
#   favs: "I love action movies",
#   pic_url: "https://res.cloudinary.com/tahngarth825/image/upload/c_scale,h_600,w_600/v1467850837/bradpitt_dqqcrg.jpg",
#   orientation: "Bisexual",
#   ethnicity: "Mixed",
#   height: 72,
#   body_type: "Average"
# })
#
# User.create!({
#   username: "Guest",
#   password: "YesAngel",
#   age: 24,
#   location: "San Francisco",
#   gender: "Male-to-female transgender",
#   lf_gender: ["Female-to-male transgender", "Male", "Female",
#     "Male-to-female transgender", "Non-conforming/other"],
#   lf_min_age: 18,
#   lf_max_age: 60,
#   summary: "I'm new to San Francisco and looking for someone to explore the city!",
#   hobbies: "Hiking and exploring",
#   favs: "I love action movies",
#   pic_url: "https://res.cloudinary.com/tahngarth825/image/upload/c_scale,h_600,w_600/v1467850837/bradpitt_dqqcrg.jpg",
#   orientation: "Bisexual",
#   ethnicity: "Mixed",
#   height: 72,
#   body_type: "Average"
# })
#
# User.create!({
#   username: "Guest",
#   password: "YesAngel",
#   age: 24,
#   location: "San Francisco",
#   gender: "Male-to-female transgender",
#   lf_gender: ["Female-to-male transgender", "Male", "Female",
#     "Male-to-female transgender", "Non-conforming/other"],
#   lf_min_age: 18,
#   lf_max_age: 60,
#   summary: "I'm new to San Francisco and looking for someone to explore the city!",
#   hobbies: "Hiking and exploring",
#   favs: "I love action movies",
#   pic_url: "https://res.cloudinary.com/tahngarth825/image/upload/c_scale,h_600,w_600/v1467850837/bradpitt_dqqcrg.jpg",
#   orientation: "Bisexual",
#   ethnicity: "Mixed",
#   height: 72,
#   body_type: "Average"
# })
#
# User.create!({
#   username: "Guest",
#   password: "YesAngel",
#   age: 24,
#   location: "San Francisco",
#   gender: "Male-to-female transgender",
#   lf_gender: ["Female-to-male transgender", "Male", "Female",
#     "Male-to-female transgender", "Non-conforming/other"],
#   lf_min_age: 18,
#   lf_max_age: 60,
#   summary: "I'm new to San Francisco and looking for someone to explore the city!",
#   hobbies: "Hiking and exploring",
#   favs: "I love action movies",
#   pic_url: "https://res.cloudinary.com/tahngarth825/image/upload/c_scale,h_600,w_600/v1467850837/bradpitt_dqqcrg.jpg",
#   orientation: "Bisexual",
#   ethnicity: "Mixed",
#   height: 72,
#   body_type: "Average"
# })
#
# User.create!({
#   username: "Guest",
#   password: "YesAngel",
#   age: 24,
#   location: "San Francisco",
#   gender: "Male-to-female transgender",
#   lf_gender: ["Female-to-male transgender", "Male", "Female",
#     "Male-to-female transgender", "Non-conforming/other"],
#   lf_min_age: 18,
#   lf_max_age: 60,
#   summary: "I'm new to San Francisco and looking for someone to explore the city!",
#   hobbies: "Hiking and exploring",
#   favs: "I love action movies",
#   pic_url: "https://res.cloudinary.com/tahngarth825/image/upload/c_scale,h_600,w_600/v1467850837/bradpitt_dqqcrg.jpg",
#   orientation: "Bisexual",
#   ethnicity: "Mixed",
#   height: 72,
#   body_type: "Average"
# })
#
# User.create!({
#   username: "Guest",
#   password: "YesAngel",
#   age: 24,
#   location: "San Francisco",
#   gender: "Male-to-female transgender",
#   lf_gender: ["Female-to-male transgender", "Male", "Female",
#     "Male-to-female transgender", "Non-conforming/other"],
#   lf_min_age: 18,
#   lf_max_age: 60,
#   summary: "I'm new to San Francisco and looking for someone to explore the city!",
#   hobbies: "Hiking and exploring",
#   favs: "I love action movies",
#   pic_url: "https://res.cloudinary.com/tahngarth825/image/upload/c_scale,h_600,w_600/v1467850837/bradpitt_dqqcrg.jpg",
#   orientation: "Bisexual",
#   ethnicity: "Mixed",
#   height: 72,
#   body_type: "Average"
# })
#
# User.create!({
#   username: "Guest",
#   password: "YesAngel",
#   age: 24,
#   location: "San Francisco",
#   gender: "Male-to-female transgender",
#   lf_gender: ["Female-to-male transgender", "Male", "Female",
#     "Male-to-female transgender", "Non-conforming/other"],
#   lf_min_age: 18,
#   lf_max_age: 60,
#   summary: "I'm new to San Francisco and looking for someone to explore the city!",
#   hobbies: "Hiking and exploring",
#   favs: "I love action movies",
#   pic_url: "https://res.cloudinary.com/tahngarth825/image/upload/c_scale,h_600,w_600/v1467850837/bradpitt_dqqcrg.jpg",
#   orientation: "Bisexual",
#   ethnicity: "Mixed",
#   height: 72,
#   body_type: "Average"
# })
#
# User.create!({
#   username: "Guest",
#   password: "YesAngel",
#   age: 24,
#   location: "San Francisco",
#   gender: "Male-to-female transgender",
#   lf_gender: ["Female-to-male transgender", "Male", "Female",
#     "Male-to-female transgender", "Non-conforming/other"],
#   lf_min_age: 18,
#   lf_max_age: 60,
#   summary: "I'm new to San Francisco and looking for someone to explore the city!",
#   hobbies: "Hiking and exploring",
#   favs: "I love action movies",
#   pic_url: "https://res.cloudinary.com/tahngarth825/image/upload/c_scale,h_600,w_600/v1467850837/bradpitt_dqqcrg.jpg",
#   orientation: "Bisexual",
#   ethnicity: "Mixed",
#   height: 72,
#   body_type: "Average"
# })

Message.create!({
  user1_id: 1,
  user2_id: 2,
  content: ["Guest: Hey there, how's it going? You interested in me?",
    "Rich: I'm sorry, not interested.",
    "Guest: Why? Because I'm a transgender?",
    "Rich: I'm sorry, I really don't want to cause any trouble. I just am not interested."],
  last_update: DateTime.now
})
