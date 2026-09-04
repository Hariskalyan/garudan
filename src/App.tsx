import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { OwnerSection } from './components/OwnerSection';
import { FleetShowcase } from './components/FleetShowcase';
import { ServicesPortfolio } from './components/ServicesPortfolio';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';

export function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  const handleOpenQuote = () => setQuoteModalOpen(true);
  const handleCloseQuote = () => setQuoteModalOpen(false);

  return (
    <div className="app-main">
      {/* Navigation Bar */}
      <Header onOpenQuote={handleOpenQuote} />

      {/* Hero Section with Real Fleet & Founder Banner */}
      <Hero onOpenQuote={handleOpenQuote} />

      {/* Founder & Leadership Spotlight (T. Gokulnath) */}
      <OwnerSection />

      {/* Real Garudan Heavy Fleet Showcase */}
      <FleetShowcase onOpenQuote={handleOpenQuote} />

      {/* Transport Services */}
      <ServicesPortfolio onOpenQuote={handleOpenQuote} />

      {/* Contact Section & Mobile Number Notice */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Freight Quote Modal */}
      <QuoteModal isOpen={quoteModalOpen} onClose={handleCloseQuote} />
    </div>
  );
}

export default App;
