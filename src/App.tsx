import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { OurCoffee } from './components/OurCoffee';
import { BrandStory } from './components/BrandStory';
import { CoffeeExperience } from './components/CoffeeExperience';
import { WhyChooseLungo } from './components/WhyChooseLungo';
import { SocialSection } from './components/SocialSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { ScrollToTop } from './components/ScrollToTop';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-cream text-espresso-800 flex flex-col font-sans selection:bg-caramel selection:text-white">
      {/* Sticky Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero />
        <OurCoffee />
        <BrandStory />
        <CoffeeExperience />
        <WhyChooseLungo />
        <SocialSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Interactive Controls */}
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  );
};

export default App;
