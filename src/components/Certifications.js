import React from 'react';
import { FiAward, FiExternalLink, FiCalendar } from 'react-icons/fi';
import './Certifications.css';

const Certifications = ({ certifications }) => {
  return (
    <section id="certifications" className="certifications">
      <div className="container">
        <h2 className="section-title">Certifications</h2>
        <div className="certs-grid">
          {certifications.map((cert) => (
            <div key={cert.id} className="cert-card card">
              <div className="cert-icon">
                <FiAward />
              </div>
              <h3 className="cert-title">{cert.title}</h3>
              <p className="cert-issuer">{cert.issuer}</p>
              <p className="cert-desc">{cert.description}</p>
              <div className="cert-footer">
                <span className="cert-date"><FiCalendar /> {cert.date}</span>
                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="cert-link">
                  View <FiExternalLink />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
