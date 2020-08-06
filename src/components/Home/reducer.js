import {
  FETCHING_GAMES,
  FETCH_GAMES_SUCCESS,
  FETCH_GAMES_ERROR,
  GAMES_KEY,
  REDUCER_NAME
} from "./constants";
const initialState = {
  [GAMES_KEY]: null
};
export const ReducerName = REDUCER_NAME;
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_GAMES:
      return {
        ...state,
        loading: true,
        [GAMES_KEY]: null
      };
    case FETCH_GAMES_SUCCESS:
      return {
        ...state,
        loading: false,
        [GAMES_KEY]: action[GAMES_KEY],
      };
    case FETCH_GAMES_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
