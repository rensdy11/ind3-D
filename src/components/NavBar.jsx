import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-blue-600">
            IN3D 
          </Link>
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="text-blue-500 hover:text-blue-600 focus:outline-none"
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
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
          <div className="hidden md:flex space-x-4">
            <Link
              to="/about"
              className="text-blue-700 hover:text-amber-400 px-3 py-2 rounded-md text-sm font-medium"
            >
              About
            </Link>
            <Link
              to="/work"
              className="text-blue-700 hover:text-amber-400 px-3 py-2 rounded-md text-sm font-medium"
            >
              Work
            </Link>
            <Link
              to="/contact"
              className="text-blue-700 hover:text-amber-400 px-3 py-2 rounded-md text-sm font-medium"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to="/about"
            className="block text-blue-700 hover:text-amber-400 px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="/work"
            className="block text-blue-700 hover:text-amber-400 px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setIsOpen(false)}
          >
            Work
          </Link>
          <Link
            to="/contact"
            className="block text-blue-700 hover:text-amber-400 px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;