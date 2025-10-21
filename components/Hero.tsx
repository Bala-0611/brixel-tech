
import React from 'react';

const Hero: React.FC = () => {
  const whatsappUrl = `https://wa.me/918925669365?text=${encodeURIComponent("Hello Brixel Tech! I'm interested in building a project with you.")}`;

  return (
    <div className="relative w-full h-[75vh] border border-white/50 overflow-hidden bg-black">
      {/* Local Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="videos/hero bg.mp4"
      >
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay for better text readability with explicit z-index */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10"></div>

      {/* Overlaid Content with explicit z-index */}
      <div className="relative z-20 flex flex-col justify-between h-full p-8 md:p-12">
        <div className="text-right">
          <p className="text-sm font-medium tracking-[0.2em] text-white/80">
            PREMIER WEB SERVICES IN CHENNAI
          </p>
        </div>
        <div className="text-left">
          <h2 className="text-5xl md:text-7xl font-black text-white leading-tight drop-shadow-lg">
            We build pixels
            <br />
            with bricks
          </h2>
          <a 
            href={whatsappUrl} 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 bg-white text-black text-sm font-bold py-4 px-10 tracking-widest uppercase hover:bg-gray-300 transition-colors duration-300">
            Build with us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;