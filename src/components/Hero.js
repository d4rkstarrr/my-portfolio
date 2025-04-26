import React from 'react';
import '../styles/Hero.css';
import '../styles/animations.css';

function Hero() {
  return (
    <section className="hero animate-fade-in-up">
      <div className="hero-content stagger-children">
        <div className="hero-image">
          <img 
            src="/images/myPhoto.jpg" 
            alt="Yashas Chandra" 
            className="profile-image" 
          />
        </div>
        <div className="hero-text">
          <h1>Hi, I'm Yashas Chandra</h1>
          <h2 className="role aspire">Software Engineer</h2>
          <p className="hero-bio">
            Skilled in building robust, scalable, and secure software solutions.
          </p>
          <div className="hero-social-links">
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
        </div>
      </div>
    </section>
  );
}

export default Hero;