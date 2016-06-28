# Schema Information

## users
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
username    | string    | not null
pass_digest | string    | not null
age         | integer   | not null
location    | string    | not null
gender      | string    | not null
last_online | datetime  | not null
pic_url     | string    |

## profiles
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key to users, indexed
summary     | text      |
life_desc   | text      |
good_at     | text      |
favs        | text      |
hobbies     | text      |
message_if  | text      |

## wants
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
profile_id  | integer   | not null, foreign key to profiles, indexed
gender      | string    | not null
age         | integer   | not null
location    | string    | not null
single      | string    | not null
relation    | string    | not null

## details
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
profile_id  | integer   | not null, foreign key to profiles, indexed
orientation | string    |
ethnicity   | string    |
status      | string    |
relation    | string    |
height      | integer   |
body_type   | string    |
diet        | string    |
smoking     | string    |
drinking    | string    |
drugs       | string    |
religion    | string    |
zodiac      | string    |
education   | string    |
offspring   | string    |
pets        | string    |
speaks      | string    |

## messages
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user1_id    | integer   | not null, foreign key to users, indexed
user2_id    | integer   | not null, foreign key to users, indexed
content     | text      | not null

#TODO

## questions
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key to users, indexed

## photos
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key to users, indexed
