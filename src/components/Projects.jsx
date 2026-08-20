import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import styles from './Projects.module.css';

function Projects() {
  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-in-out', once: true });
  }, []);
  const projects = [
      {
        title: 'Finding Optimal Vertiport Locations in the Seoul Metropolitan Area',
        description: "A Clustering Approach to Identify 100 Optimal Vertiport Locations in the Seoul Metropolitan Area.",
        links: [
            { href: 'https://github.com/sorrychoe/Finding-Optimal-Vertiport', icon: 'https://cdn.simpleicons.org/Github/FFFFFF', label: 'GitHub' },
        ],
      },
      {
        title: 'Everything of Handong, from 1995 to 2024',
        description: "A Structural Topic Modeling Approach to News About Handong Global University",
        links: [
          { href: 'https://github.com/sorrychoe/Everything-of-Handong', icon: 'https://cdn.simpleicons.org/Github/FFFFFF', label: 'GitHub' },
        ],
      },
            {
        title: 'SNS Addiction Analysis',
        description: "A regression-based analysis of student social media addiction using OLS and GMM",
        links: [
          { href: 'https://github.com/sorrychoe/sns-addiction-modeling', icon: 'https://cdn.simpleicons.org/Github/FFFFFF', label: 'GitHub' },
        ],
      },
      {
        title: 'PyBigkinds',
        description: "Bigkinds Data Preprocessing Library for Python",
        links: [
          { href: 'https://pypi.org/project/pyBigKinds/', icon: 'https://cdn.simpleicons.org/pypi/FFFFFF', label: 'PyPI' },
          { href: 'https://github.com/sorrychoe/pyBigKinds', icon: 'https://cdn.simpleicons.org/Github/FFFFFF', label: 'GitHub' },
        ],
      },
      {
        title: 'RBigkinds',
        description: "Bigkinds Data Preprocessing Library for R",
        links: [
          { href: 'https://sorrychoe.github.io/RBigKinds/', icon: 'https://cdn.simpleicons.org/gitbook/FFFFFF', label: 'Documentation' },
          { href: 'https://github.com/sorrychoe/RBigKinds', icon: 'https://cdn.simpleicons.org/Github/FFFFFF', label: 'GitHub' },
        ],
      },
      {
        title: 'Creationism Chatbot',
        description: "The LLM Chatbot for Creation and Evolution Class Q&A",
        links: [
          { href: 'https://github.com/sorrychoe/Creationism_Chatbot', icon: 'https://cdn.simpleicons.org/Github/FFFFFF', label: 'GitHub' },
        ],
      },
      {
        title: 'About Topic Modeling Theory',
        description: "A Repository about theory of topic modeling",
        links: [
          { href: 'https://github.com/sorrychoe/topic-modeling-theory', icon: 'https://cdn.simpleicons.org/Github/FFFFFF', label: 'GitHub' },
        ],
      },
      {
        title: 'Attrition Analysis',
        description: "A Statistical Analysis of HR data to reduce employee attrition",
        links: [
          { href: 'https://github.com/Analytics-for-People/Attrition-Analysis', icon: 'https://cdn.simpleicons.org/Github/FFFFFF', label: 'GitHub' },
        ],
      },
      {
        title: 'Satisfaction Survey Analysis',
        description: "A Statistical Analysis of Survey Data for People Analytics",
        links: [
          { href: 'https://github.com/Analytics-for-People/Satisfaction-Survey-Analysis', icon: 'https://cdn.simpleicons.org/Github/FFFFFF', label: 'GitHub' },
        ],
      },
  ];

  return (
    <section id="projects" className="section" data-aos="fade-up">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <div className={`card ${styles.card}`} key={index}>
              <h3 className={styles.cardTitle}>{project.title}</h3>
              <p className={styles.cardDescription}>{project.description}</p>
              <div className={styles.links}>
                {project.links.map((link, idx) => (
                  <a href={link.href} target="_blank" rel="noopener noreferrer" key={idx} className={styles.link} aria-label={`${project.title} - ${link.label}`}>
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

export default Projects;