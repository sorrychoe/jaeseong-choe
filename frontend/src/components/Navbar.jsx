import React from 'react';

function Navbar() {
  return (
    <nav className="mt-8">
      <ul className="flex justify-center space-x-6 md:space-x-8">
        <li><a href="#about" className="text-gray-300 hover:text-white transition duration-300 ease-in-out pb-1 border-b-2 border-transparent hover:border-blue-500">About me</a></li>
        <li><a href="#experience" className="text-gray-300 hover:text-white transition duration-300 ease-in-out pb-1 border-b-2 border-transparent hover:border-blue-500">Experience</a></li>
        <li><a href="#education" className="text-gray-300 hover:text-white transition duration-300 ease-in-out pb-1 border-b-2 border-transparent hover:border-blue-500">Education</a></li>
        <li><a href="#skills" className="text-gray-300 hover:text-white transition duration-300 ease-in-out pb-1 border-b-2 border-transparent hover:border-blue-500">Skills</a></li>
        <li><a href="#projects" className="text-gray-300 hover:text-white transition duration-300 ease-in-out pb-1 border-b-2 border-transparent hover:border-blue-500">Projects</a></li>
        <li><a href="#softwares" className="text-gray-300 hover:text-white transition duration-300 ease-in-out pb-1 border-b-2 border-transparent hover:border-blue-500">Software</a></li>
        <li><a href="#contact" className="text-gray-300 hover:text-white transition duration-300 ease-in-out pb-1 border-b-2 border-transparent hover:border-blue-500">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
