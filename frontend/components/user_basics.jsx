const React = require("react");

const UserBasics = React.createClass({
  render(){
    let text;
    if (this.props.edit === true){
      text = "EDITABLE";
    } else if (this.props.edit === false) {
      text = "NOT EDITABLE";
    } else {
      text = "SOMETHING DONE GONE WRONG";
    }

    return(
      <div>
        User Basics, yo
        <br/>
        {text}
      </div>
    )
  }
});

module.exports = UserBasics;
