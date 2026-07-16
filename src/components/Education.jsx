import { useRef } from 'react'
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

        <div className="timeline">
          {education.map((edu, i) => (
            <motion.div
              key={edu.id}
              className="timeline-item"
              variants={itemVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              transition={{ delay: i * 0.12 }}
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
      </div>

      <style>{`
        .edu-section {
          background: linear-gradient(180deg, #0a0a0f 0%, #0f0f1a 100%);
        }
        .timeline {
          position: relative;
          max-width: 800px;
          margin-top: 48px;
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
          padding-bottom: 40px;
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
        }
        .timeline-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 16px;
          padding: 24px;
          transition: border-color 0.3s;
        }
        .timeline-card:hover {
          border-color: rgba(99, 102, 241, 0.2);
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
        @media (max-width: 768px) {
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
