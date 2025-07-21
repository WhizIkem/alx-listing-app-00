// Footer component for the application

import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-center py-6 mt-10 border-t">
      <p className="text-gray-600 text-sm">
        &copy; {new Date().getFullYear()} ALX Listings. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer;
