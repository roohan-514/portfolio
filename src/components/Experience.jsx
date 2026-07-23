import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { experience } from '../data/portfolioData'

const itemVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

export default function Experience() {
  const [hoveredExp, setHoveredExp] = useState(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="section exp-section" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Experience</span>
          <h2 className="section-title">Where I've worked</h2>
        </motion.div>

        <div className="exp-layout">
          <div className="timeline">
            {experience.map((exp, i) => (
              <motion.div
                key={exp.id}
                className={`timeline-item${hoveredExp?.id === exp.id ? ' active' : ''}`}
                variants={itemVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                transition={{ delay: i * 0.12 }}
                onMouseEnter={() => setHoveredExp(exp)}
                onMouseLeave={() => setHoveredExp(null)}
              >
                <div className="timeline-dot" />
                <div className="timeline-card">
                  <div className="timeline-header">
                    <h3 className="timeline-role">{exp.role}</h3>
                    <span className="timeline-period">{exp.period}</span>
                  </div>
                  <p className="timeline-company">{exp.company}</p>
                  <ul className="timeline-desc">
                    {exp.description.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="exp-preview">
            {hoveredExp && hoveredExp.image ? (
              <motion.div
                className="exp-preview-card"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="exp-preview-image-wrapper">
                  <img src={hoveredExp.image} alt={hoveredExp.company} className="exp-preview-image" />
                </div>
                <div className="exp-preview-info">
                  <h3 className="exp-preview-title">{hoveredExp.company}</h3>
                  <p className="exp-preview-desc">{hoveredExp.shortDescription}</p>
                </div>
              </motion.div>
            ) : (
              <div className="exp-preview-placeholder">
                <span>Hover over an experience to see details</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .exp-section {
          background: linear-gradient(180deg, #0f0f1a 0%, #0a0a0f 100%);
        }
        .exp-layout {
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
          background: linear-gradient(180deg, rgba(0, 212, 255, 0.3), rgba(99, 102, 241, 0.1));
        }
        .timeline-item {
          position: relative;
          padding-bottom: 32px;
          cursor: pointer;
        }
        .timeline-item:last-child {
          padding-bottom: 0;
        }
        .timeline-dot {
          position: absolute;
          left: -38px;
          top: 6px;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #00d4ff;
          border: 3px solid #0a0a0f;
          box-shadow: 0 0 0 2px rgba(0, 212, 255, 0.3);
          transition: box-shadow 0.3s;
        }
        .timeline-item.active .timeline-dot {
          box-shadow: 0 0 0 4px rgba(0, 212, 255, 0.5);
        }
        .timeline-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 16px;
          padding: 24px;
          transition: border-color 0.3s, background 0.3s;
        }
        .timeline-item.active .timeline-card {
          border-color: rgba(0, 212, 255, 0.3);
          background: rgba(0, 212, 255, 0.04);
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
          color: #00d4ff;
          font-weight: 600;
          white-space: nowrap;
          padding: 4px 12px;
          background: rgba(0, 212, 255, 0.08);
          border-radius: 20px;
        }
        .timeline-company {
          font-size: 0.95rem;
          color: #94a3b8;
          margin-bottom: 4px;
          font-weight: 500;
        }
        .timeline-desc {
          list-style: none;
          padding: 0;
        }
        .timeline-desc li {
          font-size: 0.9rem;
          color: #64748b;
          line-height: 1.7;
          padding-left: 16px;
          position: relative;
          margin-bottom: 6px;
        }
        .timeline-desc li::before {
          content: '▹';
          position: absolute;
          left: 0;
          color: #00d4ff;
        }

        .exp-preview {
          position: sticky;
          top: 100px;
        }
        .exp-preview-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          overflow: hidden;
        }
        .exp-preview-image-wrapper {
          width: 100%;
          aspect-ratio: 16/10;
          overflow: hidden;
          background: rgba(0, 0, 0, 0.3);
        }
        .exp-preview-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .exp-preview-info {
          padding: 24px;
        }
        .exp-preview-title {
          font-size: 1.2rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 8px;
        }
        .exp-preview-desc {
          font-size: 0.9rem;
          color: #94a3b8;
          line-height: 1.7;
        }
        .exp-preview-placeholder {
          background: rgba(255, 255, 255, 0.02);
          border: 1px dashed rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          padding: 60px 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        }
        .exp-preview-placeholder span {
          color: #475569;
          font-size: 0.95rem;
        }
        @media (max-width: 900px) {
          .exp-layout {
            grid-template-columns: 1fr;
          }
          .exp-preview {
            order: -1;
          }
          .timeline {
            padding-left: 24px;
          }
          .timeline-dot {
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
