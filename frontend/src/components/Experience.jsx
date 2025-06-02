import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Experience() {
    useEffect(() => {
        AOS.init({ duration: 800, easing: 'ease-in-out', once: true });
      }, []);
    const Experiences = [
      {
            title: 'Research Assistant',
            company: 'Handong Global University | 2024.12 - 2025.06',
            description: [
              { role: 'Research Assistant of Institute for Holistic Intelligence Scholarship and Education Development'},
              { role: 'Research Assistant of Department of Communication Arts'},
            ],
          },
        {
            title: 'Project Manager',
            company: 'Fastcampus | 2023.06 - 2024.02',
            description: [
              { role: 'Project Manager of AI Boot Camp 6th & Upstage AI Lab 2nd'},
              { role: 'HRD Data Analyst'},
            ],
          },
          {
            title: 'Course Assistant',
            company: 'Fastcampus | 2022.12 - 2023.06 (Freelancer)',
            description: [
              { role: 'Data Visualization Online Course Practice Coach Using Tableau'},
            ],
          },
          {
            title: 'QA Engineer',
            company: 'Makinarocks | 2023.02 - 2023.06 (internship)',
            description: [
              { role: 'Test Automation Engineer'},
              { role: 'Software QA of product for Data Scientist'},
            ],
          },
          {
            title: 'Learning Manager',
            company: 'Fastcampus | 2022.06 - 2023.01 (Contract)',
            description: [
              { role: 'Operation Manager of Data Analytics Boot Camp Course'},
              { role: 'HRD Data Analyst'},
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
                {experience.description.map((exp, idx) => (
                  <p key={idx}>{exp.role}</p>
                ))}
            </div>
            ))}
        </div>
    </section>
  )
}

export default Experience;