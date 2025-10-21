
import React from 'react';

const PulsatingDots: React.FC = () => {
  return (
    <div className="flex items-center justify-center gap-1">
      <span className="w-2 h-2 bg-current rounded-full dot-pulse dot-pulse-1"></span>
      <span className="w-2 h-2 bg-current rounded-full dot-pulse dot-pulse-2"></span>
      <span className="w-2 h-2 bg-current rounded-full dot-pulse dot-pulse-3"></span>
    </div>
  );
};

export default PulsatingDots;
