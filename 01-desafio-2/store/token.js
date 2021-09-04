const FETCH_STARTED = "token/FETCH_STARTED";
const FETCH_SUCCESS = "token/FETCH_SUCCESS";
const FETCH_ERROR = "token/FETCH_ERROR";

export const LOCAL_STORAGE_TOKEN = "token_storage";

export const fetchTokenStarted = () => ({ type: FETCH_STARTED });
export const fetchTokenSuccess = (data, key) => ({
  type: FETCH_SUCCESS,
  payload: data,
  localStorage: key,
});
export const fetchTokenError = (error) => ({
  type: FETCH_ERROR,
  payload: error,
});

const initialState = {
  loading: false,
  data: JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_TOKEN)) || null,
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
