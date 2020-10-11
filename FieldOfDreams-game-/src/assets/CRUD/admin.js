import React from "react";
import "../../style.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { action_9, action_6, } from "../../actionCreators";
import question from "../../img/question.png";
import answer from "../../img/answer.png";

class Admin extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      questions: this.props.questions,
      queUpdated: this.props.queUpdated
    };
  }

  handlerClick = (e) => {
    let ans = e.target.dataset.a;
    let que = this.state.questions.filter(item => {
      return item.ans !== ans 
    });
    this.props.setQuestion(que);
    this.props.setUpdated(true)
  };

  submitHandler = (e) => {
    e.preventDefault();
    let { question, answer } = e.target.elements;
    let newQuestion = this.state.questions;
    newQuestion.unshift({ ans: answer.value, que: question.value })
    this.props.setQuestion(newQuestion);
    this.props.setUpdated(true)
  };

  componentDidUpdate(prevProps) {
    if (prevProps.queUpdated !== this.props.queUpdated) {
      this.setState({ questions: this.props.questions });
      this.props.setUpdated(false)
    }
  }
  render() {
    let questions = this.state.questions;
    return (
      <div className="admin">
        <div className="admin_box">
          <form onSubmit={this.submitHandler}>
            <div className="inputBx">
              <input type="text" placeholder="New question" name="question" />
              <img src={question} alt="icon-question" />
            </div>
            <div className="inputBx">
              <input type="text" placeholder="Answer" name="answer" />
              <img src={answer} alt="icon-answer" />
            </div>
            <div className="inputBx">
              <input type="submit" value="Save"/>
            </div>
          </form>
        </div>
        {questions.map((q, i) => {
          return (
            <div className="admin_box" key={q.ans + i}>
              <div className="question_block">
                <div className="question">
                  <span>
                    <strong>Question-<strong style={{color: "red"}}>{i}</strong>:</strong> {q.que}
                  </span>
                </div>
                <div className="answer">
                  <span>
                    <strong>Answer:</strong> {q.ans}
                  </span>
                </div>
              </div>
              <div
                className="cart-close"
                onClick={this.handlerClick}
                data-a={q.ans}></div>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    questions: state.reducer_1.questions,
    queUpdated: state.reducer_1.queUpdated
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      setQuestion: action_6,
      setUpdated: action_9,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
