import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiPhone } from 'react-icons/fi'
import { personalInfo } from '../data/portfolioData'

export default function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="contact-content"
        >
          <span className="section-label">Contact</span>
          <h2 className="section-title">Get in touch</h2>
          <p className="contact-text">
            I'm always open to discussing new projects, creative ideas, or opportunities
            to be part of your vision. Feel free to reach out!
          </p>

          <div className="contact-links">
            <a href={personalInfo.social.email} className="contact-item">
              <FiMail className="contact-icon" />
              <span>{personalInfo.email}</span>
            </a>
            <a href={`tel:${personalInfo.phone}`} className="contact-item">
              <FiPhone className="contact-icon" />
              <span>{personalInfo.phone}</span>
            </a>
            <span className="contact-item">
              <FiMapPin className="contact-icon" />
              <span>{personalInfo.location}</span>
            </span>
          </div>

          <div className="contact-social">
            <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer" className="contact-social-link">
              <FiGithub />
            </a>
            <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer" className="contact-social-link">
              <FiLinkedin />
            </a>
            <a href={personalInfo.social.email} className="contact-social-link">
              <FiMail />
            </a>
          </div>
        </motion.div>
      </div>

      <style>{`
        .contact-section {
          background: linear-gradient(180deg, #0a0a0f 0%, #0f0f1a 100%);
          text-align: center;
        }
        .contact-content {
          max-width: 600px;
          margin: 0 auto;
        }
        .contact-text {
          font-size: 1.05rem;
          color: #94a3b8;
          line-height: 1.8;
          margin-bottom: 40px;
        }
        .contact-links {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
          margin-bottom: 32px;
        }
        .contact-item {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 1rem;
          color: #94a3b8;
          transition: color 0.3s;
        }
        .contact-item:hover {
          color: #00d4ff;
        }
        .contact-icon {
          font-size: 1.2rem;
          color: #00d4ff;
        }
        .contact-social {
          display: flex;
          gap: 16px;
          justify-content: center;
        }
        .contact-social-link {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: #94a3b8;
          font-size: 1.2rem;
          transition: all 0.3s;
        }
        .contact-social-link:hover {
          background: rgba(0, 212, 255, 0.1);
          color: #00d4ff;
          border-color: rgba(0, 212, 255, 0.3);
          transform: translateY(-3px);
        }
      `}</style>
    </section>
  )
}
