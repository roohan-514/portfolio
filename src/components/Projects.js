import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import './Projects.css';

const projectIcons = {
  'deepfake': '🎙️',
  'audio': '🎵',
  'icu': '🏥',
  'monitoring': '📊',
  'facial': '👤',
  'face': '😀',
  'recognition': '🔍',
  'medical': '🩺',
  'diagnostic': '🔬',
  'driver': '🚗',
  'drowsiness': '😴',
  'yawning': '😮',
  'autoforge': '⚡',
  'multiplayer': '🎮',
  'fps': '🔫',
  'stripe': '💳',
  'payment': '💰',
  'subscription': '📋',
  'resume': '📄',
  'career': '🚀',
  'rag': '🤖',
  'chatbot': '💬',
  'mlops': '🔄',
  'pipeline': '🔧',
  'code': '💻',
  'review': '✅',
  'system design': '📐',
  'architecture': '🏗️',
  'open source': '🌍',
  'contributions': '🤝',
  'blog': '✍️',
  'technical': '📝',
};

const getIconForProject = (title) => {
  const lower = title.toLowerCase();
  for (const [key, icon] of Object.entries(projectIcons)) {
    if (lower.includes(key)) return icon;
  }
  return '🚀';
};

const colorPalettes = [
  ['#00d4ff', '#7c3aed'],
  ['#7c3aed', '#ff6b6b'],
  ['#ff6b6b', '#feca57'],
  ['#00b894', '#00cec9'],
  ['#6c5ce7', '#fd79a8'],
  ['#0984e3', '#00d4ff'],
  ['#e17055', '#fdcb6e'],
  ['#a29bfe', '#6c5ce7'],
];

const getPalette = (title) => {
  let hash = 0;
  for (let i = 0; i < title.length; i++) {
    hash = title.charCodeAt(i) + ((hash << 5) - hash);
  }
  return colorPalettes[Math.abs(hash) % colorPalettes.length];
};

const Projects = ({ projects, profile }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  const sorted = [...projects].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return a.id - b.id;
  });

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-title">Works</div>
        <h2 className="section-heading">Featured Works</h2>
        <p className="section-subtitle">Projects that define my journey</p>

        <div className="projects-grid" ref={ref}>
          {sorted.map((project, index) => {
            const [c1, c2] = getPalette(project.title);
            const icon = getIconForProject(project.title);
            return (
              <motion.div
                key={project.id}
                className={`project-card ${project.featured ? 'featured' : ''}`}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.06 }}
              >
                <div
                  className="project-image"
                  style={{ background: `linear-gradient(135deg, ${c1}, ${c2})` }}
                >
                  <div className="project-image-pattern">
                    <div className="pattern-circle" style={{ background: `${c1}44`, top: '-30%', right: '-20%', width: '120px', height: '120px' }} />
                    <div className="pattern-circle" style={{ background: `${c2}44`, bottom: '-20%', left: '-15%', width: '80px', height: '80px' }} />
                    <div className="pattern-circle" style={{ background: `rgba(255,255,255,0.05)`, top: '40%', left: '30%', width: '60px', height: '60px' }} />
                  </div>
                  <span className="project-icon">{icon}</span>
                  <span className="project-year">{project.year}</span>
                </div>
                <div className="project-body">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.description}</p>
                  <div className="project-techs">
                    {project.technologies.slice(0, 4).map((tech, i) => (
                      <span key={i} className="tag">{tech}</span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="tag tag-more">+{project.technologies.length - 4}</span>
                    )}
                  </div>
                  <div className="project-links">
                    {project.githubLink && (
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link" style={{ color: c1 }}>
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
