
import React, { useState } from 'react';
import { GoogleGenAI } from '@google/genai';
import SparklesIcon from './icons/SparklesIcon';
import Loader from './Loader';
import PulsatingDots from './PulsatingDots';

const AIConsultant: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

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

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
            Ask Our AI Consultant
          </h2>
          <p className="text-lg text-white/70 mt-4 max-w-2xl mx-auto">
            Have a question about web development or our services? Get an instant answer from our AI-powered guide.
          </p>
        </div>

        <div className="relative w-full max-w-3xl mx-auto">
          <div className="relative bg-black/30 border border-white/10 rounded-2xl p-8 backdrop-blur-lg">
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
              <div className="mt-8 p-6 bg-black/20 border border-white/10 rounded-md min-h-[100px]">
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
        </div>
      </div>
    </section>
  );
};

export default AIConsultant;
