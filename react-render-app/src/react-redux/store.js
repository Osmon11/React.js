import { applyMiddleware, createStore, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { GetDataReducer } from './GetDataReducer';

const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
const reducers = combineReducers({
  GetDataReducer: GetDataReducer,
});
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
export default store;
