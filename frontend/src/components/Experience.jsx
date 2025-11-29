import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Experience() {
    useEffect(() => {
        AOS.init({ duration: 800, easing: 'ease-in-out', once: true });
      }, []);
    const Experiences = [
          {
            "title": "Marketing Manager",
            "company": "NOL Universe | 2025.07 - Present",
            "description": [
              { "role": "Project Manager of Cancel-Free" },
              { "role": "Data analysis for Marketing" }
            ]
          },
          {
            "title": "Research Assistant",
            "company": "Handong Global University | 2024.12 - 2025.06 (Part-time)",
            "description": [
              { "role": "Research Assistant, Institute for Holistic Intelligence Scholarship and Education Development" },
            ]
          },
          {
            "title": "Project Manager",
            "company": "Fastcampus | 2023.06 - 2024.02",
            "description": [
              { "role": "Education PM, AI Boot Camp (6th) & Upstage AI Lab (2nd)" },
              { "role": "Conducted market trend analysis and developed KPI dashboards to support data-driven decision making" }
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
              { "role": "QA Engineer, Link & Runway"},
              { "role": "Developed test automation frameworks and deployment environments for MLOps products"}
            ]
          },
          {
            "title": "Learning Manager",
            "company": "Fastcampus | 2022.06 - 2023.01",
            "description": [
              { "role": "Operation Manager, Data Analytics Boot Camp" },
            ]
          }
        ]

  return ( 
    <section id="experience" className="py-20 bg-gray-50" data-aos="fade-up">
        <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16">Experience</h2>
            <div className="max-w-4xl mx-auto">
              {Experiences.map((experience, index) => (
              <div className="bg-white p-6 rounded-lg shadow-lg mb-8" key={index}>
                  <h3 className="text-2xl font-bold text-blue-600 mb-1">{experience.title}</h3>
                  <p className="text-md font-semibold text-gray-600 mb-4">{experience.company}</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    {experience.description.map((exp, idx) => (
                      <li key={idx}>{exp.role || exp.rold}</li>
                    ))}
                  </ul>
              </div>
              ))}
            </div>
        </div>
    </section>
  )
}

export default Experience;