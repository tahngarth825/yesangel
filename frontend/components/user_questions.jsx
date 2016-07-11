const React = require("react");
const SessionStore = require("../stores/session_store.js");
const UserStore = require("../stores/user_store.js");
const QuestionStore = require("../stores/question_store.js");
const QuestionActions = require("../actions/question_actions.js");
const ResponseStore = require("../stores/response_store.js");
const ResponseActions = require("../actions/response_actions.js");
const TraitConstants = require("../constants/trait_constants.js");

const UserQuestions = React.createClass({
  getInitialState(){
    return (this.updateState());
  },

  updateState(){
    return ({
      questions: QuestionStore.all(),
      responses: ResponseStore.all(),
      user: this.getUser()
    });
  },

  getUser(){
    if (this.editable()){
      return SessionStore.currentUser();
    } else {
      return UserStore.find(parseInt(this.props.params.userId));
    }
  },

  editable(){
    if (SessionStore.currentUser().id === parseInt(this.props.params.userId)){
      return true;
    } else {
      return false;
    }
  },

  componentDidMount(){
    if (this.editable()){
      this.sessionListener = SessionStore.addListener(this.handleChange);
    } else {
      this.userListener = UserStore.addListener(this.handleChange);
    }
    this.questionListener = QuestionStore.addListener(this.handleChange);
    this.responseListener = ResponseStore.addListener(this.handleChange);

    QuestionActions.fetchQuestions();
    ResponseActions.fetchResponses(this.props.params.userId);
  },

  componentWillUnmount(){
    if (this.sessionListener) {
      this.sessionListener.remove();
    }
    if (this.questionListener){
      this.questionListener.remove();
    }
    if (this.userListener){
      this.userListener.remove();
    }
    if (this.responseListener){
      this.responseListener.remove();
    }
  },

  handleChange(){
    this.setState(this.updateState());
  },

  updateResponse(idx) {
    const that = this;
    return (
      function(event) {
        const value = event.target.value;
        let responsesCopy = that.state.responses;
        responsesCopy[idx] = value;

        that.setState({
          responses: responsesCopy,
          questions: QuestionStore.all(),
          user: that.getUser()
        });
      }
    );
  },

  handleSubmit(e){
    e.preventDefault();

    ResponseActions.editResponse({
      user_id: this.state.user.id,
      response: this.state.responses
    });
  },

  handleDisplay(){
    const that = this;

    if (this.editable()){
      return(
        <form onSubmit={this.handleSubmit} className="user-questions-editable">
          <input type="submit" value="Update Responses!"/>
          <table>
            <thead>
              <tr>
                <th className="th-question">Question</th>
                <th className="th-response">Response</th>
              </tr>
            </thead>
            <tbody>
              {
                that.state.questions.map(function(question, idx) {
                  return (
                    <tr key={idx}>
                      <td className="question-content">
                        {question.content}
                      </td>
                      <td className="response-content">
                        <select value={that.state.responses[idx]}
                          onChange={that.updateResponse(idx)}
                          className="react-select">
                          {
                            TraitConstants.responses.map( function(response, idx2){
                              if (response === "Pick your opinion") {
                                return (
                                  <option value={response} key={"idx2:" + idx2} disabled>
                                    {response}
                                  </option>
                                );
                              } else {
                                return (
                                  <option value={response} key={response}>
                                    {response}
                                  </option>
                                );
                              }
                            })
                          }
                        </select>
                      </td>
                    </tr>
                  );
                })
              }
            </tbody>
          </table>
        </form>
      );
    } else {
      return(
        <table>
          <thead>
            <tr>
              <th className="th-question">Question</th>
              <th className="th-response">Response</th>
            </tr>
          </thead>
          <tbody>
              {
                that.state.questions.map(function(question, idx) {
                  return (
                    <tr key={idx}>
                      <td className="question-content">
                        {question.content}
                      </td>
                      <td className="response-content">
                        {that.state.responses[idx]}
                      </td>
                    </tr>
                  );
                })
              }
          </tbody>
        </table>
      );
    }
  },

  render(){
    return(
      <div className="user-questions-box">
        {this.handleDisplay()}
      </div>
    );
  }
});

module.exports = UserQuestions;
