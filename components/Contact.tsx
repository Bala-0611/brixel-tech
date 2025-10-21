
import React, { useState } from 'react';
import InstagramIcon from './icons/InstagramIcon';
import PhoneIcon from './icons/PhoneIcon';
import MailIcon from './icons/MailIcon';
import LinkedinIcon from './icons/LinkedinIcon';

const services = ['Business Websites', 'E-commerce Solutions', 'University Projects'];
const WHATSAPP_NUMBER = '918925669365'; // Replace with actual number without '+' or spaces

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState(services[0]);
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Hello! My name is ${name}.\n\nEmail: ${email}\nService of Interest: ${service}\n\nMessage: ${message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
  };

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
            Let's Build Together
          </h2>
          <p className="text-lg text-white/70 mt-4 max-w-2xl mx-auto">
            Have a project in mind? Fill out the form or reach out to us directly. We're excited to hear from you.
          </p>        
        </div>

        <div className="relative w-full max-w-6xl mx-auto">
          
          <div className="relative bg-black/30 border border-white/10 rounded-2xl p-8 md:p-12 backdrop-blur-lg">
            <div className="flex flex-col md:flex-row md:gap-12">
              {/* Form Section (70%) */}
              <div className="w-full md:w-7/12">
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-black/20 border border-white/20 rounded-md py-3 px-4 text-white placeholder-white/50 focus:ring-1 focus:ring-white focus:outline-none transition-all duration-300" 
                        placeholder="John Doe" 
                        required 
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-black/20 border border-white/20 rounded-md py-3 px-4 text-white placeholder-white/50 focus:ring-1 focus:ring-white focus:outline-none transition-all duration-300" 
                        placeholder="john.doe@example.com" 
                        required 
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-white/80 mb-2">Service of Interest</label>
                      <select 
                        id="service" 
                        name="service" 
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full bg-black/20 border border-white/20 rounded-md py-3 px-4 text-white focus:ring-1 focus:ring-white focus:outline-none transition-all duration-300"
                        required
                      >
                        {services.map(s => <option key={s} value={s} className="bg-[#101010] text-white">{s}</option>)}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">Additional Message</label>
                      <textarea 
                        id="message" 
                        name="message" 
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full bg-black/20 border border-white/20 rounded-md py-3 px-4 text-white placeholder-white/50 focus:ring-1 focus:ring-white focus:outline-none transition-all duration-300" 
                        placeholder="Tell us about your project..."
                      ></textarea>
                    </div>
                    <div>
                      <button 
                        type="submit" 
                        className="w-full bg-white text-black text-sm font-bold py-4 px-10 tracking-widest uppercase hover:bg-gray-300 transition-colors duration-300 rounded-md"
                      >
                        Send Message via WhatsApp
                      </button>
                    </div>
                  </div>
                </form>
              </div>

              {/* Contact Info Section (30%) */}
              <div className="w-full md:w-5/12 mt-12 md:mt-0 md:pl-8 border-t border-white/10 md:border-t-0 md:border-l md:border-white/10 pt-12 md:pt-0">
                  <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                  <div className="flex flex-col gap-6">
                      <a href="mailto:brixeltech@gmail.com" className="flex items-center gap-4 text-white/80 hover:text-white transition-colors duration-300 group">
                          <MailIcon />
                          <span>brixeltech@gmail.com</span>
                      </a>
                      <a href="tel:+918925669365" className="flex items-center gap-4 text-white/80 hover:text-white transition-colors duration-300 group">
                          <PhoneIcon />
                          <span>+91 89256 69365</span>
                      </a>
                      <a href="https://www.instagram.com/brixeltech/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-white/80 hover:text-white transition-colors duration-300 group">
                          <InstagramIcon />
                          <span>@brixeltech</span>
                      </a>
                      <a href="https://www.linkedin.com/in/brixel-tech-83855a387/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-white/80 hover:text-white transition-colors duration-300 group">
                          <LinkedinIcon />
                          <span>Brixel Tech</span>
                      </a>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
