import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { A, B, C, D, E, F, G, H, I, J, K, L } from "./forwardRefs";
import { action_8 } from "../actionCreators";
import "../style.css";

class Content extends Component {
  constructor(props) {
    super(props);
    this.ref1 = React.createRef();
    this.ref2 = React.createRef();
    this.ref3 = React.createRef();
    this.ref4 = React.createRef();
    this.ref5 = React.createRef();
    this.ref6 = React.createRef();
    this.ref7 = React.createRef();
    this.ref8 = React.createRef();
    this.ref9 = React.createRef();
    this.ref10 = React.createRef();
    this.ref11 = React.createRef();
    this.ref12 = React.createRef();
    this.alph = props.alph;
    this.checkAnswer = this.checkAnswer.bind(this);
    this.state = {
      chance: 3,
      passQ: props.passQ,
      que: props.que,
      ans: props.ans,
      arr: props.arr,
      isNext: props.isNext,
      arrRefs: "",
    };
  }

  build() {
    let arrRefs = [
      this.ref1.current,
      this.ref2.current,
      this.ref3.current,
      this.ref4.current,
      this.ref5.current,
      this.ref6.current,
      this.ref7.current,
      this.ref8.current,
      this.ref9.current,
      this.ref10.current,
      this.ref11.current,
      this.ref12.current,
    ];
    this.state.arr.map((item, index) => {
      arrRefs[index].classList.remove('openLetter')
      return arrRefs[index].textContent = item
    })
    this.setState({
      arrRefs,
    });
  }

  componentDidMount() {
    this.build();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.arr !== this.state.arr) {
      setTimeout(() => {
        this.setState({
          chance: 3,
          passQ: this.props.passQ,
          que: this.props.que,
          ans: this.props.ans,
          arr: this.props.arr,
          isNext: this.props.isNext,
          arrRefs: "",
        });
        this.build();
      }, 2000);
    }

    if (this.state.arrRefs.length > this.state.arr.length) {
      this.state.arrRefs
        .reverse()
        .splice(0, this.state.arrRefs.length - this.state.arr.length);
    }
  }

  clickHandler = (e) => {
    let ans = this.state.ans;
    let chance = this.state.chance;
    let arrRefs = this.state.arrRefs;
    let pattern = e.target.textContent;
    let regex = new RegExp(pattern, "i");
    if (ans.match(regex)) {
      arrRefs.map((ref, index) => {
        return this.gameProcess(ref, pattern, index);
      });
    } else if (chance === 0) {
      this.info("К сожелению вы проиграли! :(", true);
    } else {
      this.setState({ chance: chance - 1 });
      this.info("У вас осталось " + chance + " попыток.");
    }
  };

  gameProcess(r, p, i) {
    let arrRefs = this.state.arrRefs;
    if (arrRefs.length < 2) {
      r.classList.add("openLetter");
      return this.info("Вы правильно отгадали! :)", true);
    } else if (r.textContent === p) {
      this.state.arrRefs.splice(i, 1);
      return (r.classList.add("openLetter"));
    }
  }

  checkAnswer() {
    let answer = prompt("В случае неверного ответа, игра будет окончена!");
    let ansCurrect = this.state.ans;
    if (answer.toLowerCase() === ansCurrect.toLowerCase()) {
      return this.info("Вы правильно отгадали! :)", true);
    } else {
      return this.info("К сожелению вы проиграли! :(", true);
    }
  }

  goNext(ans) {
    this.props.setNext(true);
  }

  info(info, a) {
    if (a) {
      this.props.setNext(a);
    }
    setTimeout(() => {
      return alert(info);
    }, 1000);
  }

  render() {
    let arr = this.state.arr;
    let arrLett = [
      <A ref={this.ref1} key={arr[0] + 1} />,
      <B ref={this.ref2} key={arr[1] + 2} />,
      <C ref={this.ref3} key={arr[2] + 3} />,
      <D ref={this.ref4} key={arr[3] + 4} />,
      <E ref={this.ref5} key={arr[4] + 5} />,
      <F ref={this.ref6} key={arr[5] + 6} />,
      <G ref={this.ref7} key={arr[6] + 7} />,
      <H ref={this.ref8} key={arr[7] + 8} />,
      <I ref={this.ref9} key={arr[8] + 9} />,
      <J ref={this.ref10} key={arr[9] + 10} />,
      <K ref={this.ref11} key={arr[10] + 11} />,
      <L ref={this.ref12} key={arr[11] + 12} />,
    ];
    return (
      <div className="content">
        <div className="letter_list">
          <ul id="letter_list">
            {arr.map((_, index) => {
              return arrLett[index];
            })}
          </ul>
          <div className="clear"></div>
        </div>
        <div className="aplh_block">
          <div className="question_block">
            <div className="question">
              <span>
                <strong>вопрос:</strong>
                {this.state.que}
              </span>
            </div>
            <div className="clear"></div>
          </div>
          <div className="letter_block">
            <div className="letter_pic">
              <ul id="letter_block_a">
                {this.alph.map((letter, index) => {
                  return (
                    <li key={letter + index} onClick={this.clickHandler}>
                      <span>{letter}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="slovo">
              <span id="slovo" onClick={this.checkAnswer}>
                назвать слово
              </span>
            </div>
            <div className="clear"></div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    alph: state.reducer_1.alph,
    que: state.reducer_1.que,
    ans: state.reducer_1.ans,
    arr: state.reducer_1.arr,
    isNext: state.reducer_1.isNext,
  };
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      setNext: action_8,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);
