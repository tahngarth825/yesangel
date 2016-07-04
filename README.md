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
- [ ] Browse & Search Users
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling
- [ ] Messaging
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling
- [ ] Personality Questions
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling
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
- [X] make sure pw/session isn't exposed

### Phase 2: UserMain and UserAbout components (w8d4-w8d5)

**Objective** Functional profile for self and others through API interaction

- [X] Demo log-in
- [X] create `UserMain` and `UserAbout` components
- [X] show information of profiles
- [X] allow editing of own profile
- [X] jBuilder views for `UserAbout`
- [X] setup Webpack and flux scaffold
- [X] setup `APIUtil` to interact with the API
- [X] test out API interaction in console
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
- [ ] Filter Sorts components
- [ ] Implement validations via buttons/radio/checkboxes for looking for
  features, profile edit, and account creation
(TO DO: FIX HEIGHT AS NOT INTEGER!)

### Phase 5: Basic Styling (w9d2)

**Objective** Make layout look similar to OKC's for login/signup and profile views
Also, make the `Navigation` component (links will be broken).

- [ ] set up classes within html components to enable css styling
- [ ] position elements as desired
- [ ] setup colors and fonts as desired
- [ ] add easier input for users to do age/location/desired_age (scrollers?)
- [ ] Make front page pretty
- [ ] seed database with small amount of test data (Do after mult-choice options!)
- [ ] strong validations on signup components (mult-choice/sliders)

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
6. Remove self from browse?
7. Guest login for girls?
8. Make sure handleDisplay for UserMain checks if it's your profile, and
allow edits if not!
9. Filter on backend
10. SEED DATABASE ONCE I'VE FIGURED OUT HOW TO LIMIT CHOICES
11. DETAILED VIEWS
12. Clean CSS for toggle view to change from centered to fixed when viewport
  is too small to render two columns
13. strong validations on inputs such as location
14. SORTING COMPONENTS


### Sources
1. React-sliders: https://www.npmjs.com/package/react-slider
2. React-select: http://jedwatson.github.io/react-select/
