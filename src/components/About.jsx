import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { personalInfo } from '../data/portfolioData'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="section about-section" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">About Me</span>
          <h2 className="section-title">Turning complex problems into elegant AI solutions</h2>
          <div className="about-grid">
            <motion.div
              className="about-text"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
            >
              {personalInfo.about.map((para, i) => (
                <motion.p key={i} className="about-para" variants={itemVariants}>
                  {para}
                </motion.p>
              ))}
            </motion.div>
            <motion.div
              className="about-stats"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
            >
              {personalInfo.stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  className="stat-card"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                >
                  <span className="stat-value">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>

      <style>{`
        .about-section {
          background: linear-gradient(180deg, #0a0a0f 0%, #0f0f1a 100%);
        }
        .about-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 60px;
          margin-top: 32px;
        }
        .about-para {
          color: #94a3b8;
          font-size: 1.05rem;
          line-height: 1.8;
          margin-bottom: 16px;
        }
        .about-stats {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .stat-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 16px;
          padding: 28px 20px;
          text-align: center;
          transition: border-color 0.3s, box-shadow 0.3s;
          cursor: default;
        }
        .stat-card:hover {
          border-color: rgba(0, 212, 255, 0.2);
          box-shadow: 0 8px 32px rgba(0, 212, 255, 0.08);
        }
        .stat-value {
          display: block;
          font-size: 2rem;
          font-weight: 800;
          color: #00d4ff;
          margin-bottom: 4px;
        }
        .stat-label {
          font-size: 0.9rem;
          color: #64748b;
          font-weight: 500;
        }
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .about-stats {
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>
    </section>
  )
}
