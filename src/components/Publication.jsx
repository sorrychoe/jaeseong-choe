import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Publication.module.css';
import { RESEARCH_INTERESTS, conferences, publications } from '../data/site';

const SELF = 'Jaeseong Choe';

function Authors({ names }) {
  return (
    <span>
      {names.map((name, i) => (
        <React.Fragment key={name}>
          {i > 0 && ', '}
          {name === SELF ? <strong className={styles.self}>{name}</strong> : name}
        </React.Fragment>
      ))}
    </span>
  );
}

function IconLinks({ title, links }) {
  return links.map((link) => (
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      key={link.href}
      className={styles.link}
      aria-label={`${title} - ${link.label}`}
    >
      <Image height={24} width={24} src={link.icon} alt="" className={styles.icon} unoptimized />
    </a>
  ));
}

function Publication() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Research</h2>

        <ul className={styles.interests} aria-label="Research interests">
          {RESEARCH_INTERESTS.map((interest) => (
            <li key={interest} className={styles.interest}>
              {interest}
            </li>
          ))}
        </ul>

        <h3 className={styles.groupTitle}>Journal Articles</h3>
        <ul className={styles.list}>
          {publications.map((publication) => (
            <li className={styles.row} key={publication.slug}>
              <div className={styles.body}>
                <h4 className={styles.title}>
                  <Link href={`/publications/${publication.slug}`} className={styles.titleLink}>
                    {publication.title}
                  </Link>
                </h4>
                <p className={styles.meta}>
                  <Authors names={publication.authors} /> · {publication.venue}
                  {publication.volume ? `, ${publication.volume}` : ''}, {publication.year}
                </p>
                <p className={styles.description}>{publication.description}</p>
                <Link href={`/publications/${publication.slug}`} className={styles.detailLink}>
                  Read overview →
                </Link>
              </div>
              <div className={styles.links}>
                <IconLinks title={publication.title} links={publication.links} />
              </div>
            </li>
          ))}
        </ul>

        <h3 className={styles.groupTitle}>Conference Presentations</h3>
        <ul className={styles.list}>
          {conferences.map((talk) => (
            <li className={`${styles.row} ${styles.talk}`} key={talk.title}>
              <p className={styles.year}>{talk.year}</p>
              <div className={styles.body}>
                <h4 className={styles.title}>{talk.title}</h4>
                <p className={styles.meta}>
                  <Authors names={talk.authors} /> · {talk.venue}
                </p>
              </div>
              <div className={styles.links}>
                <IconLinks title={talk.title} links={talk.links} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Publication;
