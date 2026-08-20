import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className="container">
        <p className={styles.copyright}>&copy; {year} Jaeseong Choe. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
