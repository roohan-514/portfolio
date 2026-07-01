import React from 'react';
import { FiBriefcase, FiMapPin, FiCalendar } from 'react-icons/fi';
import './Experience.css';

const Experience = ({ experience }) => {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="timeline">
          {experience.map((exp, index) => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content card">
                <div className="timeline-header">
                  <FiBriefcase className="timeline-icon" />
                  <div>
                    <h3 className="timeline-title">{exp.title}</h3>
                    <p className="timeline-company">{exp.company}</p>
                  </div>
                </div>
                <div className="timeline-meta">
                  <span><FiMapPin /> {exp.location}</span>
                  <span><FiCalendar /> {exp.startDate} {exp.endDate ? `- ${exp.endDate}` : '- Present'}</span>
                </div>
                <p className="timeline-desc">{exp.description}</p>
                {exp.achievements && (
                  <ul className="timeline-achievements">
                    {exp.achievements.map((ach, i) => (
                      <li key={i}>{ach}</li>
                    ))}
                  </ul>
                )}
                <div className="timeline-tech">
                  {exp.technologies.map((tech, i) => (
                    <span key={i} className="timeline-tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
