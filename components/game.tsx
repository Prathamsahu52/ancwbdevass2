import React from "react";
import Board from "./board";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';




function Game(){
  const stepinit=atom({
    key:'stepinit',
    default:0
  })
  const xinit=atom({
    key:'xinit',
    default:true
  })
  const hisinit=atom({
    key:'hisinit',
    default:[Array(9).fill(null)]
  })
  const [history, setHistory] = useRecoilState(hisinit);
  const [stepNumber, setStepNumber] = useRecoilState(stepinit);
  const [xIsNext, setXisNext] = useRecoilState(xinit);
  const squares=history[stepNumber]
  const winner = calculateWinner(squares);


  const handleClick = (i: number) => {
    const historyPoint = history.slice(0, stepNumber + 1);
    const current = historyPoint[stepNumber];
    const squares = [...current];
    

    if (winner || squares[i]) return;
   
    squares[i] = xIsNext ? "X" : "O";
    setHistory([...historyPoint, squares]);
    setStepNumber(historyPoint.length);
    setXisNext(!xIsNext);
  };

  const jumpTo = (step: number) => {
    setStepNumber(step);
    setXisNext(step % 2 === 0);
  };

  const render = () =>
    history.map((_step, move) => {
      const destination = move ? `Go to move #${move}` : "Go to Start";
      return (
        <li key={move}>
          <button onClick={() => jumpTo(move)}>{destination}</button>
        </li>
      );
    });

   function calculateWinner(squares:string[]) {
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ];
      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
          return squares[a];
        }
      }
      return null;
    }
    
    

  return (
    <>
      
      <Board squares={history[stepNumber]} onClick={handleClick} />
      
      <div className="game-info">
        <div>
          {render()}
        </div>
      </div>
      <button>{winner ? "Winner: " + winner : "Next Player: " + (xIsNext ? "X" : "O")}</button>
    </>
  );
};

export default Game;