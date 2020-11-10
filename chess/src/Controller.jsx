import React from "react";
import "./App.css";
import { boardRef } from "./Board";

const checkbox = React.createRef();
const input = React.createRef();

export function onPlayersMove() {
  if (checkbox.current.checked) {
    boardRef.current.classList.toggle("boardRotate");
    boardRef.current.classList.add("autoTurn");
  } else {
    boardRef.current.classList.remove("boardRotate");
    boardRef.current.classList.remove("autoTurn");
  }
  if (input.current.checked) {
    return (input.current.checked = false);
  } else {
    return (input.current.checked = true);
  }
}

export default function Controller() {
  function clickHandler(e) {
    e.preventDefault();
  }
  return (
    <div className='controller'>
      <label>
        <input ref={checkbox} type='checkbox'></input>
        <span></span>
        <i className='indicator'></i>
      </label>
      <label className='info' onClick={clickHandler}>
        <input ref={input} type='checkbox'></input>
        <span></span>
        <i className='indicator'></i>
      </label>
    </div>
  );
}
