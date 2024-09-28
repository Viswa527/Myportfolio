import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar fixed top-0 w-full p-4 text-white z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">My Portfolio</div>
        <div className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:flex md:items-center w-full md:w-auto`}
        >
          <div className="flex flex-col md:flex-row md:ml-auto " >
            <a href="#home" className="px-4 py-2 md:py-0">
              Home
            </a>
            <a href="#skills" className="px-4 py-2 md:py-0">
              Skills
            </a>
            <a href="#education" className="px-4 py-2 md:py-0">
              Education
            </a>
            <a href="#experience" className="px-4 py-2 md:py-0">
              Experience
            </a>
            <a href="#certifications" className="px-4 py-2 md:py-0">
              Certifications
            </a>
            <a href="#projects" className="px-4 py-2 md:py-0">
              Projects
            </a>
            <a href="#achievements" className="px-4 py-2 md:py-0">
              Achievements
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;