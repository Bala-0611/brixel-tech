
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import AIAndFAQ from './components/AIAndFAQ';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen text-white">
      {/* Background with retro filter */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('images/red bg.jpg')",
          filter: 'grayscale(80%) contrast(1.1) brightness(0.9)',
        }}
      ></div>
      {/* Content with overlay */}
      <div className="relative bg-black/50 min-h-screen">
        <Header />
        <main>
          <Hero />
          <div id="about">
            <About />
          </div>
          <div id="services">
            <Services />
          </div>
          <div id="projects">
            <Projects />
          </div>
          <div id="testimonials">
            <Testimonials />
          </div>
          <div id="contact">
            <Contact />
          </div>
          <div id="ai-faq">
            <AIAndFAQ />
          </div>
        </main>
        <footer id="footer">
          <Footer />
        </footer>
      </div>
    </div>
  );
};

export default App;