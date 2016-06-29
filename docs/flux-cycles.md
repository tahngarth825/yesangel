# Flux Cycles

Flux loops are organized by data type. Under each data type, there may
be sub-categories, and each action is listed with the sequence of events
that result from its invocation, ending with the API or store. Finally,
store listeners are listed at the end.

You should be able to use this document trace an **action** starting
with where it was invoked, through the **API**/**store** involved, and
finally to the **components** that update as a result. This is important
because once you start implementing your flux loops, that's precisely
what you'll need to do.


## UsersMain Cycle

### UsersMain API Request Actions

* `fetchAllUsers`
  0. Invoked from `UsersMain` `willMount`/`willReceiveProps`
  0. `GET /api/users` is called.
  0. `receiveAllUsers` is set as the callback.

* `filterUsers`
  0. Invoked from `Filters` `filterUsers`
  0. `Users` store updates `_filteredUsers` and emits change.

### UsersMain API Response Actions

* `receiveAllUsers`
  0. Invoked from an API callback.
  0. `Users` store updates `_users` and emits change.

### Store Listeners

* `Users` component listens to `Users` store.


## UserMain Cycle

### UserMain API Request Actions

* `fetchUser`
  0. Invoked from `UserMain` `willMount`
  0. Fetches specific detail
  0. `GET /api/users/:userId` is called
  0. `receiveUser` is set as the callback

### UserMain API Response Actions

* `receiveUser`
  0. Invoked from an API callback.
  0. `User` store updates `_user` and emits change.

### Store Listeners

* `UserBasics` component listens to `User` store.
* `Profile` component listens to `User` store.
* `UserDetails` component listens to `User` store.
* `UserAbout` component listens to `User` store.
* `UserPhotos` component listens to `User` store.
* `UserQuestions` component listens to `User` store.
* `UserDetails` component listens to `User` store.


## UserQuestions

### UserQuestions API Request Actions

* `fetchQuestions`
  0. Invoked from `UserQuestions` `willMount`
  0. `receiveQuestions` set as callback
* `fetchResponses`
  0. Invoked from `UserQuestions` `willMount`
  0. `receiveResponses` set as callback
* `createResponse`
  0. Invoked from `UserQuestions` `answerQuestion`
  0. `receiveResponse` set as callback
* `editResponse`
  0. Invoked from `UserQuestions` `answerQuestion`
  0. `receiveResponse` set as callback


### UserQuestions API Response Actions

* `receiveQuestions`
  0. Invoked from API callback
  0. `Question` store updates `_questions` and emits change

* `receiveResponses`
  0. Invoked from API callback
  0. `Response` store updates `_responses` and emits change

* `receiveResponse`
  0. Invoked from API callback
  0. `Response` store updates `_responses` and emits change

### Store Listeners

* `UserQuestions` component listens to `Questions` store
* `UserQuestions` component listens to `Response` store


## UserPhotos

### UserPhotos API Request Actions

* `fetchPhotos`
  0. Invoked from `UserPhotos`
  0. Sets `receivePhotos` as callback

* `addPhoto`
  0. Invoked from `UserPhotos`
  0. Sets `receivePhoto` as callback

* `deletePhoto`
  0. Invoked from `UserPhotos`
  0. Sets `removePhoto` as callback

### UserPhotos API Response Actions

* `receivePhotos`
  0. Invoked from API callback
  0. `Photos` store updates `_photos` and emits change

* `receivePhoto`
  0. Invoked from API callback
  0. `Photos` store updates `_photos` and emits change

* `removePhoto`
  0. Invoked from API callback
  0. `Photos` store updates `_photos` and emits change

### Store Listeners

* `UserPhotos` component listens to `Photos` store



## MessageMain Cycles

### MessageMain API Request Actions

* `fetchAllMessages`
  0. invoked from `MessageMain` `willMount`
  0. `GET /api/messages` is called.
  0. `receiveAllMessages` is set as the callback.

* `createMessage`
  0. invoked from `UserMain` by clicking `message` button
  0. `POST /api/messages` is called.
  0. `messageConfirmation` is set as the callback.

* `fetchMessage`
  0. invoked from `MessageItem` `willMount`
  0. `GET /api/messages/:messageId` is called.
  0. `receiveMessage` is set as the callback.

* `replyMessage`
  0. invoked from `MessageItem` `onReply`
  0. `PATCH /api/messages/:messageId` is called.
  0. `messageConfirmation` is set as the callback.

* `deleteMessage`
  0. invoked from `MessageItem` delete button `onClick`
  0. `DELETE /api/messages/:messageId` is called.
  0. `removeMessage` is set as the callback.

### MessageMain API Response Actions

* `receiveAllMessages`
  0. invoked from an API callback.
  0. `Messages` store updates `_messages` and emits change.

* `receiveMessage`
  0. invoked from an API callback.
  0. `Messages` store updates `_message` and emits change.

* `messageConfirmation`
  0. invoked from an API callback.
  0. `Messages` store updates `_messages` and emits change.

* `removeMessage`
  0. invoked from an API callback.
  0. `Message` store removes `_messages[id]` and emits change.

### Store Listeners

* `MessageInbox` component listens to `Messages` store.
* `MessageInboxItem` component listens to `Messages` store.
