import React, { useEffect, useState } from "react";
import "./App.css";
import Board from "./Board";
import Controller from "./Controller";
import { gameSubject, initGame, resetGame } from "./Game";

const singleTurn = React.createRef();

function App() {
  const [board, setBoard] = useState([]);
  const [isGameOver, setGameOver] = useState();
  const [result, setResult] = useState();
  useEffect(() => {
    initGame();
    const subscribe = gameSubject.subscribe((game) => {
      setBoard(game.board);
      setGameOver(game.isGameOver);
      setResult(game.result);
    });
    return () => subscribe.unsubscribe();
  }, []);
  return (
    <div className='App'>
      {isGameOver && (
        <Modal>
          <h2 className='text-gameover'>GAME OVER</h2>
          {result && <p className='text-gameover'>{result}</p>}
          <button onClick={resetGame}>
            <span>new Game</span>
          </button>
        </Modal>
      )}
      <div className='boardContainer'>
        <Controller />
        <Board board={board} />
      </div>
      <audio
        ref={singleTurn}
        src={require("./assets/single.mp3").default}
      ></audio>
    </div>
  );
}

export default App;

function Modal({ children }) {
  return (
    <div className='dialog dialog--open'>
      <div className='dialog__overlay'></div>
      <div className='dialog__content'>{children}</div>
    </div>
  );
}

export function playOnMove() {
  singleTurn.current.currentTime = 0;
  singleTurn.current.play();
}
