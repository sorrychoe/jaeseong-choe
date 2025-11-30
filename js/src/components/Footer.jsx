import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.iconContainer}>
          <a href="https://github.com/sorrychoe" target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
            <img height="28" width="28" src='https://cdn.simpleicons.org/Github/FFFFFF' alt='Github' className={`${styles.icon} floating-icon`} />
          </a>
        </div>
        <p className={styles.copyright}>&copy; 2025 Jaeseong Choe. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
