import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './Education.module.css';

function Education() {

  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-in-out', once: true });
  }, []);

  return (
    <section id="education" className={styles.education} data-aos="fade-up">
      <div className="container">
        <h2 className={styles.title}>Education</h2>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>B.A. in Communication</h3>
            <p className={styles.cardSubtitle}>Handong Global University | 2019.3 - 2026.2</p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>B.S. in Data Science</h3>
            <p className={styles.cardSubtitle}>Handong Global University | 2019.3 - 2026.2</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;