// Header component for the application

import React from "react";
import Link from "next/link";
import Image from "next/image";

// Sample accommodation types
const accommodationTypes = [
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
    <header className="bg-white border-b">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src="/assets/Logos/home 1.svg" alt="Logo" width={30} height={30} />
        </Link>

        {/* Search Bar */}
        <div className="flex-1">
          <input
            type="text"
            placeholder="Search for listings..."
            className="w-full rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Auth Buttons */}
        <div className="flex">
          <button className=" rounded bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
            Sign In
          </button>
          <button className=" rounded bg-green-600 text-white font-medium hover:bg-green-700 transition">
            Sign Up
          </button>
        </div>
      </div>

      {/* Accommodation Types */}
      <nav className=" flex">
        {accommodationTypes.map((type) => (
          <a
            key={type}
            href={`#${type.toLowerCase()}`}
            className="text-gray-600 hover:text-blue-600 font-medium transition"
          >
            {type}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
