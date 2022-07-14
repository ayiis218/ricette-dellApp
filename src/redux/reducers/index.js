import { combineReducers } from 'redux';
import latestRecipeReducer from './latestRecipe';
import listRecipeReducer from './listRecipe';
import detailRecipeReducer from './detailRecipe';
import detailUserReducer from './detailUser';
import recipeCommentsReducer from './recipeComment';
import userRecipesReducer from './userRecipe';

const rootReducers = combineReducers({
  latestRecipe: latestRecipeReducer,
  listRecipe: listRecipeReducer,
  detailRecipe: detailRecipeReducer,
  recipeComment: recipeCommentsReducer,
  detailUser: detailUserReducer,
  userRecipe: userRecipesReducer
});

export default rootReducers;