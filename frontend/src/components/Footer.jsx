import React from 'react';

function Footer() {
  return (
    <footer className="text-gray-400 text-center py-8">
      <div className="container mx-auto px-4">
        <div className="mb-4">
          <a href="https://github.com/sorrychoe" target="_blank" rel="noopener noreferrer" className="inline-block hover:scale-110 transition-transform duration-300">
            <img height="28" width="28" src='https://cdn.simpleicons.org/Github/FFFFFF' alt='Github' className="inline-block floating-icon" />
          </a>
        </div>
        <p className="text-sm">&copy; 2025 Jaeseong Choe. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
