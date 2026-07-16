import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { skills } from '../data/portfolioData'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
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

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="section skills-section" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Skills & Expertise</span>
          <h2 className="section-title">Technologies I work with</h2>
        </motion.div>

        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {skills.map((skill, i) => (
            <motion.div
              key={skill.id}
              className="skill-card"
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <div className="skill-number">0{i + 1}</div>
              <div className="skill-icon">{skill.icon}</div>
              <h3 className="skill-name">{skill.name}</h3>
              <p className="skill-desc">{skill.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .skills-section {
          background: #0a0a0f;
        }
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-top: 48px;
        }
        .skill-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 20px;
          padding: 32px 24px;
          position: relative;
          overflow: hidden;
          transition: border-color 0.4s, box-shadow 0.4s;
          cursor: default;
        }
        .skill-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, #00d4ff, transparent);
          opacity: 0;
          transition: opacity 0.4s;
        }
        .skill-card:hover::before {
          opacity: 1;
        }
        .skill-card:hover {
          border-color: rgba(0, 212, 255, 0.2);
          box-shadow: 0 12px 48px rgba(0, 212, 255, 0.06);
        }
        .skill-number {
          position: absolute;
          top: 12px;
          right: 16px;
          font-size: 0.85rem;
          font-weight: 700;
          color: rgba(0, 212, 255, 0.15);
          letter-spacing: 1px;
        }
        .skill-icon {
          font-size: 2rem;
          margin-bottom: 16px;
        }
        .skill-name {
          font-size: 1.1rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 8px;
        }
        .skill-desc {
          font-size: 0.85rem;
          color: #64748b;
          line-height: 1.6;
        }
        @media (max-width: 1024px) {
          .skills-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 480px) {
          .skills-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}
