import React from 'react';
import Navbar from './Navbar';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <h1 className={styles.title}>
          Jaeseong Choe
        </h1>
        <p className={styles.subtitle}>
          Opinion Miner | Computational Social-Science Researcher
        </p>
        <Navbar />
      </div>
    </header>
  );
}

export default Header;

