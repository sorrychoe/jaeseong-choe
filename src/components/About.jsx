import React from 'react';
import styles from './About.module.css';
import { FaEnvelope } from 'react-icons/fa';
import { TabLink } from './Navbar';
import { PROFILE_LINKS, RESEARCH_INTERESTS } from '../data/site';

const HIGHLIGHTS = [
  {
    period: 'Now',
    title: 'AI Data Engineering',
    items: [
      'Develop and maintain the pipelines that collect and load real-estate data',
      'Build dashboards for analyzing that data',
      'Integrate and deploy AI features in the product backend',
      'Outside work, build tools end to end, from data collection to deployment',
    ],
    link: { href: '/#development', label: 'Development projects →' },
  },
  {
    period: 'Before',
    title: 'Marketing Analytics',
    items: [
      'Consolidated a three-brand KPI dashboard onto Databricks, cutting maintenance effort by 90%',
      'Built demand-forecasting models that reached 93% accuracy',
      'Designed a GEO (Generative Engine Optimization) framework for measuring brand visibility in LLM responses',
    ],
  },
  {
    period: 'Ongoing',
    title: 'Computational Research',
    items: [
      'Apply NLP and topic modeling (STM, sBERT, BERTopic) to media discourse and public opinion',
      'Three studies published in KCI-listed journals and presented at national conferences',
      'Develop PyBigKinds and RBigKinds, open-source research software for news data',
    ],
    link: { href: '/#research', label: 'Research →' },
  },
];

function About() {
  return (
    <section className={styles.about}>
      <div className="container">
        <div className={styles.hero}>
          <h2 className={styles.greeting}>Hi, I&apos;m Jaeseong.</h2>
          <p className={styles.lead}>
            I&apos;m an <strong>AI Data Engineer</strong> with a background in data analytics and computational communication research. I build the pipelines, data infrastructure, and AI integrations that turn raw discourse, behavioral, and business data into something analysts and researchers can trust.
          </p>
          <div className={styles.actions}>
            <TabLink href="/#cv" className={styles.primary}>
              View my CV
            </TabLink>
            <TabLink href="/#research" className={styles.secondary}>
              See my publications
            </TabLink>
          </div>
          <ul className={styles.contacts}>
            {PROFILE_LINKS.map(({ href, label, Icon }) => (
              <li key={href}>
                <a href={href} target="_blank" rel="noopener noreferrer" className={styles.contact}>
                  <Icon aria-hidden="true" />
                  {label}
                </a>
              </li>
            ))}
            <li>
              <a href="mailto:cjssoote@gmail.com" className={styles.contact}>
                <FaEnvelope aria-hidden="true" />
                Email
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.grid}>
          {HIGHLIGHTS.map(({ period, title, items, link }) => (
            <article key={title} className={styles.highlight}>
              <p className={styles.period}>{period}</p>
              <h3 className={styles.highlightTitle}>{title}</h3>
              <ul className={styles.items}>
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              {link && (
                <TabLink href={link.href} className={styles.more}>
                  {link.label}
                </TabLink>
              )}
            </article>
          ))}
        </div>

        <div className={styles.closing}>
          <p className={styles.throughline}>
            Across all of it, the throughline is the same: data infrastructure solid enough to trust, and analysis rigorous enough to publish. Research remains a long-term direction, and I continue this work alongside engineering.
          </p>
          <h3 className={styles.interestsHeading}>Research Interests</h3>
          <ul className={styles.interests}>
            {RESEARCH_INTERESTS.map((interest) => (
              <li key={interest} className={styles.interest}>
                {interest}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
