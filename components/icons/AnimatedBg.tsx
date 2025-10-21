import React from 'react';

const AnimatedBg: React.FC = () => {
  return (
    <svg
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute top-0 left-0 w-full h-full z-0"
    >
      <defs>
        <pattern
          id="grid"
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 40 0 L 0 0 0 40"
            fill="none"
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth="1"
          />
        </pattern>
        <style>
          {`
            @keyframes moveGrid {
              from { transform: translate(0, 0); }
              to { transform: translate(-40px, -40px); }
            }
            .animated-grid {
              animation: moveGrid 2s linear infinite;
            }
          `}
        </style>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" className="animated-grid" />
    </svg>
  );
};

export default AnimatedBg;
