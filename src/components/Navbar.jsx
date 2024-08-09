import React, { useState } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaSearch,
} from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import Microscope from "../../public/microscope_3035512 (2).png";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [navActive, setNavActive] = useState(false);
  const handleNavToggle = () => {
    setNavActive(!navActive);
  };

  return (
    <div className="bg-blue-900 text-white">
      {/* Top bar */}
      <div className="flex justify-between items-center py-2 px-4 text-sm">
        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-300">
            Share with on:
          </a>
          <a href="#">
            <FaFacebookF />
          </a>
          <a href="#">
            <FaTwitter />
          </a>
          <a href="#">
            <FaPinterestP />
          </a>
        </div>
        <div>
          <p>Every day: 9:00am - 6:00pm</p>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <img src={Microscope} alt="microscope" className="w-10" />
              <h1 className=" text-gray-800 font-bold text-2xl text-nowrap">
                AYUSH <span className="text-blue-600">PATHOLOGY</span>
              </h1>
            </div>

            {/* Links for larger screens */}
            <div className="hidden md:flex md:items-center gap-4">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `flex items-center p-2 rounded-lg ${
                    isActive
                      ? "text-blue-600 font-semibold text-sm"
                      : "text-gray-800 text-sm font-medium hover:text-blue-600"
                  }`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `flex items-center p-2 rounded-lg ${
                    isActive
                      ? "text-blue-600 font-semibold text-sm"
                      : "text-gray-800 text-sm font-medium hover:text-blue-600"
                  }`
                }
              >
                About
              </NavLink>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `flex items-center p-2 rounded-lg ${
                    isActive
                      ? "text-blue-600 font-semibold text-sm"
                      : "text-gray-800 text-sm font-medium hover:text-blue-600"
                  }`
                }
              >
                Services
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `flex items-center p-2 rounded-lg ${
                    isActive
                      ? "text-blue-600 font-semibold text-sm"
                      : "text-gray-800 text-sm font-medium hover:text-blue-600"
                  }`
                }
              >
                Contact
              </NavLink>
            </div>

            {/* Phone, email, and search button */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-center text-gray-500">
                <FaPhone className="mr-2" />
                <span>+91 9026137608</span>
              </div>
              
              <Link
                to="/login"
                className="text-white text-sm font-medium border px-4 py-2 rounded-lg hover:text-white hover:border-gray-600 bg-blue-500 hover:bg-blue-600 transition-all duration-100 flex items-center gap-2 "
              >
                <FaSearch />
                Login
              </Link>
            </div>

            {/* Hamburger icon */}
            <button
              className="text-gray-500 hover:text-teal-700 md:hidden"
              onClick={handleNavToggle}
            >
              <FiMenu />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile and Tablet Menu */}
      <div
        className={
          navActive
            ? "block md:hidden bg-white border-t-2 py-2"
            : "hidden"
        }
      >
        <div className="flex flex-col p-2">
          <Link
            to="/"
            className="text-gray-800 text-sm font-semibold hover:text-blue-600 mb-1"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-gray-800 text-sm font-semibold hover:text-blue-600 mb-1"
          >
            About
          </Link>
          <Link
            to="/services"
            className="text-gray-800 text-sm font-semibold hover:text-blue-600 mb-1"
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="text-gray-800 text-sm font-semibold hover:text-blue-600 mb-1"
          >
            Contact
          </Link>
          <div className="border-t-2 pt-2">
            <div className="flex items-center text-gray-800 mb-1">
              <FaPhone className="mr-2" />
              <span>+91 9026137608</span>
            </div>
            <div className="flex items-center text-gray-800 mb-1">
              <FaEnvelope className="mr-2" />
              <span>info@example.com</span>
            </div>
          </div>
          <div className="flex justify-between items-center border-t-2 pt-2">
            <Link
              to="/login"
              className="text-white text-sm font-semibold border px-4 py-2 rounded-lg hover:text-white hover:border-gray-600 bg-blue-500 hover:bg-blue-600 transition-all duration-100"
            >
              Admin Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
