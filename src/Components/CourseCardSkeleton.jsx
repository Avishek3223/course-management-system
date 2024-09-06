import React from 'react';

const CourseCardSkeleton = () => {
  return (
    <div className="course-card px-1 w-[30rem] min-h-[35rem] bg-white shadow-lg rounded-lg overflow-hidden animate-pulse max-md:w-[95vw]">
      {/* Thumbnail skeleton */}
      <div className="w-[100vw] h-[20rem] bg-gray-200 rounded-lg max-md:w-[100vw]" />
      {/* Content skeleton */}
      <div className="p-6">
        {/* Title skeleton */}
        <div className="h-6 bg-gray-200 rounded mb-4 w-3/4" />
        {/* Instructor skeleton */}
        <div className="h-4 bg-gray-200 rounded mb-2 w-1/2" />
        {/* Description skeleton */}
        <div className="h-3 bg-gray-200 rounded mb-3 w-full" />
        <div className="h-3 bg-gray-200 rounded mb-3 w-5/6" />
        {/* Duration, Mode, and Schedule skeleton */}
        <div className="mt-4">
          <div className="h-3 bg-gray-200 rounded mb-2 w-1/4" />
          <div className="h-3 bg-gray-200 rounded mb-2 w-1/4" />
          <div className="h-3 bg-gray-200 rounded mb-4 w-1/3" />
        </div>
        {/* Enrollment status skeleton */}
        <div className="absolute bottom-3 right-3">
          <div className="h-4 w-20 bg-gray-200 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default CourseCardSkeleton;
