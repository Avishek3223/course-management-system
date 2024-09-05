import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCourses } from '../store/actions/courseActions';

const CourseListingPage = () => {
  const dispatch = useDispatch();
  const { loading, courses, error } = useSelector(state => state.courseState);

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Courses</h1>
      <ul>
        {courses.map((course, index) => (
          <li key={index}>{course.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CourseListingPage