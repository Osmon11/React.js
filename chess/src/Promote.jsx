import React from "react";
import { move } from "./Game";
import Square from "./Square";
import "./App.css";

const somedialog = React.createRef();
const promotionPiece = ["r", "n", "b", "q"];

export default function Promote({ promotion: { from, to, color } }) {
  function clickHandler(p) {
    move(from, to, p);
  }
  return (
    <div ref={somedialog} className='dialog dialog--open'>
      <div className='dialog__overlay'></div>
      <div className='dialog__content'>
        <h2>Sellect your ptomotion Piece</h2>
        <div className='board'>
          {promotionPiece.map((p, i) => (
            <div key={i} className='promoteSquare'>
              <Square isBlack={i % 2 === 0}>
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                  onClick={() => clickHandler(p)}
                >
                  <img
                    className='piece'
                    src={require(`./assets/${p}_${color}.png`).default}
                    alt=''
                  />
                </div>
              </Square>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
