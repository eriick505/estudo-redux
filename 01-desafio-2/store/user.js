const FETCH_STARTED = "user/FETCH_STARTED";
const FETCH_SUCCESS = "user/FETCH_SUCCESS";
const FETCH_ERROR = "user/FETCH_ERROR";

export const fetchUserStarted = () => ({ type: FETCH_STARTED });
export const fetchUserSuccess = (data) => ({
  type: FETCH_SUCCESS,
  payload: data,
});
export const fetchUserError = (error) => ({
  type: FETCH_ERROR,
  payload: error,
});

const initialState = {
  loading: false,
  data: null,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STARTED:
      return { ...state, loading: true };
    case FETCH_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case FETCH_ERROR:
      return { loading: false, data: null, error: action.payload };
    default:
      return state;
  }
};

export default reducer;
