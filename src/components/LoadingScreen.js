import React, { useState, useEffect } from 'react';
import '../styles/LoadingScreen.css';

const LoadingScreen = ({ onComplete }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);
  const greetings = [
    { text: '👋Hello', timeout: 500 },
    { text: '👋ನಮಸ್ಕಾರ', timeout: 100 },
    { text: '👋नमस्ते', timeout: 100 },
    { text: '👋こんにちは', timeout: 100 },
    { text: '👋Hallo', timeout: 100 }
  ];

  useEffect(() => {
    // Text transition logic
    if (currentTextIndex < greetings.length) {
      const currentGreeting = greetings[currentTextIndex];
      const textTimer = setTimeout(() => {
        setIsFading(true);
        
        // Wait for fade out, then change text and fade in
        setTimeout(() => {
          setCurrentTextIndex(prevIndex => {
            const nextIndex = prevIndex + 1;
            if (nextIndex >= greetings.length) {
              // Start the exit animation after the last greeting
              setTimeout(() => {
                setIsVisible(false);
                // Call onComplete after exit animation completes with a delay
                // to allow for the exit animation to finish before Hero animates in
                setTimeout(onComplete, 100);
              }, 100); // Increased duration for final greeting display
              return nextIndex; // Update index to prevent re-render
            }
            return nextIndex;
          });
          setIsFading(false);
        }, 100); // Time for fade out (reduced)
      }, currentGreeting.timeout); // Configurable timeout for each greeting

      return () => clearTimeout(textTimer);
    }
  }, [currentTextIndex, greetings.length, onComplete]);

  if (!isVisible) return null;

  return (
    <div className={`loading-screen ${!isVisible ? 'exit' : ''}`}>
      <div className="loading-content">
        <div className={`greeting-text ${isFading ? 'fade-out' : 'fade-in'}`}>
          {currentTextIndex < greetings.length && greetings[currentTextIndex].text}
        </div>

      </div>
    </div>
  );
};

export default LoadingScreen;