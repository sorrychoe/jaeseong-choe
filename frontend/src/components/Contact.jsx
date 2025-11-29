import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formMessage, setFormMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-in-out', once: true });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    if (!name.trim() || !email.trim() || !message.trim()) {
      setIsSuccess(false);
      setFormMessage('Please fill in all fields.');
      return;
    }

    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;
    if (!emailRegex.test(email.trim())) {
      setIsSuccess(false);
      setFormMessage('Please enter a valid email address.');
      return;
    }

    const data = {
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
    };

    try {
      setIsSubmitting(true);
      setFormMessage('');

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setIsSuccess(true);
        setFormMessage(result.message);
        setFormData({ name: '', email: '', message: '' });
      } else {
        setIsSuccess(false);
        setFormMessage(result.message || 'There was an error sending your message.');
      }
    } catch (error) {
      console.error('Error:', error);
      setIsSuccess(false);
      setFormMessage('There was an error sending your message.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50" data-aos="fade-up">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Contact Me</h2>
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-8">
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2" data-aos="fade-right">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="shadow-sm appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                data-aos="fade-right"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2" data-aos="fade-left">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="shadow-sm appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                data-aos="fade-left"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2" data-aos="fade-right">Message:</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                className="shadow-sm appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
                data-aos="fade-right"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="text-center">
              <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline transition duration-300 disabled:bg-gray-400" data-aos="fade-up" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
          {formMessage && (
            <p className={`text-center mt-6 text-lg ${isSuccess ? 'text-green-600' : 'text-red-600'}`}>
              {formMessage}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Contact;
