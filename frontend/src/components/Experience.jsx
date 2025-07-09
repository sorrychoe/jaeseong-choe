import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Experience() {
    useEffect(() => {
        AOS.init({ duration: 800, easing: 'ease-in-out', once: true });
      }, []);
    const Experiences = [
          {
            "title": "Marketing Innovation Manager",
            "company": "NOL Universe | 2025.07 - Present",
            "description": [
              { "role": "Marketing Innovation for OTA growth" }
            ]
          },
          {
            "title": "Research Assistant",
            "company": "Handong Global University | 2024.12 - Present (Freelancer)",
            "description": [
              { "role": "Research Assistant, Institute for Holistic Intelligence Scholarship and Education Development" },
              { "role": "Research Assistant, Department of Communication Arts" }
            ]
          },
          {
            "title": "Project Manager",
            "company": "Fastcampus | 2023.06 - 2024.02",
            "description": [
              { "role": "Education PM, AI Boot Camp (6th) & Upstage AI Lab (2nd)" },
              { "role": "Data Analyst focused on market trends and competitive analysis in the HRD industry" }
            ]
          },
          {
            "title": "Course Assistant",
            "company": "Fastcampus | 2022.12 - 2023.03 (Freelancer)",
            "description": [
              { "role": "Practice Coach, Online Data Visualization Course (Tableau)" }
            ]
          },
          {
            "title": "QA Engineer",
            "company": "Makinarocks | 2023.02 - 2023.06 (Internship)",
            "description": [
              { "role": "QA Engineer building test automation frameworks and deployment environments for MLOps product"},
            ]
          },
          {
            "title": "Learning Manager",
            "company": "Fastcampus | 2022.06 - 2023.01",
            "description": [
              { "role": "Program Manager, Data Analytics Boot Camp" },
            ]
          }
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