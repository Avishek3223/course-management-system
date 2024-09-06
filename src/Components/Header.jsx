import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <span className="font-bold text-2xl text-black">CourseHub</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="/" className="text-[1.2rem] font-bold text-black">
              Courses
            </a>
            <a href="/dashboard" className="text-[1.2rem] font-bold text-black">
              Dashboard
            </a>
            <a href="/about" className="text-[1.2rem] font-bold text-black">
              About
            </a>
          </div>
          {/* Hamburger Icon */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-black focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/" className="block text-[1.2rem] font-bold text-black">
              Courses
            </a>
            <a
              href="/dashboard"
              className="block text-[1.2rem] font-bold text-black"
            >
              Dashboard
            </a>
            <a href="/about" className="block text-[1.2rem] font-bold text-black">
              About
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
