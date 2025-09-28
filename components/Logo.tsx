import React from 'react';
import { motion, Variants } from 'framer-motion';

interface LogoProps {
  onClick?: () => void;
}

const Logo: React.FC<LogoProps> = ({ onClick }) => {
  // Brick animation variants with floating + hover
  const brickVariants: Variants = {
    hidden: { y: -50, opacity: 0, rotate: -60 },
    visible: {
      y: 0,
      opacity: 1,
      rotate: 0,
      transition: {
        delay: 0.2,
        type: 'spring',
        stiffness: 200,
        damping: 12,
      },
    },
    hover: {
      y: -15,
      rotate: 10,
      scale: 1.3,
      transition: { type: 'spring', stiffness: 300, damping: 10 },
    },
    float: {
      y: [0, -4, 0, 4, 0], // gentle up-down float
      rotate: [0, 2, 0, -2, 0], // tiny wiggle
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  // Brixel text subtle hover effect
  const brixelTextVariants: Variants = {
    hover: {
      scale: 1.05,
      originX: 0,
      transition: { type: 'spring', stiffness: 400, damping: 15 },
    },
  };

  return (
    <motion.button
      onClick={onClick}
      aria-label="Brixel Tech home"
      className="cursor-pointer group"
      whileHover="hover"
      initial="hidden"
      animate="visible"
    >
      <svg
        width="310"
        height="75"
        viewBox="0 0 310 75"
        className="overflow-visible"
      >
        {/* Animated Brick Cap */}
        <motion.g
          transform="translate(10, -8) scale(1.8)"
          variants={brickVariants}
          initial="hidden"
          animate={['visible', 'float']} // entrance + continuous float
          whileHover="hover"
        >
          <polygon
            points="0,6 18,0 36,6 18,12"
            className="fill-red-300 dark:fill-red-400"
          />
          <polygon
            points="0,6 0,14 18,20 18,12"
            className="fill-red-700 dark:fill-red-800"
          />
          <polygon
            points="18,12 18,20 36,14 36,6"
            className="fill-primary"
          />
        </motion.g>

        {/* Text */}
        <motion.text
          x="0"
          y="65"
          fontFamily="Orbitron, sans-serif"
          fontSize="55"
          fontWeight="900"
          className="pointer-events-none"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <motion.tspan
            className="fill-primary transition-colors duration-300 group-hover:fill-red-400"
            variants={brixelTextVariants}
          >
            BRIXEL
          </motion.tspan>
          <tspan
            fontSize="50"
            className="fill-light-text dark:fill-dark-text transition-colors duration-300 group-hover:fill-secondary"
          >
            {' '}TECH
          </tspan>
        </motion.text>
      </svg>
    </motion.button>
  );
};

export default Logo;
