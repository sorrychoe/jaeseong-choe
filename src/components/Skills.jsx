import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './Skills.module.css';

function Skills() {
  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-in-out', once: true });
  }, []);
  const skills = [
    { name: 'R', icon: 'https://cdn.simpleicons.org/R/FFFFFF' },
    { name: 'Python', icon: 'https://cdn.simpleicons.org/python/FFFFFF' },
    { name: 'Julia', icon: 'https://cdn.simpleicons.org/Julia/FFFFFF' },
    { name: 'JavaScript', icon: 'https://cdn.simpleicons.org/JavaScript/FFFFFF' },
    { name: 'HTML', icon: 'https://cdn.simpleicons.org/HTML5/FFFFFF' },
    { name: 'CSS', icon: 'https://cdn.simpleicons.org/CSS/FFFFFF' },

    { name: 'Tidyverse', icon: 'https://cdn.simpleicons.org/Tidyverse/FFFFFF' },
    { name: 'Pandas', icon: 'https://cdn.simpleicons.org/pandas/FFFFFF' },
    { name: 'Pytorch', icon: 'https://cdn.simpleicons.org/pytorch/FFFFFF' },
    { name: 'Selenium', icon: 'https://cdn.simpleicons.org/Selenium/FFFFFF' },
    { name: 'PySpark', icon: 'https://cdn.simpleicons.org/apachespark/FFFFFF' },
    { name: 'Airflow', icon: 'https://cdn.simpleicons.org/apacheairflow/FFFFFF' },

    { name: 'Anaconda', icon: 'https://cdn.simpleicons.org/anaconda/FFFFFF' },
    { name: 'Git', icon: 'https://cdn.simpleicons.org/Git/FFFFFF' },
    { name: 'Linux', icon: 'https://cdn.simpleicons.org/gnubash/FFFFFF' },
    { name: 'Docker', icon: 'https://cdn.simpleicons.org/Docker/FFFFFF' },
    { name: 'Databricks', icon: 'https://cdn.simpleicons.org/databricks/FFFFFF' },
    { name: 'Redash', icon: 'https://cdn.simpleicons.org/redash/FFFFFF' },

    { name: 'Jupyter', icon: 'https://cdn.simpleicons.org/jupyter/FFFFFF' },
    { name: 'Quarto', icon: 'https://cdn.simpleicons.org/Quarto/FFFFFF' },
    { name: 'Markdown', icon: 'https://cdn.simpleicons.org/Markdown/FFFFFF' },
    { name: 'Latex', icon: 'https://cdn.simpleicons.org/Latex/FFFFFF' },
  ];

  return (
    <section id="skills" className="section" data-aos="fade-up">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <ul className={styles.grid}>
          {skills.map((skill, index) => (
            <li key={index} className={styles.skill}>
              <div className={styles.iconContainer}>
                <img
                  height="48"
                  width="48"
                  src={skill.icon}
                  alt={skill.name}
                  className={`${styles.icon} floating-icon`}
                />
              </div>
              <p className={styles.skillName}>{skill.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Skills;
