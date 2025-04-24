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
          <p>Software Engineer | Problem Solver | Tech Enthusiast</p>
          <p className="hero-bio">
            Skilled in building robust, scalable, and secure software solutions.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;