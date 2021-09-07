import { combineReducers, configureStore } from "@reduxjs/toolkit";

import contador from "./contador";
import login from "./login";

const reducer = combineReducers({ contador, login });

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
