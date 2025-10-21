import React, { useState } from 'react';
import ScrollDownIcon from './icons/ScrollDownIcon';

interface Service {
  title: string;
  description: string;
  imageUrl: string;
}

const servicesData: Service[] = [
  {
    title: 'Business Websites',
    description: 'Professional, responsive websites to establish your online presence and attract customers.',
    imageUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'E-commerce Solutions',
    description: 'Robust and scalable e-commerce platforms to sell your products online with ease.',
    imageUrl: 'https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'University Projects',
    description: 'Expert assistance and development for academic projects, ensuring top grades and understanding.',
    imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'UI/UX & Graphic Designing',
    description: "Crafting intuitive interfaces and stunning visuals that captivate users and elevate your brand's identity.",
    imageUrl: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

const Services: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
            Our Digital Masterpieces
          </h2>
          <p className="text-lg text-white/70 mt-4 max-w-2xl mx-auto">
            We specialize in crafting bespoke digital solutions that are as unique as your vision. Explore our core services designed for excellence.
          </p>
        </div>
        
        {/* Desktop View: Interactive List */}
        <div className="hidden lg:grid lg:grid-cols-12 lg:gap-16 items-start">
          {/* Left Column: Service List */}
          <div className="lg:col-span-4">
            <div className="flex flex-col gap-4">
              {servicesData.map((service, index) => (
                <div
                  key={service.title}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                  className="p-6 rounded-lg cursor-pointer transition-all duration-300 ease-in-out border-l-2"
                  style={{
                    borderColor: activeIndex === index ? '#FFFFFF' : 'rgba(255, 255, 255, 0.2)',
                    backgroundColor: activeIndex === index ? 'rgba(255, 255, 255, 0.05)' : 'transparent',
                  }}
                  role="button"
                  tabIndex={0}
                >
                  <h3 className={`text-2xl font-bold transition-colors duration-300 ${activeIndex === index ? 'text-white' : 'text-white/60'}`}>
                    {service.title}
                  </h3>
                  <p className={`mt-2 transition-colors duration-300 ${activeIndex === index ? 'text-white/80' : 'text-white/50'}`}>
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Image Preview */}
          <div className="lg:col-span-8 mt-12 lg:mt-0 sticky top-24">
            <div className="relative w-full h-[30rem] rounded-lg overflow-hidden border border-white/20 bg-black/20">
              {/* Images */}
              {servicesData.map((service, index) => (
                <img
                  key={service.imageUrl}
                  src={service.imageUrl}
                  alt={service.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${activeIndex === index ? 'opacity-100' : 'opacity-0'}`}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </div>
        </div>
        
        {/* Mobile View: Service Cards */}
        <div className="lg:hidden grid grid-cols-1 gap-12 mt-8">
          {servicesData.map((service) => (
            <div key={service.title} className="bg-white/5 rounded-lg overflow-hidden shadow-lg">
              <img src={service.imageUrl} alt={service.title} className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                <p className="mt-2 text-white/80">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block">
        <a href="#projects" aria-label="Scroll to next section" className="block p-3 rounded-full bg-white/5 animate-bounce hover:bg-white/10 transition-colors">
            <ScrollDownIcon />
        </a>
      </div>
    </section>
  );
};

export default Services;