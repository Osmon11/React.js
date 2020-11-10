import React from "react";
import "./App.css";
import BoardSuare from "./BoardSquare";

export const boardRef = React.createRef();
export default function Board({ board }) {
  function getLocation(i) {
    const x = i % 8;
    const y = Math.abs(Math.floor(i / 8) - 7);
    return { x, y };
  }
  function isBlack(i) {
    const { x, y } = getLocation(i);
    return (x + y) % 2 === 1;
  }
  function getPosition(i) {
    const { x, y } = getLocation(i);
    const letter = ["a", "b", "c", "d", "e", "f", "g", "h"][x];
    return `${letter}${y + 1}`;
  }
  return (
    <div className='board' ref={boardRef}>
      {board.flat().map((piece, i) => {
        return (
          <div key={i} className='square'>
            <BoardSuare
              piece={piece}
              isBlack={isBlack(i)}
              position={getPosition(i)}
            />
          </div>
        );
      })}
    </div>
  );
}
