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

    type StringArray = Array<string>
    
    const historyinit=atom({
        key:'historyinit',
        default:[Array(9).fill(null)]
    })

    const xinit=atom({
        key:'xinit',
        default: true
    })

    const stepnoinit= atom({
        key:'stepnoinit',
        default: 0
    })
  //   const squaresinit= atom({
  //     key:'squaresinit',
  //     default: Array(9).fill(null)
      
  // })
    

    const [historynet ,setHistory]= useRecoilState(historyinit);
    const [xIsNext, setXIsNext]=useRecoilState(xinit);
    const [stepNumber, setStepNumber]=useRecoilState(stepnoinit);
    //const [squares, setSquares]= useRecoilState(squaresinit)



    // function handleClick(i:any){
    //     const history= historynet.slice(0, stepNumber+1);
    //     const current= history[stepNumber];
    //     const squares = [...current];
    //     squares[i]=xIsNext?"X":"O";
        
    //     if (calculateWinner(squares) || squares[i]) {
    //         return;
    //       }  

    //       setHistory(history.concat(squares));
    //       setStepNumber(history.length);
    //       setXIsNext(!xIsNext);
    // }

    function handleClick(i:any){
      console.log("CLicked")
    }

    function jumpTo(step: any){
        setStepNumber(step);
        setXIsNext((step % 2) === 0);

    }

    function render() {
        const history = historynet;
        const current = history[stepNumber];
        const winner = calculateWinner(current);
    
        const moves = history.map((step, move) => {
          const desc = move ?
            'Go to move #' + move :
            'Go to game start';
          return (
            <li key={move}>
              <button onClick={() => jumpTo(move)}>{desc}</button>
            </li>
          );
        });
    
        let status;
        if (winner) {
          status = "Winner: " + winner;
        } else {
          status = "Next player: " + (xIsNext ? "X" : "O");
        }
    
        return (
          <div className="game">
            <div className="game-board">
              <Board
                squares={history[stepNumber]}
                onClick={(i:any) => handleClick(i)}
              />
            </div>
            <div className="game-info">
              <div>{status}</div>
              <ol>{moves}</ol>
            </div>
          </div>
        );
      }
    function calculateWinner(squares: StringArray) {
        const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]];
      
        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
          }
        }
        return null;
      }

      return render();
}

export default Game;