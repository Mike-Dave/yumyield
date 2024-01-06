const initialState = { loading: false, error: null, categories: [] };

export default function categoriesReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_CATEGORIES_BEGIN":
      return { ...state, loading: true };
    case "FETCH_CATEGORIES_SUCCESS":
      return {
        ...state,
        categories: action.payload,
      };
    case "FETCH_CATEGORIES_ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
export const fetchDataLoading = () => ({
  type: "FETCH_CATEGORIES_BEGIN",
});

export const fetchDataSuccess = (data) => ({
  type: "FETCH_CATEGORIES_SUCCESS",
  payload: data,
});

export const fetchDataError = (error) => ({
  type: "FETCH_CATEGORIES_ERROR",
  payload: error,
});

export const categories = (state) => state.categories;
export const loading = (state) => state.loading;
