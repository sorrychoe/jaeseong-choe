import React from 'react';
import Navbar from './Navbar';

function Header() {
  return (
    <header className="bg-gray-900 text-white text-center py-12 shadow-lg">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold tracking-tight">Jaeseong Choe</h1>
        <p className="mt-4 text-lg text-gray-300">Opinion Miner | Computational Social-Science Researcher </p>
        <Navbar />
      </div>
    </header>
  );
}

export default Header;
