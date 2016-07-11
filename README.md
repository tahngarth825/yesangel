# Yes Angel!

[Heroku Link][heroku]

[heroku]: https://yesangel.herokuapp.com/

## Minimum Viable Product

YesAngel! is a web application inspired by dating sites such as OKCupid that is builtv using Ruby on
Rails and React.js.

##Features & Implementation

YesAngel! features a single webpage that changes the contents on it through the use of React components and the FLUX cycle used and created by Facebook. It features a login/signup component that creates a new session or creates a new user, accordingly. Validations are done in both the front and back end, and user authentication is done on the front-end.

### Browse and Filter Users

YesAngel! features a Browse component labeled `UsersMain` that houses the components needed to show and filter all the users. I filter all the users at the very start before grabbing them to be stored in the `UserStore`. I have `UsersMain` listen to the `UserStore` (shown in code example 1) so that I can fetch all the users as soon as they are loaded into the store. This means that I now have the information needed to render each user as a tile (shown as code example 2).

####Code Example 1: Store-Listening
```javascript
componentWillMount(){
  this.listener = UserStore.addListener(this.handleChange);
  UserActions.fetchUsers();
},

handleChange(e){
  this.setState({users: UserStore.all()});
},
```

####Code Example 2: Making a Browse Tile
```javascript
displayUser(user){
  return (
    <ul className="browse-tile-detail">
      <li>
        <b>Username:</b> {user.username}
      </li>
      <li>
        <b>Age:</b> {user.age}
      </li>
      <li>
        <b>Location:</b> {user.location}
      </li>
      <li>
        <b>Gender:</b> {user.gender}
      </li>
    </ul>
  );
},
```

###Messaging

YesAngel! Features messaging built into the webpage. You can either access all of your messages by clicking on the envelope icon in the top navigation bar, or you can visit a user's profile and it will be loaded under their basic information. To start a message, you must visit another user's profile.

![image of main message page](http://res.cloudinary.com/tahngarth825/image/upload/c_crop,h_1080,w_1651,x_420/v1468221316/Messaging1_anwo6s.png)

![image of messaging a person](http://res.cloudinary.com/tahngarth825/image/upload/c_crop,h_1080,w_970,x_328,y_68/v1468221534/Messaging4_wacmvm.png)


- [X] Photos
  - [X] Smooth, bug-free navigation
  - [X] Adequate seed data to demonstrate the site's features
  - [X] Adequate CSS styling
- [ ] Personality Questions
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling

Optional:
- [ ] Match % based on questions
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling

## Design Docs
* [View Wireframes][views]
  (TODO: Massive redo)
* [React Components][components] (Complete)
* [Flux Cycles][flux-cycles] (Complete)
* [API endpoints][api-endpoints] (Complete)
* [DB schema][schema] (Complete)

[views]: docs/views.md
[components]: docs/components.md
[flux-cycles]: docs/flux-cycles.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md

Implementation Timeline

### Phase 1: Backend setup and Front End User Auth (w8d2-3)

**Objective** Functioning rails project with authentication

- [X] create new project
- [X] create `Session` component
- [X] create `User` model
- [X] authentication
- [X] user signup/signin pages
- [X] blank landing page after signin

### Phase 2: UserMain and UserAbout components (w8d4-w8d5)

**Objective** Functional profile for self and others through API interaction

- [X] Demo log-in
- [X] create `UserMain` and `UserAbout` components
- [X] show information of profiles
- [X] allow editing of own profile
- [X] jBuilder views for `UserAbout`
- [X] setup Webpack and flux scaffold
- [X] setup `APIUtil` to interact with the API
- [X] UserDetails

### Phase 3: UsersMain (w8d6)

**Objective** Make browse page by building out UsersMain component and subcomponents

- [X] Filters component
- [X] Browse and Browse Item components
- [X] ensure flux cycle interaction works
- [X] style it functionally

### Phase 4: Flux Architecture and Router (w8d7-w9d1)

**Objective** Functional profiles through user interface

- [X] setup flux loop
- [X] setup React Router
- [X] implement each UserMain and UserAbout component, building out flux
  loop as needed
  - [X] `UserBasics`
  - [X] `UserTabs`
  - [X] `Profile`
  - [X] `UserDetails`
- [X] Implement sliders/checkboxes for profile and filter
- [ ] Filter sorts components

### Phase 5: Basic Styling (w9d2)

**Objective** Make layout look similar to OKC's for login/signup and profile views
Also, make the `Navigation` component (links will be broken).

- [X] set up classes within html components to enable css styling
- [X] position elements as desired
- [X] setup colors and fonts as desired
- [X] add easier input for users to do age/location/desired_age (scrollers?)
- [X] Make front page pretty
- [X] strong validations on signup components (mult-choice/sliders)
- [X] Navbar
- [ ] seed database with 50 users (28/50)

### Phase 6: Messaging (w9d3)

**Objective** Make messaging functions work

- [X] Can see own messages
- [X] Can reply to others
- [X] Can message others directly
- [ ] CSS Styling

### Phase 7: User Photos and User Questions (w9d4-d5)
- [X] Host pictures on 3rd party sites
- [X] Profile pic on Browse and profile page
- [X] Build out UserPhotos allowing a gallery of photos
- [X] Build out UserQuestion allowing a library of questions
- [X] Seed questions
- [ ] CSS Styling


### Bonus Features:
- [ ] Matching based on questions
- [ ] News page
- [ ] QuickMatch
- [ ] Suggested Matches
- [ ] Enable albums for photos

# FOR MYSELF:
TODO:
1. Add photos and questions to views, flux-cycles, api endpoints,
and db schema
2. find a way to make the questions and photos the same for both yourself
and others' profiles)
19. Add a "check all" for genders of interest
23. Check out bottom of heroku setup to make sure dyno stays awake
24. Data persists in signup when error is thrown
25. make sure responses starts out as an empty array of length 10
for responses, order is important because it's index is question id
26. make new users create an empty response w/ 10 empty array and user id
27. SEED PHOTOS

### Sources
1. Google Font (Montserrat): https://fonts.google.com/?category=Sans+Serif&selection.family=Montserrat

Note: how to pass props to children for React elements
{React.cloneElement(this.props.children, {siteData: this.props.siteData})}

###Scratchpad:
Message.order(last_update: :desc).where("user1_id = ? OR user2_id = ?",
  1, 1)
