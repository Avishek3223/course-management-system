// reducers/courseReducer.js
import {
    FETCH_COURSES_REQUEST,
    FETCH_COURSES_SUCCESS,
    FETCH_COURSES_FAILURE
  } from '../actions/courseActions';
  
  const initialState = {
    loading: false,
    courses: [],
    error: ''
  };
  
  const courseReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_COURSES_REQUEST:
        return {
          ...state,
          loading: true
        };
      case FETCH_COURSES_SUCCESS:
        return {
          loading: false,
          courses: action.payload,
          error: ''
        };
      case FETCH_COURSES_FAILURE:
        return {
          loading: false,
          courses: [],
          error: action.payload
        };
      default:
        return state;
    }
  };
  
  export default courseReducer;
  