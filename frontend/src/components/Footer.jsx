// src/components/Footer.js
import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-3">
      <div className="container">
        <p>&copy; 2024 Jaeseong Choe. All rights reserved.</p>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/jaeseong-choe-048639250/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/sorrychoe" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
