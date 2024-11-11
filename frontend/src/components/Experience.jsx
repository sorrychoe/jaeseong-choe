import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Experience() {
    useEffect(() => {
        AOS.init({ duration: 800, easing: 'ease-in-out', once: true });
      }, []);
  return ( 
    <section id="experience" class="py-5 bg-light" data-aos="fade-up">
        <div class="container">
            <h2>Experience</h2>
            <div class="experience-item">
                <h3>Project Manager</h3>
                <p>Fastcampus | 2023.06 - 2024.02</p>
                <p>AI Boot Camp 6th & Upstage AI Lab 2nd Planning/Operation Manager</p>
                <p>HRD Data Analyst</p>
            </div>
            <div class="experience-item">
                <h3>Test Automation Engineer</h3>
                <p>Makinarocks | 2023.01 - 2023.06 (internship)</p>
                <p>Test Automation Engineer of Mrx-Link</p>
                <p>Software QA on products for Data Scientists</p>
            </div>
            <div class="experience-item">
                <h3>Course Assistant</h3>
                <p>Fastcampus | 2022.12 - 2023.06 (Freelancer)</p>
                <p>Tableau Online Boot Camp Course Training Coach</p>
            </div>
            <div class="experience-item">
                <h3>Learning Manager</h3>
                <p>Fastcampus | 2022.06 - 2023.01 (Contract)</p>
                <p>Seoul Software Academy(SeSAC) Data Analytics Boot Camp Course Training Coach</p>
                <p>HRD Education Operation Manager</p>
            </div>
        </div>
    </section>
  )
}

export default Experience;