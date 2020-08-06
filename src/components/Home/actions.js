import {
  FETCHING_GAMES,
  FETCH_GAMES_SUCCESS,
  FETCH_GAMES_ERROR,
  GAMES_KEY,
} from './constants';
import { dataApiGet } from '../../utils/requester';


const fetchingGames = () => {
  return {
    type: FETCHING_GAMES
  }
}

const fetchGamesSuccess = (games) => {
  return {
    type: FETCH_GAMES_SUCCESS,
    games
  }
}

export const fetchGames = (dispatch) => {
  return () => {
    dispatch(fetchingGames())

    dataApiGet({
      path: "/api/games"
    }).then((res) => {
      dispatch(fetchGamesSuccess(res.data.games))
    }).catch(res => console.log(res))
  }
}
