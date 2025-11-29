import React from 'react';

function Navbar() {
  return (
    <nav className="mt-8">
      <ul className="flex justify-center space-x-4 md:space-x-6">
        <li><a href="#about" className="text-gray-400 hover:text-white transition duration-300">About me</a></li>
        <li><a href="#experience" className="text-gray-400 hover:text-white transition duration-300">Experience</a></li>
        <li><a href="#education" className="text-gray-400 hover:text-white transition duration-300">Education</a></li>
        <li><a href="#skills" className="text-gray-400 hover:text-white transition duration-300">Skills</a></li>
        <li><a href="#projects" className="text-gray-400 hover:text-white transition duration-300">Projects</a></li>
        <li><a href="#softwares" className="text-gray-400 hover:text-white transition duration-300">Software</a></li>
        <li><a href="#contact" className="text-gray-400 hover:text-white transition duration-300">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;

