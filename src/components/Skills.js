import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Skills.css';

const Skills = ({ skills }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-title">Capabilities</div>
        <h2 className="section-heading">Technical Arsenal</h2>
        <p className="section-subtitle">Tools and technologies I work with daily</p>

        <div className="skills-grid" ref={ref}>
          {skills.map((skill, index) => (
            <motion.div
              key={skill.id}
              className="skill-card cyber-card"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <div className="skill-header">
                <span className="skill-number">{skill.number}</span>
                <h3 className="skill-title">{skill.title}</h3>
              </div>
              <p className="skill-description">{skill.description}</p>
              <div className="skill-progress">
                <div className="skill-progress-bar">
                  <motion.div
                    className="skill-progress-fill"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.proficiency}%` } : {}}
                    transition={{ duration: 1, delay: index * 0.1 + 0.3, ease: 'easeOut' }}
                  />
                </div>
                <span className="skill-proficiency">{skill.proficiency}%</span>
              </div>
              <div className="skill-techs">
                {skill.technologies.map((tech, i) => (
                  <span key={i} className="tag">{tech}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
