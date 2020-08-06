import {
  FETCHING_GAME,
  FETCH_GAME_SUCCESS,
  FETCH_GAME_ERROR,
  GAME_KEY,
  REDUCER_NAME
} from "./constants";
const initialState = {
  [GAME_KEY]: null
};
export const ReducerName = REDUCER_NAME;
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_GAME:
      return {
        ...state,
        loading: true,
        [GAME_KEY]: null
      };
    case FETCH_GAME_SUCCESS:
      return {
        ...state,
        loading: false,
        [GAME_KEY]: action[GAME_KEY],
      };
    case FETCH_GAME_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
