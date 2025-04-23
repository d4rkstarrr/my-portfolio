import React from 'react';
import '../styles/Experience.css';

function Experience() {
  return (
    <section className="experience">
      <h2>Experience</h2>
      <div className="timeline">
        <div className="timeline-item">
          <h3>Senior Developer</h3>
          <p className="timeline-period">Company Name | 2020 - Present</p>
          <ul className="timeline-achievements">
            <li>Led development of multiple web applications using React and Node.js</li>
            <li>Implemented CI/CD pipelines reducing deployment time by 40%</li>
            <li>Mentored junior developers and conducted code reviews</li>
            <li>Optimized database queries resulting in 30% performance improvement</li>
          </ul>
        </div>
        <div className="timeline-item">
          <h3>Software Engineer</h3>
          <p className="timeline-period">Previous Company | 2018 - 2020</p>
          <ul className="timeline-achievements">
            <li>Developed and maintained full-stack applications</li>
            <li>Collaborated with UX designers to implement responsive interfaces</li>
            <li>Participated in agile development processes</li>
            <li>Contributed to open-source projects within the company</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;