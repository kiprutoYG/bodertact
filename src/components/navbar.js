import React from "react";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {

    const [isOpen, setisOpen] = useState(false);
    const toggleMenu = () => setisOpen(!isOpen);

    return (
        <div className="bg-gray-800">
            <div className="lg:hidden flex justify-between mx-10 py-10">
            {/* Company Name */}
            <div className="">
              <h1 className="lg:text-2xl sm:text-xl font-bold">BoderTact</h1>
            </div>

            {/* Hamburger Icon for small screens */}
            <button
              className="text-white lg:hidden"
              onClick={toggleMenu}
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
            </div>
    
          {/* Navbar Items */}
          <nav
            className={`mx-10 py-10 lg:flex transition-all duration-300 ease-in-out ${
              isOpen ? "block" : "hidden"
            }`}
          >
            {/* Company Name */}
            <div className="lg:text-2xl sm:text-xl font-bold">
              BoderTact
            </div>
    
            <ul className="lg:flex flex-row space-y-2 lg:space-y-0 lg:space-x-5 lg:ml-auto">
              <li>
                <a href="#home" className="text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-white">
                  Pricing
                </a>
              </li>
            </ul>
          </nav>
        </div>
      );
}

export default Navbar;