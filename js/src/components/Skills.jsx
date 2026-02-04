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
    { name: 'Julia', icon: 'https://cdn.simpleicons.org/Julia/FFFFFF' },
    { name: 'Python', icon: 'https://cdn.simpleicons.org/python/FFFFFF' },
    { name: 'JavaScript', icon: 'https://cdn.simpleicons.org/JavaScript/FFFFFF' },
    { name: 'HTML', icon: 'https://cdn.simpleicons.org/HTML5/FFFFFF' },
    { name: 'CSS', icon: 'https://cdn.simpleicons.org/CSS/FFFFFF' },
    { name: 'Tidyverse', icon: 'https://cdn.simpleicons.org/Tidyverse/FFFFFF' },
    { name: 'Pytorch', icon: 'https://cdn.simpleicons.org/Pytorch/FFFFFF' },
    { name: 'Selenium', icon: 'https://cdn.simpleicons.org/Selenium/FFFFFF' },
    { name: 'Pytest', icon: 'https://cdn.simpleicons.org/pytest/FFFFFF' },
    { name: 'Plotly', icon: 'https://cdn.simpleicons.org/plotly/FFFFFF' },
    { name: 'Streamlit', icon: 'https://cdn.simpleicons.org/Streamlit/FFFFFF' },
    { name: 'Redash', icon: 'https://cdn.simpleicons.org/redash/FFFFFF' },
    { name: 'Databricks', icon: 'https://cdn.simpleicons.org/databricks/FFFFFF' },
    { name: 'Git', icon: 'https://cdn.simpleicons.org/Git/FFFFFF' },
    { name: 'Github', icon: 'https://cdn.simpleicons.org/github/FFFFFF' },
    { name: 'Github Action', icon: 'https://cdn.simpleicons.org/githubactions/FFFFFF' },
    { name: 'Docker', icon: 'https://cdn.simpleicons.org/Docker/FFFFFF' },
    { name: 'Quarto', icon: 'https://cdn.simpleicons.org/Quarto/FFFFFF' },
    { name: 'Markdown', icon: 'https://cdn.simpleicons.org/Markdown/FFFFFF' },
    { name: 'Latex', icon: 'https://cdn.simpleicons.org/Latex/FFFFFF' },
    { name: 'Jupyter', icon: 'https://cdn.simpleicons.org/jupyter/FFFFFF' },
    { name: 'Google Colab', icon: 'https://cdn.simpleicons.org/googlecolab/FFFFFF' },
    { name: 'Positron', icon: 'https://cdn.simpleicons.org/posit/FFFFFF' },
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
