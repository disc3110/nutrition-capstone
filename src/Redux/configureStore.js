import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import thunk from 'redux-thunk';
import groups from './Sports/groups';
import sports from './Sports/sportsList';
import toFilter from './Filter/filter';

const reducer = combineReducers({
  // additional reducers could be added here
  groups,
  sports,
  toFilter,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk)),
);

export default store;
