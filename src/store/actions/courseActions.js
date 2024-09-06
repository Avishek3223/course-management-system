// actions/courseActions.js
import axios from 'axios';

export const FETCH_COURSES_REQUEST = 'FETCH_COURSES_REQUEST';
export const FETCH_COURSES_SUCCESS = 'FETCH_COURSES_SUCCESS';
export const FETCH_COURSES_FAILURE = 'FETCH_COURSES_FAILURE';

const API_URL = 'https://ic1rqexx2c.execute-api.us-east-1.amazonaws.com/dev/getCourses';

export const fetchCoursesRequest = () => ({
  type: FETCH_COURSES_REQUEST
});

export const fetchCoursesSuccess = (data) => ({
  type: FETCH_COURSES_SUCCESS,
  payload: data
});

export const fetchCoursesFailure = (error) => ({
  type: FETCH_COURSES_FAILURE,
  payload: error
});

export const fetchCourses = () => {
  return async (dispatch) => {
    dispatch(fetchCoursesRequest());
    try {
      const response = await axios.get(API_URL);
      console.log(response)
      dispatch(fetchCoursesSuccess(response.data));
    } catch (error) {
      dispatch(fetchCoursesFailure(error.message));
    }
  };
};
