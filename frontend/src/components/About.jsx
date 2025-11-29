import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


function About() {

  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-in-out', once: true });
  }, []);
  

  return (
    <section id="about" className="py-20" data-aos="fade-up">
      <div className="container mx-auto px-4">
        <div className="bg-gray-800 rounded-lg shadow-lg p-8 md:p-12">
          <h2 className="text-4xl font-bold text-center mb-8">About Me</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-300 mb-6">
              <strong className="font-semibold text-white">Data-driven professional</strong> with experience across HRD, Education, and Marketing field.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              <strong className="font-semibold text-white">Specialized in computational methods</strong> to uncover patterns in media discourse, public opinion, and social behavior.
            </p>
            <p className="text-lg text-gray-300">
              Passionate about integrating theoretical frameworks with practical applications to drive insights from real-world data.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;