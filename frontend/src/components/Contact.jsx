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
  const [messageColor, setMessageColor] = useState('');
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

    // 입력 값 검증
    if (!name.trim() || !email.trim() || !message.trim()) {
      setMessageColor('red');
      setFormMessage('Please fill in all fields.');
      return;
    }

    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;
    if (!emailRegex.test(email.trim())) {
      setMessageColor('red');
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
        setMessageColor('green');
        setFormMessage(result.message);
        setFormData({ name: '', email: '', message: '' }); // 폼 리셋
      } else {
        setMessageColor('red');
        setFormMessage(result.message || 'There was an error sending your message. Please try again later.');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessageColor('red');
      setFormMessage('There was an error sending your message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-5 bg-light">
      <div className="container">
        <h2>Contact Me</h2>
        <form id="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name" data-aos="fade-right">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            data-aos="fade-right"
            value={formData.name}
            onChange={handleChange}
          />

          <label htmlFor="email" data-aos="fade-left">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            data-aos="fade-left"
            value={formData.email}
            onChange={handleChange}
          />

          <label htmlFor="message" data-aos="fade-right">Message:</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            required
            data-aos="fade-right"
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <button type="submit" data-aos="fade-left" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
            {isSubmitting && <span className="spinner"></span>}
          </button>
        </form>
        {formMessage && (
          <p id="form-message" className="py-5 bg-light" style={{ color: messageColor }}>
            {formMessage}
          </p>
        )}
      </div>
    </section>
  );
}

export default Contact;
