import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import QuoteModal from './components/QuoteModal';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Manufacturing from './pages/Manufacturing';
import QualityAssurance from './pages/QualityAssurance';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

// Scroll to top automatically on route changes
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, [pathname]);

  return null;
}

export default function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white text-brand-text selection:bg-brand-gold selection:text-brand-navy">
      {/* Finnect-inspired interactive cursor */}
      <CustomCursor />

      {/* Auto scroll to top on navigation */}
      <ScrollToTop />

      {/* Header */}
      <Header onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* Main Content Pages */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home onOpenQuote={() => setIsQuoteOpen(true)} />} />
          <Route path="/about" element={<About onOpenQuote={() => setIsQuoteOpen(true)} />} />
          <Route path="/products" element={<Products onOpenQuote={() => setIsQuoteOpen(true)} />} />
          <Route path="/manufacturing-process" element={<Manufacturing onOpenQuote={() => setIsQuoteOpen(true)} />} />
          <Route path="/quality-assurance" element={<QualityAssurance onOpenQuote={() => setIsQuoteOpen(true)} />} />
          <Route path="/gallery" element={<Gallery onOpenQuote={() => setIsQuoteOpen(true)} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home onOpenQuote={() => setIsQuoteOpen(true)} />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* Universal Quote & Brick Estimator Modal */}
      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </div>
  );
}