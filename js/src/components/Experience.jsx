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
        { "role": "Marketing Manager of Cancel-Free" },
        { "role": "Marketing Data Analyst" },
        { "role": "Developed Marketing KPI Dashboard of NOL/Interpark/Triple" },
      ]
    },
    {
      "title": "Undergraduate Research Assistant",
      "company": "Handong Global University | 2024.12 - 2025.06 (Part-time)",
      "logo": "/images/Handong_Global_University.png",
      "description": [
        { "role": "Research Assistant of Institute for Holistic Intelligence Scholarship and Education Development" },
      ]
    },
    {
      "title": "Project Manager",
      "company": "Day1company | 2023.06 - 2024.02",
      "logo": "/images/day1company.png",
      "description": [
        { "role": "Project Manager of AI Boot Camp (6th) & Upstage AI Lab (2nd)" },
        { "role": "Developed KPI dashboards about HRD Market" },
      ]
    },
    {
      "title": "QA Engineer",
      "company": "Makinarocks | 2023.02 - 2023.06 (Internship)",
      "logo": "/images/makinarocks.jpeg",
      "description": [
        { "role": "QA Engineer specialized in test automation" },
        { "role": "Developed test automation frameworks and deployment environments for MLOps products" },
      ]
    },
    {
      "title": "Learning Manager",
      "company": "Day1conmpany | 2022.06 - 2023.01(Contract)",
      "logo": "/images/day1company.png",
      "description": [
        { "role": "Data Analytics Boot Camp Opeartion Manager" },
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