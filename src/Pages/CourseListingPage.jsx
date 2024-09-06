import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCourses } from '../store/actions/courseActions';
import CourseCard from '../Components/CourseCard';
import CourseCardSkeleton from '../Components/CourseCardSkeleton';

const CourseListingPage = () => {
  const dispatch = useDispatch();
  const { courses, loading, error } = useSelector((state) => state.courseState); // Select state from Redux
  const [searchQuery, setSearchQuery] = useState(''); // Initialize search query state

  useEffect(() => {
    dispatch(fetchCourses()); // Fetch courses on component mount
  }, [dispatch]);

  if (error) return <p className="text-red-500">Error: {error}</p>; // Display error if present

  // Filter courses based on search query
  const filteredCourses = courses.filter((course) => {
    const courseName = course.name.toLowerCase();
    const instructorName = course.instructor.toLowerCase();
    const searchQueryLower = searchQuery.toLowerCase();
    return courseName.includes(searchQueryLower) || instructorName.includes(searchQueryLower);
  });

  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-[90vw] px-10 flex flex-wrap gap-8 ml-auto px-auto mt-8 max-md:w-full max-md:px-3">
        {/* Enhanced Search bar */}
        <div className="w-full mb-8 flex items-center justify-end">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Search by course name or instructor..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full py-3 pl-12 pr-10 text-gray-700 bg-white border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition duration-300"
            />
            <div className="absolute inset-y-0 left-4 flex items-center text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            {/* Clear button */}
            {searchQuery && (
              <button
                className="absolute inset-y-0 right-4 flex items-center text-gray-400 hover:text-gray-600"
                onClick={() => setSearchQuery('')}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>

        {loading ? (
          // Show skeleton loaders while loading
          Array.from({ length: 5 }).map((_, index) => <CourseCardSkeleton key={index} />)
        ) : (
          // Render CourseCard components with filtered course data
          filteredCourses.map((course) => <CourseCard key={course.id} course={course} />)
        )}
      </div>
    </div>
  );
};

export default CourseListingPage;
