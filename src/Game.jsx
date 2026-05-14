import { useState } from "react";
import Board from "./Board";

function TheGame() {
  const [movesHistory, setMovesHistory] = useState([Array(9).fill(null)]);
  const [currentMovePostion, setCurrentMovePosition] = useState(0);
  const currentSquares = movesHistory[currentMovePostion];
  const xIsNext = currentMovePostion % 2 === 0;

  function OnClickingBox(presentSquares) {
    const nextHistory = [
      ...movesHistory.slice(0, currentMovePostion + 1),
      presentSquares,
    ];
    setMovesHistory(nextHistory);
    setCurrentMovePosition(nextHistory.length - 1);
    // console.log(currentMovePostion);
    // console.log(movesHistory);
  }
  function JumpTo(currentMovePosi) {
    setCurrentMovePosition(currentMovePosi);
  }

  function resetHandler() {
    setMovesHistory([Array(9).fill(null)]);
    setCurrentMovePosition(0);
    console.log("Clciked Reset !!!");
  }

  const record = movesHistory.map((element, moveNo) => {
    let description = null;
    if (moveNo > 0) {
      description = "Move to #" + moveNo;
    } else {
      description = "Move to the start";
    }

    return (
      <li key={`a${moveNo}`}>
        {(moveNo === currentMovePostion) ? (
          <span>{`Currently at Move ${moveNo}`}</span>
        ) : (
          <button onClick={() => JumpTo(moveNo)}>{description}</button>
        )}
      </li>
    );
  });

  console.log(movesHistory);
  console.log(currentMovePostion);

  return (
    <div className="game">
      <div className="game-board">
        <Board
          xIsNext={xIsNext}
          moves={currentSquares}
          onPlay={OnClickingBox}
          onReset={resetHandler}
        />
      </div>
      <div className="game-info">
        <ol>{record}</ol>
      </div>
    </div>
  );
}

export default TheGame;
