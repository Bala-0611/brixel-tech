import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Testimonial } from '../types';
import { StarIcon } from './icons';

const testimonialsData: Testimonial[] = [
  {
    quote: "Brixel Tech turned our vision into a pixel-perfect reality. Their attention to detail is unmatched!",
    name: 'John Pixel',
    title: 'CEO, ArtBlock Inc.',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=256&auto=format&fit=crop',
    rating: 5,
  },
  {
    quote: "The most creative and solid team I've ever worked with. They built our platform brick by brick to perfection.",
    name: 'Jane Brickson',
    title: 'Founder, Buildify',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=256&auto=format&fit=crop',
    rating: 5,
  },
  {
    quote: "Our new website is not only beautiful but also incredibly fast. It feels like magic!",
    name: 'Sam Bitman',
    title: 'CTO, DataGrid',
    avatar: 'https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=256&auto=format&fit=crop',
    rating: 5,
  },
];

const sliderVariants = {
    enter: (direction: number) => ({
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
    }),
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1,
    },
    exit: (direction: number) => ({
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
    }),
};

const Testimonials = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const testimonialIndex = (page % testimonialsData.length + testimonialsData.length) % testimonialsData.length;
  const testimonial = testimonialsData[testimonialIndex];
  
  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1);
    }, 5000);
    return () => clearInterval(interval);
  }, [page]);


  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-heading font-bold text-center mb-12">Client Bricks</h2>
        <div className="relative max-w-3xl mx-auto min-h-[20rem] rounded-md shadow-xl bg-light-gray dark:bg-dark-gray flex items-center justify-center overflow-hidden p-8">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={page}
              custom={direction}
              variants={sliderVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="absolute w-full h-full flex flex-col items-center justify-center p-4 text-center"
            >
              <p className="text-xl italic mb-6">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <img src={testimonial.avatar} alt={testimonial.name} className="w-16 h-16 rounded-full mr-4 border-2 border-primary object-cover" />
                <div>
                  <h4 className="font-heading font-bold text-xl">{testimonial.name}</h4>
                  <p className="text-base">{testimonial.title}</p>
                </div>
              </div>
              <div className="flex mt-4">
                {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} filled={i < testimonial.rating} />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
          <button onClick={() => paginate(-1)} className="absolute left-2 top-1/2 -translate-y-1/2 z-10 text-3xl p-2 rounded-full hover:bg-black/10 transition-colors">&lt;</button>
          <button onClick={() => paginate(1)} className="absolute right-2 top-1/2 -translate-y-1/2 z-10 text-3xl p-2 rounded-full hover:bg-black/10 transition-colors">&gt;</button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;