import React from 'react';
import styles from './Footer.module.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { ImBooks } from 'react-icons/im';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.iconContainer}>
          <a href="https://github.com/sorrychoe" target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
            <FaGithub className={`${styles.icon} floating-icon`} />
          </a>
          <a href="https://www.linkedin.com/in/sorrychoe/" target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
            <FaLinkedin className={`${styles.icon} floating-icon`} />
          </a>
          <a href="https://www.dbpia.co.kr/author/authorDetail?ancId=191880872" target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
            <ImBooks className={`${styles.icon} floating-icon`} />
          </a>
        </div>
        <p className={styles.copyright}>&copy; 2025 Jaeseong Choe. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
