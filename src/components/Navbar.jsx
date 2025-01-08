import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.webp";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleContactClick = (e) => {
    e.preventDefault();

    const isLargeScreen = window.innerWidth >= 1280;

    if (isLargeScreen) {
      // No need to scroll on XL screens
      navigate("/about");
      return;
    }

    if (location.pathname === "/about") {
      // Scroll to contact section if already on About page
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/about");
      // Navigate to About page, then scroll
      setTimeout(() => {
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      }, 200);
    }
  };

  return (
    <nav className="bg-gradient-to-r   from-gray-200 via-slate-400 to-gray-500  text-customPurple">
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
                  to="/"
                  className="hover:text-fuchsia-800  transition-transform duration-500 ease-in-out"
                >
                  <span className="inline-block hover:scale-110">Home</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/work"
                  className="hover:text-fuchsia-800  transition-transform duration-500 ease-in-out"
                >
                  <span className="inline-block hover:scale-110">Work</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-fuchsia-800  transition-transform duration-500 ease-in-out"
                >
                  <span className="inline-block hover:scale-110">About</span>
                </Link>
              </li>

              <li>
                <a
                  href="#contact"
                  onClick={handleContactClick}
                  className="hover:text-fuchsia-800"
                >
                  <span className="inline-block hover:scale-110">Contact</span>
                </a>
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
                className="h-8 w-8 text-customPurpleHamburger hover:text-fuchsia-800 transition-transform duration-500 ease-in-out"
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

      <div className={`overflow-hidden lg:hidden transition-all duration-700  ease-in-out ${isOpen ? "max-h-screen" : "max-h-0"}`}>
        <ul className="flex flex-col items-center justify-center px-2 pt-2 pb-3 space-y-3 sm:px-3 bg-fuchsia-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
          <li>
            <Link
              to="/"
              className="block hover:text-fuchsia-800 px-4 py-3 rounded-md text-xl font-bold"
            >
              <span className="inline-block hover:scale-110">Home</span>
            </Link>
          </li>

          <li>
            <Link
              to="/work"
              className="block hover:text-fuchsia-800 px-4 py-3 rounded-md text-xl font-bold"
            >
              <span className="inline-block hover:scale-110">Work</span>
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="block hover:text-fuchsia-800 px-4 py-3 rounded-md text-xl font-bold"
            >
              <span className="inline-block hover:scale-110">About</span>
            </Link>
          </li>
          <li>
            <a
              href="#contact"
              onClick={handleContactClick}
              className="block hover:text-fuchsia-800 px-4 py-3 rounded-md text-xl font-bold"
            >
              <span className="inline-block hover:scale-110">Contact</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
