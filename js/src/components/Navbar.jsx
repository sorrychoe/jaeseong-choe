import React from 'react';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li><a href="#about" className={styles.link}>About me</a></li>
        <li><a href="#experience" className={styles.link}>Experiences</a></li>
        <li><a href="#education" className={styles.link}>Education</a></li>
        <li><a href="#skills" className={styles.link}>Skills</a></li>
        <li><a href="#projects" className={styles.link}>Projects</a></li>
        <li><a href="#publication" className={styles.link}>Publications</a></li>
        <li><a href="#softwares" className={styles.link}>Softwares</a></li>
        <li><a href="#contact" className={styles.link}>Contact</a></li>
      </ul>
    </nav>
  );  
}

export default Navbar;
