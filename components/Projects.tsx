
import React from 'react';
import ExternalLinkIcon from './icons/ExternalLinkIcon';
import AnimatedCard from './AnimatedCard';

interface Project {
  category: string;
  title: string;
  description:string;
  imageUrl: string;
  stack: string[];
  duration: string;
  liveUrl?: string;
}

const projectsData: Project[] = [
  {
    category: 'Business Website',
    title: 'Harshus Dental Clinic',
    description: 'A sleek, professional online presence designed to attract and inform patients, featuring seamless appointment booking.',
    imageUrl: 'images/DENTAL CLINIC.jpg',
    stack: ['React', 'vite.js','Next.js', 'Tailwind CSS', 'SEO Tags'],
    duration: '7 Days',
    liveUrl: 'https://harshusclinic.com',
  },
  {
    category: 'E-commerce Website',
    title: 'Elite Fitness Studio',
    description: 'Currently under development, this platform is set to redefine online retail with a focus on user experience and scalability.',
    imageUrl: 'images/GYM .jpg',
    stack: ['Shopify', 'Liquid', 'Node.js', 'GraphQL'],
    duration: '10 Days',
  },
  {
    category: 'University Project',
    title: 'Authenticated PDF Generator',
    description: 'An advanced academic tool for secure document generation and verification, showcasing complex backend logic.',
    imageUrl: 'images/pdf auth.png',
    stack: ['Node.js', 'Express', 'Puppeteer', 'JWT'],
    duration: '7 Days',
    liveUrl: 'https://authenticated-pdf-generator.onrender.com/',
  },
];

const Projects: React.FC = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight text-center">
            Featured Creations
          </h2>
          <p className="text-lg text-white/70 mt-4 max-w-2xl mx-auto text-center">
            A glimpse into the digital experiences we've brought to life. Each project is a testament to our commitment to innovation and quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <AnimatedCard key={project.title} delay={index * 100}>
              <div className="bg-black/30 border border-white/10 rounded-2xl p-6 backdrop-blur-lg flex flex-col group hover:border-white/20 transition-all duration-300 h-full">
                <div className="relative w-full h-48 rounded-lg overflow-hidden mb-6">
                  <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <span className="absolute top-2 right-2 bg-white/10 text-white/80 text-xs font-bold px-2 py-1 rounded-full">{project.category}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-white/70 text-sm mb-4 flex-grow">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-bold tracking-widest uppercase text-white/50 mb-2">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span key={tech} className="font-medium text-white bg-white/10 px-2 py-1 rounded-sm text-xs">{tech}</span>
                    ))}
                  </div>
                </div>
                
                <div className="mt-auto flex justify-between items-center pt-4 border-t border-white/10">
                  <div>
                    <h4 className="text-sm font-bold tracking-widest uppercase text-white/50 mb-1">Timeline</h4>
                    <p className="font-medium text-white text-sm">{project.duration}</p>
                  </div>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-white/10 text-white font-medium py-2 px-3 rounded-md text-sm hover:bg-white/20 transition-colors duration-300"
                    >
                      View Site
                      <ExternalLinkIcon />
                    </a>
                  )}
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;