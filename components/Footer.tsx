import React from 'react';
import Logo from './Logo';
import { TwitterIcon, LinkedinIcon, GithubIcon } from './icons';

const Footer: React.FC = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const scrollToSection = (id: string) => {
        document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    const navLinks = [
        { name: 'Services', href: '#services' },
        { name: 'Projects', href: '#projects' },
        { name: 'Testimonials', href: '#testimonials' },
        { name: 'Contact', href: '#contact' },
        { name: 'About', href: '#about' },
      ];

    const socialLinks = [
        { name: 'Twitter', icon: <TwitterIcon />, href: 'https://x.com/BrixelTech' },
        { name: 'LinkedIn', icon: <LinkedinIcon />, href: 'https://www.linkedin.com/in/brixel-tech-83855a387' },
        { name: 'GitHub', icon: <GithubIcon />, href: 'https://github.com/brixelt-tech' },
    ];

    return (
        <footer className="bg-light-gray dark:bg-dark-gray border-t border-light-text/10 dark:border-dark-text/10">
            <div className="container mx-auto px-4 py-12">
                <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
                    {/* Column 1: Logo and Tagline */}
                    <div className="flex flex-col items-center md:items-start">
                        <div className="mb-4">
                            <Logo onClick={scrollToTop} />
                        </div>
                        <p className="max-w-xs">
                            Building the digital world, one brick at a time.
                        </p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className="text-xl font-heading font-bold mb-4 uppercase tracking-wider">Quick Links</h3>
                        <ul className="space-y-2">
                            {navLinks.map(link => (
                                <li key={link.name}>
                                    <button 
                                        onClick={() => scrollToSection(link.href)} 
                                        className="hover:text-primary transition-colors duration-300"
                                    >
                                        {link.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Social Links */}
                    <div>
                        <h3 className="text-xl font-heading font-bold mb-4 uppercase tracking-wider">Connect With Us</h3>
                        <div className="flex justify-center md:justify-start gap-6">
                            {socialLinks.map(social => (
                                <a 
                                    key={social.name} 
                                    href={social.href} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    aria-label={social.name}
                                    className="text-light-text dark:text-dark-text hover:text-primary dark:hover:text-secondary transition-transform duration-300 hover:scale-125"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-light-text/10 dark:border-dark-text/10 text-center">
                    <p className="text-sm text-light-text/70 dark:text-dark-text/70">
                        &copy; {new Date().getFullYear()} Brixel Tech. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;