import React from 'react';
import { ExternalLink, Sparkles, Heart, MessageCircle } from 'lucide-react';

export const SocialSection: React.FC = () => {
  const FACEBOOK_URL = 'https://web.facebook.com/profile.php?id=61596201171023';
  const INSTAGRAM_URL = 'https://www.instagram.com/lungosrilanka/';

  return (
    <section
      id="social"
      className="py-24 sm:py-32 bg-espresso-850 text-cream-soft relative overflow-hidden bg-[#1E1714]"
      aria-labelledby="social-heading"
    >
      {/* Background Ambience */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-caramel/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-espresso-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-caramel/15 border border-caramel/30 text-caramel-light text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            <Sparkles className="w-3.5 h-3.5 text-caramel" />
            <span>Community & Stories</span>
          </div>

          <h2
            id="social-heading"
            className="font-serif text-3xl sm:text-5xl lg:text-6xl text-cream-soft tracking-tight leading-tight mb-6"
          >
            Stay Connected with LUNGO.
          </h2>

          <p className="text-base sm:text-lg text-cream-dark/85 leading-relaxed font-light">
            Follow our coffee journey and discover more from LUNGO Sri Lanka. Join our growing
            community of coffee lovers, see behind-the-scenes moments, and never miss an update.
          </p>
        </div>

        {/* Two Social Channels Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Instagram Card */}
          <div className="group relative rounded-3xl bg-espresso-800/90 border border-caramel/25 p-8 sm:p-10 shadow-2xl hover:border-caramel/60 hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#833ab4]/20 via-[#fd1d1d]/20 to-[#fcb045]/20 rounded-bl-full pointer-events-none" />

            <div>
              {/* Header with Icon and Handles */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center text-white shadow-lg">
                    {/* Official Instagram SVG Icon */}
                    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl text-cream-soft font-normal">Instagram</h3>
                    <p className="text-xs font-mono text-caramel-light">@lungosrilanka</p>
                  </div>
                </div>

                <span className="hidden sm:inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 text-cream-light/80">
                  Visual Feed
                </span>
              </div>

              <p className="text-sm text-cream-dark/85 font-light leading-relaxed mb-6">
                Explore visual inspiration, aesthetic coffee reels, brewing rituals, and daily updates
                celebrating the LUNGO coffee culture in Sri Lanka.
              </p>

              {/* Instagram mini post previews */}
              <div className="grid grid-cols-3 gap-2.5 mb-8">
                <div className="aspect-square rounded-xl overflow-hidden bg-espresso-900 border border-white/10">
                  <img
                    src="/assets/images/lungo-ceramic-cup.jpg"
                    alt="LUNGO Instagram coffee post"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="aspect-square rounded-xl overflow-hidden bg-espresso-900 border border-white/10">
                  <img
                    src="/assets/images/lungo-takeaway-cup-top.jpg"
                    alt="LUNGO Instagram crema post"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="aspect-square rounded-xl overflow-hidden bg-espresso-900 border border-white/10">
                  <img
                    src="/assets/images/lungo-takeaway-cup-standing.jpg"
                    alt="LUNGO Instagram takeaway post"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 w-full py-4 px-6 rounded-2xl text-sm font-semibold text-white bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] shadow-lg hover:shadow-xl hover:brightness-110 active:scale-98 transition-all duration-300"
            >
              <span>Follow @lungosrilanka</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Facebook Card */}
          <div className="group relative rounded-3xl bg-espresso-800/90 border border-caramel/25 p-8 sm:p-10 shadow-2xl hover:border-caramel/60 hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#1877F2]/10 rounded-bl-full pointer-events-none" />

            <div>
              {/* Header with Icon and Handles */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#1877F2] flex items-center justify-center text-white shadow-lg">
                    {/* Official Facebook SVG Icon */}
                    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl text-cream-soft font-normal">Facebook</h3>
                    <p className="text-xs font-mono text-caramel-light">LUNGO Sri Lanka</p>
                  </div>
                </div>

                <span className="hidden sm:inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 text-cream-light/80">
                  Community Page
                </span>
              </div>

              <p className="text-sm text-cream-dark/85 font-light leading-relaxed mb-6">
                Connect with our official Facebook page for announcements, brand stories, coffee articles,
                and direct community conversations in Sri Lanka.
              </p>

              {/* Facebook Community Highlights Box */}
              <div className="p-4 rounded-2xl bg-espresso-900/60 border border-white/10 mb-8 space-y-3">
                <div className="flex items-center gap-3 text-xs text-cream-dark/80">
                  <Heart className="w-4 h-4 text-caramel" />
                  <span>Official Facebook presence for LUNGO coffee lovers</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-cream-dark/80">
                  <MessageCircle className="w-4 h-4 text-caramel" />
                  <span>Send direct messenger inquiries anytime</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-cream-dark/80">
                  <Sparkles className="w-4 h-4 text-caramel" />
                  <span>Stay informed with brand updates and releases</span>
                </div>
              </div>
            </div>

            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 w-full py-4 px-6 rounded-2xl text-sm font-semibold text-white bg-[#1877F2] shadow-lg hover:shadow-xl hover:bg-[#166fe5] active:scale-98 transition-all duration-300"
            >
              <span>Visit Official Facebook</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
