import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './About.css';

const About = ({ profile }) => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>{profile.about}</p>
            <div className="about-skills">
              {profile.skills.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
          <div className="about-stats">
            {profile.skillLevels.map((skill, index) => (
              <div key={index} className="stat-item">
                <CircularProgressbar
                  value={skill.level}
                  text={`${skill.level}%`}
                  styles={buildStyles({
                    textColor: '#e0e0e0',
                    pathColor: '#D85A30',
                    trailColor: '#444',
                    textSize: '16px',
                    strokeLinecap: 'round',
                  })}
                />
                <p className="stat-label">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
