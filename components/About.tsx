
import React from 'react';
import InnovationIcon from './icons/InnovationIcon';
import DesignIcon from './icons/DesignIcon';
import CollaborationIcon from './icons/CollaborationIcon';
import Counter from './Counter';

const About: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Column: Text Content & Stats */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
              We Are The Architects of Tomorrow's Web
            </h2>
            <p className="text-lg text-white/80 mb-10 leading-relaxed">
              At Brixel Tech, we don't just build websites; we build digital legacies. We're a nimble team of creators, thinkers, and innovators passionate about pushing the boundaries of what's possible on the web.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              <div className="border border-white/20 rounded-lg p-4">
                <Counter end={50} suffix="+" />
                <p className="text-sm text-white/60 tracking-wider uppercase">Projects Launched</p>
              </div>
              <div className="border border-white/20 rounded-lg p-4">
                <Counter end={5} />
                <p className="text-sm text-white/60 tracking-wider uppercase">Years Innovating</p>
              </div>
              <div className="border border-white/20 rounded-lg p-4">
                <Counter end={100} suffix="%" />
                <p className="text-sm text-white/60 tracking-wider uppercase">Partner Success</p>
              </div>
            </div>
          </div>

          {/* Right Column: Feature Cards */}
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col gap-6">
              {/* Card 1: Innovation */}
              <div className="bg-white/5 p-8 rounded-lg border border-white/10 hover:border-white/40 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <InnovationIcon />
                  <h3 className="text-2xl font-bold text-white">Innovation at Core</h3>
                </div>
                <p className="text-white/70">
                  We leverage the latest technologies and frameworks to build solutions that are not just current, but future-proof.
                </p>
              </div>
              {/* Card 2: Design */}
              <div className="bg-white/5 p-8 rounded-lg border border-white/10 hover:border-white/40 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <DesignIcon />
                  <h3 className="text-2xl font-bold text-white">Design-Driven</h3>
                </div>
                <p className="text-white/70">
                  Pixel-perfect, user-centric design is at the heart of everything we do, ensuring a seamless and engaging user experience.
                </p>
              </div>
              {/* Card 3: Collaboration */}
              <div className="bg-white/5 p-8 rounded-lg border border-white/10 hover:border-white/40 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <CollaborationIcon />
                  <h3 className="text-2xl font-bold text-white">Agile & Collaborative</h3>
                </div>
                <p className="text-white/70">
                  We work with you, not for you. Our agile process ensures we're always aligned and delivering value at every stage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
