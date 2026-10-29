import React from 'react';
import { Heart, Compass, Sparkles, Coffee } from 'lucide-react';

export const BrandStory: React.FC = () => {
  return (
    <section
      id="about"
      className="py-24 sm:py-32 bg-espresso-800 text-cream-soft relative overflow-hidden"
      aria-labelledby="brand-story-heading"
    >
      {/* Decorative Warm Lighting */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-caramel/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-espresso-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Brand Story Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Category Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-caramel/15 border border-caramel/30 text-caramel-light text-xs font-semibold uppercase tracking-[0.2em] mb-6 w-max">
              <Sparkles className="w-3.5 h-3.5 text-caramel" />
              <span>Our Philosophy</span>
            </div>

            {/* Headline */}
            <h2
              id="brand-story-heading"
              className="font-serif text-3xl sm:text-5xl lg:text-6xl text-cream-soft font-normal tracking-tight leading-[1.12] mb-8"
            >
              More Than Coffee.{' '}
              <span className="italic text-caramel-light font-light block sm:inline">
                It's a Feeling.
              </span>
            </h2>

            {/* Editorial Copy */}
            <div className="space-y-6 text-base sm:text-lg text-cream-dark/85 font-light leading-relaxed">
              <p>
                Coffee is one of the world's most intimate rituals. It awakens the senses at dawn,
                serves as the centerpiece for great conversations, and offers a quiet sanctuary
                in the midst of a bustling day.
              </p>
              <p>
                <strong className="text-white font-medium">LUNGO</strong> was created for those who cherish that feeling.
                Born in Sri Lanka with a genuine passion for exceptional coffee culture, our brand is dedicated to
                celebrating the art of taking time. We focus on harmony of flavor, velvety smoothness, and the warmth
                that brings people together.
              </p>
              <p>
                Whether you prefer the comforting intimacy of a ceramic cup at home or the energy of a freshly
                brewed cup on the go, LUNGO exists to turn every sip into an understated moment of pure luxury.
              </p>
            </div>

            {/* 4 Brand Pillars Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-10 pt-8 border-t border-white/10">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-caramel-light">
                  <Heart className="w-4 h-4 text-caramel" />
                  <span className="font-serif text-sm font-medium">Flavor</span>
                </div>
                <p className="text-xs text-cream-dark/70 font-light">
                  Deep, balanced, and memorable notes.
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2 text-caramel-light">
                  <Sparkles className="w-4 h-4 text-caramel" />
                  <span className="font-serif text-sm font-medium">Quality</span>
                </div>
                <p className="text-xs text-cream-dark/70 font-light">
                  Meticulous attention to every detail.
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2 text-caramel-light">
                  <Coffee className="w-4 h-4 text-caramel" />
                  <span className="font-serif text-sm font-medium">Comfort</span>
                </div>
                <p className="text-xs text-cream-dark/70 font-light">
                  A warm, welcoming sensory embrace.
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-2 text-caramel-light">
                  <Compass className="w-4 h-4 text-caramel" />
                  <span className="font-serif text-sm font-medium">Ritual</span>
                </div>
                <p className="text-xs text-cream-dark/70 font-light">
                  Elevating everyday Sri Lankan moments.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Showcase featuring official LUNGO Cups */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative borders and shadows */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-caramel/20 to-transparent rounded-3xl blur-xl" />

              <div className="relative rounded-3xl overflow-hidden border border-caramel/30 bg-espresso-900 shadow-2xl">
                <img
                  src="/assets/images/lungo-stacked-ceramic-cups.jpg"
                  alt="Official LUNGO stacked ceramic coffee cups displaying brand emblem"
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                
                {/* Image Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-espresso-900/90 via-transparent to-espresso-900/20" />

                {/* Floating caption card */}
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-espresso-900/85 backdrop-blur-md border border-caramel/30">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-mono uppercase tracking-[0.2em] text-caramel-light">
                        Official LUNGO Signature
                      </p>
                      <p className="font-serif text-lg text-cream-soft mt-0.5">
                        Crafted For Distinctive Tastes
                      </p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-caramel/20 flex items-center justify-center border border-caramel/40 text-caramel">
                      ☕
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Floating Badge */}
              <div className="absolute -top-6 -right-6 hidden sm:flex items-center gap-2 bg-caramel px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase text-espresso-900 shadow-caramel-glow">
                <span>Sri Lanka 🇱🇰</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
