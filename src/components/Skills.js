import React from 'react';
import '../styles/Skills.css';
import { skillsData } from '../data/portfolioData';

function Skills() {
  return (
    <section className="skills">
      <h2>Skills</h2>
      <div className="skills-container">
        <div className="skill-category">
          <h3>Frontend</h3>
          <ul>
            {skillsData.frontend.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className="skill-category">
          <h3>Backend</h3>
          <ul>
            {skillsData.backend.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className="skill-category">
          <h3>Tools & Others</h3>
          <ul>
            {skillsData.tools.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;