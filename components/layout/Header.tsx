import React from "react";

const accommodationTypes = [
  "Rooms",
  "Mansion",
  "Countryside",
  "Beachfront",
  "Apartments",
  "Villas",
];

export const Header: React.FC = () => {
  return (
    <header className="w-full shadow-md bg-white">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/assets/logo.png"
            alt="Logo"
            className="h-10 w-auto mr-3"
          />
          <span className="font-bold text-xl text-gray-800">ALX Listing</span>
        </div>

        {/* Search Bar */}
        <div className="flex-1 mx-8">
          <input
            type="text"
            placeholder="Search for destinations, properties, etc."
            className="w-full px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-4">
          <button className="px-4 py-2 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-50 transition">
            Sign In
          </button>
          <button className="px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition">
            Sign Up
          </button>
        </div>
      </div>

      {/* Accommodation Types */}
      <nav className="container mx-auto px-6 pb-2">
        <ul className="flex gap-6 mt-2">
          {accommodationTypes.map((type) => (
            <li
              key={type}
              className="text-gray-600 hover:text-blue-600 cursor-pointer font-medium"
            >
              {type}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;