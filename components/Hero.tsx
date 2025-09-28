import React from 'react';
// FIX: Imported Variants from framer-motion to fix type inference issues with transition properties.
import { motion, Variants } from 'framer-motion';

const AnimatedText = ({ text }: { text: string }) => {
  const words = text.split(' ');

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15, // Stagger words
      },
    },
  };

  const wordVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05, // Stagger letters within a word
      },
    },
  };

  const letterVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', damping: 12, stiffness: 100 },
    },
  };

  return (
    <motion.h1
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl tracking-tighter"
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={wordVariants}
          className="inline-block mr-4 whitespace-nowrap"
        >
          {word.split('').map((letter, letterIndex) => (
            <motion.span
              key={letterIndex}
              variants={letterVariants}
              className="inline-block"
            >
              {letter}
            </motion.span>
          ))}
        </motion.span>
      ))}
    </motion.h1>
  );
};

const Hero = () => {
    const scrollToContact = () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-r from-light-gray via-light-bg to-light-gray dark:from-dark-gray dark:via-dark-bg dark:to-dark-gray bg-200% animate-animatedGradient">
      <div className="container mx-auto px-4 text-center relative z-10">
        <AnimatedText text="We build pixels with bricks" />
        <motion.p 
            className="mt-8 mb-12 text-xl md:text-2xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
        >
          Crafting digital experiences with precision, creativity, and a touch of blocky magic.
        </motion.p>
        <motion.button
            onClick={scrollToContact}
            className="bg-primary text-white font-bold text-lg px-8 py-4 rounded-md shadow-lg hover:shadow-glow transition-all duration-300"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 2, type: 'spring' }}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
        >
          Build With Us
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;