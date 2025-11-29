import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Skills() {
  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-in-out', once: true });
  }, []);
  const skills = [
    { name: 'Python', icon: 'https://cdn.simpleicons.org/python/374151' },
    { name: 'JavaScript', icon: 'https://cdn.simpleicons.org/JavaScript/374151' },
    { name: 'R', icon: 'https://cdn.simpleicons.org/R/374151' },
    { name: 'Julia', icon: 'https://cdn.simpleicons.org/Julia/374151' },
    { name: 'Redash', icon: 'https://cdn.simpleicons.org/redash/374151' },
    { name: 'Databricks', icon: 'https://cdn.simpleicons.org/databricks/374151' },
    { name: 'Selenium', icon: 'https://cdn.simpleicons.org/Selenium/374151' },
    { name: 'Tidyverse', icon: 'https://cdn.simpleicons.org/Tidyverse/374151' },
    { name: 'Scikit Learn', icon: 'https://cdn.simpleicons.org/scikitlearn/374151' },
    { name: 'Pytorch', icon: 'https://cdn.simpleicons.org/Pytorch/374151' },
    { name: 'Latex', icon: 'https://cdn.simpleicons.org/Latex/374151' },
    { name: 'Markdown', icon: 'https://cdn.simpleicons.org/Markdown/374151' },
    { name: 'Quarto', icon: 'https://cdn.simpleicons.org/Quarto/374151' },
    { name: 'HTML', icon: 'https://cdn.simpleicons.org/HTML5/374151' },
    { name: 'CSS', icon: 'https://cdn.simpleicons.org/CSS/374151' },
    { name: 'Docker', icon: 'https://cdn.simpleicons.org/Docker/374151' },
    { name: 'Git', icon: 'https://cdn.simpleicons.org/Git/374151' },
    { name: 'Github Action', icon: 'https://cdn.simpleicons.org/githubactions/374151' },
  ];

  return (
    <section id="skills" className="py-20 bg-white" data-aos="fade-up">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Skills</h2>
        <div className="max-w-4xl mx-auto">
          <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8">
            {skills.map((skill, index) => (
              <li key={index} className="text-center">
                <div className="bg-gray-100 p-4 rounded-lg shadow-lg flex items-center justify-center h-24 hover:bg-gray-200 transition duration-300">
                  <img
                    height="48"
                    width="48"
                    src={skill.icon}
                    alt={skill.name}
                    className="h-12 w-12"
                  />
                </div>
                <p className="mt-2 text-sm font-semibold text-gray-700">{skill.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;
