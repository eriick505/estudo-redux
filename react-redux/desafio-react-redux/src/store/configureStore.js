import { combineReducers, configureStore } from "@reduxjs/toolkit";

import login from "./login";
import localStorage from "./middleware/localStorage";
import photos from "./photos";

const reducer = combineReducers({ login, photos });

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorage),
});

export default store;
