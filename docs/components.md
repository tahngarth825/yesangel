## Component Hierarchy

**Bolded** components are associated with routes.

* **App**
  * Navigation
  * **Session** (Index)
    * Log-in
    * Sign-up
  * **UsersMain**
    * Filters
    * Browse
      * BrowseItem
  * **UserMain**
    * UserBasics
    * UserTabs
    * **UserAbout**
      * Profile
      * UserDetails
    * **UserPhotos**
      * UserPhotosAdd
      * UserPhotosItem
    * **UserQuestions**
      * UserQuestionItem
  * **MessagingMain**
    * MessageFilters
    * MessageInbox
      * MessageInboxItem
        * **MessageItem**

## Routes

* **component:** `App` **path:** `/`
  * **component:** `Session` **path:** index
  * **component:** `UsersMain` **path:** `users` (index when logged in)
  * **component:** `UserMain` **path:** `:userId` (redirects to UserAbout)
    * **component:** `UserAbout` **path:** `about`
    * **component:** `UserPhotos` **path:** `photos`
    * **component:** `UserQuestions` **path:** `questions`
  * **component:** `MessageMain` **path:** `messages`
    * **component:** `MessageItem` **path:** `:messageId`
