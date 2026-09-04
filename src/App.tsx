import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
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

      {/* Hero Section */}
      <Hero onOpenQuote={handleOpenQuote} />

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
