const initialState = { loading: false, error: null, categoryMeals: [] };

export default function categoriesMealSearchReducer(
  state = initialState,
  action
) {
  switch (action.type) {
    case "FETCH_CATEGORYMEALSEARCH_BEGIN":
      return { ...state, loading: true };
    case "FETCH_CATEGORYMEALSEARCH_SUCCESS":
      return {
        ...state,
        categoryMeals: action.payload,
      };
    case "FETCH_CATEGORYMEALSEARCH_ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
export const fetchDataLoadingCategory = () => ({
  type: "FETCH_CATEGORYMEALSEARCH_BEGIN",
});

export const fetchDataSuccessCategory = (data) => ({
  type: "FETCH_CATEGORYMEALSEARCH_SUCCESS",
  payload: data,
});

export const fetchDataErrorCategory = (error) => ({
  type: "FETCH_CATEGORYMEALSEARCH_ERROR",
  payload: error,
});
