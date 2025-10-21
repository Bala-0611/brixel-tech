
import React, { useState } from 'react';
import PlusIcon from './icons/PlusIcon';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What is the typical turnaround time for a business website?",
    answer: "While it varies by complexity, a standard business website is typically designed, developed, and launched within 7-14 days. We prioritize both speed and quality."
  },
  {
    question: "Do you offer support after the website is launched?",
    answer: "Absolutely! We offer various maintenance and support packages to ensure your website remains updated, secure, and performs optimally long after the initial launch."
  },
  {
    question: "Can you help with a project that's already started?",
    answer: "Yes, we can jump in at any stage. Whether you need help finishing a project, fixing issues, or adding new features, our team is ready to assist."
  },
  {
    question: "What technologies do you specialize in?",
    answer: "We are proficient in a wide range of modern technologies, including React, Next.js, Node.js, and Shopify for e-commerce. We choose the best tech stack to fit your project's specific needs."
  }
];

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-white/70 mt-4 max-w-2xl mx-auto">
            Find quick answers to common questions about our process and services.
          </p>
        </div>
        
        <div className="relative max-w-3xl mx-auto">
          
          <div className="relative flex flex-col bg-black/30 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden">
            {faqData.map((item, index) => (
              <div key={index} className="border-b border-white/10 last:border-b-0">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center text-left p-6 cursor-pointer"
                  aria-expanded={activeIndex === index}
                >
                  <h3 className="text-lg md:text-xl font-bold text-white">{item.question}</h3>
                  <div className="text-white flex-shrink-0">
                    <PlusIcon open={activeIndex === index} />
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out ${
                    activeIndex === index ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6">
                    <p className="text-white/80">{item.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
