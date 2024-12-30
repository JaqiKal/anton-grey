import React from "react";
import logo from "../assets/images/logo.webp"; // Import the logo image

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 text-2xl text-slate-900">
      {/* Logo as a link to Home */}
      <a
        href="/"
        className="flex items-center"
      >
        <img
          src={logo}
          alt="Logo"
          className="h-28 w-auto"
        />{" "}
        {/* Adjust size with Tailwind */}
      </a>
      <div>
        <a
          href="#animation"
          className="mr-4"
        >
          Animation
        </a>
        <a
          href="#illustration"
          className="mr-4"
        >
          Illustration
        </a>
        <a
          href="#photography"
          className="mr-4"
        >
          Photography
        </a>
        <a href="#about">About</a>
      </div>
    </nav>
  );
}
