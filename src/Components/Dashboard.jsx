import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage sidebar visibility on mobile

  const toggleSidebar = () => setIsOpen(!isOpen); // Function to toggle sidebar

  return (
    <div className="flex h-full bg-gray-100">
      {/* Toggle Button for Mobile */}
      <button
        className="p-4 text-gray-600 bg-white border-r lg:hidden"
        onClick={toggleSidebar}
      >
        {isOpen ? 'Close' : 'Menu'}
      </button>

      {/* Sidebar */}
      <div className={`absolute z-20 w-64 h-full p-5 bg-white border-r transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0`}>
        <h1 className="text-3xl font-semibold">Dashboard</h1>
        <ul className="mt-10">
          <li className="mb-6">
            <Link to="/dashboard" className="text-gray-600 hover:text-gray-800 transition-colors" onClick={() => setIsOpen(false)}>
              Enrolled Courses
            </Link>
          </li>
          <li className="mb-6">
            <Link to="/pending" className="text-gray-600 hover:text-gray-800 transition-colors" onClick={() => setIsOpen(false)}>
              Pending Courses
            </Link>
          </li>
          <li className="mb-6">
            <Link to="/completed" className="text-gray-600 hover:text-gray-800 transition-colors" onClick={() => setIsOpen(false)}>
              Completed Courses
            </Link>
          </li>
          <li className="mb-6">
            <Link to="/settings" className="text-gray-600 hover:text-gray-800 transition-colors" onClick={() => setIsOpen(false)}>
              Settings
            </Link>
          </li>
        </ul>
      </div>

      {/* Main content */}
      <div className={`flex-1 ${isOpen ? 'hidden' : 'block'} lg:block`}>
        {/* Place your main content here */}
      </div>
    </div>
  );
}

export default Dashboard;
