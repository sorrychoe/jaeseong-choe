import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import styles from './Publication.module.css';
import { publications } from '../data/site';

function Publication() {
  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-in-out', once: true });
  }, []);

  return (
    <section id="publication" className="section" data-aos="fade-up">
      <div className="container">
        <h2 className="section-title">Publications</h2>
        <div className={styles.grid}>
          {publications.map((publication, index) => (
            <div className={`card ${styles.card}`} key={index}>
              <h3 className={styles.cardTitle}>{publication.title}</h3>
              <p className={styles.cardDescription}>{publication.description}</p>
              <div className={styles.links}>
                {publication.links.map((link, idx) => (
                  <a href={link.href} target="_blank" rel="noopener noreferrer" key={idx} className={styles.link} aria-label={`${publication.title} - ${link.label}`}>
                    <Image height={24} width={24} src={link.icon} alt={link.label} className={`${styles.icon} floating-icon`} unoptimized />
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

export default Publication;