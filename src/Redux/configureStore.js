import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import thunk from 'redux-thunk';
import groups from './Sports/groups';
import sports from './Sports/sportsList'

const reducer = combineReducers({
  // additional reducers could be added here
  groups,
  sports,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk)),
);

export default store;
