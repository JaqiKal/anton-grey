import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.webp";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-slate-400 via-slate-600 to-slate-700 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-48 ">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <span className="sr-only">Home</span>
              <img
                src={logo}
                alt="Logo"
                className="h-28  w-auto transition-transform duration-300 hover:scale-x-125"
              />
            </Link>
          </div>

          {/* Links for Large Screens */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            <ul className="flex space-x-20 font-semibold lg:text-2xl">
              <li>
                <Link
                  to="/work"
                  className="hover:text-fuchsia-800  transition-transform duration-500 ease-in-out"
                >
                  <span className="inline-block hover:scale-125">Work</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-amber-700 transition-transform duration-500 ease-in-out"
                >
                  <span className="inline-block hover:scale-125">About</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Hamburger Button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1"
              aria-label="Toggle navigation"
            >
              <svg
                className="h-8 w-8 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Links for Small Screens */}
      <div className={`${isOpen ? "block" : "hidden"} lg:hidden`}>
        <ul className="flex flex-col items-center justify-center px-2 pt-2 pb-3 space-y-3 sm:px-3 bg-fuchsia-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
          <li>
            <Link
              to="/work"
              className="block hover:text-fuchsia-800 px-4 py-3 rounded-md text-xl font-bold"
            >
              Work
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="block hover:text-amber-700  px-4 py-3 rounded-md text-xl font-bold"
            >
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
