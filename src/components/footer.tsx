import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Raja Reddy Nagendla. All rights reserved.</p>
        <p>Contact: rajareddy3100@gmail.com</p>
      </div>
    </footer>
  );
};
