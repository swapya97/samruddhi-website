import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Layers, X, Phone, Mail, MapPin } from 'lucide-react';
import { businessConfig } from '../data/businessInfo';

export default function Header({ onOpenQuote }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isIndexOpen, setIsIndexOpen] = useState(false);
  const location = useLocation();

  // Close index on route change or ESC key
  useEffect(() => {
    setIsIndexOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsIndexOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Manufacturing Process', path: '/manufacturing-process' },
    { name: 'Quality Assurance', path: '/quality-assurance' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const siteIndexLinks = [
    { num: '01', name: 'Home', path: '/', desc: 'Core Manufacturing Operations & Facility Overview' },
    { num: '02', name: 'About Us', path: '/about', desc: 'Company Profile, Strategic Vision & Infrastructure' },
    { num: '03', name: 'Products', path: '/products', desc: 'Standard & Jumbo Fly Ash Bricks & Specifications' },
    { num: '04', name: 'Manufacturing Process', path: '/manufacturing-process', desc: '7-Stage Controlled Compaction & Hydration Timeline' },
    { num: '05', name: 'Quality Assurance', path: '/quality-assurance', desc: 'Compressive Load, Water Absorption & Dimension QC' },
    { num: '06', name: 'Project Gallery', path: '/gallery', desc: 'Curing Yards, Heavy Machinery & Dispatch Logistics' },
    { num: '07', name: 'Contact & Dispatch', path: '/contact', desc: 'Direct Factory Helpline, Sales Desk & Plant Location' },
  ];

  return (
    <>
      {/* ========================================================
          SOLID DEEP NAVY HEADER (100% OPAQUE - NO TRANSPARENCY ON SCROLL)
          ======================================================== */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b border-white/10 ${
          isScrolled
            ? 'py-3 sm:py-3.5 shadow-[0_10px_35px_rgba(0,0,0,0.6)]'
            : 'py-3.5 sm:py-4.5 shadow-md'
        }`}
        style={{ backgroundColor: '#020b27' }}
      >
        <div className="max-w-[1560px] mx-auto px-3 sm:px-6 xl:px-8">
          <div className="flex items-center justify-between gap-2 xl:gap-4 flex-nowrap">
            
            {/* BRAND LOGO */}
            <Link to="/" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-brand-gold to-brand-goldHover flex items-center justify-center shadow-[0_0_15px_rgba(235,173,33,0.35)] group-hover:scale-105 transition-transform duration-200 shrink-0">
                <Layers className="w-5 h-5 sm:w-6 sm:h-6 text-brand-navy" />
              </div>
              <div>
                <span className="block text-base sm:text-lg xl:text-xl font-extrabold font-display tracking-tight text-white group-hover:text-brand-gold transition-colors leading-none whitespace-nowrap">
                  SAMRUDDHI<span className="text-brand-gold">.</span>
                </span>
                <span className="block text-[8.5px] sm:text-[9.5px] font-mono tracking-widest text-slate-400 uppercase font-semibold mt-0.5 sm:mt-1 whitespace-nowrap">
                  ENTERPRISES • FLY ASH BRICKS
                </span>
              </div>
            </Link>

            {/* DESKTOP NAVIGATION (All in One Single Clean Line) */}
            <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1.5 flex-nowrap shrink-0" aria-label="Primary Navigation">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-2 xl:px-2.5 py-1.5 text-xs xl:text-[13px] font-medium transition-all relative whitespace-nowrap shrink-0 flex items-center ${
                      isActive
                        ? 'text-brand-gold font-bold'
                        : 'text-slate-300 hover:text-white'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span className="whitespace-nowrap leading-none">{link.name}</span>
                      {isActive && (
                        <motion.span
                          layoutId="navActiveIndicator"
                          className="absolute bottom-0 left-2 right-2 h-0.5 bg-brand-gold rounded-full shadow-[0_0_8px_#ebad21]"
                          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* ACTION AREA: Phone + Quote CTA + Index Button */}
            <div className="flex items-center gap-2 sm:gap-2.5 xl:gap-3 shrink-0">
              
              {/* Direct Phone Helpline (Desktop) */}
              <a
                href={`tel:${businessConfig.contact.phonePrimary}`}
                className="hidden xl:flex items-center gap-1.5 text-xs font-mono text-slate-300 hover:text-brand-gold transition-colors pr-1 whitespace-nowrap shrink-0"
                title="Direct Factory Helpline"
              >
                <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center border border-white/15 shrink-0">
                  <Phone className="w-3.5 h-3.5 text-brand-gold" />
                </div>
                <span className="font-semibold whitespace-nowrap text-[11.5px] xl:text-xs">{businessConfig.contact.phonePrimary}</span>
              </a>

              {/* Primary CTA: Request a Quote */}
              <button
                onClick={onOpenQuote}
                className="px-3 sm:px-3.5 py-2 rounded-lg bg-brand-gold hover:bg-brand-goldHover text-brand-navy font-bold text-xs tracking-wider shadow-sm hover:shadow-[0_0_15px_rgba(235,173,33,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-1.5 uppercase font-mono whitespace-nowrap shrink-0"
              >
                <span className="whitespace-nowrap">Request a Quote</span>
                <ArrowRight className="w-3.5 h-3.5 shrink-0" />
              </button>

              {/* Finnect Signature "Index" Toggle Button */}
              <button
                onClick={() => setIsIndexOpen(true)}
                className="group flex items-center gap-2 px-2.5 sm:px-3 py-2 rounded-lg border border-white/20 hover:border-brand-gold bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-all text-xs font-mono tracking-wider cursor-pointer whitespace-nowrap shrink-0"
                aria-label="Open Site Index Directory"
              >
                <span className="hidden sm:inline whitespace-nowrap">INDEX</span>
                <span className="flex flex-col gap-1 items-end w-4 shrink-0">
                  <span className="w-4 h-0.5 bg-brand-gold rounded-full" />
                  <span className="w-2.5 h-0.5 bg-white group-hover:w-4 transition-all rounded-full" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ========================================================
          FINNECT FULL-SCREEN SITE INDEX OVERLAY
          ======================================================== */}
      <AnimatePresence>
        {isIndexOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-brand-navyDeep/95 backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-10 lg:p-16 overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-label="Site Index Directory"
          >
            {/* Overlay Header */}
            <div className="flex items-center justify-between border-b border-white/15 pb-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-brand-gold flex items-center justify-center">
                  <Layers className="w-5 h-5 text-brand-navy" />
                </div>
                <div>
                  <span className="font-mono text-xs text-brand-gold uppercase tracking-widest font-bold">
                    SAMRUDDHI ENTERPRISES · SITE DIRECTORY
                  </span>
                  <span className="hidden sm:block text-[11px] text-slate-400 font-mono">
                    Fly Ash Bricks Manufacturing Plant • India
                  </span>
                </div>
              </div>

              <button
                onClick={() => setIsIndexOpen(false)}
                className="flex items-center gap-2 px-3.5 py-2 rounded-lg border border-white/20 hover:border-brand-gold text-slate-300 hover:text-white font-mono text-xs uppercase tracking-wider transition-all cursor-pointer"
                aria-label="Close Site Index"
              >
                <span>Close</span>
                <X className="w-4 h-4 text-brand-gold" />
              </button>
            </div>

            {/* Overlay Navigation List (Finnect Staggered Large Links) */}
            <div className="max-w-4xl py-8 sm:py-12 space-y-4 sm:space-y-6">
              <nav className="divide-y divide-white/10" aria-label="Site Directory">
                {siteIndexLinks.map((item, idx) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.04, duration: 0.3 }}
                  >
                    <NavLink
                      to={item.path}
                      onClick={() => setIsIndexOpen(false)}
                      className={({ isActive }) =>
                        `group py-3.5 sm:py-5 flex flex-col sm:flex-row sm:items-baseline justify-between transition-all ${
                          isActive ? 'text-brand-gold font-bold' : 'text-white hover:text-brand-gold'
                        }`
                      }
                    >
                      <div className="flex items-baseline gap-4 sm:gap-6">
                        <span className="font-mono text-xs sm:text-sm text-brand-gold font-bold tracking-widest">
                          {item.num}
                        </span>
                        <span className="text-xl sm:text-3xl font-display font-extrabold tracking-tight group-hover:translate-x-2 transition-transform duration-200">
                          {item.name}
                        </span>
                      </div>
                      <span className="text-xs font-mono text-slate-400 group-hover:text-slate-200 mt-1 sm:mt-0 pl-8 sm:pl-0">
                        {item.desc}
                      </span>
                    </NavLink>
                  </motion.div>
                ))}

                {/* Direct Action Item 08: Quote Modal */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: siteIndexLinks.length * 0.04, duration: 0.3 }}
                >
                  <button
                    onClick={() => {
                      setIsIndexOpen(false);
                      onOpenQuote();
                    }}
                    className="w-full text-left group py-3.5 sm:py-5 flex flex-col sm:flex-row sm:items-baseline justify-between transition-all text-brand-gold hover:text-brand-goldHover"
                  >
                    <div className="flex items-baseline gap-4 sm:gap-6">
                      <span className="font-mono text-xs sm:text-sm text-brand-gold font-bold tracking-widest">
                        08
                      </span>
                      <span className="text-xl sm:text-3xl font-display font-extrabold tracking-tight group-hover:translate-x-2 transition-transform duration-200">
                        Request a Formal Quote & Estimation
                      </span>
                    </div>
                    <span className="text-xs font-mono text-amber-200/80 mt-1 sm:mt-0 pl-8 sm:pl-0">
                      Interactive Brick Quantity Calculator & WhatsApp Dispatch
                    </span>
                  </button>
                </motion.div>
              </nav>
            </div>

            {/* Overlay Footer */}
            <div className="border-t border-white/15 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-brand-gold" />
                <span>Manufacturing Plant · India • Planned 30,000 Bricks/Day Capacity</span>
              </div>

              <div className="flex items-center gap-6">
                <a
                  href={`tel:${businessConfig.contact.phonePrimary}`}
                  className="hover:text-brand-gold transition-colors flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-brand-gold" />
                  <span>{businessConfig.contact.phonePrimary}</span>
                </a>
                <a
                  href={`mailto:${businessConfig.contact.email}`}
                  className="hover:text-brand-gold transition-colors flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5 text-brand-gold" />
                  <span>{businessConfig.contact.email}</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}