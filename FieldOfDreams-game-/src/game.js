import React, { Component } from "react";
import Content from "./assets/content";
import "./style.css";
import {
  action_2,
  action_3,
  action_4,
  action_5,
  action_6,
  action_8,
} from "./actionCreators";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { reload } from "./store";

class Game extends Component {
  constructor(props) {
    super(props);
    this.questions = this.props.questions;
    this.startGame();
  }

  startGame() {
    let num = Math.floor(Math.random() * this.questions.length);
    let question = this.questions[num];
    let { ans, que } = question;
    let arr = ans.toLowerCase().split("");
    this.props.setQue(que);
    this.props.setAns(ans);
    this.props.setArr(arr);
    let newArr = this.questions.filter(item => {
      return item.ans !== ans;
    });
    this.props.setState(newArr)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.isNext !== this.props.isNext) {
      this.startGame();
      this.props.setNext(false);
    }
    if (this.questions.length === 1) {
      this.props.setState(reload);
      this.startGame();
    }
  }

  render() {
    return (
      <div className="game-box">
        <Content />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    questions: state.reducer_1.questions,
    isNext: state.reducer_1.isNext,
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      setQue: action_3,
      setAns: action_4,
      setArr: action_5,
      setState: action_6,
      setNext: action_8,
      setQuestions: action_2,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
