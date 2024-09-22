import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="px-4 lg:px-6 h-24 flex items-center">
      <a href="#" className="flex items-center gap-4 space-x-4">
        <div className="h-24 w-24">
          <img
            src="https://res.cloudinary.com/djpbcmw8p/image/upload/v1724675019/Screenshot__55_-removebg-preview_d8muzc.png"
            alt="Techno Rubber Works Logo"
            className="h-full w-full object-contain"
          />
        </div>
        {/* <span className="text-2xl font-bold text-gray-800">Techno Rubber Works</span> */}
      </a>
      <div className="ml-auto flex items-center gap-4 sm:gap-6">
        <a
          href="#products"
          className="text-sm font-medium text-gray-700 hover:underline underline-offset-4"
        >
          Products
        </a>
        <a
          href="#custom"
          className="text-sm font-medium text-gray-700 hover:underline underline-offset-4"
        >
          Custom Solutions
        </a>
        <a
          href="#aboutus"
          className="text-sm font-medium text-gray-700 hover:underline underline-offset-4"
        >
          About
        </a>
        <a
          href="#contactus"
          className="text-sm font-medium text-gray-700 hover:underline underline-offset-4"
        >
          Contact
        </a>
      </div>
    </header>
  );
}
