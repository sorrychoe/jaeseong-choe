import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Projects.module.css';
import { projects } from '../data/site';

function Projects() {
  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-in-out', once: true });
  }, []);

  return (
    <section id="projects" className="section" data-aos="fade-up">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className={styles.grid}>
          {projects.map((project) => (
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
                      alt={link.label}
                      className={`${styles.icon} floating-icon`}
                      unoptimized
                    />
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

export default Projects;
