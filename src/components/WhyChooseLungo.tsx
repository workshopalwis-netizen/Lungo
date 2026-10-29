import React from 'react';
import { Flame, Sparkles, Palette, Clock, CheckCircle2 } from 'lucide-react';

export const WhyChooseLungo: React.FC = () => {
  const pillars = [
    {
      icon: Flame,
      title: 'A Passion for Coffee',
      tagline: 'Heart & Craft',
      description:
        'LUNGO is fueled by an authentic enthusiasm for great coffee. We obsess over the nuance of each roast, the warmth of the aroma, and the joy that a well-crafted cup brings to your day.',
      highlight: 'Dedicated to pure coffee enjoyment',
    },
    {
      icon: Sparkles,
      title: 'Memorable Coffee Experiences',
      tagline: 'Moments That Linger',
      description:
        'Rather than rushing through caffeine, we encourage taking a mindful breath. Every detail is curated to create an atmosphere of satisfaction, calm, and welcoming comfort.',
      highlight: 'Transforming routines into rituals',
    },
    {
      icon: Palette,
      title: 'A Premium Visual Identity',
      tagline: 'Elegance in Every Detail',
      description:
        'From our signature emblem and artisanal ceramic mugs to sleek takeaway cups, LUNGO brings international specialty-coffee aesthetics right here to Sri Lanka.',
      highlight: 'Design that feels refined and inviting',
    },
    {
      icon: Clock,
      title: 'Celebrating Everyday Moments',
      tagline: 'Sri Lankan Lifestyle',
      description:
        'Whether it is a peaceful solo morning, a catch-up with close friends, or a midday creative pause, LUNGO belongs in the moments that matter most in your daily life.',
      highlight: 'Crafted for real, everyday connection',
    },
  ];

  return (
    <section
      id="why-lungo"
      className="py-24 sm:py-32 bg-cream text-espresso-800 relative overflow-hidden"
      aria-labelledby="why-lungo-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-caramel/15 border border-caramel/30 text-caramel-dark text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-caramel" />
            <span>The LUNGO Standard</span>
          </div>

          <h2
            id="why-lungo-heading"
            className="font-serif text-3xl sm:text-5xl lg:text-6xl text-espresso-700 tracking-tight leading-tight mb-6"
          >
            Why Choose LUNGO?
          </h2>

          <p className="text-base sm:text-lg text-espresso-600/85 leading-relaxed font-light">
            We are redefining how coffee feels in Sri Lanka. Honest, beautiful, and deeply devoted
            to creating an experience you will eagerly look forward to every day.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="group relative flex flex-col justify-between p-8 rounded-3xl bg-cream-soft border border-espresso-700/10 shadow-coffee hover:shadow-coffee-lg hover:-translate-y-2 transition-all duration-500"
              >
                <div>
                  {/* Icon & Counter */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-espresso-700/5 group-hover:bg-caramel/20 flex items-center justify-center text-espresso-700 group-hover:text-caramel-dark transition-colors duration-300">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-mono font-bold text-caramel">0{idx + 1}</span>
                  </div>

                  {/* Tagline */}
                  <span className="text-xs font-semibold uppercase tracking-wider text-caramel-dark mb-1 block">
                    {pillar.tagline}
                  </span>

                  {/* Title */}
                  <h3 className="font-serif text-2xl text-espresso-700 font-normal mb-3">
                    {pillar.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-espresso-600/85 leading-relaxed font-light mb-6">
                    {pillar.description}
                  </p>
                </div>

                {/* Highlight Badge */}
                <div className="pt-4 border-t border-espresso-700/10 flex items-center gap-2 text-xs font-medium text-espresso-700">
                  <CheckCircle2 className="w-4 h-4 text-caramel flex-shrink-0" />
                  <span>{pillar.highlight}</span>
                </div>

                {/* Bottom Border Glow */}
                <div className="absolute inset-x-8 bottom-0 h-0.5 bg-caramel scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
