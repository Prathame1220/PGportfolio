import React, { useState } from "react";
import Flag from "react-world-flags";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="bg-black text-white px-4 md:px-16 lg:px-24 ">
      <div className="container max-w-screen-xl mx-auto py-4 flex items-center justify-between relative">
        {/* Logo */}
        <div className="text-2xl font-bold flex items-center space-x-2">Prathamesh Gaikwad
        <Flag code="IN" style={{ width: "25px", height: "25px" , marginLeft: "10px"}} />
        </div>
        {/* Hamburger menu for mobile */}
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </button>

        {/* Links (Mobile & Desktop) */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex absolute md:static top-16 left-0 w-full md:w-auto bg-black md:bg-transparent text-center md:text-left space-y-2 mr-36 md:space-y-0 md:space-x-6 z-10`}
        >
          <a href="#home" className="block py-2 px-4 md:p-0 hover:text-gray-400">
            Home
          </a>
          <a href="#about" className="block py-2 px-4 md:p-0 hover:text-gray-400">
            About Me
          </a>
          <a href="#service" className="block py-2 px-4 md:p-0 hover:text-gray-400">
            Services
          </a>
          <a href="#project" className="block py-2 px-4 md:p-0 hover:text-gray-400">
            Projects
          </a>
          <a href="#contact" className="block py-2 px-4 md:p-0 hover:text-gray-400">
            Contact
          </a>
        </div>

        {/* Connect Me Button */}
        <button
          onClick={scrollToContact}
          className="hidden md:inline bg-gradient-to-r from-green-400 to-blue-500 text-white text-sm transform transition-transform duration-300 hover:scale-105 px-3 py-1.5 rounded-full"
        >
          Connect Me
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
