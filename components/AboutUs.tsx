import React from 'react';
// FIX: Imported Variants from framer-motion to correctly type animation variants.
import { motion, Variants } from 'framer-motion';
import { InnovationIcon, QualityIcon, CollaborationIcon } from './icons';

const AboutUs = () => {
  const values = [
    { icon: <InnovationIcon className="w-8 h-8" />, title: 'Innovation', description: 'We constantly push the boundaries of technology to build cutting-edge solutions.' },
    { icon: <QualityIcon className="w-8 h-8" />, title: 'Quality', description: 'Our commitment to excellence ensures every project is a masterpiece of precision.' },
    { icon: <CollaborationIcon className="w-8 h-8" />, title: 'Collaboration', description: 'We work hand-in-hand with our clients to bring their vision to life, together.' },
  ];

  // FIX: Explicitly typed with Variants to prevent type inference issues with transition properties.
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  // FIX: Explicitly typed with Variants to prevent type inference issues with transition properties.
  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring' }
    }
  };

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-5xl font-heading font-bold text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.8 }}
        >
          Building the Future, One Brick at a Time
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1920&auto=format&fit=crop" alt="Brixel Tech Team" className="rounded-md shadow-xl w-full" />
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-3xl font-bold mb-4">Our Story</h3>
              <p className="mb-6">
                Founded in 2025, Brixel Tech began with a simple idea: to combine the precision of pixel-perfect design with the reliability of brick-solid development. We saw a digital world that needed more than just functional websites; it needed digital experiences that were both beautiful and built to last.
              </p>
            </motion.div>
            <motion.div variants={itemVariants}>
              <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
              <p className="mb-8">
                Our mission is to empower businesses by crafting bespoke digital solutions that drive growth, engagement, and success. We believe in building partnerships, not just projects, ensuring every brick we lay contributes to a stronger foundation for our clients' futures.
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <h3 className="text-3xl font-bold mb-6">Our Core Values</h3>
              <ul className="space-y-6">
                {values.map(value => (
                  <li key={value.title} className="flex items-start gap-4">
                    <div className="flex-shrink-0 text-primary bg-primary/10 p-3 rounded-full">
                      {value.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-xl">{value.title}</h4>
                      <p className="text-base">{value.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;