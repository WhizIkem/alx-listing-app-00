// Header component for the application

import React from "react";
import Link from "next/link";
import Image from "next/image";

// Sample accommodation types
const accommodationTypes: string[] = [
  "Rooms",
  "Mansion",
  "Countryside",
  "Apartment",
  "Villa",
];

// Header component
// This component includes a logo, search bar, authentication buttons, and navigation links for accommodation types
const Header: React.FC = () => {
  return (
    <header className="bg-white border-b shadow-sm p-4">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img
            src="/assets/Logos/home1.svg"
            alt="Logo"
            width={30}
            height={30}
          />
        </Link>

        {/* Search Bar */}
        <div className="flex-1 max-w-lg">
          <input
            type="text"
            placeholder="Search for listings..."
            className="w-full rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 px-4 py-2"
          />
        </div>

        {/* Auth Buttons */}
        <div className="flex gap-2">
          <button className="px-4 py-2 rounded bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
            Sign In
          </button>
          <button className="px-4 py-2 rounded bg-green-600 text-white font-medium hover:bg-green-700 transition">
            Sign Up
          </button>
        </div>
      </div>

      {/* Accommodation Types */}
      <nav className=" flex gap-4 justify-center mt-4 flex-wrap">
        {accommodationTypes.map((type) => (
          <a
            key={type}
            className="text-gray-600 hover:text-blue-600 font-medium transition "
          >
            {type}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
