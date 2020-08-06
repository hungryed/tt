import React, { Component, Fragment } from 'react';
import Square from './Square';

class Board extends Component {
  renderSquare({column, row}) {
    return (
      const square = this.props.squares.find((square) => {
        return square.column === column && square.row === row
      });

      <Square gameId={this.props.gameId} square={square} />
    );
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare({ column: "a", row: 0})}
          {this.renderSquare({ column: "a", row: 1})}
          {this.renderSquare({ column: "a", row: 2})}
        </div>
        <div className="board-row">
          {this.renderSquare({ column: "b", row: 0})}
          {this.renderSquare({ column: "b", row: 1})}
          {this.renderSquare({ column: "b", row: 2})}
        </div>
        <div className="board-row">
          {this.renderSquare({ column: "c", row: 0})}
          {this.renderSquare({ column: "c", row: 1})}
          {this.renderSquare({ column: "c", row: 2})}
        </div>
      </div>
    );
  }
}

export default Board
