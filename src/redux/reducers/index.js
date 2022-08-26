import { combineReducers } from 'redux';
import latestRecipeReducer from './latestRecipe';
import recipeReducer from './recipe';
import listRecipeReducer from './listRecipe';
import detailRecipeReducer from './detailRecipe';
import detailUserReducer from './detailUser';
import userRecipe from './userRecipe';
import recipeComment from './recipeComment';

const rootReducers = combineReducers({
   latestRecipe: latestRecipeReducer,
   listRecipe: listRecipeReducer,
   recipe: recipeReducer,
   detailRecipe: detailRecipeReducer,
   detailUser: detailUserReducer,
   userRecipe: userRecipe,
   recipeComment: recipeComment,
});

export default rootReducers;
