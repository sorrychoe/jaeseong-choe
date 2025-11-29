import React from 'react';
import Navbar from './Navbar';

function Header() {
  return (
    <header className="text-center py-12 md:py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Jaeseong Choe
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-400">
          Opinion Miner | Computational Social-Science Researcher
        </p>
        <Navbar />
      </div>
    </header>
  );
}

export default Header;

