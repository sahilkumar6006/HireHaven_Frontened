// create a footer component with a simple message
import React from 'react';

const Footer = () => {

  return (
    <footer className="bg-blue-600 text-white py-4 text-center relative bottom-0 left-0 w-full z-50">
      <div className="container mx-auto px-4 flex justify-between items-center ">
        <div className="w-full text-white text-center">
          © 2025 HireHaven. All rights reserved.
        </div>
        {/* <div className="space-x-4">
          <Link to="/AboutUs" className="hover:text-gray-400">About Us</Link>
          <Link to="/ContactUs" className="hover:text-gray-400">Contact Us</Link>
          <button
            onClick={() => navigate("/AuthPage", { state: { logged: true } })}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Log In
          </button>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;