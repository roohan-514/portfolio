import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { FiGithub, FiExternalLink, FiFolder } from 'react-icons/fi'
import { projects } from '../data/portfolioData'

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
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

export default function Projects() {
  const [hoveredId, setHoveredId] = useState(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="section projects-section" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Projects</span>
          <h2 className="section-title">What I've built</h2>
        </motion.div>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="project-card"
              variants={cardVariants}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
            >
              <div
                className="project-image-wrapper"
                style={{
                  background: `linear-gradient(135deg, ${project.gradient.from}, ${project.gradient.to})`,
                }}
              >
                <div className="project-placeholder">
                  <FiFolder className="placeholder-icon" />
                  <span className="placeholder-initials">{project.initials}</span>
                </div>
                <AnimatePresence>
                  {hoveredId === project.id && (
                    <motion.div
                      className="project-overlay"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <div className="project-links">
                        <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="project-link-btn">
                          <FiGithub /> Code
                        </a>
                        {project.links.demo && (
                          <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="project-link-btn">
                            <FiExternalLink /> Demo
                          </a>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .projects-section {
          background: #0a0a0f;
        }
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-top: 48px;
        }
        .project-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 20px;
          overflow: hidden;
          transition: border-color 0.4s, box-shadow 0.4s;
        }
        .project-card:hover {
          border-color: rgba(0, 212, 255, 0.15);
          box-shadow: 0 12px 48px rgba(0, 212, 255, 0.04);
        }
        .project-image-wrapper {
          position: relative;
          overflow: hidden;
          aspect-ratio: 3/2;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .project-placeholder {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          opacity: 0.6;
        }
        .placeholder-icon {
          font-size: 3rem;
          color: rgba(255, 255, 255, 0.7);
        }
        .placeholder-initials {
          font-size: 1.5rem;
          font-weight: 800;
          color: rgba(255, 255, 255, 0.9);
          letter-spacing: 3px;
        }
        .project-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(2px);
        }
        .project-links {
          display: flex;
          gap: 12px;
        }
        .project-link-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 10px 20px;
          border-radius: 8px;
          font-size: 0.85rem;
          font-weight: 600;
          color: #fff;
          background: rgba(0, 212, 255, 0.15);
          border: 1px solid rgba(0, 212, 255, 0.3);
          transition: all 0.3s;
        }
        .project-link-btn:hover {
          background: rgba(0, 212, 255, 0.25);
        }
        .project-info {
          padding: 20px;
        }
        .project-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 8px;
        }
        .project-desc {
          font-size: 0.85rem;
          color: #64748b;
          line-height: 1.7;
          margin-bottom: 16px;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .project-tag {
          font-size: 0.75rem;
          font-weight: 500;
          color: #00d4ff;
          background: rgba(0, 212, 255, 0.06);
          padding: 4px 12px;
          border-radius: 20px;
          border: 1px solid rgba(0, 212, 255, 0.1);
        }
        @media (max-width: 1024px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 600px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}
