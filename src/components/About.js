import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiMail } from 'react-icons/fi';
import './About.css';

const About = ({ profile }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const initials = profile.name.split(' ').map(n => n[0]).join('').slice(0, 2);

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-title">Discovery</div>
        <h2 className="section-heading">The Persona</h2>
        <p className="section-subtitle">Architecting Intelligent Experiences</p>

        <div className="about-content" ref={ref}>
          <motion.div
            className="about-image-wrapper"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="about-image-frame">
              <div className="about-image-placeholder">
                <span className="about-initials">{initials}</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="about-description">{profile.aboutExtra}</p>
            <p className="about-description-secondary">{profile.about}</p>

            <div className="about-stats">
              <div className="about-stat">
                <span className="about-stat-number">{profile.stats.projects}</span>
                <span className="about-stat-label">Projects Delivered</span>
              </div>
              <div className="about-stat">
                <span className="about-stat-number">{profile.stats.focus}</span>
                <span className="about-stat-label">Focusing on</span>
              </div>
            </div>

            <a href={`mailto:${profile.email}`} className="btn btn-primary about-cta">
              <FiMail /> Get in Touch
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
