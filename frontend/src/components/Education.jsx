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
                <p>As a student majored in Media & Communication Studies, I studied Mass Media theory & the Cultural Studies.</p> 
                <p>In particular, I studied with a focus on analyzing socio-cultural phenomena reproduced by the mass media.</p>
            </div>
            <div class="education-item">
                <h3>B.S. in Data Science</h3>
                <p>Handong Global University | 2019 - 2025</p>
                <p>I studied Text Mining & Natural Language Processing with a focus.</p>
                <p>I have delved deeply into the theory of ML & DL algorithms for more sophisticated model use.</p>
            </div>
        </div>
    </section>
  );
}

export default Education;