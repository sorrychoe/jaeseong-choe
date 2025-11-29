import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Education() {

  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-in-out', once: true });
  }, []);

  return ( 
    <section id="education" className="py-20 bg-white" data-aos="fade-up">
        <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16">Education</h2>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg shadow-lg text-center">
                  <h3 className="text-2xl font-bold text-blue-600 mb-2">B.A. in Communication</h3>
                  <p className="text-md font-semibold text-gray-600">Handong Global University | 2019 - 2025</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-lg text-center">
                  <h3 className="text-2xl font-bold text-blue-600 mb-2">B.S. in Data Science</h3>
                  <p className="text-md font-semibold text-gray-600">Handong Global University | 2019 - 2025</p>
              </div>
            </div>
        </div>
    </section>
  );
}

export default Education;