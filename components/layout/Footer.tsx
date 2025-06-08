import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gray-100 py-6 mt-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <span className="text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} ALX Listing. All rights reserved.
        </span>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="#" className="text-gray-600 hover:text-blue-600 text-sm">
            Privacy Policy
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600 text-sm">
            Terms of Service
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600 text-sm">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;