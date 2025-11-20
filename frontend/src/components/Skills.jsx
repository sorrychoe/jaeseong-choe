import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

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
    <section id="skills" className="py-5 bg-light" data-aos="fade-up">
      <div className="container">
        <h2>Skills</h2>
        <ul className="skills-list">
          {skills.map((skill, index) => (
            <li key={index}>
              <div className="overlay-container">
                <img
                  height="33"
                  width="33"
                  src={skill.icon}
                  alt={skill.name}
                  className="skill-icon animated-image"
                />
                <div className="overlay">
                  <div className="overlay-text">{skill.name}</div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Skills;
