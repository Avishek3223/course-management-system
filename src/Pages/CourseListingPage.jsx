import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCourses } from '../store/actions/courseActions';
import CourseCard from '../Components/CourseCard';
import CourseCardSkeleton from '../Components/CourseCardSkeleton';

const CourseListingPage = () => {
  const dispatch = useDispatch();
  const { courses, loading, error } = useSelector((state) => state.courseState); // Select state from Redux

  useEffect(() => {
    dispatch(fetchCourses()); // Fetch courses on component mount
  }, [dispatch]);

  if (error) return <p className="text-red-500">Error: {error}</p>; // Display error if present

  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-[90vw] px-10 flex flex-wrap gap ml-auto px-auto gap-8 mt-8 max-md:w-full max-md:px-3">
        {loading ? (
          // Show skeleton loaders while loading
          Array.from({ length: 5 }).map((_, index) => <CourseCardSkeleton key={index} />)
        ) : (
          // Render CourseCard components with fetched course data
          courses.map((course) => <CourseCard key={course.id} course={course} />)
        )}
      </div>
    </div>
  );
};

export default CourseListingPage;
