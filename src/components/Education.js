import React from 'react';
import '../styles/Education.css';

function Education() {
  return (
    <section className="education">
      <h2>Education</h2>
      <div className="education-timeline">
        <div className="education-item">
          <h3>Master of Computer Science</h3>
          <p className="education-institution">University Name</p>
          <p className="education-period">2016 - 2018</p>
          <p className="education-description">
            Specialized in Software Engineering and Data Science. Graduated with distinction.
          </p>
        </div>
        <div className="education-item">
          <h3>Bachelor of Engineering in Computer Science</h3>
          <p className="education-institution">University Name</p>
          <p className="education-period">2012 - 2016</p>
          <p className="education-description">
            Focused on programming fundamentals, algorithms, and web development.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Education;