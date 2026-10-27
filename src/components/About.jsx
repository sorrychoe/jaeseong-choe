import React from 'react';
import styles from './About.module.css';
import { FaEnvelope, FaFilePdf } from 'react-icons/fa';
import { PROFILE_LINKS, RESEARCH_INTERESTS } from '../data/site';

function About() {
  return (
    <section id="about" className="section" data-aos="fade-up">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className={`card ${styles.content}`}>
          <div className={styles.textContainer}>
            <p className={styles.text}>
              <strong className={styles.strong}>Data Engineer</strong> with a background in data analytics and computational communication research, building the pipelines and data infrastructure that turn raw discourse, behavioral, and business data into something analysts and researchers can trust.
            </p>
            <p className={styles.text}>
              <strong className={styles.strong}>As an engineer</strong>, I develop and maintain the pipelines that collect and load real-estate data at my current company, and build dashboards for analyzing it. Before moving into data engineering, I spent a year as a marketing data analyst. I consolidated a three-brand KPI dashboard onto Databricks, cutting maintenance effort by 90%, and built demand-forecasting models that reached 93% accuracy. I also designed a GEO (Generative Engine Optimization) framework for measuring brand visibility in LLM responses. 
            </p>
            <p className={styles.text}>
              <strong className={styles.strong}>As a researcher</strong>, I apply NLP and topic modeling — STM, sBERT, and BERTopic — to media discourse and public opinion, with three studies published in KCI-listed journals and presented at national conferences, spanning psychiatric stigma in Korean newspapers to neo-nationalist discourse on YouTube. I also develop research software — PyBigKinds and RBigKinds, open-source Python and R packages that turn BigKinds news exports into analysis-ready data for text mining and topic modeling. Research remains a long-term direction, and I continue this work alongside engineering.
            </p>
            <p className={styles.text}>
              Across all of it, the throughline is the same: data infrastructure solid enough to trust, and analysis rigorous enough to publish.
            </p>
          </div>
          <div className={styles.interestsContainer} data-aos="fade-up">
            <h3 className={styles.interestsHeading}>Research Interests</h3>
            <ul className={styles.interests} aria-label="Research interests">
              {RESEARCH_INTERESTS.map((interest) => (
                <li key={interest} className={styles.interest}>
                  {interest}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.buttonContainer} data-aos="fade-up">
            <div className={styles.socialButtons}>
              <a
                href="/cv.pdf"
                download="Jaeseong_Choe_CV.pdf"
                className={`${styles.socialButton} ${styles.cv}`}
                data-tooltip="Download CV (PDF)"
                aria-label="Download CV"
              >
                <FaFilePdf />
              </a>
              {PROFILE_LINKS.map(({ href, label, icon, Icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.socialButton} ${styles[icon]}`}
                  data-tooltip={label}
                  aria-label={label}
                >
                  <Icon />
                </a>
              ))}
              <a
                href="mailto:cjssoote@gmail.com"
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
