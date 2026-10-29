import React from 'react';
import { ArrowUp, Phone, Mail, MapPin, ExternalLink } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const FACEBOOK_URL = 'https://web.facebook.com/profile.php?id=61596201171023';
  const INSTAGRAM_URL = 'https://www.instagram.com/lungosrilanka/';

  return (
    <footer className="bg-espresso-900 text-cream-soft border-t border-caramel/20 pt-16 sm:pt-20 pb-12 relative overflow-hidden">
      {/* Background radial warmth glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-caramel/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/10">
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-5">
            <BrandLogo variant="light" size="lg" />
            
            <p className="text-sm text-cream-dark/80 font-light leading-relaxed max-w-sm">
              Discover the rich aroma, smooth taste, and timeless pleasure of coffee with LUNGO.
              Celebrating everyday coffee moments across Sri Lanka with warmth and elegance.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-espresso-800 border border-white/10 flex items-center justify-center text-cream-light hover:text-caramel-light hover:border-caramel transition-colors"
                aria-label="Follow LUNGO Sri Lanka on Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-espresso-800 border border-white/10 flex items-center justify-center text-cream-light hover:text-caramel-light hover:border-caramel transition-colors"
                aria-label="Visit LUNGO Sri Lanka on Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-caramel-light font-bold">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-cream-dark/80 font-light">
              <li>
                <a href="#home" className="hover:text-caramel-light transition-colors">Home</a>
              </li>
              <li>
                <a href="#our-coffee" className="hover:text-caramel-light transition-colors">Our Coffee</a>
              </li>
              <li>
                <a href="#about" className="hover:text-caramel-light transition-colors">About Us</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-caramel-light transition-colors">Visual Gallery</a>
              </li>
              <li>
                <a href="#why-lungo" className="hover:text-caramel-light transition-colors">Why Choose LUNGO</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-caramel-light transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-caramel-light font-bold">
              Contact LUNGO
            </h4>
            <div className="space-y-3 text-sm text-cream-dark/80 font-light">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-caramel flex-shrink-0 mt-0.5" />
                <span>Sri Lanka</span>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-caramel flex-shrink-0 mt-0.5" />
                <a href="tel:+94705032889" className="hover:text-caramel-light transition-colors">
                  +94 70 503 2889
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-caramel flex-shrink-0 mt-0.5" />
                <a href="mailto:lungosrilanka@gmail.com" className="hover:text-caramel-light transition-colors break-all">
                  lungosrilanka@gmail.com
                </a>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-xs text-caramel-light hover:underline font-medium"
              >
                <span>Send us an inquiry</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream-dark/60 font-light">
          <p>© 2026 LUNGO Sri Lanka. All rights reserved.</p>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-caramel-light transition-colors group"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <div className="w-7 h-7 rounded-full bg-espresso-800 border border-white/10 flex items-center justify-center group-hover:border-caramel transition-colors">
              <ArrowUp className="w-3.5 h-3.5 text-caramel" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};
