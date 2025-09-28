import React from 'react';
// FIX: Imported Variants from framer-motion to fix type inference issues with transition properties.
import { motion, Variants } from 'framer-motion';
import type { Service } from '../types';
import { CodeIcon, WebDesignIcon, GraphicsDesignIcon, ResumeIcon, PresentationIcon, AcademicCapIcon } from './icons';

const servicesData: Service[] = [
  {
    icon: <WebDesignIcon />,
    title: 'Pixel-Perfect Web Design',
    description: 'Creating stunning, responsive websites that look great on any device. We focus on UI/UX that feels intuitive and block-tastically good.',
  },
  {
    icon: <CodeIcon />,
    title: 'Brick-Solid Development',
    description: 'Building robust and scalable web applications from the ground up. Our code is as clean and organized as a well-built brick wall.',
  },
  {
    icon: <GraphicsDesignIcon />,
    title: 'Graphics Designing',
    description: 'Crafting stunning visuals for your brand. From video & image editing to thumbnails & posters, we make your content pop with pixel-perfect design.',
  },
  {
    icon: <ResumeIcon />,
    title: 'Resume Crafting',
    description: 'Build a standout resume that lands interviews. We\'ll help you highlight your skills and experience with a professional, modern design.',
  },
  {
    icon: <PresentationIcon />,
    title: 'Presentation Design',
    description: 'Turn your ideas into compelling presentations. We design visually stunning slides for your projects, seminars, and defenses.',
  },
  {
    icon: <AcademicCapIcon />,
    title: 'Final Year Projects',
    description: 'Get expert guidance and development support for your academic projects. We help you build impressive projects that earn top grades.',
  }
];

const cardVariants: Variants = {
    offscreen: {
        y: 50,
        opacity: 0
    },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8
        }
    }
};

// FIX: Explicitly typed ServiceCard with React.FC to handle the 'key' prop correctly when used in a list.
const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
    return (
        <motion.div
            variants={cardVariants}
            className="p-8 bg-light-bg dark:bg-dark-gray text-center rounded-md shadow-lg hover:shadow-xl hover:-translate-y-2 transform transition-all duration-300"
        >
            <motion.div 
                className="flex justify-center text-primary mb-6"
                whileHover={{ scale: 1.2, rotate: 10 }}
            >
                {service.icon}
            </motion.div>
            <h3 className="text-2xl font-heading font-bold mb-4">{service.title}</h3>
            <p className="text-lg">{service.description}</p>
        </motion.div>
    );
};

const Services = () => {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
            className="text-5xl font-heading font-bold text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.8 }}
        >
          Our Services
        </motion.h2>
        <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.2 }}
        >
          {servicesData.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;