import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form'
import {
  ReducerName as homeReducerName,
  reducer as homeReducer
} from '../components/Home/reducer';
import {
  ReducerName as gameReducerName,
  reducer as gameReducer
} from '../components/Game/reducer';

export default combineReducers({
  [homeReducerName]: homeReducer,
  [gameReducerName]: gameReducer
});
