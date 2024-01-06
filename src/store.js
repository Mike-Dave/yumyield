import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import categoriesReducer from "./components/Categories/categoriesSlice";
import { mealDetailsReducer } from "./pages/MealDetails/mealDetailsSlice";
import categoriesMealSearchReducer from "./pages/CategoryMealSearchPage/categoryMealSearchSlice";
import mealSearchReducer from "./pages/MealSearch/mealSearchSlice";

const rootReducer = combineReducers({
  categories: categoriesReducer,
  categoriesMealSearch: categoriesMealSearchReducer,
  mealDetails: mealDetailsReducer,
  mealSearch: mealSearchReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
