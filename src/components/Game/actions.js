import {
  FETCHING_GAME,
  FETCH_GAME_SUCCESS,
  FETCH_GAME_ERROR,
  GAMES_KEY,
} from './constants';
import { dataApiGet } from '../../utils/requester';


const fetchingGame = () => {
  return {
    type: FETCHING_GAME
  }
}

const fetchGameSuccess = (games) => {
  return {
    type: FETCH_GAME_SUCCESS,
    games
  }
}

export const fetchGame = (dispatch) => {
  return (id) => {
    dispatch(fetchingGame())

    dataApiGet({
      path: `/api/games/${id}`
    }).then((res) => {
      dispatch(fetchGameSuccess(res.data.game))
    }).catch(res => console.log(res))
  }
}
