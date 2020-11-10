import React from "react";
import { useDrag, DragPreviewImage } from "react-dnd";
import "./App.css";

export default function Piece({ piece: { type, color }, position }) {
  const [{ isDragging }, drag, preview] = useDrag({
    item: {
      type: "piece",
      id: `${position}_${type}_${color}`,
    },
    collect: (monitor) => {
      return { isDragging: !!monitor.isDragging() };
    },
  });
  const pieceImg = require(`./assets/${type}_${color}.png`);
  return (
    <>
      <DragPreviewImage connect={preview} src={pieceImg.default} />
      <div
        className='pieceContaier'
        ref={drag}
        style={{ opacity: isDragging ? 0 : 1 }}
      >
        <img
          className={"piece " + (color === "b" ? "blackPiece" : "whitePiece")}
          src={pieceImg.default}
          alt=''
        />
      </div>
    </>
  );
}
