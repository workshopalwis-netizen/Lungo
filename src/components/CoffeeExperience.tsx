import React, { useState } from 'react';
import { Sparkles, Maximize2, Coffee } from 'lucide-react';
import { GalleryItem } from '../types';
import { LightboxModal } from './LightboxModal';

export const CoffeeExperience: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const galleryItems: GalleryItem[] = [
    {
      id: 'brand-takeaway-stand',
      title: 'The Takeaway Experience',
      category: 'Brand Collection',
      description: 'The distinctive LUNGO takeaway cup with silky foam crema and secure matte lid, ready for busy city mornings and road trips across Sri Lanka.',
      image: '/assets/images/lungo-takeaway-cup-standing.jpg',
      isBrandAsset: true,
    },
    {
      id: 'espresso-crema',
      title: 'Golden Crema & Extraction',
      category: 'Espresso Craft',
      description: 'A rich shot of espresso crowned with velvety golden crema—the visual hallmark of balanced temperature, pressure, and finely roasted beans.',
      image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1000&q=85',
      isBrandAsset: false,
    },
    {
      id: 'brand-ceramic-cup',
      title: 'The LUNGO Ceramic Mug',
      category: 'Brand Collection',
      description: 'A comforting ceramic cup adorned with playful coffee doodle art and the official LUNGO insignia—crafted for slow, reflective moments.',
      image: '/assets/images/lungo-ceramic-cup.jpg',
      isBrandAsset: true,
    },
    {
      id: 'coffee-beans',
      title: 'Roasted Whole Beans',
      category: 'Beans & Aroma',
      description: 'Glistening whole roasted coffee beans containing delicate aromatic compounds, oils, and the soul of the coffee experience.',
      image: 'https://images.unsplash.com/photo-1559525839-8f8ec320b925?auto=format&fit=crop&w=1000&q=85',
      isBrandAsset: false,
    },
    {
      id: 'brand-cup-top',
      title: 'Top-Down Crema Vista',
      category: 'Brand Collection',
      description: 'Silky micro-foam bubbles nestled in a LUNGO paper cup, capturing the immediate sensory bliss of coffee aroma as you pop the lid.',
      image: '/assets/images/lungo-takeaway-cup-top.jpg',
      isBrandAsset: true,
    },
    {
      id: 'brewing-art',
      title: 'Slow Pour-Over Craft',
      category: 'Brewing Rituals',
      description: 'Water meeting ground coffee at precise temperatures to bloom delicate floral notes and smooth sweetness.',
      image: 'https://images.unsplash.com/photo-1518832553480-cd0e625ed3e6?auto=format&fit=crop&w=1000&q=85',
      isBrandAsset: false,
    },
  ];

  const filterTabs = [
    { id: 'all', label: 'All Experiences' },
    { id: 'Brand Collection', label: 'LUNGO Collection' },
    { id: 'Espresso Craft', label: 'Espresso & Crema' },
    { id: 'Beans & Aroma', label: 'Beans & Aroma' },
    { id: 'Brewing Rituals', label: 'Brewing Rituals' },
  ];

  const filteredItems =
    activeFilter === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <section
      id="gallery"
      className="py-24 sm:py-32 bg-cream-soft text-espresso-800 relative overflow-hidden"
      aria-labelledby="experience-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-caramel/15 border border-caramel/30 text-caramel-dark text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            <Coffee className="w-3.5 h-3.5 text-caramel" />
            <span>Visual Showcase</span>
          </div>

          <h2
            id="experience-heading"
            className="font-serif text-3xl sm:text-5xl lg:text-6xl text-espresso-700 tracking-tight leading-tight mb-6"
          >
            The Coffee Experience.
          </h2>

          <p className="text-base sm:text-lg text-espresso-600/85 leading-relaxed font-light">
            An editorial look into the sights, textures, and vessels that define the LUNGO journey.
            From velvety crema and aromatic roasted beans to our branded cups made for your hands.
          </p>

          {/* Filter Navigation Tabs */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-8">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                  activeFilter === tab.id
                    ? 'bg-espresso-700 text-cream-soft shadow-coffee'
                    : 'bg-cream text-espresso-600 hover:bg-cream-dark/60 hover:text-espresso-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetrical Editorial Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item, idx) => {
            // First item spans larger in certain screen sizes for asymmetrical rhythm
            const isFeatured = idx === 0 || idx === 3;

            return (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className={`group relative rounded-3xl overflow-hidden cursor-pointer shadow-coffee hover:shadow-coffee-lg transition-all duration-500 bg-espresso-900 ${
                  isFeatured ? 'sm:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {/* Image Container with Hover Zoom */}
                <div className="relative aspect-[4/3] sm:aspect-[1/1] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center transform group-hover:scale-108 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/90 via-espresso-950/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-espresso-900/80 text-caramel-light backdrop-blur-md border border-caramel/30">
                      {item.category}
                    </span>
                    <button
                      type="button"
                      className="p-2 rounded-full bg-espresso-900/70 text-cream-light opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:text-caramel"
                      aria-label="View larger image"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Bottom Caption Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 text-cream-soft transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-serif text-xl sm:text-2xl font-normal leading-snug mb-1 text-cream-soft">
                      {item.title}
                    </h3>
                    <p className="text-xs text-cream-dark/80 line-clamp-2 font-light">
                      {item.description}
                    </p>
                    <div className="mt-2 text-xs font-semibold text-caramel-light flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span>Click to preview</span>
                      <Sparkles className="w-3 h-3 text-caramel" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal Component */}
      <LightboxModal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </section>
  );
};
