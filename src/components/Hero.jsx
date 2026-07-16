import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi'
import { personalInfo } from '../data/portfolioData'
import ThreeScene from './ThreeScene'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 150])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85])

  return (
    <section id="hero" ref={ref} className="hero-section">
      <div className="hero-bg" />
      <motion.div style={{ y, opacity, scale }} className="container hero-container">
        <div className="hero-content">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="hero-greeting"
          >
            Hi, I'm
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="hero-name"
          >
            {personalInfo.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="hero-title"
          >
            {personalInfo.title}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="hero-tagline"
          >
            {personalInfo.tagline}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="hero-actions"
          >
            <a href={personalInfo.resumeUrl} className="btn btn-primary" download="Roohan_Ali_Resume.pdf">
              <FiDownload /> Resume
            </a>
            <a href={personalInfo.social.github} className="btn btn-icon" target="_blank" rel="noopener noreferrer">
              <FiGithub />
            </a>
            <a href={personalInfo.social.linkedin} className="btn btn-icon" target="_blank" rel="noopener noreferrer">
              <FiLinkedin />
            </a>
            <a href={personalInfo.social.email} className="btn btn-icon">
              <FiMail />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8, type: 'spring' }}
          className="hero-visual"
        >
          <div className="hero-3d-wrapper">
            <ThreeScene />
          </div>
          <div className="avatar-ring">
            <div className="avatar-ring-inner" />
            <img
              src={personalInfo.avatar}
              alt={personalInfo.name}
              className="avatar-img"
            />
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="scroll-indicator"
      >
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
        <span>Scroll</span>
      </motion.div>

      <style>{`
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
        }
        .hero-bg {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 80% 60% at 50% -20%, rgba(0, 212, 255, 0.12) 0%, transparent 60%),
            radial-gradient(ellipse 60% 50% at 80% 80%, rgba(99, 102, 241, 0.08) 0%, transparent 50%);
          pointer-events: none;
        }
        .hero-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          width: 100%;
          padding-top: 80px;
          position: relative;
          z-index: 2;
        }
        .hero-content {
          position: relative;
          z-index: 2;
        }
        .hero-greeting {
          font-size: 1.1rem;
          color: #00d4ff;
          font-weight: 500;
          margin-bottom: 8px;
        }
        .hero-name {
          font-size: 4rem;
          font-weight: 800;
          color: #fff;
          line-height: 1.1;
          margin-bottom: 16px;
          background: linear-gradient(135deg, #fff 0%, #94a3b8 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .hero-title {
          font-size: 1.3rem;
          color: #94a3b8;
          margin-bottom: 12px;
          font-weight: 500;
        }
        .hero-tagline {
          font-size: 1.05rem;
          color: #64748b;
          margin-bottom: 32px;
          line-height: 1.7;
          max-width: 500px;
        }
        .hero-actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          border-radius: 8px;
          font-size: 0.95rem;
          font-weight: 600;
          transition: all 0.3s;
          cursor: pointer;
          border: none;
        }
        .btn-primary {
          background: linear-gradient(135deg, #00d4ff, #0891b2);
          color: #fff;
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0, 212, 255, 0.3);
        }
        .btn-icon {
          width: 48px;
          height: 48px;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.05);
          color: #94a3b8;
          border: 1px solid rgba(255, 255, 255, 0.08);
        }
        .btn-icon:hover {
          background: rgba(0, 212, 255, 0.1);
          color: #00d4ff;
          border-color: rgba(0, 212, 255, 0.3);
          transform: translateY(-2px);
        }
        .hero-visual {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          z-index: 2;
          min-height: 500px;
        }
        .hero-3d-wrapper {
          position: absolute;
          inset: -40px;
          opacity: 0.85;
          pointer-events: none;
        }
        .avatar-ring {
          position: relative;
          width: 220px;
          height: 220px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 3;
          animation: floatAvatar 4s ease-in-out infinite;
        }
        @keyframes floatAvatar {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        .avatar-ring::before {
          content: '';
          position: absolute;
          inset: -4px;
          border-radius: 50%;
          background: conic-gradient(from 0deg, #00d4ff, #0891b2, #6366f1, #00d4ff);
          animation: spin 4s linear infinite;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        .avatar-ring-inner {
          position: absolute;
          inset: 3px;
          border-radius: 50%;
          background: #0a0a0f;
          z-index: 1;
        }
        .avatar-img {
          position: relative;
          z-index: 2;
          width: 200px;
          height: 200px;
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid rgba(0, 212, 255, 0.15);
        }
        .scroll-indicator {
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          color: #64748b;
          font-size: 0.75rem;
          letter-spacing: 2px;
          text-transform: uppercase;
          z-index: 2;
        }
        .scroll-mouse {
          width: 24px;
          height: 38px;
          border: 2px solid #64748b;
          border-radius: 12px;
          display: flex;
          justify-content: center;
          padding-top: 8px;
        }
        .scroll-wheel {
          width: 3px;
          height: 8px;
          background: #00d4ff;
          border-radius: 2px;
          animation: scrollAnim 1.5s ease infinite;
        }
        @keyframes scrollAnim {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(12px); opacity: 0; }
        }
        @media (max-width: 768px) {
          .hero-container {
            grid-template-columns: 1fr;
            gap: 20px;
            text-align: center;
          }
          .hero-content {
            order: 2;
          }
          .hero-visual {
            order: 1;
            min-height: 350px;
          }
          .hero-name {
            font-size: 2.5rem;
          }
          .hero-tagline {
            margin-left: auto;
            margin-right: auto;
          }
          .hero-actions {
            justify-content: center;
          }
          .avatar-ring {
            width: 160px;
            height: 160px;
          }
          .avatar-img {
            width: 144px;
            height: 144px;
          }
        }
      `}</style>
    </section>
  )
}
