import React from 'react';
import { FiHeart } from 'react-icons/fi';
import './Footer.css';

const Footer = ({ profile }) => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-text">
          &copy; {year} {profile.name}. Built with <FiHeart className="footer-heart" /> using React
        </p>
      </div>
    </footer>
  );
};

export default Footer;
