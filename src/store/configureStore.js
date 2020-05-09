import { combineReducers, createStore, applyMiddleware, compose } from "redux";
// import thunk from "redux-thunk";
import thunk from "redux-thunk";
import { unsplashReducer } from "./reducers";

const reducer = combineReducers({
  unsplashState: unsplashReducer,
});

const store = createStore(reducer, compose(applyMiddleware(thunk)));

export default store;
