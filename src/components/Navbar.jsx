import React from "react";
import logo from "../assets/images/logo.webp"; // Import the logo image

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 text-2xl text-amber-900">
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
          href="#gallery"
          className="mr-4"
        >
          Gallery
        </a>
        <a href="#about">About</a>
      </div>
    </nav>
  );
}
