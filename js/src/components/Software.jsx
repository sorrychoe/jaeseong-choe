import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './Projects.module.css';

function Software() {
  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-in-out', once: true });
  }, []);
  const softwares = [
      {
        title: 'PyBigkinds',
        description: 'Bigkinds Data Preprocessing Library for Python',
        links: [
            { href: 'https://pypi.org/project/pyBigKinds/', icon: 'https://cdn.simpleicons.org/pypi/FFFFFF' },
            { href: 'https://github.com/sorrychoe/pyBigKinds', icon: 'https://cdn.simpleicons.org/Github/FFFFFF' },
            ],
        },
        {
        title: 'RBigkinds',
        description: 'Bigkinds Data Preprocessing Library for R',
        links: [
            { href: 'https://sorrychoe.github.io/RBigKinds/', icon: 'https://cdn.simpleicons.org/gitbook/FFFFFF' },
            { href: 'https://github.com/sorrychoe/RBigKinds', icon: 'https://cdn.simpleicons.org/Github/FFFFFF' },
            ],
        },
        {
            title: 'covid19today',
            description: 'A library for fetching daily confirmed COVID-19 cases.',
            links: [
            { href: 'https.://sorrychoe.github.io/covid19today//', icon: 'https://cdn.simpleicons.org/gitbook/FFFFFF' },
            { href: 'https://github.com/sorrychoe/covid19today', icon: 'https://cdn.simpleicons.org/Github/FFFFFF' },
            ],
        },
  ];

  return (
    <section id="softwares" className="section" data-aos="fade-up">
      <div className="container">
        <h2 className="section-title">Software</h2>
        <div className={styles.grid}>
          {softwares.map((software, index) => (
            <div className={`card ${styles.card}`} key={index}>
              <h3 className={styles.cardTitle}>{software.title}</h3>
              <p className={styles.cardDescription}>{software.description}</p>
              <div className={styles.links}>
                {software.links.map((link, idx) => (
                  <a href={link.href} target="_blank" rel="noopener noreferrer" key={idx} className={styles.link}>
                    <img height="24" width="24" src={link.icon} alt={software.title} className={`${styles.icon} floating-icon`} />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Software;