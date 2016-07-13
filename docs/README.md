# Yes Angel!

[Heroku Link][heroku]

[heroku]: https://yesangel.herokuapp.com/

## Minimum Viable Product

YesAngel! is a web application inspired by OKCupid that will be built using using Ruby on
Rails and React.js. By the end of Week 9, this app will, at the minimum, satisfy the
following criteria:

- [X] Hosting on Heroku
- [X] New account creation, login, and a guest/demo login
- [ ] A production README, replacing this README
- [X] Browse & Filter Users
  - [X] Smooth, bug-free navigation
  - [X] Adequate seed data to demonstrate the site's features
  - [X] Adequate CSS styling
- [X] Messaging
  - [X] Smooth, bug-free navigation
  - [X] Adequate seed data to demonstrate the site's features
  - [X] Adequate CSS styling
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
28. Remove all alerts and console logs and window.___ = 

### Sources
1. Google Font (Montserrat): https://fonts.google.com/?category=Sans+Serif&selection.family=Montserrat

Note: how to pass props to children for React elements
{React.cloneElement(this.props.children, {siteData: this.props.siteData})}

###Scratchpad:
Message.order(last_update: :desc).where("user1_id = ? OR user2_id = ?",
  1, 1)
