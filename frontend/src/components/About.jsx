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
        <p align="left">
          As a <strong>data analyst</strong> specializing in Human Resource Development, I transform VOCs, employee surveys, and market data into actionable insights.
        </p>
        <p align="left">
          As a <strong>communication researcher</strong>, I use computational social-science methods to reveal patterns in media discourse, public opinion, and social dynamics.
        </p>
        <p align="left">
          Bridging practice and research, I offer an interdisciplinary perspective that links real-world challenges with academic rigor.
        </p>
      </div>
    </section>
  );
}

export default About;
