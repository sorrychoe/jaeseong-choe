import React from 'react';
import styles from './Footer.module.css';
import { PROFILE_LINKS } from '../data/site';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className="container">
        <nav className={styles.links} aria-label="Profiles">
          {PROFILE_LINKS.map(({ href, label, Icon }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.iconLink}
              aria-label={label}
              title={label}
            >
              <Icon className={styles.icon} aria-hidden="true" />
            </a>
          ))}
        </nav>
        <p className={styles.copyright}>
          &copy; {year} Jaeseong Choe (최재성). All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
