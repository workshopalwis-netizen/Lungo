import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const ScrollToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className="fixed bottom-6 left-6 z-40 p-3.5 rounded-full bg-espresso-900/90 text-cream-light hover:text-white hover:bg-espresso-800 border border-caramel/40 shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-caramel"
      aria-label="Scroll to top of the page"
    >
      <ArrowUp className="w-5 h-5 text-caramel-light" />
    </button>
  );
};
