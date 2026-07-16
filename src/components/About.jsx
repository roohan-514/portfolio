import { motion } from 'framer-motion'
import { personalInfo } from '../data/portfolioData'

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.5 },
}

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <motion.div {...fadeInUp}>
          <span className="section-label">About Me</span>
          <h2 className="section-title">Turning complex problems into elegant AI solutions</h2>
          <div className="about-grid">
            <div className="about-text">
              {personalInfo.about.map((para, i) => (
                <p key={i} className="about-para">{para}</p>
              ))}
            </div>
            <div className="about-stats">
              {personalInfo.stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="stat-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <span className="stat-value">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </motion.div>
              ))}
            </div>
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
          transition: all 0.3s;
        }
        .stat-card:hover {
          border-color: rgba(0, 212, 255, 0.2);
          transform: translateY(-4px);
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
