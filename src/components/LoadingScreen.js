import React, { useState, useEffect } from 'react';
import '../styles/LoadingScreen.css';

const LoadingScreen = ({ onComplete }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);
  const [loadingComplete, setLoadingComplete] = useState(false);
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
                setLoadingComplete(true);
                // Wait a bit before starting the exit animation
                setTimeout(() => {
                  setIsVisible(false);
                  // Call onComplete after exit animation completes
                  setTimeout(onComplete, 1000);
                }, 200);
              }, 200);
            }
            return nextIndex < greetings.length ? nextIndex : prevIndex;
          });
          setIsFading(false);
        }, 150); // Time for fade out (reduced)
      }, 200); // Time each greeting stays visible (reduced)

      return () => clearTimeout(textTimer);
    }
  }, [currentTextIndex, greetings.length, onComplete]);

  if (!isVisible) return null;

  return (
    <div className={`loading-screen ${!isVisible ? 'exit' : ''} ${loadingComplete ? 'loading-complete' : ''}`}>
      <div className="loading-content">
        <div className={`greeting-text ${isFading ? 'fade-out' : 'fade-in'}`}>
          {currentTextIndex < greetings.length && greetings[currentTextIndex]}
        </div>
        {loadingComplete && <div className="continue-text">Welcome to my portfolio</div>}
      </div>
    </div>
  );
};

export default LoadingScreen;