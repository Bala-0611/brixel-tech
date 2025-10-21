import React from 'react';

interface PlusIconProps {
  open: boolean;
}

const PlusIcon: React.FC<PlusIconProps> = ({ open }) => {
  return (
    <svg 
      className={`w-6 h-6 md:w-8 md:h-8 text-white transition-transform duration-500 ease-in-out ${open ? 'rotate-45' : ''}`} 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <line x1="12" y1="5" x2="12" y2="19"></line>
      <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
  );
};

export default PlusIcon;
