import React, { useState, useEffect } from 'react';
import { Menu, X, Coffee, PhoneCall } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Simple active section detection
      const sections = ['home', 'our-coffee', 'about', 'gallery', 'why-lungo', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Our Coffee', href: '#our-coffee', id: 'our-coffee' },
    { name: 'About Us', href: '#about', id: 'about' },
    { name: 'Gallery', href: '#gallery', id: 'gallery' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-espresso-900/95 backdrop-blur-md py-3.5 shadow-coffee-lg border-b border-caramel/20'
            : 'bg-gradient-to-b from-espresso-900/80 via-espresso-900/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* LUNGO Logo */}
            <BrandLogo variant="light" size="md" />

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`relative px-3.5 py-2 text-sm font-medium tracking-wide transition-all duration-300 rounded-full ${
                      isActive
                        ? 'text-caramel-light font-semibold'
                        : 'text-cream-light/85 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-caramel rounded-full" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Action Buttons: Phone & Explore Our Coffee */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:+94705032889"
                className="flex items-center gap-2 text-xs uppercase tracking-wider text-cream-light/75 hover:text-caramel transition-colors py-2 px-3 rounded-full hover:bg-white/5"
                title="Call LUNGO Sri Lanka"
              >
                <PhoneCall className="w-3.5 h-3.5 text-caramel" />
                <span>+94 70 503 2889</span>
              </a>

              <a
                href="#our-coffee"
                className="group relative inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-semibold tracking-wide text-espresso-900 bg-gradient-to-r from-caramel-light via-caramel to-caramel-accent rounded-full shadow-caramel-glow hover:shadow-lg hover:brightness-110 active:scale-95 transition-all duration-300"
              >
                <Coffee className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12" />
                <span>Explore Our Coffee</span>
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-3 md:hidden">
              <a
                href="#our-coffee"
                className="px-3.5 py-1.5 text-xs font-semibold text-espresso-900 bg-caramel rounded-full"
              >
                Explore
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-cream-light hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-caramel"
                aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-caramel-light" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 z-40 bg-espresso-900/95 backdrop-blur-xl md:hidden transition-all duration-300 ${
          mobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col h-full justify-between pt-24 pb-8 px-6">
          <div className="space-y-3">
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-caramel/80 mb-2">
              Navigation
            </p>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleNavClick}
                className="flex items-center justify-between text-xl font-serif py-3 border-b border-white/10 text-cream-light hover:text-caramel hover:translate-x-2 transition-all duration-200"
              >
                <span>{link.name}</span>
                <span className="text-xs font-sans text-caramel/60 font-mono">0{navLinks.indexOf(link) + 1}</span>
              </a>
            ))}
          </div>

          <div className="space-y-4 pt-6">
            <a
              href="#our-coffee"
              onClick={handleNavClick}
              className="flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-full text-base font-semibold text-espresso-900 bg-gradient-to-r from-caramel-light to-caramel shadow-caramel-glow"
            >
              <Coffee className="w-5 h-5" />
              <span>Explore Our Coffee</span>
            </a>

            <div className="bg-espresso-800/80 p-4 rounded-2xl border border-white/5 space-y-2 text-center">
              <p className="text-xs text-cream-dark/70 uppercase tracking-widest">Inquiries & Orders</p>
              <a
                href="tel:+94705032889"
                className="block text-sm font-medium text-cream-light hover:text-caramel"
              >
                +94 70 503 2889
              </a>
              <a
                href="mailto:lungosrilanka@gmail.com"
                className="block text-xs text-caramel-light hover:underline"
              >
                lungosrilanka@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
