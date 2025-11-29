import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Software() {
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
    <section id="softwares" className="py-20 bg-white" data-aos="fade-up">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Software</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {softwares.map((software, index) => (
            <div className="bg-gray-50 rounded-lg shadow-lg p-6 flex flex-col" key={index}>
              <h3 className="text-xl font-bold text-blue-600 mb-2">{software.title}</h3>
              <p className="text-gray-700 mb-4 flex-grow">{software.description}</p>
              <div className="flex items-center space-x-4">
                {software.links.map((link, idx) => (
                  <a href={link.href} target="_blank" rel="noopener noreferrer" key={idx} className="hover:opacity-75 transition duration-300">
                    <img height="24" width="24" src={link.icon} alt={software.title} />
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

export default Software;