import React from 'react';

function Navbar() {
  return (
    <nav className="mt-8">
      <ul className="flex justify-center flex-wrap gap-4 md:gap-6">
        <li><a href="#about" className="block bg-gray-800 text-white font-bold px-4 py-2 rounded-lg hover:bg-purple-600 transition duration-300">About me</a></li>
        <li><a href="#experience" className="block bg-gray-800 text-white font-bold px-4 py-2 rounded-lg hover:bg-purple-600 transition duration-300">Experience</a></li>
        <li><a href="#education" className="block bg-gray-800 text-white font-bold px-4 py-2 rounded-lg hover:bg-purple-600 transition duration-300">Education</a></li>
        <li><a href="#skills" className="block bg-gray-800 text-white font-bold px-4 py-2 rounded-lg hover:bg-purple-600 transition duration-300">Skills</a></li>
        <li><a href="#projects" className="block bg-gray-800 text-white font-bold px-4 py-2 rounded-lg hover:bg-purple-600 transition duration-300">Projects</a></li>
        <li><a href="#softwares" className="block bg-gray-800 text-white font-bold px-4 py-2 rounded-lg hover:bg-purple-600 transition duration-300">Software</a></li>
        <li><a href="#contact" className="block bg-gray-800 text-white font-bold px-4 py-2 rounded-lg hover:bg-purple-600 transition duration-300">Contact</a></li>
      </ul>
    </nav>
  );  
}

export default Navbar;
