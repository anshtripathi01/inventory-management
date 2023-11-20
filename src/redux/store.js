import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import itemReducer from './reducers/itemReducer';
import saleReducer from './reducers/saleReducer';

const rootReducer = combineReducers({
  items: itemReducer,
  sales: saleReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
