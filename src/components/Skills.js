import React from 'react';
import '../styles/Skills.css';

function Skills() {
  return (
    <section className="skills">
      <h2>Skills</h2>
      <div className="skills-container">
        <div className="skill-category">
          <h3>Frontend</h3>
          <ul>
            <li>React</li>
            <li>JavaScript</li>
            <li>HTML/CSS</li>
            <li>TypeScript</li>
            <li>Redux</li>
          </ul>
        </div>
        <div className="skill-category">
          <h3>Backend</h3>
          <ul>
            <li>Node.js</li>
            <li>Python</li>
            <li>SQL</li>
            <li>Express</li>
            <li>MongoDB</li>
          </ul>
        </div>
        <div className="skill-category">
          <h3>Tools & Others</h3>
          <ul>
            <li>Git</li>
            <li>Docker</li>
            <li>AWS</li>
            <li>CI/CD</li>
            <li>Agile Methodologies</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Skills;