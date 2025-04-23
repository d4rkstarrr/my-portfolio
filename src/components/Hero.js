import React from 'react';
import '../styles/Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-image">
          {/* Placeholder for profile image */}
          <div className="profile-image-placeholder">
            {/* Replace with actual image when available */}
            <span>YC</span>
          </div>
        </div>
        <div className="hero-text">
          <h1>Hi, I'm Yashas Chandra</h1>
          <p>Full Stack Developer | Problem Solver | Tech Enthusiast</p>
          <p className="hero-bio">
            I build elegant, responsive web applications with modern technologies.
            Passionate about creating intuitive user experiences and robust backend systems.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;