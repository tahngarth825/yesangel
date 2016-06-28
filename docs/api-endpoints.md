# API Endpoints

## HTML API

### Users

- `GET /users` - #index
- `GET /users/:user_id`- #show retrieves detailed info on the user
- `POST /users/new` -#create user

### Session

- `POST /session/new`- #create login
- `DELETE /session` - #delete logout
- `GET /session` - #show used for authentication purposes


## JSON API

### UsersMain

- `GET /api/users`
  - Users browse page
  - Filters component appends query

### UserMain

- `GET /api/users/:userId`
  -Fetches detailed info on the user, including querying: profiles,
    wants, and details

### Profiles


### Messages
