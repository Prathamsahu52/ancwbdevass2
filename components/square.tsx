import React from "react";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

interface SquareProps{
  value: number,
  onClick:()=>any;
}
const Square = ({ value, onClick }:SquareProps) => {
  
  return (
    <button onClick = {onClick} className="square">
      {value}
    </button> 
  );
};

export default Square;