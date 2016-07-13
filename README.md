# Yes Angel!

[Heroku Link][heroku]

[heroku]: https://yesangel.herokuapp.com/

## Minimum Viable Product

YesAngel! is a web application inspired by dating sites such as OKCupid that is built using Ruby on
Rails and React.js.


##Features & Implementation

YesAngel! features a single webpage that changes the contents on it through the use of React components and the FLUX cycle used and created by Facebook. It features a login/signup component that creates a new session or creates a new user, accordingly. Validations are done in both the front and back end, and user authentication is done on the front-end.


### Browse and Filter Users

YesAngel! features a Browse component labeled `UsersMain` that houses the components needed to show and filter all the users. I filter all the users at the very start before grabbing them to be stored in the `UserStore`. I have `UsersMain` listen to the `UserStore` (shown in code example 1) so that I can fetch all the users as soon as they are loaded into the store. This means that I now have the information needed to render each user as a tile (shown as code example 2).

####Code Example 1: Store-Listening
```javascript
componentDidMount(){
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


###Detailed Profile Page

YesAngel! features a detailed profile page using the component labeled `UserMain` allowing users to edit basic information about themselves such as gender and height as well as customizable information such as summaries or hobbies. The profile page was rendered using multiple smaller components to compartmentalize each of the components' responsibilities. This makes expanding or editing one component easier, as well as finding bugs easier.

####Components Used to Render the UserMain page
```javascript
}  render(){
    return(
      <div>
        <div className="profile-top-left">
          <UserBasics userId={this.props.params.userId}/>
          <UserTabs userId={this.props.params.userId}/>
        </div>
          {this.handleMessage()}
          {this.props.children}
      </div>
    );
  }
```


###Messaging

YesAngel! features messaging built into the webpage. You can either access all of your messages by clicking on the envelope icon in the top navigation bar, or you can visit a user's profile and it will be loaded under their basic information. To start a message, you must visit another user's profile.

####Main Message Page
![image of main message page](http://res.cloudinary.com/tahngarth825/image/upload/c_crop,h_1080,w_1651,x_420/v1468221316/Messaging1_anwo6s.png)

####Messaging a Person Through Profile
![image of messaging a person](http://res.cloudinary.com/tahngarth825/image/upload/c_crop,h_1080,w_970,x_328,y_68/v1468221534/Messaging4_wacmvm.png)



###Pictures

YesAngel! enables users to upload pictures that others will see when visiting their profile. They simply need to click on the "Photo" button. If you are on your own profile, you will instead see an option to add photos.

####Adding Your Own Photos
![image of your photos](http://res.cloudinary.com/tahngarth825/image/upload/v1468222103/Profilepictures1_ddhir2.png)



###Personality Questions

Last but not least, YesAngel! features a questions component that allows users to answer questions hosted by YesAngel! and see how others have answered their questions. In the future, I plan to implement match percentages to sort other users based on their match percentage with the current user, add more questions, and allow side-by-side comparison of the current user's answers with the other person's answers. This was implemented by having a Question model and a Response model, with the response model referencing to the Question model by foreign key. This allows me to add more questions easily.

####Schema for Questions and Responses
```ruby
create_table "questions", force: :cascade do |t|
  t.string   "content",    null: false
  t.datetime "created_at", null: false
  t.datetime "updated_at", null: false
end

create_table "responses", force: :cascade do |t|
  t.integer  "user_id",    null: false
  t.string   "response",   null: false, array: true
  t.datetime "created_at", null: false
  t.datetime "updated_at", null: false
end
```
