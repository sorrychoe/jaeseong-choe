import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './Skills.module.css';

function Skills() {
  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-in-out', once: true });
  }, []);
  const skills = [
    { name: 'Python', icon: 'https://cdn.simpleicons.org/python/FFFFFF' },
    { name: 'JavaScript', icon: 'https://cdn.simpleicons.org/JavaScript/FFFFFF' },
    { name: 'R', icon: 'https://cdn.simpleicons.org/R/FFFFFF' },
    { name: 'Julia', icon: 'https://cdn.simpleicons.org/Julia/FFFFFF' },
    { name: 'Redash', icon: 'https://cdn.simpleicons.org/redash/FFFFFF' },
    { name: 'Databricks', icon: 'https://cdn.simpleicons.org/databricks/FFFFFF' },
    { name: 'Selenium', icon: 'https://cdn.simpleicons.org/Selenium/FFFFFF' },
    { name: 'Tidyverse', icon: 'https://cdn.simpleicons.org/Tidyverse/FFFFFF' },
    { name: 'Scikit Learn', icon: 'https://cdn.simpleicons.org/scikitlearn/FFFFFF' },
    { name: 'Pytorch', icon: 'https://cdn.simpleicons.org/Pytorch/FFFFFF' },
    { name: 'Latex', icon: 'https://cdn.simpleicons.org/Latex/FFFFFF' },
    { name: 'Markdown', icon: 'https://cdn.simpleicons.org/Markdown/FFFFFF' },
    { name: 'Quarto', icon: 'https://cdn.simpleicons.org/Quarto/FFFFFF' },
    { name: 'HTML', icon: 'https://cdn.simpleicons.org/HTML5/FFFFFF' },
    { name: 'CSS', icon: 'https://cdn.simpleicons.org/CSS/FFFFFF' },
    { name: 'Docker', icon: 'https://cdn.simpleicons.org/Docker/FFFFFF' },
    { name: 'Git', icon: 'https://cdn.simpleicons.org/Git/FFFFFF' },
    { name: 'Github Action', icon: 'https://cdn.simpleicons.org/githubactions/FFFFFF' },
  ];

  return (
    <section id="skills" className={styles.skills} data-aos="fade-up">
      <div className="container">
        <h2 className={styles.title}>Skills</h2>
        <div className={styles.container}>
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
      </div>
    </section>
  );
}

export default Skills;
