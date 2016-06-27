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
    * SuggestedUsers
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
  * **component:** `UsersMain` **path:** `app/users`
    * **component:** `UserMain` **path:** `app/users/:userId`
  * **component:** `MessageMain` **path:** `app/messages`
    * **component:** `MessageItem` **path:** `app/messages/:messageId`
  * **component:** `ProfileMain` **path:** `app/profile (redirects to ProfileAbout)`
    * **component:** `ProfileAbout` **path:** `app/profile/about`
    * **component:** `ProfilePhotos` **path:** `app/profile/photos`
    * **component:** `ProfileQuestions` **path:** `app/profile/questions`
