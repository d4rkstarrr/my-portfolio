import React from 'react';
import '../styles/Experience.css';
import { experienceData } from '../data/portfolioData';

function Experience() {
  return (
    <section className="experience">
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
    </section>
  );
}

export default Experience;