import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Projects.module.css';
import { projects } from '../data/site';

const GROUPS = [
  { id: 'oss', title: 'Open-Source Libraries' },
  { id: 'ai', title: 'AI & Automation' },
  { id: 'web', title: 'Webpage' },
];

function Projects() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        {GROUPS.map((group) => (
        <React.Fragment key={group.id}>
        <h3 className={styles.groupTitle}>{group.title}</h3>
        <div className={styles.grid}>
          {projects.filter((project) => project.group === group.id).map((project) => (
            <div className={`card ${styles.card}`} key={project.slug}>
              <h3 className={styles.cardTitle}>
                <Link
                  href={`/projects/${project.slug}`}
                  className={styles.titleLink}
                >
                  {project.title}
                </Link>
              </h3>
              <p className={styles.cardDescription}>{project.description}</p>
              <Link
                href={`/projects/${project.slug}`}
                className={styles.detailLink}
              >
                Read overview →
              </Link>
              <div className={styles.links}>
                {project.links.map((link, idx) => (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={idx}
                    className={styles.link}
                    aria-label={`${project.title} - ${link.label}`}
                  >
                    <Image
                      height={24}
                      width={24}
                      src={link.icon}
                      alt=""
                      className={styles.icon}
                      unoptimized
                    />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
        </React.Fragment>
        ))}
      </div>
    </section>
  );
}

export default Projects;
