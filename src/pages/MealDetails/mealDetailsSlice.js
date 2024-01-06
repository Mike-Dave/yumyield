const initialState = { loading: false, error: null, details: [] };

export function mealDetailsReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_MEALDETAILS_BEGIN":
      return { ...state, loading: true };
    case "FETCH_MEALDETAILS_SUCCESS":
      return {
        ...state,
        details: action.payload,
      };
    case "FETCH_MEALDETAILS_ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}

export const mealDetailsLoading = () => ({
  type: "FETCH_MEALDETAILS_BEGIN",
});

export const mealDetailsSuccess = (data) => ({
  type: "FETCH_MEALDETAILS_SUCCESS",
  payload: data,
});

export const mealDetailsError = (error) => ({
  type: "FETCH_MEALDETAILS_ERROR",
  payload: error,
});
