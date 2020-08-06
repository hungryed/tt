import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import GameShow from './GameShow';
import { fetchGame } from './actions';
import { getGame } from './selectors';

class Game extends Component {

  componentDidMount() {
    this.props.fetchGame()
  }

  render() {
    const { game } = this.props

    return (
      <Fragment>
        { game && <GameShow game={game} /> }
      </Fragment>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    game: getGame(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  fetchGame: fetchGame(dispatch)
}


Home = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)

export default Home;

export default Game;
