import React, { useState, useEffect } from 'react';

export function Footer() {
  const [backgroundColor, setBackgroundColor] = useState('#333');
  const [isBlinking, setIsBlinking] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const footerStyle = {
    backgroundColor: backgroundColor,
    padding: '20px',
    textAlign: 'center',
    position: 'relative', // To position the lightning effect
    transition: 'background-color 0.5s, transform 0.3s',
    transform: isHovered ? 'scale(1.01)' : 'scale(1)',
    borderRadius: '10px',
  };

  const lightningStyle = {
    position: 'absolute',
    bottom: '0',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '100%',
    height: '20px',
    background: 'linear-gradient(to right, transparent, white, transparent)',
    animation: 'lightning 1s infinite',
  };

  const textStyle = {
    color: 'white',
    margin: '0',
    animation: isBlinking ? 'blinking 1s infinite' : 'none',
  };

  useEffect(() => {
    const interval = setInterval(() => {
      // Generate a random color
      const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
      setBackgroundColor(randomColor);
    }, 1000); // Change color every 1 second

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <footer
      style={footerStyle}
      className='mt-4'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={lightningStyle} />
      <p style={textStyle}>Journey through Pokémon World</p>
      <style>
        {`
          @keyframes blinking {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }

          @keyframes lightning {
            0%, 100% { opacity: 0; }
            50% { opacity: 1; }
          }
        `}
      </style>
    </footer>
  );
}
