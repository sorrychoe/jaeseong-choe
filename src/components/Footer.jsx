import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <p className={styles.copyright}>&copy; 2026 Jaeseong Choe. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
