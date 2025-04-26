import React from 'react';
import '../styles/Education.css';
import { educationData } from '../data/portfolioData';
import { useEffect, useRef } from 'react';

function Education() {
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
    <section className="education">
      <div className="fade-in-section" ref={sectionRef}>
        <h2>Education</h2>
        <div className="education-timeline">
          {educationData.map((edu, index) => (
            <div className="education-item" key={index}>
              <div className="education-header">
                <div className="education-info-section">
                  <h3>{edu.degree}</h3>
                  <p className="education-institution">{edu.institution}</p>
                  <p className="education-period">{edu.period}</p>
                </div>
                <div className="education-logo-container">
                  {edu.institutionLogo && <img src={edu.institutionLogo} alt={edu.institution} className="institution-logo" />}
                </div>
              </div>
              <p className="education-description">
                {edu.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;