// reducers/index.js
import { combineReducers } from 'redux';
import courseReducer from './courseReducer';

const rootReducer = combineReducers({
  courseState: courseReducer
});

export default rootReducer;
