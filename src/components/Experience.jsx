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
      "title": "Marketing Data Analyst",
      "company": "Ascent Korea | 2026.04 - Present (Full-Time)",
      "logo": "/images/ascentkorea.jpg",
      "description": [
        { "role": "Data Analyst specialized in Intent Marketing" },
      ]
    },
    {
      "title": "Marketing Manager",
      "company": "NOL Universe | 2025.07 - 2026-04 (Contract)",
      "logo": "/images/NOL_Universe.jpeg",
      "description": [
        { "role": "Marketing Manager, Cancel-Free" },
        { "role": "Marketing KPI Dashboard Development" },
      ]
    },
    {
      "title": "Undergraduate Research Assistant",
      "company": "Handong Global University | 2024.12 - 2025.06 (Part-time)",
      "logo": "/images/Handong_Global_University.png",
      "description": [
        { "role": "Research Assistant in Education"},
        { "role": "Quantitative Research using Computational Methods"}
      ]
    },
    {
      "title": "Project Manager",
      "company": "Day1company | 2023.06 - 2024.02 (Contract)",
      "logo": "/images/day1company.png",
      "description": [
        { "role": "Project Manager, AI Boot Camp (6th) & Upstage AI Lab (2nd)" },
        { "role": "HRD KPI Dashboard Development" },
      ]
    },
    {
      "title": "QA Engineer",
      "company": "Makinarocks | 2023.02 - 2023.06 (Internship)",
      "logo": "/images/makinarocks.jpeg",
      "description": [
        { "role": "Selenium-based Test Automation" },
      ]
    },
    {
      "title": "Facilitator",
      "company": "Fastcampus | 2022.12 - 2023.03(Freelancer)",
      "logo": "/images/Fastcampus.png",
      "description": [
        { "role": "Facilitator, KDC Tableau Data Visualization Online Course" },
      ]
    },
    {
      "title": "Learning Manager",
      "company": "Day1company | 2022.06 - 2023.01(Contract)",
      "logo": "/images/day1company.png",
      "description": [
        { "role": "Operation Manager, Data Analytics Boot Camp" },
      ]
    }
  ]

  return (
    <section id="experience" className="section" data-aos="fade-up">
      <div className="container">
        <h2 className="section-title">Experiences</h2>
        {Experiences.map((experience, index) => (
          <div className={`card ${styles.card}`} key={index}>
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