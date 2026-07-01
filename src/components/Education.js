import React from 'react';
import { FiBookOpen, FiMapPin } from 'react-icons/fi';
import './Education.css';

const Education = ({ education }) => {
  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-grid">
          {education.map((edu) => (
            <div key={edu.id} className="edu-card card">
              <div className="edu-icon">
                <FiBookOpen />
              </div>
              <h3 className="edu-degree">{edu.degree}</h3>
              <p className="edu-institution">{edu.institution}</p>
              <p className="edu-location"><FiMapPin /> {edu.location}</p>
              <div className="edu-details">
                <span className="edu-date">{edu.startDate} - {edu.endDate || 'Present'}</span>
                <span className="edu-marks">{edu.marks}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
