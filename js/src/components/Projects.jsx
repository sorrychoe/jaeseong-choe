import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './Projects.module.css';

function Projects() {
  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-in-out', once: true });
  }, []);
  const projects = [
      {
        title: 'The World as Represented by Economic News',
        description: "A Machine Learning-Based Discourse Analysis of Korean Economic Press Journals",
        links: [
          { href: 'https://sorrychoe.quarto.pub/economic-columns-analysis/', icon: 'https://cdn.simpleicons.org/quarto/FFFFFF' },
          { href: 'https://github.com/sorrychoe/economic_analysis', icon: 'https://cdn.simpleicons.org/Github/FFFFFF' },
        ],
      },
      {
        title: 'How the Media Portrays Victims',
        description: "A Machine Learning-Based Discourse Analysis of the Portrayal of Sexual Crime Murders in Korean Media",
        links: [
          { href: 'https://sorrychoe.quarto.pub/inha_accident_report/', icon: 'https://cdn.simpleicons.org/quarto/FFFFFF' },
          { href: 'https://github.com/sorrychoe/inha_accident', icon: 'https://cdn.simpleicons.org/Github/FFFFFF' },
        ],
      },
      {
        title: 'Everything of Handong, from 1995 to 2024',
        description: "A Structural Topic Modeling Approach to News About Handong Global University",
        links: [
          { href: 'https://github.com/sorrychoe/Everything-of-Handong', icon: 'https://cdn.simpleicons.org/Github/FFFFFF' },
        ],
      },
      {
        title: 'Finding Optimal Vertiport Locations in the Seoul Metropolitan Area',
        description: "A Clustering Approach to Identify 100 Optimal Vertiport Locations in the Seoul Metropolitan Area.",
        links: [
            { href: 'https://github.com/sorrychoe/Finding-Optimal-Vertiport', icon: 'https://cdn.simpleicons.org/Github/FFFFFF' },
        ],
      },
      {
        title: 'Attrition Analysis Report',
        description: "A Practical Application of People Analytics",
        links: [
          { href: 'https://github.com/Analytics-for-People/Attrition-Analysis', icon: 'https://cdn.simpleicons.org/Github/FFFFFF' },
        ],
      },
      {
        title: 'SNS Addiction Analysis Report',
        description: "A Practical Application of Survey Data Analysis",
        links: [
          { href: 'https://github.com/sorrychoe/sns-addiction-modeling', icon: 'https://cdn.simpleicons.org/Github/FFFFFF' },
        ],
      },
      {
        title: 'Which Neighborhood is Most Similar to Mine?',
        description: "A webpage to find neighborhoods with similar population distributions.",
        links: [
          { href: 'https://github.com/sorrychoe/population', icon: 'https://cdn.simpleicons.org/Github/FFFFFF' },
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
                  <a href={link.href} target="_blank" rel="noopener noreferrer" key={idx} className={styles.link}>
                    <img height="24" width="24" src={link.icon} alt={project.title} className={`${styles.icon} floating-icon`} />
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