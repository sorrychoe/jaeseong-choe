import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Projects() {
  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-in-out', once: true });
  }, []);
  const projects = [
      {
        title: 'Reproduction analysis of mental illness in the Korean media using BERTopic',
        description: "Topic Modeling based Content Analysis of Korean media Focused on cases of bipolar disorder, depression, and schizophrenia from 1960 to 2024",
        links: [
          { href: 'https://sorrychoe.quarto.pub/bertopic-second-result/', icon: 'https://cdn.simpleicons.org/quarto/000000' },
        ],
      },
      {
        title: 'World reproduced by Economic News',
        description: "Machine Learning based Discourse Analysis of Korean Economic Press Journal",
        links: [
          { href: 'https://sorrychoe.quarto.pub/economic-columns-analysis/', icon: 'https://cdn.simpleicons.org/quarto/000000' },
          { href: 'https://github.com/sorrychoe/economic_analysis', icon: 'https://cdn.simpleicons.org/Github/000000' },
        ],
      },
      {
        title: 'How the Media Says Victims',
        description: "Machine Learning based Discourse Analysis of Reproduction of Sexual Crime Murder in Korean Media",
        links: [
          { href: 'https://sorrychoe.quarto.pub/inha_accident_report/', icon: 'https://cdn.simpleicons.org/quarto/000000' },
          { href: 'https://github.com/sorrychoe/inha_accident', icon: 'https://cdn.simpleicons.org/Github/000000' },
        ],
      },
      {
        title: 'Everything of Handong, from 1995 to 2024',
        description: "Text Analysis of News about Handong Global University",
        links: [
          { href: 'https://github.com/sorrychoe/Everything-of-Handong', icon: 'https://cdn.simpleicons.org/Github/000000' },
        ],
      },
      {
        title: 'Creationism Chatbot',
        description: "Chatbot for Creationism course Q&A at Handong University",
        links: [
          { href: 'https://github.com/sorrychoe/Creationism_Chatbot', icon: 'https://cdn.simpleicons.org/Github/000000' },
        ],
      },
      {
        title: 'Which neighborhood is the most similar to my neighborhood?',
        description: "Webpage that finds a population distribution similar to the neighborhood in which one lives",
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