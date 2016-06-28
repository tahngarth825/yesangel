# API Endpoints

## HTML API

### Users

- `GET /users` - #index
- `GET /users/user_id`- #show retrieves detailed info on the user
- `POST /users/new` -#create user

### Session

- `POST /session/new`- #create login
- `DELETE /session` - #delete logout
- `GET /session` - #show used for authentication purposes

## JSON API

### Notes

- `GET /api/users`
  - Users browse page
  - Filters component appends query  
  accepts `tag_name` query param to list notes by tag
  - accepts pagination params (if I get there)
- `POST /api/notes`
- `GET /api/notes/:id`
- `PATCH /api/notes/:id`
- `DELETE /api/notes/:id`

### Notebooks

- `GET /api/notebooks`
- `POST /api/notebooks`
- `GET /api/notebooks/:id`
- `PATCH /api/notebooks/:id`
- `DELETE /api/notebooks/:id`
- `GET /api/notebooks/:id/notes`
  - index of all notes for a notebook
  - accepts pagination params (if I get there)

### Tags

- A note's tags will be included in the note show template
- `GET /api/tags`
  - includes query param for typeahead suggestions
- `POST /api/notes/:note_id/tags`: add tag to note by name
  - if note doesn't already exist, it will be created
- `DELETE /api/notes/:note_id/tags/:tag_name`: remove tag from note by
  name
