import React from 'react';
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';
import './Footer.css';

const Footer = ({ profile }) => {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-left">
            <span className="footer-name">{profile.name}</span>
          </div>
          <div className="footer-center">
            <p className="footer-built">
              Built with <FiHeart className="footer-heart" /> by {profile.shortName}
            </p>
          </div>
          <div className="footer-right">
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FiLinkedin /> LNKDN
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email">
              <FiMail /> MAIL
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FiGithub /> GITHUB
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {year} {profile.shortName} Portfolio</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
