import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-3">
      <div className="container">
        <p>&copy; 2025 Jaeseong Choe. All rights reserved.</p>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/jaeseong-choe-048639250/" target="_blank" rel="noopener noreferrer">
            <img height="30" width="30" src='https://cdn.simpleicons.org/Linkedin/FFFFFF' alt='Linkedin' />
          </a>
          <a href="https://github.com/sorrychoe" target="_blank" rel="noopener noreferrer">
            <img height="30" width="30" src='https://cdn.simpleicons.org/Github/FFFFFF' alt='Github' />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
