import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Education.css';

const Education = ({ education }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const getInitials = (name) => {
    return name.split(' ').filter(w => w.length > 2).slice(0, 2).map(w => w[0]).join('');
  };

  return (
    <section id="education" className="education">
      <div className="container">
        <div className="section-title">Background</div>
        <h2 className="section-heading">Academic Background</h2>
        <p className="section-subtitle">Explore Full Academic Archive</p>

        <div className="education-timeline" ref={ref}>
          <div className="timeline-line" />
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              className="timeline-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="timeline-dot" />
              <div className="timeline-content cyber-card">
                <div className="timeline-header">
                  <div className="timeline-institution-icon">
                    <span>{getInitials(edu.institution)}</span>
                  </div>
                  <div className="timeline-info">
                    <span className="timeline-date">{edu.startDate} — {edu.endDate}</span>
                    <span className={`timeline-status ${edu.status === 'Current' ? 'status-current' : ''}`}>
                      {edu.status}
                    </span>
                  </div>
                </div>
                <h3 className="timeline-degree">{edu.degree}</h3>
                <p className="timeline-institution">{edu.institution}</p>
                <div className="timeline-subjects">
                  {edu.subjects.map((subject, i) => (
                    <span key={i} className="tag">{subject}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
