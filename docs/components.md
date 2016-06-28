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
      * UserProfile
      * QuestionMatch
      * UserDetails
      * **ProfileMain**
        * ProfileBasics
        * ProfileTabs
        * ProfileSub
          * **ProfileAbout**
            * Profile
            * ProfileDetails
          * **ProfilePhotos**
            * ProfilePhotosAdd
            * ProfilePhotosItem
          * **ProfileQuestions**
            * ProfileQuestionItem
      * **MessagingMain**
        * MessageFilters
        * MessageInbox
          * MessageInboxItem
            * **MessageItem**

## Routes

* **component:** `App` **path:** `/`
  * **component:** `Session` **path:** index
  * **component:** `UsersMain` **path:** `users` (index when logged in)
    * **component:** `UserMain` **path:** `:userId`
      * **component:** `ProfileMain` **path:** `profile (redirects to ProfileAbout)`
        * **component:** `ProfileAbout` **path:** `profile/about`
        * **component:** `ProfilePhotos` **path:** `profile/photos`
        * **component:** `ProfileQuestions` **path:** `profile/questions`
      * **component:** `MessageMain` **path:** `messages`
        * **component:** `MessageItem` **path:** `messages/:messageId`
