import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="https://www.linkedin.com/in/yashas-chandra/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/d4rkstarrr" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <i className="fab fa-github"></i>
        </a>
        <a href="mailto:yashas998@gmail.com" aria-label="Email">
          <i className="fas fa-envelope"></i>
        </a>
        <a href={`${process.env.PUBLIC_URL}/resumes/resume.pdf`} className="resume-link" aria-label="Resume" target="_blank" rel="noopener noreferrer">
          <i className="fas fa-file-alt"></i>
        </a>
      </div>
      <b className="footer-text">Crafted with ❤️‍🔥 by Yashas Chandra</b>
    </footer>
  );
}

export default Footer;