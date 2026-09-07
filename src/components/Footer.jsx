import React from 'react';
import styles from './Footer.module.css';
import { PROFILE_LINKS } from '../data/site';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className="container">
        <nav className={styles.links} aria-label="Profiles">
          {PROFILE_LINKS.map((profile) => (
            <a
              key={profile.href}
              href={profile.href}
              target="_blank"
              rel="me noopener noreferrer"
              className={styles.link}
            >
              {profile.label}
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
