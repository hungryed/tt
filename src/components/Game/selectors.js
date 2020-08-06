import {
  GAME_KEY,
  REDUCER_NAME
} from "./constants";
const getReducerState = (state) => {
  return state[REDUCER_NAME];
};
const stateDig = (state, ...keys) => {
  return keys.reduce(
    (currentState, key) => currentState && currentState[key],
    getReducerState(state)
  );
};
export const getGame = (state) => stateDig(state, GAME_KEY)
