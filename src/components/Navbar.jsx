import React from 'react';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li><a href="#about" className={styles.link}>About me</a></li>
        <li><a href="#publication" className={styles.link}>Publications</a></li>
        <li><a href="#projects" className={styles.link}>Projects</a></li>
      </ul>
    </nav>
  );  
}

export default Navbar;
