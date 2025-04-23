import React, { useEffect, useState } from 'react';
import './App.css';
import { ThemeProvider, useTheme } from './ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import LoadingScreen from './components/LoadingScreen';

function AppContent() {
  const { isDarkMode } = useTheme();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Apply theme to body element
    document.body.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    // Add grid background class to body
    document.body.classList.add('bg-grid');
  }, [isDarkMode]);

  return (
    <div className="App" data-theme={isDarkMode ? 'dark' : 'light'}>
      {isLoading ? (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      ) : (
        <>
          <ThemeToggle />
          <section className="hero">
            <h1>Hi, I'm Yashas Chandra</h1>
            <p>Full Stack Developer | Problem Solver | Tech Enthusiast</p>
          </section>

          <section className="experience">
            <h2>Experience</h2>
            <div className="timeline">
              <div className="timeline-item">
                <h3>Senior Developer</h3>
                <p>Company Name | 2020 - Present</p>
                <p>Led development of multiple web applications using React and Node.js</p>
              </div>
              <div className="timeline-item">
                <h3>Software Engineer</h3>
                <p>Previous Company | 2018 - 2020</p>
                <p>Developed and maintained full-stack applications</p>
              </div>
            </div>
          </section>

          <section className="skills">
            <h2>Skills</h2>
            <div className="skills-container">
              <div className="skill-category">
                <h3>Frontend</h3>
                <ul>
                  <li>React</li>
                  <li>JavaScript</li>
                  <li>HTML/CSS</li>
                </ul>
              </div>
              <div className="skill-category">
                <h3>Backend</h3>
                <ul>
                  <li>Node.js</li>
                  <li>Python</li>
                  <li>SQL</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="testimonials">
            <h2>Testimonials</h2>
            <div className="testimonials-container">
              <div className="testimonial">
                <p>"An exceptional developer with great attention to detail."</p>
                <h4>John Doe</h4>
                <p>Tech Lead, Company Name</p>
              </div>
              <div className="testimonial">
                <p>"Consistently delivers high-quality solutions on time."</p>
                <h4>Jane Smith</h4>
                <p>Project Manager, Another Company</p>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );

}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
