const initialState = { loading: false, error: null, meals: [] };

export default function mealSearchReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_MEALSEARCH_BEGIN":
      return { ...state, loading: true };
    case "FETCH_MEALSEARCH_SUCCESS":
      return {
        ...state,
        meals: action.payload,
      };
    case "FETCH_MEALSEARCH_ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
export const mealSearchLoading = () => ({
  type: "FETCH_MEALSEARCH_BEGIN",
});

export const mealSearchSuccess = (data) => ({
  type: "FETCH_MEALSEARCH_SUCCESS",
  payload: data,
});

export const mealSearchError = (error) => ({
  type: "FETCH_MEALSEARCH_ERROR",
  payload: error,
});
