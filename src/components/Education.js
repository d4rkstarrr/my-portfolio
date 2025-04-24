import React from 'react';
import '../styles/Education.css';
import { educationData } from '../data/portfolioData';

function Education() {
  return (
    <section className="education">
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
    </section>
  );
}

export default Education;