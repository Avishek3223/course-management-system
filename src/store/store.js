// store.js
import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk'; // Update this line
import rootReducer from './reducers';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk) // Apply middleware correctly
);

export default store;