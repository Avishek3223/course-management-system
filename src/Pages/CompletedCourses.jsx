import React, { useEffect } from 'react';
import Dashboard from '../Components/Dashboard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCourses } from '../store/actions/courseActions';

function CompletedCourses() {
  const dispatch = useDispatch();
  const { courses } = useSelector((state) => state.courseState);
  const studentName = 'Charlie Brown'; // Replace with dynamic student name if needed
  useEffect(() => {
      dispatch(fetchCourses());
  }, [dispatch]); // Replace with dynamic student name if needed

  // Filter courses where the student's status is "Completed"
  const completedCourses = courses.filter((course) =>
    course.students.some(
      (student) => student.name === studentName && student.courseStatus === 'Completed'
    )
  );

  return (
    <div className="flex h-[90vh] flex-wrap">
      <div className="w-full xl:w-1/5 p-4">
        <Dashboard /> {/* Include the Dashboard component */}
      </div>
      <div className="w-full xl:w-4/5 p-4">
        <h1 className="text-2xl font-bold mb-4">Completed Courses</h1>
        {completedCourses.length > 0 ? (
          <div className="overflow-x-auto rounded-lg shadow">
            <table className="w-full text-lg bg-white">
              <thead className="text-gray-700 bg-gray-100">
                <tr>
                  <th className="px-6 py-3 text-left">Course Name</th>
                  <th className="px-6 py-3 text-left">Instructor</th>
                  <th className="px-6 py-3 text-left">Duration</th>
                  <th className="px-6 py-3 text-left">Location</th>
                  <th className="px-6 py-3 text-left">Schedule</th>
                  <th className="px-6 py-3 text-left">Prerequisites</th>
                  <th className="px-6 py-3 text-left">Syllabus</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {completedCourses.map((course) => (
                  <tr className="hover:bg-gray-50" key={course.id}>
                    <td className="px-6 py-4">{course.name}</td>
                    <td className="px-6 py-4">{course.instructor}</td>
                    <td className="px-6 py-4">{course.duration}</td>
                    <td className="px-6 py-4">{course.location}</td>
                    <td className="px-6 py-4">{course.schedule}</td>
                    <td className="px-6 py-4">
                      {course.prerequisites.length ? (
                        <ul className="list-disc list-inside text-gray-600">
                          {course.prerequisites.map((prerequisite, index) => (
                            <li key={index}>{prerequisite}</li>
                          ))}
                        </ul>
                      ) : (
                        'None'
                      )}
                    </td>
                    <td className="px-6 py-4">
                      {course.syllabus.length ? (
                        <ul className="list-disc list-inside text-gray-600">
                          {course.syllabus.map((item, index) => (
                            <li key={index}>
                              <strong>Week {item.week}:</strong> {item.content}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        'None'
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center text-lg text-gray-600 mt-10">
            No completed courses available.
          </div>
        )}
      </div>
    </div>
  );
}

export default CompletedCourses;
