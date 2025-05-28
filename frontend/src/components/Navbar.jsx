import React from 'react';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <ul className="navbar-nav mx-auto">
        <li className="nav-item"><a href="#about" className="nav-link">About me</a></li>
        <li className="nav-item"><a href="#education" className="nav-link">Education</a></li>
        <li className="nav-item"><a href="#experience" class="nav-link">Experience</a></li>
        <li className="nav-item"><a href="#skills" className="nav-link">Skills</a></li>
        <li className="nav-item"><a href="#projects" className="nav-link">Projects</a></li>
        <li className="nav-item"><a href="#softwares" className="nav-link">Software</a></li>
        {/* <li className="nav-item"><a href="#contact" className="nav-link">Contact</a></li> */}
      </ul>
    </nav>
  );
}

export default Navbar;
