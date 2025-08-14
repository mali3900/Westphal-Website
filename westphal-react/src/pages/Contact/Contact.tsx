import React from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <div className="contact-page">
      <section className="title">
        <h1>Contact</h1>
      </section>

      <section className="contact-content">
        <div className="contact-description">
          <h2>Get in Touch</h2>
          <p>
            Ready to collaborate or need professional sound engineering services? 
            Let's connect and create something amazing together.
          </p>
        </div>

        <div className="contact-sections">
          <div className="contact-section">
            <h3>Sound Engineering Services</h3>
            <ul>
              <li>Professional mixing and mastering</li>
              <li>Sound design and audio production</li>
              <li>Recording consultation</li>
              <li>Audio restoration and cleanup</li>
            </ul>
          </div>

          <div className="contact-section">
            <h3>Musical Collaborations</h3>
            <ul>
              <li>Lo-fi beat collaborations</li>
              <li>Guitar arrangements</li>
              <li>Instrumental compositions</li>
              <li>Band partnerships</li>
            </ul>
          </div>

          <div className="contact-section">
            <h3>Connect With Me</h3>
            <p>
              Reach out through your preferred platform to discuss your project 
              and how we can work together to bring your musical vision to life.
            </p>
            <div className="contact-placeholder">
              <p><strong>Email:</strong> contact@westphalaudioworks.com</p>
              <p><strong>Social Media:</strong> Links coming soon</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
