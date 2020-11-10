import React from "react";
import "./App.css";

export default function Square({ children, isBlack }) {
  return (
    <div className={(isBlack ? "squareBlack" : "squareWhite") + " boardSquare"}>
      {children}
    </div>
  );
}
