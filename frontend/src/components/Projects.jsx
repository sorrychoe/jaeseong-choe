import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Projects() {
  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-in-out', once: true });
  }, []);
  const projects = [
    {
      title: 'PyBigkinds',
      description: 'Bigkinds Data Preprocessing Library for Python',
      links: [
        { href: 'https://pypi.org/project/pyBigKinds/', icon: 'https://cdn.simpleicons.org/pypi/000000' },
        { href: 'https://github.com/sorrychoe/pyBigKinds', icon: 'https://cdn.simpleicons.org/Github/000000' },
      ],
    },
    {
      title: 'RBigkinds',
      description: 'Bigkinds Data Preprocessing Library for R',
      links: [
        { href: 'https://sorrychoe.github.io/RBigKinds/', icon: 'https://cdn.simpleicons.org/gitbook/000000' },
        { href: 'https://github.com/sorrychoe/RBigKinds', icon: 'https://cdn.simpleicons.org/Github/000000' },
      ],
    },
    {
        title: 'covid19today',
        description: 'Library that informs daily COVID-19 confirmed data',
        links: [
          { href: 'https://sorrychoe.github.io/covid19today//', icon: 'https://cdn.simpleicons.org/gitbook/000000' },
          { href: 'https://github.com/sorrychoe/covid19today', icon: 'https://cdn.simpleicons.org/Github/000000' },
        ],
      },
      {
        title: 'What reality has the economic news column reproduced?',
        description: "Discourse Analysis Report through Economic Newspaper Columns Written in the President Moon's Governmant",
        links: [
          { href: 'https://sorrychoe.quarto.pub/economic-columns-analysis/', icon: 'https://cdn.simpleicons.org/quarto/000000' },
          { href: 'https://github.com/sorrychoe/economic_analysis', icon: 'https://cdn.simpleicons.org/Github/000000' },
        ],
      },
      {
        title: 'How the Media Says Victims',
        description: "A Report Analysis of the Reproduction of the Media on Inha University Rape Murder Case",
        links: [
          { href: 'https://sorrychoe.quarto.pub/inha_accident_report/', icon: 'https://cdn.simpleicons.org/quarto/000000' },
          { href: 'https://github.com/sorrychoe/inha_accident', icon: 'https://cdn.simpleicons.org/Github/000000' },
        ],
      },
      {
        title: 'Which neighborhood is the most similar to my neighborhood?',
        description: "a web page that finds a population distribution similar to the neighborhood in which one lives",
        links: [
          { href: 'https://github.com/sorrychoe/population', icon: 'https://cdn.simpleicons.org/Github/000000' },
        ],
      },
      {
        title: 'Which team had a high probability of winning?',
        description: "Prediction of League of Legends Winning Rate Using Machine Learning",
        links: [
          { href: 'https://github.com/sorrychoe/lol-victory-predict', icon: 'https://cdn.simpleicons.org/Github/000000' },
        ],
      },
  ];

  return (
    <section id="projects" className="py-5 bg-light" data-aos="fade-up">
      <div className="container">
        <h2>Projects</h2>
        {projects.map((project, index) => (
          <div className="project-item" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            {project.links.map((link, idx) => (
              <a href={link.href} target="_blank" rel="noopener noreferrer" key={idx}>
                <img height="30" width="30" src={link.icon} alt={project.title} />
              </a>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;