import React from "react";


function Square(props: any) {
    return <button className='square' onClick={props.OnClick}>{props.value}</button>;
  }

  export default Square;
