import React from 'react';
import StarIcon from './icons/StarIcon';
import AnimatedCard from './AnimatedCard';
import QuoteIcon from './icons/QuoteIcon';

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  title: string;
}

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    quote: "Brixel Tech transformed our vision into a digital masterpiece. Their attention to detail and commitment to quality is unmatched. The final product exceeded all our expectations.",
    name: "Dr. Surya MDS,FAM",
    title: "Founder, Harshus Dental Clinic",
  },
  {
    id: 2,
    quote: "Working with Brixel was a seamless experience. They are not just developers; they are true partners who invest in your project's success. Highly recommended for any ambitious e-commerce venture.",
    name: "Karthi",
    title: "Gym Trainer",
  },
  {
    id: 3,
    quote: "For my final year project, I needed expert help. Brixel Tech provided not just the code, but also the guidance to understand complex concepts. They were instrumental in my academic success.",
    name: "Bargavi B ",
    title: "BE CSE",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
            Echoes of Excellence
          </h2>
          <p className="text-lg text-white/70 mt-4 max-w-2xl mx-auto">
            Hear from our partners who have experienced the Brixel Tech difference firsthand.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonialsData.map((testimonial, index) => (
            <AnimatedCard key={testimonial.id} delay={index * 100}>
              <div
                className="bg-black/30 border border-white/10 rounded-2xl p-8 backdrop-blur-lg flex flex-col h-full group hover:border-white/20 transition-all duration-300 cursor-pointer hover:-translate-y-2 active:scale-95 relative overflow-hidden"
                role="button"
                tabIndex={0}
                onClick={() => {}} // Enables :active state and accessibility
                onKeyDown={(e) => { if (e.key === 'Enter') e.currentTarget.click(); }}
              >
                <div className="absolute -top-8 -right-8 text-white/5 opacity-50 z-0">
                  <QuoteIcon />
                </div>
                
                <div className="flex gap-1 mb-4 relative z-10">
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </div>
                <p className="relative text-md font-medium text-white/90 leading-relaxed z-10 flex-grow">
                  "{testimonial.quote}"
                </p>
                <div className="mt-auto pt-6 border-t border-white/10 relative z-10">
                  <h4 className="text-lg font-bold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-white/60">{testimonial.title}</p>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;