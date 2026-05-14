import { useState } from "react";
import Cell from "./Elements";

function Board({ xIsNext, moves, onPlay, onReset }) {
  //   const [move, setMove] = useState(Array(9).fill(null));
  //   const [xIsNext, setXIsNext] = useState(false);
  //   console.log(move);
  function HandleClick(i) {
    // if (moves[i] || DeclareWinner(moves) || gameOver) return;
    if (moves[i] || Object.keys(DeclareWinner(moves)).length !== 0 || gameOver)
      return;
    const newSqaures = [...moves]; // last jo move chala tha
    //   newMove[i] = "X";
    newSqaures[i] = xIsNext ? "X" : "O"; // set the current move ( X or O)  in the array newSquares
    // setMove(newMove);
    // setXIsNext(!xIsNext);
    onPlay(newSqaures);
  }

  function DeclareWinner(move) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (move[a] && move[a] === move[b] && move[a] === move[c]) {
        console.log("Winner");
        // return move[a];
        return { winner: move[a], lines: [a, b, c] };
      }
    }
    return {};
  }

  const winner = Object.keys(DeclareWinner(moves)).length
    ? DeclareWinner(moves).winner
    : null;
  let status = null;
  let gameOver = null;

  gameOver = moves.every((ele) => ele !== null);
  if (winner) {
    status = "Winner : " + winner;
  } else if (!gameOver) {
    status = "Next Player's move : " + (xIsNext ? "X" : "O");
  } else if (gameOver) {
    status = "Game Over !!! ";
  }

  let outerArr = Array(3).fill(null);
  //   let win = [];
  const layoutArr = outerArr.map((_, rowIdx) => {
    let innerArr = Array(3).fill(null);

    const innerLayout = innerArr.map((_, colIdx) => {
      let currentIndex = rowIdx * 3 + colIdx;
      //   const winnerLines = () => {
      //     if (Object.keys(DeclareWinner(moves))) {
      //       const { lines } = DeclareWinner(moves);
      //       let ans = lines.includes(currentIndex);
      //       return ans;
      //     }
      //   };

      const result = DeclareWinner(moves);
      const winnerLines = Object.keys(result).length ? result.lines : [];
      const isSquareWinning = winnerLines.includes(currentIndex);

      return (
        <Cell
          key={currentIndex}
          value={moves[currentIndex]}
          ClickHandler={() => HandleClick(currentIndex)}
          HighlightSquare={isSquareWinning}
        />
      );
    });

    return (
      <div key={rowIdx} className="Board-Row">
        {innerLayout}
      </div>
    );
  });

  return (
    <>
      <div>{status}</div>
      <div key="parent">{layoutArr}</div>
      <div>
        <button onClick={onReset}>Reset Game</button>
      </div>
    </>
  );
}

export default Board;

/*
      <div className="board-row">

        <Cell value={moves[0]} ClickHandler={() => HandleClick(0)} />

        <Cell value={moves[1]} ClickHandler={() => HandleClick(1)} />

        <Cell value={moves[2]} ClickHandler={() => HandleClick(2)} />

      </div>

      <div className="board-row">

        <Cell value={moves[3]} ClickHandler={() => HandleClick(3)} />

        <Cell value={moves[4]} ClickHandler={() => HandleClick(4)} />

        <Cell value={moves[5]} ClickHandler={() => HandleClick(5)} />

      </div>

      <div className="board-row">

        <Cell value={moves[6]} ClickHandler={() => HandleClick(6)} />

        <Cell value={moves[7]} ClickHandler={() => HandleClick(7)} />

        <Cell value={moves[8]} ClickHandler={() => HandleClick(8)} />

      </div>
*/

/*

layoutArr = Array(3).fill(null)
lay = []

const layout = layoutArr.map((element,idx) => {
    element = <div key = { idx+ 1}> 
    <Cell key = idx /> <Cell key = idx/> <Cell key = idx/>
    </div>

    return element
    })

    lay.push(<div key = parent>{layout}</div>)
    
    
*/

/*

let outerArr = Array(3).fill(null)

outerArr.map((_,rowIdx) => {
    let innerArr = Array(3).fill(null)

    innerArr.map((_,colIdx) => {
        return <Cell value={moves[rowIdx * 3 + colIdx]} ClickHandler={() => HandleClick(rowIdx * 3 + colIdx)} />
        })

        return <div key = {rowIdx} className = "Board-Row">{innerArr}</div>
    })
*/

// Way1 to create dynamic gameBox
/*
  const layoutArr = [];
  {
    for (let i = 0; i < 3; i++) {
      const rowCell = [];
      for (let j = 0; j < 3; j++) {
        rowCell.push(
          <Cell
            key={i * 3 + j}
            value={moves[i * 3 + j]}
            ClickHandler={() => HandleClick(i * 4 + j)}
          />,
        );
      }
      //   layoutArr.push(<br />); // Not correct , creates a flat list
      layoutArr.push(
        <div className="board-row" key={i}>
          {rowCell}
        </div>,
      );
    }
  }

   return (
    <>
      <div>{status}</div>
      <div key="parent">{layoutArr}</div>
      <div>
        <button onClick={onReset}>Reset Game</button>
      </div>
    </>
  );
*/

// WAY 2 fro dynamic game box
/*
  let outerArr = Array(3).fill(null);

  const layoutArr = outerArr.map((_, rowIdx) => {
    let innerArr = Array(3).fill(null);

    const innerLayout = innerArr.map((_, colIdx) => {
      return (
        <Cell
          key={rowIdx * 3 + colIdx}
          value={moves[rowIdx * 3 + colIdx]}
          ClickHandler={() => HandleClick(rowIdx * 3 + colIdx)}
        />
      );
    });

    return (
      <div key={rowIdx} className="Board-Row">
        {innerLayout}
      </div>
    );
  });

  return (
    <>
      <div>{status}</div>
      <div key="parent">{layoutArr}</div>
      <div>
        <button onClick={onReset}>Reset Game</button>
      </div>
    </>
*/


/*

*/