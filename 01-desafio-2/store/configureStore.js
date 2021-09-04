import token from "./token.js";
import user from "./user.js";
import { thunk, localStorage } from "./middlewares.js";

const { applyMiddleware, compose, combineReducers, createStore } = Redux;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(applyMiddleware(thunk, localStorage));
const reducer = combineReducers({ token, user });
const store = createStore(reducer, enhancer);

export default store;
