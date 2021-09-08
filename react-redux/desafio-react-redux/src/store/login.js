import { combineReducers } from "@reduxjs/toolkit";
import createAsyncSlice from "./helper/createAsyncSlice";
import { removePhotos } from "./photos";

const keyLocalStorage = "tokenPrepare";

const token = createAsyncSlice({
  name: "token",
  initialState: {
    data: {
      token: JSON.parse(window.localStorage.getItem(keyLocalStorage)),
    },
  },
  reducers: {
    removeToken(state) {
      state.data = null;
    },
    fetchSuccess: {
      reducer: (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      },
      prepare: (payload) => {
        return {
          payload,
          meta: {
            localStorage: {
              key: keyLocalStorage,
              value: payload.token,
            },
          },
        };
      },
    },
  },
  fetchConfig: (user) => ({
    url: "https://dogsapi.origamid.dev/json/jwt-auth/v1/token",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    },
  }),
});

const user = createAsyncSlice({
  name: "user",
  reducers: {
    removeUser(state) {
      state.data = null;
    },
  },
  fetchConfig: (token) => ({
    url: "https://dogsapi.origamid.dev/json/api/user",
    options: {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    },
  }),
});

const reducer = combineReducers({ token: token.reducer, user: user.reducer });

const fetchToken = token.asyncAction;
const fetchUser = user.asyncAction;

const { removeToken } = token.actions;
const { removeUser } = user.actions;

export default reducer;

export const login = (user) => async (dispatch) => {
  try {
    const { payload } = await dispatch(fetchToken(user));
    if (payload.token !== undefined) await dispatch(fetchUser(payload.token));
  } catch (error) {}
};

export const autoLogin = () => async (dispatch, getState) => {
  const { login } = getState();
  const { token } = login.token.data;

  if (token) await dispatch(fetchUser(token));
};

export const userLogout = () => (dispatch) => {
  dispatch(removeUser());
  dispatch(removeToken());
  dispatch(removePhotos());
  window.localStorage.removeItem(keyLocalStorage);
};
