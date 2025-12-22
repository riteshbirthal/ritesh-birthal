import { useState, useEffect } from 'react';
import './LoadingScreen.css';

const loadingTexts = [
  'Initializing portfolio...',
  'Loading experiences...',
  'Compiling projects...',
  'Preparing skills showcase...',
  'Almost ready...',
];

const LoadingScreen = ({ onFinished }: { onFinished: () => void }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (currentTextIndex < loadingTexts.length - 1) {
      const timeout = setTimeout(() => {
        setCurrentTextIndex(currentTextIndex + 1);
      }, 600);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setShow(false);
        onFinished();
      }, 800);
      return () => clearTimeout(timeout);
    }
  }, [currentTextIndex, onFinished]);

  if (!show) {
    return null;
  }

  const progress = ((currentTextIndex + 1) / loadingTexts.length) * 100;

  return (
    <div className="loading-screen">
      <div className="loading-content">
        <div className="loading-logo">RB</div>
        <div className="loading-spinner"></div>
        <div className="loading-text" key={currentTextIndex}>{loadingTexts[currentTextIndex]}</div>
        <div className="loading-progress">
          <div className="loading-progress-bar" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
