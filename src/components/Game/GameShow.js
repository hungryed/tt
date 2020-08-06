import React, { Component, Fragment } from 'react';

class GameShow extends Component {
  render() {
    const game = this.props.game;

    let status = game.status;

    return (
      <div className="game">
        <div className="game-board">
          <Board gameId={game.id} squares={game.squares} />
        </div>
        <div className="game-info">
          <div>{status}</div>
        </div>
      </div>
    );
  }
}

export default GameShow
