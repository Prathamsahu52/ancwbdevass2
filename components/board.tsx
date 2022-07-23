import { prependOnceListener } from "process";
import React from "react";
import { useRecoilState } from "recoil";
import Square from "./square";


function Board(props: any){

    function renderSquare(i: number){
        return <Square value={props.squares[i]} onClick={(i: any)=>props.onClick(i)} />
     }
     
    return (
        <div>
            <div className="board-row">
                <>{renderSquare(1)}
            {renderSquare(2)}
            {renderSquare(3)}</>
            

            </div>
            <div className="board-row">
            <>{renderSquare(1)}
            {renderSquare(2)}
            {renderSquare(3)}</>

            </div>
            <div className="board-row">
            <>{renderSquare(1)}
            {renderSquare(2)}
            {renderSquare(3)}</>
        </div>
    </div>
            
    );
}

export default Board;