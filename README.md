# Yes Angel!

[Heroku Link][heroku]

[heroku]: https://yesangel.herokuapp.com/

## Minimum Viable Product

YesAngel! is a web application inspired by OKCupid that will be built using using Ruby on
Rails and React.js. By the end of Week 9, this app will, at the minimum, satisfy the
following criteria:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and a guest/demo login
- [ ] A production README, replacing this README
- [ ] Notes
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling
- [ ] Notebooks for organizing notes
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling
- [ ] Tags for notes
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling
- [ ] Rich Text Editing of notes
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling

## Design Docs
TODO: SESSION PAGES AS INDEX PAGE (else /users will be)
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
- [X] make sure pw/session isn't exposed

### Phase 2: UserMain and UserAbout components (w8d4-w8d5)

**Objective** Functional profile for self and others through API interaction

- [X] Demo log-in
- [ ] create `UserMain` and `UserAbout` components
- [ ] seed database with small amount of test data
- [ ] Update/show profiles
- [ ] jBuilder views for `UserAbout`
- [X] setup Webpack and flux scaffold
- [ ] setup `APIUtil` to interact with the API
- [ ] test out API interaction in console

### Phase 3: Flux Architecture and Router (w8d6-w8d7)

**Objective** Functional profiles through user interface

- [ ] setup flux loop
- [ ] setup React Router
- [ ] implement each UserMain and UserAbout component, building out flux
  loop as needed
  - [ ] `UserBasics`
  - [ ] `UserTabs`
  - [ ] `Profile`
  - [ ] `UserDetails`
- [ ] save profile to database when save button is pushed. Warn when unsaved data.

### Phase 4: Basic Styling (w9d1)

**Objective** Make layout look similar to OKC's for login/signup and profile views
Also, make the `Navigation` component (links will be broken).

- [ ] set up classes within html components to enable css styling
- [ ] position elements as desired
- [ ] setup colors and fonts as desired

### Phase 5: UsersMain (w9d2)

**Objective** Make browse page by building out UsersMain component and subcomponents

- [ ] Filers component
- [ ] Browse and Browse Item components
- [ ] ensure flux cycle interaction works
- [ ] style it appropriately

### Phase 6: Messaging (w9d3)

**Objective** Make messaging functions work

- [ ] Build out MessageMain component
- [ ] Build out MessageItem component
- [ ] Connect them to the flux loop and make sure they interact properly
- [ ] CSS Styling

### Phase 7: User Photos and User Questions (w9d4-d5)
- [ ] Build out UserPhotos component and subcomponents
- [ ] Build out UserQuestion component and subcomponents
- [ ] CSS Styling

### Phase 8: Styling cleanup, seeding, and website setup (w9d6-d7)
- [ ] Finishing touches on styling
- [ ] Set up appropriate seeding
- [ ] Host pictures on 3rd party sites
- [ ] Upload everything to website

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
3. Views: userdetails should include "looking for"
4. ENSURE MIN AGE < MAX AGE
5. Strengthen validations (location is string, age is int, etc.)
