import React from 'react';
import { motion, Variants } from 'framer-motion';
import type { Service } from '../types';
import { ResumeIcon, PresentationIcon } from './icons';

const studentServicesData: Service[] = [
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

const StudentServiceCard: React.FC<{ service: Service }> = ({ service }) => {
    return (
        <motion.div
            variants={cardVariants}
            className="p-8 bg-light-bg dark:bg-dark-gray text-center rounded-md shadow-lg hover:shadow-xl hover:-translate-y-2 transform transition-all duration-300"
        >
            <motion.div 
                className="flex justify-center text-primary mb-6"
                whileHover={{ scale: 1.2, rotate: -10 }}
            >
                {service.icon}
            </motion.div>
            <h3 className="text-2xl font-heading font-bold mb-4">{service.title}</h3>
            <p className="text-lg">{service.description}</p>
        </motion.div>
    );
};

const StudentServices = () => {
  return (
    <section id="student-services" className="py-20 bg-light-gray dark:bg-dark-gray">
      <div className="container mx-auto px-4">
        <motion.h2 
            className="text-5xl font-heading font-bold text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.8 }}
        >
          Empowering Students
        </motion.h2>
        <motion.div 
            className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.2 }}
        >
          {studentServicesData.map((service, index) => (
            <StudentServiceCard key={index} service={service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StudentServices;