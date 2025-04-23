import React, { useState, useEffect } from 'react';
import '../styles/LoadingScreen.css';

const LoadingScreen = ({ onComplete }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);
  const greetings = ['👋Hello', '👋ನಮಸ್ಕಾರ', '👋नमस्ते', '👋こんにちは', '👋Hallo'];

  useEffect(() => {
    // Text transition logic
    if (currentTextIndex < greetings.length) {
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
                // Call onComplete after exit animation completes
                // setTimeout(onComplete, 0);
                onComplete();
              }, 100); // Increased duration for final greeting display
              return nextIndex; // Update index to prevent re-render
            }
            return nextIndex;
          });
          setIsFading(false);
        }, 100); // Time for fade out (reduced)
      }, 100); // Time each greeting stays visible (reduced)

      return () => clearTimeout(textTimer);
    }
  }, [currentTextIndex, greetings.length, onComplete]);

  if (!isVisible) return null;

  return (
    <div className={`loading-screen ${!isVisible ? 'exit' : ''}`}>
      <div className="loading-content">
        <div className={`greeting-text ${isFading ? 'fade-out' : 'fade-in'}`}>
          {currentTextIndex < greetings.length && greetings[currentTextIndex]}
        </div>

      </div>
    </div>
  );
};

export default LoadingScreen;