import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import './Certifications.css';

const Certifications = ({ certifications }) => {
  const [selected, setSelected] = useState(certifications[0]);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const getGradient = (title) => {
    const colors = [
      ['#00d4ff', '#7c3aed'],
      ['#7c3aed', '#ff6b6b'],
      ['#ff6b6b', '#feca57'],
    ];
    let hash = 0;
    for (let i = 0; i < title.length; i++) {
      hash = title.charCodeAt(i) + ((hash << 5) - hash);
    }
    return colors[Math.abs(hash) % colors.length];
  };

  return (
    <section id="certifications" className="certifications">
      <div className="container">
        <div className="section-title">Credentials</div>
        <h2 className="section-heading">Certifications & Courses</h2>
        <p className="section-subtitle">Scroll — names on the left, preview card on the right</p>

        <div className="certs-layout" ref={ref}>
          <motion.div
            className="certs-list"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            {certifications.map((cert) => (
              <button
                key={cert.id}
                className={`cert-list-item ${selected.id === cert.id ? 'cert-list-active' : ''}`}
                onClick={() => setSelected(cert)}
              >
                <span className="cert-list-number">0{cert.id}</span>
                <span className="cert-list-title">{cert.title}</span>
              </button>
            ))}
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={selected.id}
              className="cert-preview cyber-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="cert-preview-header">
                <span className="cert-preview-date">{selected.date}</span>
                <span className="cert-preview-badge">Preview</span>
              </div>
              <div
                className="cert-preview-image"
                style={{ background: `linear-gradient(135deg, ${getGradient(selected.title)[0]}33, ${getGradient(selected.title)[1]}33)` }}
              >
                <span className="cert-preview-icon">
                  {selected.title.split(' ').slice(0, 2).map(w => w[0]).join('')}
                </span>
              </div>
              <h3 className="cert-preview-title">{selected.title}</h3>
              <p className="cert-preview-issuer">{selected.issuer}</p>
              <p className="cert-preview-desc">{selected.description}</p>
              <div className="cert-preview-footer">
                <span className="cert-preview-hint">Hover to preview · Click to expand</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
