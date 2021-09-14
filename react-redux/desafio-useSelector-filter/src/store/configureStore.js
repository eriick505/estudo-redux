import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productsSlice from "./productsSlice";

const reducer = combineReducers({ products: productsSlice });

const store = configureStore({
  reducer,
});

export default store;
