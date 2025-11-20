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
          <strong>Data-driven professional</strong> with experience across HRD, Education, and Marketing field.
        </p>
        <p align="left">
          <strong>Specialized in computational methods</strong> to uncover patterns in media discourse, public opinion, and social behavior.
        </p>
        <p align="left">
          Passionate about integrating theoretical frameworks with practical applications to drive insights from real-world data.
        </p>
      </div>
    </section>
  );
}

export default About;