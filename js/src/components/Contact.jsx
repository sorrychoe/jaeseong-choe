import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './Contact.module.css';

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
    <section id="contact" className={styles.contact} data-aos="fade-up">
      <div className="container">
        <h2 className={styles.title}>Contact Me</h2>
        <div className={styles.formContainer}>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label} data-aos="fade-right">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className={styles.input}
                data-aos="fade-right"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label} data-aos="fade-left">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className={styles.input}
                data-aos="fade-left"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label} data-aos="fade-right">Message:</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                className={styles.textarea}
                data-aos="fade-right"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="text-center">
              <button type="submit" className={styles.button} data-aos="fade-up" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
          {formMessage && (
            <p className={`${styles.formMessage} ${isSuccess ? styles.success : styles.error}`}>
              {formMessage}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Contact;

