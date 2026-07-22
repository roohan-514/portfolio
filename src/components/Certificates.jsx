import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { certificates } from '../data/portfolioData'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

export default function Certificates() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="certificates" className="section cert-section" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Certifications</span>
          <h2 className="section-title">My Certificates</h2>
          <p className="section-subtitle">
            Professional certifications in AI, ML, and Data Science
          </p>
        </motion.div>

        <motion.div
          className="cert-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {certificates.map((cert) => (
            <motion.a
              key={cert.id}
              href={cert.file}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-card"
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.2 } }}
            >
              <div className="cert-icon-wrapper">
                <span className="cert-icon">{cert.icon}</span>
              </div>
              <h3 className="cert-name">{cert.name}</h3>
              <p className="cert-desc">{cert.description}</p>
              <div className="cert-hover-overlay">
                <span className="cert-view-text">View Certificate</span>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>

      <style>{`
        .cert-section {
          background: linear-gradient(180deg, #0a0a0f 0%, #0d1117 100%);
        }
        .cert-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-top: 48px;
        }
        .cert-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 20px;
          padding: 36px 28px;
          position: relative;
          overflow: hidden;
          transition: border-color 0.4s, box-shadow 0.4s;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        .cert-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, transparent, #00d4ff, #6366f1, transparent);
          opacity: 0;
          transition: opacity 0.4s;
        }
        .cert-card:hover {
          border-color: rgba(0, 212, 255, 0.25);
          box-shadow: 0 16px 48px rgba(0, 212, 255, 0.08);
        }
        .cert-card:hover::before {
          opacity: 1;
        }
        .cert-icon-wrapper {
          width: 64px;
          height: 64px;
          border-radius: 16px;
          background: rgba(0, 212, 255, 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          transition: background 0.4s, transform 0.4s;
        }
        .cert-card:hover .cert-icon-wrapper {
          background: rgba(0, 212, 255, 0.15);
          transform: scale(1.1);
        }
        .cert-icon {
          font-size: 2rem;
        }
        .cert-name {
          font-size: 1.1rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 8px;
        }
        .cert-desc {
          font-size: 0.85rem;
          color: #64748b;
          line-height: 1.6;
        }
        .cert-hover-overlay {
          position: absolute;
          inset: 0;
          border-radius: 20px;
          background: rgba(0, 212, 255, 0.04);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s;
          backdrop-filter: blur(2px);
        }
        .cert-card:hover .cert-hover-overlay {
          opacity: 1;
        }
        .cert-view-text {
          font-size: 0.85rem;
          font-weight: 600;
          color: #00d4ff;
          letter-spacing: 1px;
          text-transform: uppercase;
          border: 1px solid rgba(0, 212, 255, 0.3);
          padding: 10px 24px;
          border-radius: 8px;
          background: rgba(0, 212, 255, 0.06);
          transition: background 0.3s;
        }
        .cert-card:hover .cert-view-text {
          background: rgba(0, 212, 255, 0.12);
        }
        @media (max-width: 1024px) {
          .cert-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 640px) {
          .cert-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}
