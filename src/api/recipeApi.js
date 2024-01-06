import {
  fetchDataError,
  fetchDataLoading,
  fetchDataSuccess,
} from "../components/Categories/categoriesSlice";
import {
  mealSearchError,
  mealSearchLoading,
  mealSearchSuccess,
} from "../pages/MealSearch/mealSearchSlice";
import {
  fetchDataErrorCategory,
  fetchDataLoadingCategory,
  fetchDataSuccessCategory,
} from "../pages/CategoryMealSearchPage/categoryMealSearchSlice";
import {
  CATEGORIES_URL,
  FILTER_BY_CATEGORY,
  MEAL_DETAILS_URL,
  MEAL_SEARCH_URL,
} from "../utils/constants";
import {
  mealDetailsError,
  mealDetailsLoading,
  mealDetailsSuccess,
} from "../pages/MealDetails/mealDetailsSlice";

export async function fetchCategoriesData(dispatch) {
  dispatch(fetchDataLoading);
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/${CATEGORIES_URL}`
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    console.log(data);
    console.log(data.categories);
    dispatch(fetchDataSuccess(data.categories.reverse()));
  } catch (error) {
    console.error("Error fetching data:", error.message);
    dispatch(fetchDataError(error));
  }
}

export async function fetchCategoriesMealSearch(dispatch, foodName) {
  dispatch(fetchDataLoadingCategory);
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/${FILTER_BY_CATEGORY}${foodName}`
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    dispatch(fetchDataSuccessCategory(data.meals));
  } catch (error) {
    console.error("Error fetching data:", error.message);
    dispatch(fetchDataErrorCategory(error));
  }
}

export async function fetchMealSearch(dispatch, inputValue) {
  dispatch(mealSearchLoading);
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/${MEAL_SEARCH_URL}${inputValue}`
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    if (!data) {
      // Handle the case where the response is null or undefined
      throw new Error(`No country found with the name`);
    }
    console.log(data);
    console.log(data.meals);
    dispatch(mealSearchSuccess(data.meals));
  } catch (error) {
    console.error("Error fetching data:", error.message);
    dispatch(mealSearchError(error));
  }
}

// www.themealdb.com/api/json/v1/1/lookup.php?i=52772
export async function fetchMealDetails(dispatch, id) {
  dispatch(mealDetailsLoading);
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/${MEAL_DETAILS_URL}${id}`
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    console.log(data);
    console.log(data.meals);
    dispatch(mealDetailsSuccess(data.meals));
  } catch (error) {
    console.error("Error fetching data:", error.message);
    dispatch(mealDetailsError(error));
  }
}
