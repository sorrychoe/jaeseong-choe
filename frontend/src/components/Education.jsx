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
                <h3>Bachelor of Art in Media & Communication Studies</h3>
                <p>Handong Global University | 2019 - 2025</p>
                <br/>
                <p>As a student majored in Media & Communication Studies, I studied Mass Media theory & the Cultural Studies.</p> 
                <p>In particular, I studied with a focus on analyzing socio-cultural phenomena reproduced by the mass media. </p>
                {/* <p>I wrote a academic article about analyze Korean media tends to stigmatize people with mental illness.</p> */}
            </div>
            <div class="education-item">
                <h3>Bachelor of Science in Data Science</h3>
                <p>Handong Global University | 2019 - 2025</p>
                <br/>
                <p>I studied Text Mining & Natural Language Processing with a focus.</p>
                {/* <p>As a Capstone project, I have developed an Chatbots for smart farm user.</p> */}
                <p>Futhermore, I was explored mathematics such as Linear Algebra, Probability Theory & Mathematical Statistics.</p>
                <p>Especially, I was interested in statistical method such as Regression Analysis & Cluster Analysis.</p>
            </div>
        </div>
    </section>
  );
}

export default Education;