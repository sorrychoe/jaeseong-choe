import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


function About() {

  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-in-out', once: true });
  }, []);
  
  return (
    <section id="about" className="py-5 bg-light" data-aos="fade-up">
      <div className="container">
        <h2>About Me</h2>
        <p align="left">Data Specialist of social data analysis with extensive experience in Human Resource Development, Project Management, and Market Analysis</p>
        <p aline="left">Skilled in transforming complex data into actionable insights through advanced analytics, data visualization, and machine learning.</p>
        <p align="left">Proven track record in managing projects and improving processes with a data-driven approach.</p>
        <p align="left">Strong communicator and problem solver with hands-on experience in Project Management and Data Analysis.</p>
      </div>
    </section>
  );
}

export default About;
