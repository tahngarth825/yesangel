# API Endpoints

## HTML API

### Staticpages
- `GET /` - #root

## JSON API

### Session

- `POST /api/session/new`- session#create login
- `DELETE /api/session` - session#delete logout
- `GET /api/session` - session#show for auth purposes

### Users

- `GET /api/users` - users#index
  - Users browse page
  - Filters component appends query
- `POST /api/users` - users#create user
- `GET /api/users/:id/edit` - users#edit
- `GET /api/users/:id` user#show
  - Fetches detailed info on the user

### UserPhotos
- `GET /api/:userId/photos`
  Get all photos
- `POST /api/:userId/photos`
  Create a photo
- `DELETE /api/:userId/photos/:photoId`
  Delete a photo

### UserQuestions
- `GET /api/:userId/questions`
  Get all one's questions (including unanswered)
- `PATCH /api/:userId/questions/:questionId`
  Answer/edit one's question

### MessageMain
- `GET /api/messages`
  Get all one's messages
- `POST /api/messages`
  Create a message

### MessageItem
- `GET /api/:messageId`
  Get one message's details
- `PATCH /api/:messageId`
  Reply to a message by appending to it
- `DELETE /api/:messageId`
  Delete a message
