import React, { useEffect, useState } from "react";
import { useDrop } from "react-dnd";
import { gameSubject, handleMove } from "./Game";
import Piece from "./Piece";
import Promote from "./Promote";
import Square from "./Square";

export default function BoardSuare({ piece, isBlack, position }) {
  const [_, drop] = useDrop({
    accept: "piece",
    drop: (item) => {
      const [fromPosition] = item.id.split("_");
      handleMove(fromPosition, position);
    },
  });
  const [promotion, setPromotion] = useState(null);
  useEffect(() => {
    const subscribe = gameSubject.subscribe(({ pendingPromotion }) => {
      pendingPromotion && pendingPromotion.to === position
        ? setPromotion(pendingPromotion)
        : setPromotion(null);
    });
    return () => subscribe.unsubscribe;
  }, []);
  return (
    <div className='boardSquare' ref={drop}>
      <Square isBlack={isBlack}>
        {promotion ? (
          <Promote promotion={promotion} />
        ) : piece ? (
          <Piece piece={piece} position={position} />
        ) : null}
      </Square>
    </div>
  );
}
