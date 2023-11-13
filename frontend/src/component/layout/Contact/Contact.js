// ContactPage.js
import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>If you have any questions, please feel free to contact us at:</p>
      <a href="mailto:tempmailprog@gmail.com" className="email-link">
        tempmailprog@gmail.com
      </a>
    </div>
  );
};

export default Contact;
