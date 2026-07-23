import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { education } from '../data/portfolioData'

const itemVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

export default function Education() {
  const [hoveredEdu, setHoveredEdu] = useState(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="education" className="section edu-section" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Education</span>
          <h2 className="section-title">My academic background</h2>
        </motion.div>

        <div className="edu-layout">
          <div className="timeline">
            {education.map((edu, i) => (
              <motion.div
                key={edu.id}
                className={`timeline-item${hoveredEdu?.id === edu.id ? ' active' : ''}`}
                variants={itemVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                transition={{ delay: i * 0.12 }}
                onMouseEnter={() => setHoveredEdu(edu)}
                onMouseLeave={() => setHoveredEdu(null)}
              >
                <div className="timeline-dot edu" />
                <div className="timeline-card">
                  <div className="timeline-header">
                    <h3 className="timeline-role">{edu.degree}</h3>
                    <span className="timeline-period">{edu.period}</span>
                  </div>
                  <p className="timeline-company">{edu.school}</p>
                  {edu.location && <p className="timeline-location">{edu.location}</p>}
                  <p className="timeline-desc-single">{edu.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="edu-preview">
            {hoveredEdu && hoveredEdu.image ? (
              <motion.div
                className="edu-preview-card"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="edu-preview-image-wrapper">
                  <img src={hoveredEdu.image} alt={hoveredEdu.school} className="edu-preview-image" />
                </div>
                <div className="edu-preview-info">
                  <h3 className="edu-preview-title">{hoveredEdu.school}</h3>
                  <p className="edu-preview-desc">{hoveredEdu.shortDescription}</p>
                </div>
              </motion.div>
            ) : (
              <div className="edu-preview-placeholder">
                <span>Hover over an education item to see details</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .edu-section {
          background: linear-gradient(180deg, #0a0a0f 0%, #0f0f1a 100%);
        }
        .edu-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: start;
          margin-top: 48px;
        }
        .timeline {
          position: relative;
          padding-left: 32px;
        }
        .timeline::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(180deg, rgba(99, 102, 241, 0.3), rgba(0, 212, 255, 0.1));
        }
        .timeline-item {
          position: relative;
          padding-bottom: 32px;
          cursor: pointer;
        }
        .timeline-item:last-child {
          padding-bottom: 0;
        }
        .timeline-dot.edu {
          position: absolute;
          left: -38px;
          top: 6px;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #6366f1;
          border: 3px solid #0a0a0f;
          box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.3);
          transition: box-shadow 0.3s;
        }
        .timeline-item.active .timeline-dot.edu {
          box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.5);
        }
        .timeline-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 16px;
          padding: 24px;
          transition: border-color 0.3s, background 0.3s;
        }
        .timeline-item.active .timeline-card {
          border-color: rgba(99, 102, 241, 0.3);
          background: rgba(99, 102, 241, 0.04);
        }
        .timeline-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 8px;
        }
        .timeline-role {
          font-size: 1.15rem;
          font-weight: 700;
          color: #fff;
        }
        .timeline-period {
          font-size: 0.8rem;
          color: #6366f1;
          font-weight: 600;
          white-space: nowrap;
          padding: 4px 12px;
          background: rgba(99, 102, 241, 0.08);
          border-radius: 20px;
        }
        .timeline-company {
          font-size: 0.95rem;
          color: #94a3b8;
          margin-bottom: 4px;
          font-weight: 500;
        }
        .timeline-location {
          font-size: 0.85rem;
          color: #64748b;
          margin-bottom: 12px;
        }
        .timeline-desc-single {
          font-size: 0.9rem;
          color: #64748b;
          line-height: 1.7;
        }

        .edu-preview {
          position: sticky;
          top: 100px;
        }
        .edu-preview-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          overflow: hidden;
        }
        .edu-preview-image-wrapper {
          width: 100%;
          aspect-ratio: 16/10;
          overflow: hidden;
          background: rgba(0, 0, 0, 0.3);
        }
        .edu-preview-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .edu-preview-info {
          padding: 24px;
        }
        .edu-preview-title {
          font-size: 1.2rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 8px;
        }
        .edu-preview-desc {
          font-size: 0.9rem;
          color: #94a3b8;
          line-height: 1.7;
        }
        .edu-preview-placeholder {
          background: rgba(255, 255, 255, 0.02);
          border: 1px dashed rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          padding: 60px 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        }
        .edu-preview-placeholder span {
          color: #475569;
          font-size: 0.95rem;
        }
        @media (max-width: 900px) {
          .edu-layout {
            grid-template-columns: 1fr;
          }
          .edu-preview {
            order: -1;
          }
          .timeline {
            padding-left: 24px;
          }
          .timeline-dot.edu {
            left: -30px;
          }
          .timeline-header {
            flex-direction: column;
          }
        }
      `}</style>
    </section>
  )
}
