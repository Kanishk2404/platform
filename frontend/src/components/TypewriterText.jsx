import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const TypewriterText = ({ 
  text = "Welcome to new age of content creation and marketing",
  speed = 100,
  delay = 1000,
  className = ""
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const navigate = useNavigate();

  // Reset animation when text changes
  useEffect(() => {
    setDisplayedText('');
    setCurrentIndex(0);
    setIsComplete(false);
    setFadeOut(false);
  }, [text]);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, currentIndex === 0 ? delay : speed);
      return () => clearTimeout(timer);
    } else {
      setIsComplete(true);
      // Fade out, then navigate
      setTimeout(() => setFadeOut(true), 600);
      setTimeout(() => navigate('/home'), 1600);
    }
  }, [currentIndex, text, speed, delay, navigate]);

  return (
    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-center pointer-events-none w-full max-w-6xl px-4 transition-opacity duration-1000 ${fadeOut ? 'opacity-0' : 'opacity-100'} ${className}`}>
      <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold italic text-white/85 leading-tight w-full text-center tracking-tight -skew-x-2">
        {displayedText}
        {!isComplete && (
          <span className="text-white/85 animate-typewriter-blink -skew-x-2">
            |
          </span>
        )}
      </h1>
    </div>
  );
};

export default TypewriterText;
