import React from 'react';
import { Sparkles } from 'lucide-react';
import { CoffeeExperienceCategory } from '../types';

export const OurCoffee: React.FC = () => {
  const categories: CoffeeExperienceCategory[] = [
    {
      id: 'rich-bold',
      title: 'Rich & Bold',
      subtitle: 'For those who appreciate deep coffee flavors.',
      description:
        'An intense, full-bodied sensory experience crafted for early mornings, focused work, and anyone who craves depth, lingering warmth, and dark chocolate undertones.',
      mood: 'Deep • Intense • Grounding',
      image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=85',
      badge: 'Deep Roast Mood',
      features: ['Bold, memorable mouthfeel', 'Aromatic roasted profile', 'Perfect for strong espresso lovers'],
    },
    {
      id: 'smooth-balanced',
      title: 'Smooth & Balanced',
      subtitle: 'A smooth, satisfying coffee experience.',
      description:
        'A harmoniously rounded cup where velvety smoothness meets gentle warmth. Designed for leisurely afternoons, pleasant conversations, and effortless sipping.',
      mood: 'Silky • Gentle • Harmonious',
      image: '/assets/images/lungo-takeaway-cup-top.jpg',
      badge: 'Balanced Harmony',
      features: ['Silky, rounded sweetness', 'Golden crema layer', 'Ideal anytime companion'],
    },
    {
      id: 'daily-ritual',
      title: 'Your Daily Ritual',
      subtitle: 'Make every coffee break special.',
      description:
        'Coffee is more than a beverage—it is a sacred daily pause. Turn ordinary routines into an elevated moment of quiet mindfulness with your favorite LUNGO brew.',
      mood: 'Mindful • Comforting • Uplifting',
      image: '/assets/images/lungo-ceramic-cup.jpg',
      badge: 'Everyday Luxury',
      features: ['Celebrates the coffee pause', 'A welcoming sensory break', 'Designed to savor slowly'],
    },
  ];

  return (
    <section
      id="our-coffee"
      className="py-24 sm:py-32 bg-cream text-espresso-800 relative overflow-hidden"
      aria-labelledby="our-coffee-heading"
    >
      {/* Decorative Warm Ambient Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-caramel/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-espresso-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-caramel/15 border border-caramel/30 text-caramel-dark text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-caramel" />
            <span>The LUNGO Atmosphere</span>
          </div>

          <h2
            id="our-coffee-heading"
            className="font-serif text-3xl sm:text-5xl lg:text-6xl text-espresso-700 tracking-tight leading-tight mb-6"
          >
            Made for Coffee Moments.
          </h2>

          <p className="text-base sm:text-lg text-espresso-600/85 leading-relaxed font-light">
            At LUNGO, we believe coffee is the heartbeat of everyday life. We celebrate the irresistible aroma
            that fills the room, the golden crema on a freshly pulled cup, and the comforting pauses shared
            with friends or enjoyed in peaceful solitude across Sri Lanka.
          </p>
        </div>

        {/* Three Experience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {categories.map((cat, idx) => (
            <div
              key={cat.id}
              className="group relative flex flex-col bg-cream-soft rounded-3xl overflow-hidden border border-espresso-700/10 shadow-coffee hover:shadow-coffee-lg hover:-translate-y-2 transition-all duration-500"
            >
              {/* Image Frame */}
              <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden bg-espresso-900">
                <img
                  src={cat.image}
                  alt={`LUNGO Coffee - ${cat.title}`}
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso-900/80 via-espresso-900/20 to-transparent" />

                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-espresso-900/80 text-caramel-light backdrop-blur-md border border-caramel/30">
                    {cat.badge}
                  </span>
                </div>

                {/* Mood Tag */}
                <div className="absolute bottom-4 left-4 right-4 text-xs font-medium text-cream-light/90">
                  <span className="inline-block px-2.5 py-0.5 rounded bg-white/15 backdrop-blur-sm">
                    {cat.mood}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="flex-1 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-serif text-2xl sm:text-3xl text-espresso-700 font-normal">
                      {cat.title}
                    </h3>
                    <span className="text-xs font-mono font-bold text-caramel">0{idx + 1}</span>
                  </div>

                  <p className="text-sm font-medium text-caramel-dark mb-4 leading-snug">
                    {cat.subtitle}
                  </p>

                  <p className="text-sm text-espresso-600/85 leading-relaxed mb-6 font-light">
                    {cat.description}
                  </p>
                </div>

                {/* Features List */}
                <div className="border-t border-espresso-700/10 pt-4 space-y-2">
                  {cat.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-espresso-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-caramel" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Subtle Bar Accent */}
              <div className="h-1.5 w-full bg-gradient-to-r from-caramel/40 via-caramel to-caramel/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Brand Experience Philosophy Note */}
        <div className="mt-16 text-center max-w-2xl mx-auto bg-cream-light/80 p-6 rounded-2xl border border-caramel/20">
          <p className="text-xs sm:text-sm text-espresso-600 font-light italic">
            "These experience profiles reflect LUNGO’s commitment to memorable everyday coffee moments.
            Whether you relish a deep morning cup or an easy afternoon pause, LUNGO is crafted to accompany your lifestyle."
          </p>
        </div>
      </div>
    </section>
  );
};
