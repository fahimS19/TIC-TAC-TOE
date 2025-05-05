import CalculateWinner from "./Winner";
function Square({ value, handleClick }) {
  return (
    <button
      className="bg-purple-200 text-center h-12 w-12 m-1 leading-12 border border-black"
      onClick={handleClick}
    >
      {value}
    </button>
  );
}
const Board = ({ isXnext, currentSquares, onPlay }) => {
  const winner = CalculateWinner(currentSquares);

  function handleClick(i) {
    if (currentSquares[i] || winner) {
      return;
    }

    const newSquares = [...currentSquares];
    if (isXnext) {
      newSquares[i] = "X";
    } else {
      newSquares[i] = "O";
    }
    onPlay(newSquares);
  }
  return (
    <>
      <div className="font-bold text-green-400">
        {winner
          ? `Winner is ${winner}`
          : `Next Player : ${isXnext ? "X" : "O"}`}
      </div>
      <div className="flex">
        <Square
          value={currentSquares[0]}
          handleClick={() => {
            handleClick(0);
          }}
        />
        <Square
          value={currentSquares[1]}
          handleClick={() => {
            handleClick(1);
          }}
        />
        <Square
          value={currentSquares[2]}
          handleClick={() => {
            handleClick(2);
          }}
        />
      </div>
      <div className="flex">
        <Square
          value={currentSquares[3]}
          handleClick={() => {
            handleClick(3);
          }}
        />
        <Square
          value={currentSquares[4]}
          handleClick={() => {
            handleClick(4);
          }}
        />
        <Square
          value={currentSquares[5]}
          handleClick={() => {
            handleClick(5);
          }}
        />
      </div>
      <div className="flex">
        <Square
          value={currentSquares[6]}
          handleClick={() => {
            handleClick(6);
          }}
        />
        <Square
          value={currentSquares[7]}
          handleClick={() => {
            handleClick(7);
          }}
        />
        <Square
          value={currentSquares[8]}
          handleClick={() => {
            handleClick(8);
          }}
        />
      </div>
    </>
  );
};

export default Board;
