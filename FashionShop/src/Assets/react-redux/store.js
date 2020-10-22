import { applyMiddleware, createStore, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { CarouselReducer } from "./CarouselReducer";
import { AddGoodsReducer } from "./AddGoodsReducer";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
const reducers = combineReducers({
  AddGoodsReducer,
  CarouselReducer,
});
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
export default store;
