import React, { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MailIcon, PhoneIcon, InstagramIcon } from './icons';

// Add this line to inform TypeScript about the global emailjs object
declare const emailjs: any;

// --- START OF CONTACT FORM CONFIGURATION ---
// IMPORTANT: To enable direct email sending from the website, you must configure EmailJS.
// 1. Create an account at https://www.emailjs.com/
// 2. Find your Public Key, Service ID, and create two Template IDs.
// 3. Replace the placeholder values below.
// If these values are not replaced, the form will fall back to using the user's default email client (mailto:).

// The email address to be used for the mailto: fallback.
const CONTACT_EMAIL = 'brixeltech@gmail.com';

// --- EmailJS Configuration ---
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';
const EMAILJS_SERVICE_ID = 'service_ej8w00i';

// Template for the message you will receive.
// Required variables: {{from_name}}, {{from_email}}, {{service_interest}}, {{message}}
const EMAILJS_CONTACT_TEMPLATE_ID = 'YOUR_CONTACT_TEMPLATE_ID';

// Template for the automated confirmation email sent to the user.
// In EmailJS, set this template's "To Email" field to use the {{from_email}} variable.
// Required variable: {{from_name}}
const EMAILJS_CONFIRMATION_TEMPLATE_ID = 'YOUR_CONFIRMATION_TEMPLATE_ID';

// This flag checks if EmailJS credentials are still placeholders.
const isEmailJsConfigured =
  EMAILJS_PUBLIC_KEY !== 'YOUR_PUBLIC_KEY' &&
  EMAILJS_CONTACT_TEMPLATE_ID !== 'YOUR_CONTACT_TEMPLATE_ID' &&
  EMAILJS_CONFIRMATION_TEMPLATE_ID !== 'YOUR_CONFIRMATION_TEMPLATE_ID';
// --- END OF CONTACT FORM CONFIGURATION ---


const servicesData = [
  { title: 'Pixel-Perfect Web Design' },
  { title: 'Brick-Solid Development' },
  { title: 'Graphics Designing' },
  { title: 'Resume Crafting' },
  { title: 'Presentation Design' },
  { title: 'Final Year Projects' },
];

const FormError: React.FC<{ message?: string }> = ({ message }) => (
    <AnimatePresence>
      {message && (
        <motion.p
          className="text-red-500 mt-1 text-base"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          {message}
        </motion.p>
      )}
    </AnimatePresence>
  );

type Status = 'idle' | 'loading' | 'success' | 'error';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<{name?: string, email?: string, message?: string, service?: string}>({});
  const [status, setStatus] = useState<Status>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  // Initialize EmailJS on component mount if it's configured and the script has loaded.
  useEffect(() => {
    if (isEmailJsConfigured && typeof emailjs !== 'undefined') {
        try {
            emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
        } catch(e) {
            console.error('Failed to initialize EmailJS:', e);
        }
    }
  }, []);

  const validateForm = useCallback(() => {
    const newErrors: {name?: string, email?: string, message?: string, service?: string} = {};
    if (!name.trim()) newErrors.name = 'Name is required.';
    if (!email.trim()) {
        newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        newErrors.email = 'Email is invalid.';
    }
    if (!service) newErrors.service = 'Please select a service.';
    if (!message.trim()) newErrors.message = 'Message is required.';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [name, email, message, service]);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;
    
    // Use EmailJS if it is configured and the script has loaded successfully
    if (isEmailJsConfigured && typeof emailjs !== 'undefined') {
        if (status === 'loading') return;

        setStatus('loading');
        setSubmitMessage('');
        setErrors({});

        const templateParams = {
            from_name: name,
            from_email: email,
            service_interest: service,
            message: message,
        };

        try {
            await Promise.all([
                emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_CONTACT_TEMPLATE_ID, templateParams),
                emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_CONFIRMATION_TEMPLATE_ID, templateParams)
            ]);
            
            setStatus('success');
            setSubmitMessage("Message sent successfully! A confirmation email is on its way to you.");
            // Reset form
            setName('');
            setEmail('');
            setService('');
            setMessage('');
            // Hide success message after 5 seconds
            setTimeout(() => setStatus('idle'), 5000);
        } catch (err: any) {
            console.error('Failed to send email:', err);
            setStatus('error');
            const errorText = err?.text || 'Please try again, or reach us directly below.';
            setSubmitMessage(`Oops! Something went wrong. ${errorText}`);
        }
    } else {
        // Fallback to mailto if EmailJS is not configured or failed to load
        if (!isEmailJsConfigured) {
            console.log("EmailJS not configured. Using mailto: fallback.");
        } else {
            console.error("EmailJS is configured, but the script failed to load. Using mailto: fallback.");
        }

        const subject = encodeURIComponent(`New Message via Brixel Tech site: ${service}`);
        const body = encodeURIComponent(`Hello, my name is ${name}.\n\nI am interested in the following service: ${service}.\n\nMy message is:\n${message}\n\nYou can reach me at: ${email}`);
        window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    }

  }, [validateForm, name, email, service, message, status]);
  
  return (
    <section id="contact" className="py-20 bg-light-gray dark:bg-dark-gray">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl sm:text-5xl font-heading font-bold text-center mb-12">Get In Touch</h2>
        <div className="max-w-4xl mx-auto bg-light-bg dark:bg-dark-bg rounded-md shadow-xl p-6 sm:p-8 relative overflow-hidden">
          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-lg sm:text-xl font-bold mb-2">Name</label>
              <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className={`w-full p-3 text-lg bg-transparent border-2 rounded-md transition-colors ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-400 dark:border-gray-600 focus:ring-primary'} focus:outline-none focus:ring-2`} />
              <FormError message={errors.name} />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg sm:text-xl font-bold mb-2">Email</label>
              <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className={`w-full p-3 text-lg bg-transparent border-2 rounded-md transition-colors ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-400 dark:border-gray-600 focus:ring-primary'} focus:outline-none focus:ring-2`} />
              <FormError message={errors.email} />
            </div>
            <div>
              <label htmlFor="service" className="block text-lg sm:text-xl font-bold mb-2">Service of Interest</label>
              <div className="relative">
                <select id="service" value={service} onChange={(e) => setService(e.target.value)} className={`appearance-none w-full p-3 pr-10 text-lg bg-transparent border-2 rounded-md transition-colors ${errors.service ? 'border-red-500 focus:ring-red-500' : 'border-gray-400 dark:border-gray-600 focus:ring-primary'} focus:outline-none focus:ring-2`}>
                  <option value="" disabled className="bg-light-bg dark:bg-dark-gray text-gray-500">Select a service...</option>
                  {servicesData.map(s => <option key={s.title} value={s.title} className="bg-light-bg dark:bg-dark-gray text-light-text dark:text-dark-text">{s.title}</option>)}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-light-text dark:text-dark-text">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <FormError message={errors.service} />
            </div>
            <div>
              <label htmlFor="message" className="block text-lg sm:text-xl font-bold mb-2">Additional Message</label>
              <textarea id="message" rows={5} value={message} onChange={(e) => setMessage(e.target.value)} className={`w-full p-3 text-lg bg-transparent border-2 rounded-md transition-colors ${errors.message ? 'border-red-500 focus:ring-red-500' : 'border-gray-400 dark:border-gray-600 focus:ring-primary'} focus:outline-none focus:ring-2`}></textarea>
              <FormError message={errors.message} />
            </div>
            <div className="text-center">
                <button 
                    type="submit" 
                    disabled={isEmailJsConfigured && status === 'loading'}
                    className="w-full bg-primary text-white font-bold text-lg px-8 py-4 rounded-md shadow-md hover:bg-primary/90 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary dark:focus:ring-offset-dark-bg disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {isEmailJsConfigured && status === 'loading' ? 'Sending...' : 'Send Message'}
                </button>
                {isEmailJsConfigured ? (
                    <AnimatePresence>
                    {(status === 'success' || status === 'error') && submitMessage && (
                        <motion.p
                        className={`mt-4 text-lg ${status === 'success' ? 'text-green-600 dark:text-green-400' : 'text-red-500'}`}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        >
                        {submitMessage}
                        </motion.p>
                    )}
                    </AnimatePresence>
                ) : (
                    <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                        This will open your default email client.<br/>
                        <span className="font-semibold">For developers:</span> Configure EmailJS in <code>components/Contact.tsx</code> to enable direct sending.
                    </p>
                )}
            </div>
          </form>
        </div>
        
        <div className="max-w-4xl mx-auto mt-16 text-center">
            <h3 className="text-2xl sm:text-3xl font-heading font-bold mb-8">Or Reach Us Directly</h3>
            <div className="grid md:grid-cols-3 gap-6 md:gap-8 text-lg">
                <div className="p-6 bg-light-bg dark:bg-dark-bg rounded-md shadow-lg flex flex-col items-center">
                    <MailIcon className="w-12 h-12 mb-4 text-primary" />
                    <h4 className="text-xl font-heading font-bold mb-2">Email</h4>
                    <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-primary transition-colors break-all">{CONTACT_EMAIL}</a>
                </div>
                <div className="p-6 bg-light-bg dark:bg-dark-bg rounded-md shadow-lg flex flex-col items-center">
                    <PhoneIcon className="w-12 h-12 mb-4 text-primary" />
                    <h4 className="text-xl font-heading font-bold mb-2">Phone</h4>
                    <a href="tel:+918925669365" className="hover:text-primary transition-colors">+91 89256 69365</a>
                </div>
                <div className="p-6 bg-light-bg dark:bg-dark-bg rounded-md shadow-lg flex flex-col items-center">
                    <InstagramIcon className="w-12 h-12 mb-4 text-primary" />
                    <h4 className="text-xl font-heading font-bold mb-2">Instagram</h4>
                    <a href="https://www.instagram.com/brixeltech/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">@brixeltech</a>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;