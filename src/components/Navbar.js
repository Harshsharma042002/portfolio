import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaBars, FaTimes } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex items-center justify-between border border-white h-[5rem] px-6">
      <div className="text-2xl font-bold">
        <span className="hidden md:block">HARSH</span>
        <button 
          className="block md:hidden text-2xl" 
          onClick={toggleMobileMenu}
        >
          <FaBars />
        </button>
      </div>

      <div className="hidden md:flex text-lg space-x-6">
        <Link to="/" className="text-white text-2xl hover:text-blue-600">Home</Link>
        <Link to="/projects" className="text-white text-2xl hover:text-blue-600">Projects</Link>
        <Link to="/education" className="text-white text-2xl hover:text-blue-600">Education</Link>
      </div>

      <div className="flex gap-5">
        <a href="https://linkedin.com/in/harshsharma04" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-3xl hover:text-blue-600" />
        </a>
        <a href="https://github.com/Harshsharma042002" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-3xl hover:text-gray-800" />
        </a>
        <a href="https://leetcode.com/u/harshsharma042002/" target="_blank" rel="noopener noreferrer">
          <SiLeetcode className="text-3xl hover:text-orange-500" />
        </a>
      </div>

      {isMobileMenuOpen && (
        <div 
          className="fixed top-0 left-0 w-1/2 h-full bg-white z-50 shadow-lg transition-transform duration-600 delay-200 transform translate-x-0 md:hidden"
        >
          <button 
            className="absolute top-4 right-4 text-2xl" 
            onClick={toggleMobileMenu}
          >
            <FaTimes />
          </button>

          <div className="flex flex-col mt-16 space-y-4 text-lg pl-6 text-black">
            <Link to="/" onClick={toggleMobileMenu} className="hover:text-blue-600 text-xl">Home</Link>
            <Link to="/projects" onClick={toggleMobileMenu} className="hover:text-blue-600 text-xl">Projects</Link>
            <Link to="/education" onClick={toggleMobileMenu} className="hover:text-blue-600 text-xl">Education</Link>
          </div>
        </div>
      )}
      
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
          onClick={toggleMobileMenu}
        ></div>
      )}
    </div>
  );
};

export default Navbar;
