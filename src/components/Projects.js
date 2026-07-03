import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import './Projects.css';

const Projects = ({ projects, profile }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const sorted = [...projects].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return a.id - b.id;
  });

  const getGradient = (title) => {
    const colors = [
      ['#00d4ff', '#7c3aed'],
      ['#7c3aed', '#ff6b6b'],
      ['#ff6b6b', '#feca57'],
      ['#feca57', '#48dbfb'],
      ['#48dbfb', '#ff9ff3'],
    ];
    let hash = 0;
    for (let i = 0; i < title.length; i++) {
      hash = title.charCodeAt(i) + ((hash << 5) - hash);
    }
    return colors[Math.abs(hash) % colors.length];
  };

  const getInitials = (title) => {
    return title.split(' ').slice(0, 2).map(w => w[0]).join('');
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-title">Works</div>
        <h2 className="section-heading">Featured Works</h2>
        <p className="section-subtitle">Projects that define my journey</p>

        <div className="projects-grid" ref={ref}>
          {sorted.map((project, index) => {
            const [c1, c2] = getGradient(project.title);
            return (
              <motion.div
                key={project.id}
                className={`project-card cyber-card ${project.featured ? 'featured' : ''}`}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.06 }}
              >
                <div
                  className="project-image"
                  style={{ background: `linear-gradient(135deg, ${c1}33, ${c2}33)` }}
                >
                  <span className="project-image-text" style={{ background: `linear-gradient(135deg, ${c1}, ${c2})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    {getInitials(project.title)}
                  </span>
                  <span className="project-year">{project.year}</span>
                </div>
                <div className="project-body">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.description}</p>
                  <div className="project-techs">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="tag">{tech}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    {project.githubLink && (
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
                        VIEW PROJECT <FiExternalLink />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="projects-more">
          <a
            href={`${profile.github}?tab=repositories`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            <FiGithub /> View All Repositories
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
