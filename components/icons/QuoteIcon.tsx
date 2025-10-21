
import React from 'react';

const QuoteIcon: React.FC = () => {
  return (
    <svg 
      width="100" 
      height="100" 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="text-white"
    >
      <path 
        d="M10 11H6.5C5.12 11 4 12.12 4 13.5V17.5C4 18.88 5.12 20 6.5 20H10V11Z" 
        stroke="currentColor" 
        strokeWidth="1.5"
      />
      <path 
        d="M10 11L12 7" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        strokeLinecap="round"
      />
      <path 
        d="M20 11H16.5C15.12 11 14 12.12 14 13.5V17.5C14 18.88 15.12 20 16.5 20H20V11Z" 
        stroke="currentColor" 
        strokeWidth="1.5"
      />
      <path 
        d="M20 11L22 7" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        strokeLinecap="round"
      />
    </svg>
  );
};

export default QuoteIcon;
