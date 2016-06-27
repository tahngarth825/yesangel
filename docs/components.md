## Component Hierarchy

**Bolded** components are associated with routes.

(:exclamation: Remember, the bolded components are created by their
associated routes, so the nesting of your bolded components must
_**exactly**_ match the nesting of your routes.)

* **App**
  * Navigation
  * **BrowseMain**
    * Filters
    * Browse
      * BrowseItem
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
  * **UserMain**
    * UserBasics
    * UserProfile
    * QuestionMatch
    * UserDetails
    * SuggestedUsers
  * **NewsMain** (Optional)
    * News
      * NewsItem
    * QuestionPreview
    * YourVisits
      * YourVisitsItem


## Routes

* **component:** `App` **path:** `/`
  * **component:** `NewsMain` **path:** index
  * **component:** `BrowseMain` **path:** `app/browse`
  * **component:** `MessageMain` **path:** `app/messages`
    * **component:** `MessageItem` **path:** `app/messages/:messageId`
  * **component:** `ProfileMain` **path:** `app/profile (redirects to ProfileAbout)`
    * **component:** `ProfileAbout` **path:** `app/profile/about`
    * **component:** `ProfilePhotos` **path:** `app/profile/photos`
    * **component:** `ProfileQuestions` **path:** `app/profile/questions`
  * **component:** `UserMain` **path:** `app/users`
