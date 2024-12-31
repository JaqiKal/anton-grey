import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.webp";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-slate-400 via-slate-600 to-slate-700 z-50 flex items-center justify-between px-8 py-4 shadow-lg">
      {/* Logo */}
      <Link
        to="/"
        className="flex items-center"
      >
        <img
          src={logo}
          alt="Logo"
          className="h-12 w-auto"
        />
      </Link>

      {/* Hamburger Menu */}
      <div className="relative md:hidden">
        <button
          onClick={toggleMenu}
          className="text-white text-3xl focus:outline-none"
        >
          &#9776;
        </button>
        <div className={`absolute right-0 top-full mt-2 bg-slate-600 rounded-md shadow-lg w-40 transition-all duration-300 ${isMenuOpen ? "block" : "hidden"}`}>
          <ul className="flex flex-col text-white">
            <li className="hover:bg-slate-500">
              <Link
                to="/work"
                className="block px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Work
              </Link>
            </li>
            <li className="hover:bg-slate-500">
              <Link
                to="/about"
                className="block px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Desktop Links */}
      <ul className="hidden md:flex space-x-8 text-white font-semibold text-lg">
        <li>
          <Link
            to="/work"
            className="hover:text-slate-300"
          >
            Work
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="hover:text-slate-300"
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
