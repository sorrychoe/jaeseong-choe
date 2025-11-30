import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './Experience.module.css';

function Experience() {
    useEffect(() => {
        AOS.init({ duration: 800, easing: 'ease-in-out', once: true });
      }, []);
    const Experiences = [
          {
            "title": "Marketing Manager",
            "company": "NOL Universe | 2025.07 - Present",
            "description": [
              { "role": "Data analysis for Marketing" },
              { "role": "Developed Marketing KPI Dashboard" }, 
              { "role": "Project Manager of Cancel-Free" }
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
    <section id="experience" className={styles.experience} data-aos="fade-up">
        <div className="container">
            <h2 className={styles.title}>Experience</h2>
            <div className={styles.container}>
              {Experiences.map((experience, index) => (
              <div className={styles.card} key={index}>
                  <h3 className={styles.cardTitle}>{experience.title}</h3>
                  <p className={styles.cardCompany}>{experience.company}</p>
                  <ul className={styles.list}>
                    {experience.description.map((exp, idx) => (
                      <li className={styles.listItem} key={idx}>{exp.role}</li>
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