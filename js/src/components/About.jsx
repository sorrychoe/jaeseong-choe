import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './About.module.css';

function About() {
  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-in-out', once: true });
  }, []);

  return (
    <section id="about" className={styles.about} data-aos="fade-up">
      <div className="container">
        <h2 className={styles.title}>About Me</h2>
        <div className={styles.content}>
          <div className={styles.textContainer}>
            <p className={styles.text}>
              <strong className={styles.strong}>Data-driven professional</strong> with experience across HRD, Education, and Marketing field.
            </p>
            <p className={styles.text}>
              <strong className={styles.strong}>Specialized in computational methods</strong> to uncover patterns in media discourse, public opinion, and social behavior.
            </p>
            <p className={styles.text}>
              Passionate about integrating theoretical frameworks with practical applications to drive insights from real-world data.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;