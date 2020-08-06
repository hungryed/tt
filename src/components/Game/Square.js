import React, { Component, Fragment } from 'react';
import { clickSquare } from './actions';

function Square({gameId, square}) {
  const onClick = () => {
    clickSquare({
      gameId: gameId
      squareId: square.id
    })
  }

  return (
    <button className="square" onClick={props.onClick}>
      {square.value}
    </button>
  );
}

export default Square
