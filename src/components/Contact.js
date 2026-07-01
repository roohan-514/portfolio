import React, { useRef } from 'react';
import { FiSend, FiMail, FiGithub, FiLinkedin, FiMapPin } from 'react-icons/fi';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = ({ profile }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_h5ygrvm', 'template_wdbj2mx', form.current, 'P6agrXgvNruvO3cZN')
      .then(() => {
        alert('Message sent successfully!');
        form.current.reset();
      }, () => {
        alert('Failed to send message. Please try again.');
      });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <FiMail />
              <div>
                <h4>Email</h4>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </div>
            </div>
            <div className="contact-item">
              <FiMapPin />
              <div>
                <h4>Location</h4>
                <p>{profile.location}</p>
              </div>
            </div>
            <div className="contact-item">
              <FiGithub />
              <div>
                <h4>GitHub</h4>
                <a href={profile.github} target="_blank" rel="noopener noreferrer">{profile.github}</a>
              </div>
            </div>
            <div className="contact-item">
              <FiLinkedin />
              <div>
                <h4>LinkedIn</h4>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">Connect with me</a>
              </div>
            </div>
          </div>
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <input type="text" name="user_name" placeholder="Your Name" required />
            <input type="email" name="user_email" placeholder="Your Email" required />
            <input type="text" name="subject" placeholder="Subject" required />
            <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
            <button type="submit" className="btn btn-primary">
              <FiSend /> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
