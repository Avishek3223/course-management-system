import React, { useEffect, useState } from 'react';
import { fetchCourses } from '../store/actions/courseActions';
import { useDispatch, useSelector } from 'react-redux';
import Dashboard from '../Components/Dashboard';
import axios from 'axios';

const StudentDashboardPage = () => {
  const dispatch = useDispatch();
  const { courses } = useSelector((state) => state.courseState);
  const [selectedCourseStatus, setSelectedCourseStatus] = useState({});

  const studentName = 'Charlie Brown';

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  const handleCourseStatusChange = async (courseId, studentId, newStatus) => {
    try {
      // Optimistically update the UI with the new status
      setSelectedCourseStatus((prevStatus) => ({
        ...prevStatus,
        [courseId]: {
          ...prevStatus[courseId],
          [studentId]: newStatus
        }
      }));

      // API call to update the course status using axios
      const response = await axios.put(
        'https://ic1rqexx2c.execute-api.us-east-1.amazonaws.com/dev/updateCourseStatus',
        {
          courseId,
          studentId,
          newCourseStatus: newStatus,
        }
      );

      if (response.status !== 200) {
        throw new Error('Failed to update course status');
      }
    } catch (error) {
      console.error('Error updating course status:', error);
      alert('Failed to update course status. Please try again.');
    }
  };

  const enrolledCourses = courses.filter((course) =>
    course.students.some((student) => student.name === studentName)
  );

  return (
    <div className="flex h-[90vh] flex-wrap">
      <div className="w-full xl:w-1/5 p-4">
        <Dashboard />
      </div>
      <div className="w-full h-full my-auto xl:w-3/4 p-4">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">{studentName}'s Dashboard</h1>
        </header>

        {enrolledCourses.length > 0 ? (
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
                  <th className="px-6 py-3 text-left">Course Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {enrolledCourses.map((course) => {
                  const student = course.students.find(
                    (student) => student.name === studentName
                  );
                  return (
                    <tr className="hover:bg-gray-50 text-[1rem]" key={course.id}>
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
                      <td className="px-6 py-4">
                        <select
                          value={selectedCourseStatus[course.id]?.[student.id] || student.courseStatus || 'Pending'}
                          onChange={(e) =>
                            handleCourseStatusChange(course.id, student.id, e.target.value)
                          }
                          className="px-2 py-1 border-none outline-none"
                        >
                          <option value="Pending">Pending</option>
                          <option value="Ongoing">Ongoing</option>
                          <option value="Completed">Completed</option>
                        </select>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center text-lg text-gray-600 mt-10">
            No enrolled courses available.
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentDashboardPage;
