import React from 'react';
import { Link } from 'react-scroll';
import { Typewriter } from 'react-simple-typewriter';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import './Hero.css';

const Hero = ({ profile }) => {
  const taglines = [
    "AI & Machine Learning Enthusiast",
    "Full-Stack Developer",
    "Building Intelligent Solutions",
    "Computer Vision Explorer"
  ];

  return (
    <section id="hero" className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-greeting">Hello, I'm</p>
          <h1 className="hero-name">{profile.name}</h1>
          <h2 className="hero-title">
            <Typewriter
              words={taglines}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={40}
              delaySpeed={1500}
            />
          </h2>
          <p className="hero-tagline">{profile.tagline}</p>
          <div className="hero-actions">
            <Link to="projects" smooth={true} duration={500} className="btn btn-primary">
              View My Work
            </Link>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              GitHub
            </a>
          </div>
          <div className="hero-socials">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FiGithub />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FiLinkedin />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email">
              <FiMail />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
