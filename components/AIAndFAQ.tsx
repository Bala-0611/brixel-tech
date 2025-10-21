import React, { useState } from 'react';
import { GoogleGenAI } from '@google/genai';
import SparklesIcon from './icons/SparklesIcon';
import Loader from './Loader';
import PulsatingDots from './PulsatingDots';
import PlusIcon from './icons/PlusIcon';

// FAQ data from FAQ.tsx
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


const AIAndFAQ: React.FC = () => {
  // State from AIConsultant.tsx
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // State from FAQ.tsx
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleAskAI = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setIsLoading(true);
    setResponse('');
    setError('');

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const result = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
        config: {
          systemInstruction: "You are a friendly and knowledgeable AI consultant for Brixel Tech, a web development agency. Your goal is to answer user questions about web development, e-commerce, university projects, and Brixel Tech's services. Keep your answers concise, helpful, and professional. Do not answer questions outside of this scope.",
        }
      });
      const text = result.text;
      setResponse(text);
    } catch (err) {
      setError('Sorry, something went wrong. Please try again later.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
            AI Insights & Common Questions
          </h2>
          <p className="text-lg text-white/70 mt-4 max-w-3xl mx-auto">
            Get instant answers from our AI assistant or browse through frequently asked questions to find the information you need.
          </p>
        </div>

        <div className="relative w-full max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* AI Consultant Column */}
            <div className="relative bg-black/30 border border-white/10 rounded-2xl p-8 backdrop-blur-lg h-full flex flex-col">
              <h3 className="text-3xl font-bold text-white mb-6">Ask Our AI Consultant</h3>
              <form onSubmit={handleAskAI}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="text"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="e.g., What is Next.js?"
                    className="w-full bg-black/20 border border-white/20 rounded-md py-3 px-4 text-white placeholder-white/50 focus:ring-1 focus:ring-white focus:outline-none transition-all duration-300"
                    disabled={isLoading}
                  />
                  <button
                    type="submit"
                    className="flex items-center justify-center gap-2 bg-white text-black text-sm font-bold py-3 px-6 tracking-widest uppercase hover:bg-gray-300 transition-colors duration-300 rounded-md disabled:bg-gray-400 disabled:cursor-not-allowed min-w-[140px]"
                    disabled={isLoading}
                  >
                    <SparklesIcon />
                    {isLoading ? <PulsatingDots /> : 'Ask AI'}
                  </button>
                </div>
              </form>

              {(isLoading || response || error) && (
                <div className="mt-8 p-6 bg-black/20 border border-white/10 rounded-md flex-grow">
                  {isLoading && <Loader />}
                  {error && <p className="text-white/90 font-semibold">{error}</p>}
                  {response && !isLoading && (
                    <p className="text-white/90 whitespace-pre-wrap">
                      {response}
                    </p>
                  )}
                </div>
              )}
            </div>

            {/* FAQ Column */}
            <div className="relative">
              <h3 className="text-3xl font-bold text-white mb-6 text-center lg:text-left">Frequently Asked Questions</h3>
              <div className="relative flex flex-col bg-black/30 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden">
                {faqData.map((item, index) => (
                  <div key={index} className="border-b border-white/10 last:border-b-0">
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full flex justify-between items-center text-left p-6 cursor-pointer"
                      aria-expanded={activeIndex === index}
                    >
                      <h3 className="text-lg font-bold text-white">{item.question}</h3>
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
        </div>
      </div>
    </section>
  );
};

export default AIAndFAQ;