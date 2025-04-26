import React from 'react';
import '../styles/Experience.css';
import { experienceData } from '../data/portfolioData';
import { useEffect, useRef } from 'react';

function Experience() {
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const currentSection = sectionRef.current;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    if (currentSection) {
      observer.observe(currentSection);
    }
    
    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);
  
  return (
    <section className="experience">
      <div className="fade-in-section" ref={sectionRef}>
        <h2>Experience</h2>
        <div className="timeline">
          {experienceData.map((exp, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-header">
                <div className="timeline-title-section">
                  <h3>{exp.title}</h3>
                  <p className="timeline-period">{exp.company} | {exp.period}</p>
                </div>
                <div className="company-logo-container">
                  {exp.companyLogo && <img src={exp.companyLogo} alt={exp.company} className="company-logo" />}
                </div>
              </div>
              <ul className="timeline-achievements">
                {exp.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;