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

* `Browse` component listens to `Users` store.


## UserMain Cycle

### UserMain API Request Actions

* `fetchUser`
  0. Invoked from `UserMain` `willMount`
  0. `GET /api/users/:userId` is called
  0. `receiveUser` is set as the callback

### UserMain API Response Actions

* `receiveUser`
  0. Invoked from an API callback.
  0. `User` store updates `_user` and emits change.

### Store Listeners

* `UserBasics` component listens to `User` store.
* `UserProfile` component listens to `User` store.
* `QuestionMatch` component listens to `User` store.
* `UserDetails` component listens to `User` store.


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


## ProfileMain Cycles

###ProfileMain API Request Actions

* `fetchProfile`
0. invoked from `ProfileMain` `willMount`
0. `GET /api/users` is called with `text` param.
0. `receiveSearchSuggestions` is set as the callback.


###ProfileMain API Response Actions


* `receiveSearchSuggestions`
  0. invoked from an API callback.
  0. `SearchSuggestion` store updates `_suggestions` and emits change.

* `removeSearchSuggestions`
  0. invoked from `NoteSearchBar` `onChange` when empty
  0. `SearchSuggestion` store resets `_suggestions` and emits change.

### Store Listeners

* `SearchBarSuggestions` component listens to `SearchSuggestion` store.
