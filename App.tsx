import React from 'react';
import { motion } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';

const BackgroundBricks: React.FC = () => {
  const bricks = Array.from({ length: 100 }); // Increased number of bricks for more density

  return (
    <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none" aria-hidden="true">
      {bricks.map((_, i) => {
        const style = {
          left: `${Math.random() * 100}%`,
          width: `${Math.random() * 200 + 80}px`, // Increased max width for more prominence
          height: `${Math.random() * 60 + 30}px`, // Increased max height
          animationDuration: `${Math.random() * 50 + 30}s`, // Wider duration range for more variety
          animationDelay: `${Math.random() * 30}s`, // Wider delay range
        };
        return (
          <div
            key={i}
            // Increased opacity for better visibility in both themes
            className="absolute top-[-300px] bg-primary/40 dark:bg-primary/35 animate-fall rounded-sm"
            style={style}
          />
        );
      })}
    </div>
  );
};

// FIX: Changed function declaration to a const with React.FC type to ensure proper type inference for components.
const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="relative isolate">
        <BackgroundBricks />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text font-sans text-lg transition-colors duration-300 dark:bg-pixel-grid dark:bg-grid-size"
        >
          <Header />
          <main>
            <Hero />
            <Services />
            <Projects />
            <Testimonials />
            <Contact />
            <AboutUs />
          </main>
          <Footer />
          <ScrollToTopButton />
        </motion.div>
      </div>
    </ThemeProvider>
  );
}

export default App;