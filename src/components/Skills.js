import React from 'react';
import '../styles/Skills.css';
import { skillsData, skillDescriptions } from '../data/portfolioData';
import { FaReact, FaHtml5, FaGithub, FaJava } from 'react-icons/fa';
import { SiJavascript, SiRedux, SiJenkins, SiJira, SiOracle, SiSpringboot, SiSonarqube, SiApachemaven } from 'react-icons/si';
import { useEffect, useRef } from 'react';

// Map skill names to their corresponding icons
const skillIconMap = {
  // Backend
  'Java': FaJava,
  'Spring Boot': SiSpringboot,
  'Oracle SQL': SiOracle,
  'Maven': SiApachemaven,
  
  // Frontend
  'React.js': FaReact,
  'Javascript': SiJavascript,
  'HTML/CSS': FaHtml5, // Using HTML5 icon for HTML/CSS
  'Redux': SiRedux,
  
  // Tools
  'Git': FaGithub,
  'Jira': SiJira,
  'Jenkins': SiJenkins,
  'Sonar': SiSonarqube,
};

function Skills() {
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
  
  // Helper function to render skill icons
  const renderSkillIcons = (skills) => {
    return skills.map((skill, index) => {
      const IconComponent = skillIconMap[skill];
      return IconComponent ? (
        <div className="skill-icon" key={index} title={skill}>
          <IconComponent />
        </div>
      ) : null;
    });
  };

  // Helper function to render skill descriptions
  const renderDescriptions = (category) => {
    return skillDescriptions[category].map((desc, index) => (
      <p className="skill-description" key={index}>
        {desc}
      </p>
    ));
  };

  return (
    <section className="skills">
      <div className="fade-in-section" ref={sectionRef}>
        <h2>Skills</h2>
        <div className="skills-container">
          {/* Backend Skills */}
          <div className="skill-category">
            <h3>Backend</h3>
            {renderDescriptions('backend')}
            <div className="skill-icons">
              {renderSkillIcons(skillsData.backend)}
            </div>
          </div>

          {/* Frontend Skills */}
          <div className="skill-category">
            <h3>Frontend & Design</h3>
            {renderDescriptions('frontend')}
            <div className="skill-icons">
              {renderSkillIcons(skillsData.frontend)}
            </div>
          </div>

          {/* Tools Skills */}
          <div className="skill-category">
            <h3>Tools</h3>
            {renderDescriptions('devops')}
            <div className="skill-icons">
              {renderSkillIcons(skillsData.devops)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;