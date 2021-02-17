import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import TodoReducer from "../store/reducers/TodoReducer";

const root = combineReducers({ TodoReducer });
const middlewares = [thunkMiddleware];
const store = createStore(
  root,
  composeWithDevTools(applyMiddleware(...middlewares))
);
export default store;
