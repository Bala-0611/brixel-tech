import React from 'react';
import Logo from './Logo';
import InstagramIcon from './icons/InstagramIcon';
import LinkedinIcon from './icons/LinkedinIcon';
import MailIcon from './icons/MailIcon';

const quickLinks = [
  { href: '#about', label: 'About Us' },
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projects' },
  { href: '#ai-faq', label: 'AI & FAQ' },
];

const serviceLinks = [
  { href: '#services', label: 'Business Websites' },
  { href: '#services', label: 'E-commerce Solutions' },
  { href: '#services', label: 'University Projects'},
  { href: '#services', label: 'UI/UX & Graphic Design'},
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-black/50 border-t border-white/10 mt-24">
      <div className="container mx-auto px-8 md:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Brand */}
          <div className="flex flex-col gap-4">
            <a href="#" className="flex items-center gap-4 group mb-2">
              <Logo />
              <h1 className="text-xl font-bold tracking-wider text-white">BRIXEL TECH</h1>
            </a>
            <p className="text-white/60 text-sm italic">
              "We build pixels with bricks"
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white tracking-wider mb-4">Quick Links</h3>
            <nav className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <a 
                  key={link.label} 
                  href={link.href} 
                  className="text-sm text-white/70 hover:text-white transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-lg font-bold text-white tracking-wider mb-4">Our Services</h3>
            <nav className="flex flex-col gap-3">
              {serviceLinks.map((link) => (
                <a 
                  key={link.label} 
                  href={link.href} 
                  className="text-sm text-white/70 hover:text-white transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Column 4: Connect */}
          <div>
            <h3 className="text-lg font-bold text-white tracking-wider mb-4">Connect With Us</h3>
            <div className="flex flex-col gap-4">
               <a href="mailto:brixeltech@gmail.com" className="flex items-center gap-3 text-sm text-white/70 hover:text-white transition-colors duration-300 group">
                  <MailIcon />
                  <span>brixeltech@gmail.com</span>
              </a>
              <div className="flex items-center gap-4 mt-2">
                <a href="https://www.instagram.com/brixeltech/" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors duration-300">
                  <InstagramIcon />
                </a>
                <a href="https://www.linkedin.com/in/brixel-tech-83855a387/" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors duration-300">
                  <LinkedinIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center text-white/50 text-sm mt-16 border-t border-white/10 pt-8">
          &copy; {new Date().getFullYear()} Brixel Tech. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;