import React, { useEffect } from 'react';
import Image from 'next/image';
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
            "logo": "/images/NOL_Universe.jpeg",
            "description": [
              { "role": "Data analysis for Marketing" },
              { "role": "Developed Marketing KPI Dashboard" }, 
              { "role": "Project Manager of Cancel-Free" }
            ]
          },
          {
            "title": "Research Assistant",
            "company": "Handong Global University | 2024.12 - 2025.06 (Part-time)",
            "logo": "/images/Handong_Global_University.png",
            "description": [
              { "role": "Research Assistant, Institute for Holistic Intelligence Scholarship and Education Development" },
            ]
          },
          {
            "title": "Project Manager",
            "company": "Day1company | 2023.06 - 2024.02",
            "logo": "/images/day1company.png",
            "description": [
              { "role": "Education PM, AI Boot Camp (6th) & Upstage AI Lab (2nd)" },
              { "role": "Conducted market trend analysis and developed KPI dashboards to support data-driven decision making" }
            ]
          },
          {
            "title": "Course Assistant",
            "company": "Day1company | 2022.12 - 2023.03 (Freelancer)",
            "logo": "/images/day1company.png",
            "description": [
              { "role": "Practice Coach, Online Data Visualization Course (Tableau)" }
            ]
          },
          {
            "title": "QA Engineer",
            "company": "Makinarocks | 2023.02 - 2023.06 (Internship)",
            "logo": "/images/makinarocks.jpeg",
            "description": [
              { "role": "QA Engineer, Link & Runway"},
              { "role": "Developed test automation frameworks and deployment environments for MLOps products"}
            ]
          },
          {
            "title": "Learning Manager",
            "company": "Day1conmpany | 2022.06 - 2023.01",
            "logo": "/images/day1company.png",
            "description": [
              { "role": "Operation Manager, Data Analytics Boot Camp" },
            ]
          }
        ]

  return ( 
    <section id="experience" className={styles.experience} data-aos="fade-up">
        <div className="container">
            <h2 className={styles.title}>Experience</h2>
            {Experiences.map((experience, index) => (
            <div className={styles.card} key={index}>
                <Image src={experience.logo} alt={`${experience.company} Logo`} className={styles.logo} width={100} height={100} objectFit="contain" />
                <div className={styles.content}>
                  <h3 className={styles.cardTitle}>{experience.title}</h3>
                  <p className={styles.cardCompany}>{experience.company}</p>
                  <ul className={styles.list}>
                    {experience.description.map((exp, idx) => (
                      <li className={styles.listItem} key={idx}>{exp.role}</li>
                    ))}
                  </ul>
                </div>
            </div>
            ))}
        </div>
    </section>
  )
}

export default Experience;