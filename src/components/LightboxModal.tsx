import React from 'react';
import { X, Sparkles } from 'lucide-react';
import { GalleryItem } from '../types';

interface LightboxModalProps {
  item: GalleryItem | null;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-espresso-900/90 backdrop-blur-md animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
    >
      <div
        className="relative max-w-4xl w-full bg-espresso-800 rounded-3xl overflow-hidden border border-caramel/30 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-espresso-900/80 text-cream-light hover:text-caramel hover:bg-espresso-900 transition-colors focus:outline-none focus:ring-2 focus:ring-caramel"
          aria-label="Close image preview"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 max-h-[85vh] overflow-y-auto">
          <div className="md:col-span-7 bg-espresso-950 flex items-center justify-center overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full max-h-[70vh] object-cover object-center"
            />
          </div>

          <div className="md:col-span-5 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-caramel/20 text-caramel-light text-xs font-semibold uppercase tracking-wider mb-4">
                <Sparkles className="w-3 h-3" />
                <span>{item.category}</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl text-cream-soft font-normal mb-3">
                {item.title}
              </h3>

              <p className="text-sm sm:text-base text-cream-dark/80 font-light leading-relaxed mb-6">
                {item.description}
              </p>
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs text-cream-dark/60">
              <span className="font-mono uppercase tracking-widest">LUNGO Sri Lanka</span>
              {item.isBrandAsset && (
                <span className="px-2.5 py-1 rounded-full bg-caramel text-espresso-900 font-semibold tracking-wide">
                  Official Brand Asset
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
