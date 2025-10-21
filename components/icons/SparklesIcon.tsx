
import React from 'react';

const SparklesIcon: React.FC = () => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="20" 
      height="20" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      className="text-amber-500"
    >
      <path d="M12 3L9.5 8.5L4 11L9.5 13.5L12 19L14.5 13.5L20 11L14.5 8.5L12 3Z"/>
      <path d="M5 3L6 6"/>
      <path d="M18 18L19 21"/>
      <path d="M21 5L18 6"/>
      <path d="M3 19L6 18"/>
    </svg>
  );
};

export default SparklesIcon;