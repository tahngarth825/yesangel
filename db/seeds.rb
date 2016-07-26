# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

#Seeds Photos
Photo.create!({
  user_id: 1,
  url: "http://res.cloudinary.com/tahngarth825/image/upload/v1468221956/bradpitt2_pxivac.jpg"
})

#Seeds questions
Question.create!({
  content: "Your ideal partner is independent and gives you the space you need."
})
Question.create!({
  content: "Physical intimacy is an important part of relationships."
})
Question.create!({
  content: "Money is important for a healthy relationship."
})
Question.create!({
  content: "Material gifts are important to me."
})
Question.create!({
  content: "My ideal partner has wanderlust and wants to explore the world with me."
})
Question.create!({
  content: "Everything happens for a reason."
})
Question.create!({
  content: "My ideal partner strongly aligns with my religion."
})
Question.create!({
  content: "My ideal partner should be willing to do anything for me."
})
Question.create!({
  content: "Jealousy is healthy in relationships."
})
Question.create!({
  content: "It's better to lie if it will benefit me or someone I love."
})

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
  height: 72
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
  height: 67
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
  hobbies: "I enjoy hunting.",
  favs: "I like beer and classic karaoke songs.",
  pic_url: "https://res.cloudinary.com/tahngarth825/image/upload/v1467858492/50mayim_b_vs7dse.jpg",
  orientation: "Bisexual",
  ethnicity: "Asian",
  height: 51
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
  summary: "I'm rich :)",
  hobbies: "Working out and sharp-shooting",
  favs: "My favorite means of travel is by air.",
  pic_url: "https://res.cloudinary.com/tahngarth825/image/upload/v1467858099/1robert_downey_lpmbfb.jpg",
  orientation: "Straight",
  ethnicity: "Caucasian",
  height: 65
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
  summary: "I like going to the gym every day and pushing myself to the limits.",
  hobbies: "Working out and traveling",
  favs: "My favorite cake is Angel food cake",
  pic_url: "https://res.cloudinary.com/tahngarth825/image/upload/v1467858099/2chris_hemsworth_lw6sfb.jpg",
  orientation: "Other",
  ethnicity: "Caucasian",
  height: 70
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
  summary: "I'm just looking for a connection.",
  hobbies: "Skateboarding and tennis",
  favs: "I love the color green",
  pic_url: "https://res.cloudinary.com/tahngarth825/image/upload/v1467858099/3mark_ruffalo_vatvq8.jpg",
  orientation: "Gay/Lesbian",
  ethnicity: "Mixed",
  height: 72
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
  hobbies: "Traveling the world",
  favs: "My favorite food is pizza and my favorite vacation destination is Machu Pichu.",
  pic_url: "https://res.cloudinary.com/tahngarth825/image/upload/v1467858099/4chris_evans_ktzz2b.jpg",
  orientation: "Straight",
  ethnicity: "Caucasian",
  height: 80
})


User.create!({
  username: "BugLover",
  password: "YesAngel",
  age: 40,
  location: "San Francisco",
  gender: "Male-to-female transgender",
  lf_gender: ["Female-to-male transgender", "Male", "Non-conforming/other"],
  lf_min_age: 18,
  lf_max_age: 30,
  summary: "I'm looking to enjoy the company of a younger guy",
  hobbies: "Hiking, surfing, shopping",
  favs: "I love thriller movies and bugs. There is no correlation between those. I think.",
  pic_url: "https://res.cloudinary.com/tahngarth825/image/upload/v1467858099/5scarlett_johansson_y5lhsp.jpg",
  orientation: "Straight",
  ethnicity: "Caucasian",
  height: 54
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
  height: 67
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
  summary: "I'm looking for someone to spoil.",
  hobbies: "Spending money",
  favs: "My favorite property is probably my yacht.",
  pic_url: "https://res.cloudinary.com/tahngarth825/image/upload/v1467858099/7james_spader_ldsbvu.jpg",
  orientation: "Straight",
  ethnicity: "Caucasian",
  height: 65
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
  summary: "My friends convinced me to try this \"online dating\". ",
  hobbies: "Playing video games",
  favs: "My favorite video game is Crash Bandicoot.",
  pic_url: "https://res.cloudinary.com/tahngarth825/image/upload/v1467858100/8sam_jackson_dk1ini.jpg",
  orientation: "Other",
  ethnicity: "African American",
  height: 68
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
  favs: "My favorite game is Pokemon Go!",
  pic_url: "https://res.cloudinary.com/tahngarth825/image/upload/v1467858100/9don_cheadle_hdfvva.jpg",
  orientation: "Other",
  ethnicity: "African American",
  height: 74
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
  height: 65
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
  summary: "I'm an ambitious gal that's looking for someone who can keep up!",
  hobbies: "Shopping",
  favs: "My favorite brand is Couture.",
  pic_url: "https://res.cloudinary.com/tahngarth825/image/upload/v1467858100/11liz_olsen_ymnzrq.jpg",
  orientation: "Straight",
  ethnicity: "White",
  height: 55
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
  height: 72
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
  height: 62
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
  height: 69
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
  height: 52
})


User.create!({
  username: "BabyBoy",
  password: "YesAngel",
  age: 34,
  location: "Los Angeles",
  gender: "Male",
  lf_gender: ["Female"],
  lf_min_age: 35,
  lf_max_age: 50,
  summary: "I'm looking for a woman with an attitude",
  hobbies: "Snowboarding and skiing",
  favs: "My favorite language is sarcasm.",
  pic_url: "https://res.cloudinary.com/tahngarth825/image/upload/v1467858100/16josh_radnor_glq9zf.jpg",
  orientation: "Straight",
  ethnicity: "Mixed",
  height: 68
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
  height: 72
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
  height: 66
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
  height: 52
})

User.create!({
  username: "CadenceUnrising",
  password: "YesAngel",
  age: 18,
  location: "San Francisco",
  gender: "Female",
  lf_gender: ["Male"],
  lf_min_age: 22,
  lf_max_age: 40,
  summary: "Hi, I'm Sunny! I'm a cheerful, fun-loving gal!",
  hobbies: "Clubbing and shopping",
  favs: "My favorite movie is Moulin Rouge",
  pic_url: "https://res.cloudinary.com/tahngarth825/image/upload/v1467858101/20lyndsy_fonseca_fwkpfv.jpg",
  orientation: "Bisexual",
  ethnicity: "Mixed",
  height: 65
})

User.create!({
  username: "NinersFan",
  password: "YesAngel",
  age: 36,
  location: "San Francisco",
  gender: "Female",
  lf_gender: ["Male", "Female"],
  lf_min_age: 30,
  lf_max_age: 55,
  summary: "I'm a single mom with two kids, hoping to find another 49ers fan out there to watch games",
  hobbies: "Watching football, taking my kids to football practice",
  favs: "I like watching football games, live or at bars. Go Niners!",
  pic_url: "https://randomuser.me/api/portraits/women/53.jpg",
  orientation: "Straight",
  ethnicity: "Mixed",
  height: 70
})

User.create!({
  username: "cammylee",
  password: "password",
  age: 29,
  location: "Oakland",
  gender: "Female",
  lf_gender: ["Male"],
  lf_min_age: 26,
  lf_max_age: 45,
  summary: "I'm looking for that special someone out there to share my life with. ",
  hobbies: "Photography, Muay Thai",
  favs: "I like going on long walks and photography",
  pic_url: "https://randomuser.me/api/portraits/women/44.jpg",
  orientation: "Straight",
  ethnicity: "Chinese",
  height: 68
})

User.create!({
  username: "artCreator",
  password: "YesAngel",
  age: 25,
  location: "Berkeley",
  gender: ["Male"],
  lf_gender: ["Female-to-male transgender", "Male", "Female",
    "Male-to-female transgender", "Non-conforming/other"],
  lf_min_age: 18,
  lf_max_age: 45,
  summary: "I've recently moved to the bay area to pursue a Master's in gender studies. I'm looking for new people to share life with",
  hobbies: "Reading, Painting, Performing arts",
  favs: "I'd go to the MOMA every day if I could",
  pic_url: "https://randomuser.me/api/portraits/men/46.jpg",
  orientation: "Bisexual",
  ethnicity: "Mixed",
  height: 76
})

User.create!({
  username: "https://randomuser.me/api/portraits/men/61.jpg",
  password: "YesAngel",
  age: 30,
  location: "San Francisco",
  gender: "Male",
  lf_gender: ["Female-to-male transgender",  "Female"],
  lf_min_age: 18,
  lf_max_age: 39,
  summary: "I like the outdoors, you can regularly find me along the PCT. Looking for someone who's interested in joining me on my adventures",
  hobbies: "Backpacking, camping, outdoor bouldering",
  favs: "Sleeping outdoors under a starry night sky",
  pic_url: "https://res.cloudinary.com/tahngarth825/image/upload/c_scale,h_600,w_600/v1467850837/bradpitt_dqqcrg.jpg",
  orientation: "Straight",
  ethnicity: "Caucasian",
  height: 72
})

User.create!({
  username: "twilliams",
  password: "password123",
  age: 36,
  location: "Union City",
  gender: "Female",
  lf_gender: ["Male"],
  lf_min_age: 27,
  lf_max_age: 45,
  summary: "I would like to meet someone who is interested in helping the community",
  hobbies: "Volunteering, Habitat for humanity, reading, playing in the local orchestra",
  favs: "I like organizing community events",
  pic_url: "https://randomuser.me/api/portraits/women/7.jpg",
  orientation: "Straight",
  ethnicity: "Caucasian",
  height: 62
})

Message.create!({
  user1_id: 1,
  user2_id: 2,
  content: ["Guest: Hi, nice to meet you.",
    "Rich: Hey! What are you up to?",
    "Guest: Developing a website. How about you?",
    "Rich: Just playing Monster Hunter."],
  last_update: DateTime.now
})

Message.create!({
  user1_id: 1,
  user2_id: 3,
  content: ["Guest: Hi, how are you?",
    "Emily: Not too bad. How about you?",
    "Guest: Not bad myself. Would you like to get some boba this afternoon?",
    "Emily: Uh, I get off work at 6pm. We can meet at like 6:30pm?",
    "Guest: Sure, message me when you're off work :)"],
  last_update: DateTime.now
})

#Seeds responses
choices = ["Agree", "Disagree"]
28.times do |i|
  response = []
  10.times {response.push(choices.sample)}
  Response.create({response: response, user_id: (i+1)})

  Photo.create({url: User.find(i+1)[:pic_url], user_id: (i+1)})
end
