import React, { useEffect, useState } from 'react';
import './App.css';
import { ThemeProvider, useTheme } from './ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import LoadingScreen from './components/LoadingScreen';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Footer from './components/Footer';

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
          <Hero />
          <Experience />
          <Education />
          <Skills />
          <Footer />
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
