import React from 'react';

const CourseCard = ({ course }) => {
  // Destructure the course object
  const {
    name,
    instructor,
    description,
    enrollmentStatus,
    thumbnail,
    duration,
    schedule,
    location,
    prerequisites,
    syllabus = [], // Default to empty array if undefined
    students = []   // Default to empty array if undefined
  } = course;

  // Add color coding for enrollment status
  const statusColors = {
    Open: 'bg-green-100 text-green-800',
    'In Progress': 'bg-yellow-100 text-yellow-800',
    Closed: 'bg-red-100 text-red-800'
  };

  return (
    <div className="course-card px-1 w-[30rem] min-h-[35rem] bg-white shadow-lg rounded-lg overflow-hidden transform transition-all hover:scale-105 duration-300 max-md:w-[95vw]">
      <img src={thumbnail} alt={`${name} thumbnail`} className="w-[100vw] rounded-lg object-cover max-md:w-[100vw]" />
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-3">{name}</h2>
        <p className="text-lg text-gray-700 mb-1"><span className="font-medium">Instructor:</span> {instructor}</p>
        <p className="text-gray-600 text-sm mb-3">{description}</p>
        <div className="mt-4">
          <p className="text-gray-500"><span className="font-medium">Duration:</span> {duration}</p>
          <p className="text-gray-500"><span className="font-medium">Mode:</span> {location}</p>
          <p className="text-gray-500 pb-4"><span className="font-medium">Schedule:</span> {schedule}</p>
        </div>
        <div className="absolute bottom-3 right-3">
          <div className={`w-fit px-3 py-1 rounded-full text-sm font-semibold ${statusColors[enrollmentStatus]}`}>
            {enrollmentStatus}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
