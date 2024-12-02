import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigation = useNavigate();
  return (
    <nav className="bg-blue-600 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="text-2xl font-bold">HireHaven</div>
          {/* <Link to="/Dashboard">Go to Dashboard</Link> */}

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-6">
            <Link
              to="/Dashboard"
              className="hover:text-blue-200 transition-colors"
            >
              Dashboard
            </Link>

            <Link to={"/JobListings"} className="hover:text-blue-200 transition-colors">
              Jobs
            </Link>
            <a
              href="#companies"
              className="hover:text-blue-200 transition-colors"
            >
              Companies
            </a>


            <Link to={"/AboutUs"}  className="hover:text-blue-200 transition-colors">
              About
            </Link>
          </div>

          {/* Buttons */}
          <div className="hidden md:flex space-x-4">
            <button className="bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-blue-50 transition-colors" onClick={() => navigation("/AuthPage", {logged: true})}>
              Log In
            </button>
            <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors" onClick={() => navigation("/AuthPage", {logged: false})}>
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-white focus:outline-none">☰</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
