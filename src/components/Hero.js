import React, { useRef } from 'react';
import { Link } from 'react-scroll';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiChevronDown, FiDownload } from 'react-icons/fi';
import './Hero.css';

const magnetic = (e) => {
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  const x = e.clientX - rect.left - rect.width / 2;
  const y = e.clientY - rect.top - rect.height / 2;
  el.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
};

const resetMagnetic = (e) => {
  e.currentTarget.style.transform = 'translate(0, 0)';
};

const Hero = ({ profile }) => {
  const taglines = [
    "AI & Machine Learning Enthusiast",
    "Full-Stack Developer",
    "Building Intelligent Solutions",
    "Computer Vision Explorer"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-particles">
        {[...Array(6)].map((_, i) => (
          <div key={i} className={`particle particle-${i + 1}`} />
        ))}
      </div>
      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p className="hero-greeting" variants={itemVariants}>
          Hi, Welcome to <span className="hero-greeting-name">{profile.shortName}'s</span>
        </motion.p>
        <motion.h1 className="hero-name" variants={itemVariants}>
          {profile.name}
        </motion.h1>
        <motion.h2 className="hero-title" variants={itemVariants}>
          <Typewriter
            words={taglines}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={40}
            delaySpeed={1500}
          />
        </motion.h2>
        <motion.p className="hero-tagline" variants={itemVariants}>
          {profile.tagline}
        </motion.p>
        <motion.div className="hero-actions" variants={itemVariants}>
          <Link to="projects" smooth={true} duration={500} className="btn btn-primary" onMouseMove={magnetic} onMouseLeave={resetMagnetic}>
            View Projects
          </Link>
          <a href={`mailto:${profile.email}`} className="btn btn-outline" onMouseMove={magnetic} onMouseLeave={resetMagnetic}>
            Hire Me
          </a>
          <a href={`${process.env.PUBLIC_URL}/documents/resume.pdf`} download className="btn btn-outline" onMouseMove={magnetic} onMouseLeave={resetMagnetic}>
            <FiDownload /> Resume
          </a>
        </motion.div>
        <motion.div className="hero-socials" variants={itemVariants}>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FiGithub />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FiLinkedin />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email">
            <FiMail />
          </a>
        </motion.div>
      </motion.div>
      <motion.div
        className="hero-scroll"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, repeat: Infinity, duration: 1.5, repeatType: 'reverse' }}
      >
        <FiChevronDown />
      </motion.div>
    </section>
  );
};

export default Hero;
