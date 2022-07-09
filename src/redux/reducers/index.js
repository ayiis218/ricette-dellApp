import { combineReducers } from 'redux';
import detailReducer from './detail';
import recipeReducer from './recipe';
import userReducer from './user';

const rootReducers = combineReducers({
  getRecipe: recipeReducer,
  getDetail: detailReducer,
  getUser: userReducer
});

export default rootReducers;