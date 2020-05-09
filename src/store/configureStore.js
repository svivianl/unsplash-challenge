import { combineReducers, createStore, applyMiddleware, compose } from "redux";
// import thunk from "redux-thunk";
import thunk from "redux-thunk";
import { upslashReducer } from "./reducers";

const reducer = combineReducers({
  upslashState: upslashReducer,
});

const store = createStore(reducer, compose(applyMiddleware(thunk)));

export default store;
