import React from 'react';
import { ArrowDown, Sparkles, Coffee, MessageSquare } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-espresso-900 pt-20"
      aria-label="Hero Section"
    >
      {/* Background Photography with Warm Espresso Grading */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=2200&q=85"
          alt="Freshly brewed artisanal espresso in a moody coffee setting"
          className="w-full h-full object-cover object-center scale-105 transform motion-safe:transition-transform motion-safe:duration-10000 motion-safe:hover:scale-110"
          loading="eager"
        />
        {/* Multi-layered Cinematic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-espresso-900 via-espresso-900/75 to-espresso-900/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso-900/90 via-espresso-900/50 to-transparent" />
        {/* Subtle radial warmth glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-caramel/15 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 flex flex-col items-center text-center">
        {/* Brand Tagline Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-espresso-800/80 border border-caramel/30 backdrop-blur-md mb-8 animate-fade-in shadow-coffee">
          <Sparkles className="w-3.5 h-3.5 text-caramel-light" />
          <span className="text-xs sm:text-sm font-medium tracking-[0.2em] uppercase text-cream-light/90">
            Specialty Coffee Experience • Sri Lanka
          </span>
        </div>

        {/* Main Serif Headline */}
        <h1 className="max-w-4xl font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-cream-soft tracking-tight leading-[1.08] mb-6 drop-shadow-md">
          Every Cup <br />
          <span className="italic font-serif font-light text-caramel-light">
            Tells a Story.
          </span>
        </h1>

        {/* Supporting Brand Copy */}
        <p className="max-w-2xl text-base sm:text-xl text-cream-dark/85 font-light leading-relaxed mb-10 sm:mb-12">
          Discover the rich aroma, smooth taste, and timeless pleasure of coffee with{' '}
          <strong className="font-semibold text-white tracking-wide">LUNGO</strong>.
          Crafted for moments that linger long after the last sip.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 w-full sm:w-auto">
          <a
            href="#our-coffee"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-base font-semibold text-espresso-900 bg-gradient-to-r from-caramel-light via-caramel to-caramel-accent shadow-caramel-glow hover:shadow-2xl hover:brightness-105 active:scale-98 transition-all duration-300"
          >
            <Coffee className="w-5 h-5 text-espresso-900 transition-transform group-hover:rotate-12" />
            <span>Discover Our Coffee</span>
          </a>

          <a
            href="#contact"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-base font-medium text-cream-soft bg-espresso-800/80 hover:bg-espresso-700/90 border border-caramel/30 backdrop-blur-md hover:border-caramel transition-all duration-300"
          >
            <MessageSquare className="w-4 h-4 text-caramel-light" />
            <span>Contact Us</span>
          </a>
        </div>

        {/* Coffee Experience Highlights Pill Bar */}
        <div className="mt-16 sm:mt-20 grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-8 max-w-3xl w-full border-t border-white/10 pt-8">
          <div className="flex flex-col items-center">
            <span className="text-xl sm:text-2xl font-serif text-caramel-light font-medium">100% Passion</span>
            <span className="text-xs uppercase tracking-widest text-cream-dark/70 mt-1">Specialty Coffee</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xl sm:text-2xl font-serif text-caramel-light font-medium">Rich & Velvety</span>
            <span className="text-xs uppercase tracking-widest text-cream-dark/70 mt-1">Signature Crema</span>
          </div>
          <div className="col-span-2 sm:col-span-1 flex flex-col items-center">
            <span className="text-xl sm:text-2xl font-serif text-caramel-light font-medium">Sri Lanka</span>
            <span className="text-xs uppercase tracking-widest text-cream-dark/70 mt-1">Everyday Rituals</span>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <a
          href="#our-coffee"
          className="flex flex-col items-center text-xs tracking-widest uppercase text-cream-dark/60 hover:text-caramel-light transition-colors group"
          aria-label="Scroll down to Our Coffee section"
        >
          <span className="text-[10px] tracking-[0.25em] mb-1">Scroll</span>
          <ArrowDown className="w-4 h-4 animate-bounce text-caramel" />
        </a>
      </div>
    </section>
  );
};
