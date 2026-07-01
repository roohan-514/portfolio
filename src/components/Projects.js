import React from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import './Projects.css';

const Projects = ({ projects, profile }) => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className={`project-card card ${project.featured ? 'featured' : ''}`}>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="project-tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.githubLink && (
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
                      <FiGithub /> Source
                    </a>
                  )}
                  {project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link">
                      <FiExternalLink /> Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="projects-more">
          <a href={`${profile.github}?tab=repositories`} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            View All Repositories
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
