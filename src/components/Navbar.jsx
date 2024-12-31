import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.webp";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scrolling down, hide navbar
        setShowNavbar(false);
      } else {
        // Scrolling up, show navbar
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav className={`fixed top-0 left-0 w-full bg-white bg-opacity-10 backdrop-blur-lg z-50 flex justify-between items-center px-8 py-4 transition-transform duration-300 ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}>
      {/* Logo as a link to Home */}
      <Link
        to="/"
        className="flex items-center"
      >
        <img
          src={logo}
          alt="Logo"
          className="h-28 w-auto"
        />
      </Link>
      <div className="flex space-x-6">
        <Link
          to="/work"
          className="hover:text-fuchsia-800 text-2xl font-semibold text-white mr-8"
        >
          Work
        </Link>
        <Link
          to="/contact"
          className="hover:text-amber-700 text-2xl font-semibold text-white mr-8"
        >
          About
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
