import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchGames } from './actions';
import { getGames } from './selectors';


function Home({ fetchGames, games }) {
  useEffect(() => {
    fetchGames()
  })
  return (
    <Fragment>
      <button className="square" onClick={props.onClick}>
        Start a game
      </button>

      {
        games && games.map
      }
    </Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    games: getGames(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  fetchGames: fetchGames(dispatch)
}


Home = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)

export default Home;
