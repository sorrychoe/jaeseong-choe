import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './About.module.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaFilePdf } from 'react-icons/fa';
import { ImBooks } from 'react-icons/im';

function About() {
  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-in-out', once: true });
  }, []);

  const handleDownload = (e) => {
    e.preventDefault();
    fetch('/cv.pdf')
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'Jaeseong_Choe_CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      })
      .catch((err) => {
        console.error('Error downloading the CV:', err);
        // Fallback
        const link = document.createElement('a');
        link.href = '/cv.pdf';
        link.download = 'Jaeseong_Choe_CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
  };

  return (
    <section id="about" className="section" data-aos="fade-up">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className={`card ${styles.content}`}>
          <div className={styles.textContainer}>
            <p className={styles.text}>
              <strong className={styles.strong}>Data-driven professional</strong> with experience across Education, Marketing and Communication Research.
            </p>
            <p className={styles.text}>
              <strong className={styles.strong}>Specialized in computational methods</strong> to uncover patterns in media discourse, public opinion, and social behavior.
            </p>
            <p className={styles.text}>
              Passionate about integrating theoretical frameworks with practical applications to drive insights from real-world data.
            </p>
          </div>
          <div className={styles.buttonContainer} data-aos="fade-up">
            <div className={styles.socialButtons}>
              <a
                href="/cv.pdf"
                onClick={handleDownload}
                className={`${styles.socialButton} ${styles.cv}`}
                data-tooltip="Download CV (PDF)"
                aria-label="Download CV"
              >
                <FaFilePdf />
              </a>
              <a
                href="https://github.com/sorrychoe"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.socialButton} ${styles.github}`}
                data-tooltip="GitHub"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/sorrychoe/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.socialButton} ${styles.linkedin}`}
                data-tooltip="LinkedIn"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.dbpia.co.kr/author/authorDetail?ancId=723491585"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.socialButton} ${styles.dbpia}`}
                data-tooltip="DBpia Profile"
                aria-label="DBpia Profile"
              >
                <ImBooks />
              </a>
              <a
                href="#contact"
                className={`${styles.socialButton} ${styles.email}`}
                data-tooltip="Email"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;