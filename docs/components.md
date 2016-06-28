## Component Hierarchy

**Bolded** components are associated with routes.

* **App**
  * Navigation
  * **UsersMain**
    * Filters
    * Browse
      * BrowseItem
  * **UserMain**
    * UserBasics
    * UserProfile
    * QuestionMatch
    * UserDetails
    * SuggestedUsers (optional)
  * **MessagingMain**
    * MessageFilters
    * MessageInbox
      * MessageInboxItem
        * **MessageItem**
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
  * **NewsMain** (Optional)
    * News
      * NewsItem
    * QuestionPreview
    * YourVisits
      * YourVisitsItem


## Routes

* **component:** `App` **path:** `/`
  * **component:** `NewsMain` **path:** index
  * **component:** `UsersMain` **path:** `users`
  * **component:** `UserMain` **path:** `:userId`
  * **component:** `MessageMain` **path:** `messages`
    * **component:** `MessageItem` **path:** `messages/:messageId`
  * **component:** `ProfileMain` **path:** `profile (redirects to ProfileAbout)`
    * **component:** `ProfileAbout` **path:** `profile/about`
    * **component:** `ProfilePhotos` **path:** `profile/photos`
    * **component:** `ProfileQuestions` **path:** `profile/questions`
