// CourseDetails.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';

const CourseDetails = () => {
  const location = useLocation();
  const { course } = location.state || {}; // Access course details passed from CourseCard

  if (!course) {
    return <div className="text-center mt-16 text-xl text-gray-500">No course details available.</div>;
  }

  // Destructure the course object to display details
  const {
    name,
    instructor,
    description,
    enrollmentStatus,
    thumbnail,
    duration,
    schedule,
    location: courseLocation,
    prerequisites,
    syllabus,
  } = course;

  return (
    <div className="bg-gray-100 py-10">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 bg-white rounded-lg shadow-md">
        <div className="flex flex-col lg:flex-row lg:space-x-6">
          {/* Course Thumbnail */}
          <div className="lg:w-1/3">
            <img
              src={thumbnail}
              alt={`${name} thumbnail`}
              className="w-full rounded-lg shadow-lg mb-6 lg:mb-0"
            />
          </div>

          {/* Course Basic Information */}
          <div className="lg:w-2/3">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{name}</h1>
            <p className="text-xl text-gray-700 mb-4"><strong>Instructor:</strong> {instructor}</p>
            <p className="text-lg text-gray-600 mb-4">{description}</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <p className="text-base text-gray-600"><strong>Duration:</strong> {duration}</p>
              <p className="text-base text-gray-600"><strong>Schedule:</strong> {schedule}</p>
              <p className="text-base text-gray-600"><strong>Mode:</strong> {courseLocation}</p>
              <p className="text-base text-gray-600">
                <strong>Enrollment Status:</strong> 
                <span className={`ml-2 inline-block px-2 py-1 rounded ${enrollmentStatus === 'Open' ? 'bg-green-100 text-green-800' : enrollmentStatus === 'In Progress' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>
                  {enrollmentStatus}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Details Section */}
      <div className="max-w-7xl mx-auto mt-10 p-4 sm:p-6 lg:p-8 bg-white rounded-lg shadow-md">
        {/* Prerequisites */}
        {prerequisites && prerequisites.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Prerequisites</h2>
            <div className="flex flex-wrap gap-2">
              {prerequisites.map((prerequisite, index) => (
                <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  {prerequisite}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Syllabus */}
        {syllabus && syllabus.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Syllabus</h2>
            <div className="space-y-4">
              {syllabus.map((item, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg shadow-sm border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">
                    Week {item.week}: {item.topic}
                  </h3>
                  <p className="text-gray-600">{item.content}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseDetails;
