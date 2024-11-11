import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Skills() {
  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-in-out', once: true });
  }, []);
  const skills = [
    { name: 'Julia', icon: 'https://cdn.simpleicons.org/Julia/FFFFFF' },
    { name: 'R', icon: 'https://cdn.simpleicons.org/R/FFFFFF' },
    { name: 'Tidyverse', icon: 'https://cdn.simpleicons.org/Tidyverse/FFFFFF' },
    { name: 'Plotly', icon: 'https://cdn.simpleicons.org/Plotly/FFFFFF' },
    { name: 'Python', icon: 'https://cdn.simpleicons.org/python/FFFFFF' },
    { name: 'Scikit Learn', icon: 'https://cdn.simpleicons.org/scikitlearn/FFFFFF' },
    { name: 'Pytorch', icon: 'https://cdn.simpleicons.org/Pytorch/FFFFFF' },
    { name: 'Dask', icon: 'https://cdn.simpleicons.org/Dask/FFFFFF' },
    { name: 'Fastapi', icon: 'https://cdn.simpleicons.org/Fastapi/FFFFFF' },
    { name: 'Flask', icon: 'https://cdn.simpleicons.org/Flask/FFFFFF' },
    { name: 'Selenium', icon: 'https://cdn.simpleicons.org/Selenium/FFFFFF' },
    { name: 'HTML5', icon: 'https://cdn.simpleicons.org/HTML5/FFFFFF' },
    { name: 'CSS3', icon: 'https://cdn.simpleicons.org/CSS3/FFFFFF' },
    { name: 'JavaScript', icon: 'https://cdn.simpleicons.org/JavaScript/FFFFFF' },
    { name: 'Express.js', icon: 'https://cdn.simpleicons.org/Express/FFFFFF' },
    { name: 'React.js', icon: 'https://cdn.simpleicons.org/React/FFFFFF' },
    { name: 'MySQL', icon: 'https://cdn.simpleicons.org/Mysql/FFFFFF' },
    { name: 'PostgreSQL', icon: 'https://cdn.simpleicons.org/postgresql/FFFFFF' },
    { name: 'MongoDB', icon: 'https://cdn.simpleicons.org/mongodb/FFFFFF' },
    { name: 'Redis', icon: 'https://cdn.simpleicons.org/redis/FFFFFF' },
    { name: 'Neo4j', icon: 'https://cdn.simpleicons.org/neo4j/FFFFFF' },
    { name: 'Docker', icon: 'https://cdn.simpleicons.org/Docker/FFFFFF' },
    { name: 'Linux', icon: 'https://cdn.simpleicons.org/linux/FFFFFF' },
    { name: 'AWS', icon: 'https://cdn.simpleicons.org/amazonwebservices/FFFFFF' },
    { name: 'Git', icon: 'https://cdn.simpleicons.org/Git/FFFFFF' },
    { name: 'Github', icon: 'https://cdn.simpleicons.org/Github/FFFFFF' },
    { name: 'Github Action', icon: 'https://cdn.simpleicons.org/githubactions/FFFFFF' },
    { name: 'Quarto', icon: 'https://cdn.simpleicons.org/Quarto/FFFFFF' },
    { name: 'Latex', icon: 'https://cdn.simpleicons.org/Latex/FFFFFF' },
    { name: 'Markdown', icon: 'https://cdn.simpleicons.org/Markdown/FFFFFF' },
    { name: 'Neovim', icon: 'https://cdn.simpleicons.org/neovim/FFFFFF' },
    { name: 'Rstudio', icon: 'https://cdn.simpleicons.org/rstudioide/FFFFFF' },
    { name: 'Jupyter', icon: 'https://cdn.simpleicons.org/jupyter/FFFFFF' },
    { name: 'Tableau', icon: 'https://cdn.simpleicons.org/Tableau/FFFFFF' },
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
                  height="32"
                  width="32"
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
