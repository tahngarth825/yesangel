# Schema Information

## users
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
username    | string    | not null
password_digest | string    | not null
session_token|  string  |
age         | integer   | not null
location    | string    | not null
gender      | string    | not null
pic_url     | string    |
lf_gender   | string    | not null
lf_age      | integer   | not null
lf_location | string    | not null
summary     | text      |
favs        | text      |
hobbies     | text      |
orientation | string    |
ethnicity   | string    |
height      | integer   |
body_type   | string    |

## questions
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
content     | string    | not null

## responses
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key to users, indexed
question_id | integer   | not null, foreign key to questions, indexed
content     | string    |  

## photos
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key to users, indexed
url         | string    | not null

## messages
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user1_id    | integer   | not null, foreign key to users, indexed
user2_id    | integer   | not null, foreign key to users, indexed
content     | text      | not null
