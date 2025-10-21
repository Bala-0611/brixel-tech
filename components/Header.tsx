import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import HamburgerIcon from './icons/HamburgerIcon';
import CloseIcon from './icons/CloseIcon';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projects' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact' },
  { href: '#ai-faq', label: 'AI & FAQ' },
  { href: '#footer', label: 'Footer' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="px-8 md:px-16 py-8 flex justify-between items-center relative z-50">
        <a href="#" className="flex items-center gap-4 group">
          <Logo />
          <h1 className={`text-2xl md:text-3xl font-bold tracking-wider text-white transition-opacity duration-300 ${isMenuOpen ? 'opacity-0 invisible md:opacity-100 md:visible' : 'opacity-100 visible'}`}>BRIXEL TECH</h1>
        </a>
        <nav className="flex items-center gap-4 md:gap-6">
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-2 rounded-md text-sm font-medium tracking-widest text-white/80 hover:text-white transition-all duration-300 bg-white/5 hover:bg-white/10 border border-gray-500 hover:border-gray-300"
              >
                {link.label.toUpperCase()}
              </a>
            ))}
          </div>
          {/* Mobile menu button */}
          <button className="p-2 md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-[#101010] bg-opacity-95 backdrop-blur-sm z-40 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link) => (
             <a
              key={link.label}
              href={link.href}
              onClick={handleLinkClick}
              className="px-8 py-4 rounded-lg text-2xl font-medium tracking-widest text-white/80 hover:text-white transition-all duration-300 bg-white/5 hover:bg-white/10 border border-gray-500 hover:border-gray-300"
            >
               {link.label.toUpperCase()}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;