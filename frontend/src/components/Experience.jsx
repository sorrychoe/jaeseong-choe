import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Experience() {
    useEffect(() => {
        AOS.init({ duration: 800, easing: 'ease-in-out', once: true });
      }, []);
    const Experiences = [
        {
            title: 'Project Manager',
            company: 'Fastcampus | 2023.06 - 2024.02',
            description: [
              { role: 'AI Boot Camp 6th & Upstage AI Lab 2nd Planning/Operation Manager'},
              { role: 'HRD Education Data Analyst'},
            ],
          },
          {
            title: 'Test Automation Engineer',
            company: 'Makinarocks | 2023.02 - 2023.06 (internship)',
            description: [
              { role: 'Test Automation Engineer of Mrx-Link'},
              { role: 'Software QA Engineer of Runway'},
            ],
          },
          {
            title: 'Learning Manager',
            company: 'Fastcampus | 2022.06 - 2023.01 (Contract)',
            description: [
              { role: 'Seoul Software Academy(SeSAC) Data Analytics Boot Camp Course Operation Manager'},
              { role: 'HRD Education Data Analyst'},
            ],
          },
    ]
  return ( 
    <section id="experience" class="py-5 bg-light" data-aos="fade-up">
        <div class="container">
            <h2>Experience</h2>
            {Experiences.map((experience, index) => (
            <div class="experience-item" key={index}>
                <h3>{experience.title}</h3>
                <p>{experience.company}</p>
                {Experience.description.map((des, idx) => (
                <p key={idx}>{des.role}</p>
                ))}
            </div>
            ))}
        </div>
    </section>
  )
}

export default Experience;