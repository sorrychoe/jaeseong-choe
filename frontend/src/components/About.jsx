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
        <p align="left">Specialist of social data analysis with extensive experience in Media Research & Human Resource Development</p>
        <p aline="left">Skilled in transforming complex data into actionable insights through statistical analytics, data visualization, and machine learning.</p>
        <p align="left">Proven track record in managing projects and improving processes with a data-driven approach.</p>
      </div>
    </section>
  );
}

export default About;
