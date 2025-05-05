import Board from "./Components/Board";
import { useState } from "react";
function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [isXnext, setIsXnext] = useState(true);
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquares = history[currentMove];
  function handlePlay(newSquares) {
    const newHistory = [...history.slice(0, currentMove + 1), newSquares];
    setHistory(newHistory);
    setIsXnext(!isXnext);
    setCurrentMove(newHistory.length - 1);
  }
  function jumpToMove(move) {
    setCurrentMove(move);
    setIsXnext(move % 2 === 0);
  }
  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = `Go back to move ${move}`;
    } else {
      description = `Go back to the starting position`;
    }
    return (
      <li
        key={move}
        className="bg-amber-300 mb-1 font-bold border border-black p-1"
      >
        <button
          onClick={() => {
            jumpToMove(move);
          }}
        >
          {description}
        </button>
      </li>
    );
  });
  return (
    <>
      <div className="flex justify-center ">
        <div className="mr-7">
          <Board
            isXnext={isXnext}
            currentSquares={currentSquares}
            onPlay={handlePlay}
          />
        </div>

        <div>
          <ol>{moves}</ol>
        </div>
      </div>
    </>
  );
}

export default Game;
