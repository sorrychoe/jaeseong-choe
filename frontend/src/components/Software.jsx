import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Softwares() {
  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-in-out', once: true });
  }, []);
  const softwares = [
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
  ];

  return (
    <section id="softwares" className="py-5 bg-light" data-aos="fade-up">
      <div className="container">
        <h2>Softwares</h2>
        {softwares.map((software, index) => (
          <div className="software-item" key={index}>
            <h3>{software.title}</h3>
            <p>{software.description}</p>
            {software.links.map((link, idx) => (
              <a href={link.href} target="_blank" rel="noopener noreferrer" key={idx}>
                <img height="30" width="30" src={link.icon} alt={software.title} />
              </a>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Softwares;