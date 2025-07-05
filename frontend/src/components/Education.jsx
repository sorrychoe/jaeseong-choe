import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Education() {

  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-in-out', once: true });
  }, []);

  return ( 
    <section id="education" class="py-5 bg-light" data-aos="fade-up">
        <div class="container">
            <h2>Education</h2>
            <div class="education-item">
                <h3>B.A. in Communication</h3>
                <p>Handong Global University | 2019 - 2025</p>
            </div>
            <div class="education-item">
                <h3>B.S. in Data Science</h3>
                <p>Handong Global University | 2019 - 2025</p>
            </div>
        </div>
    </section>
  );
}

export default Education;