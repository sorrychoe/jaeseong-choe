import React from 'react';
import Navbar from './Navbar';

function Header() {
  return (
    <header className="bg-dark text-white text-center py-5">
      <div className="container">
        <h1>Jaeseong Choe</h1>
        <p>Opinion Miner | Social Data Analyst | Data-Driven Problem Solver</p>
        <Navbar />
      </div>
    </header>
  );
}

export default Header;
