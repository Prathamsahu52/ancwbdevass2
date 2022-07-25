import { prependOnceListener } from "process";
import React from "react";
import { useRecoilState } from "recoil";
import Square from "./square";





interface Props1{
  squares:number[]
  onClick:(i:number)=>any;
 
}
function Board({squares,onClick}:Props1){

    function renderSquare(i:number ){
       return  <Square key={i} value={squares[i]} onClick={() => onClick(i)} />
    }


  return(
  <>
 
  <div className="board">
    <div className="board-row">
    {renderSquare(0)}
    {renderSquare(1)}
    {renderSquare(2)}    
    </div>
    <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}

        
    </div>
    <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}

        
    </div>
    </div>
  </>)
};

export default Board