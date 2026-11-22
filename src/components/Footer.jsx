import React from 'react';
import { Link } from 'react-router-dom';
import { Layers, Phone, Mail, MapPin, MessageSquare, ArrowUp, ShieldCheck, Clock } from 'lucide-react';
import { businessConfig } from '../data/businessInfo';

export default function Footer({ onOpenQuote }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-navyDeep text-white border-t border-brand-line/20 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-navyCard/30 rounded-full blur-3xl pointer-events-none" />

      {/* TOP CALLOUT BAR (Finnect style impact banner) */}
      <div className="border-b border-white/10 bg-brand-navy/60 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <span className="inline-block text-xs font-mono uppercase tracking-widest text-brand-gold mb-1">
                Commercial Inquiries & Bulk Supply
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
                Supplying High-Strength Fly Ash Bricks Across India<span className="dot">.</span>
              </h3>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenQuote}
                className="px-6 py-3 rounded-xl bg-brand-gold hover:bg-brand-goldHover text-brand-navy font-bold text-sm tracking-wide shadow-lg hover:shadow-brand-gold/20 transition-all flex items-center gap-2"
              >
                <span>Request Commercial Quote</span>
              </button>
              <a
                href={`https://wa.me/${businessConfig.contact.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition-all flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Desk</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN FOOTER CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* COLUMN 1 & 2: COMPANY INTRODUCTION */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-gold to-brand-goldHover flex items-center justify-center shadow-md">
                <Layers className="w-6 h-6 text-brand-navy" />
              </div>
              <div>
                <span className="block text-xl font-extrabold font-display tracking-tight text-white group-hover:text-brand-gold transition-colors">
                  SAMRUDDHI
                </span>
                <span className="block text-[11px] font-mono tracking-widest text-slate-400 uppercase">
                  ENTERPRISES • FLY ASH BRICKS
                </span>
              </div>
            </Link>

            <p className="text-slate-300 text-sm leading-relaxed max-w-sm font-light">
              Samruddhi Enterprises is an Indian manufacturing enterprise specializing in high-strength, machine-moulded Fly Ash Bricks. Engineered for structural integrity, dimensional accuracy, and cost efficiency in residential, commercial, and industrial masonry.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs font-mono text-slate-400">
              <ShieldCheck className="w-4 h-4 text-brand-gold" />
              <span>Hydraulic Compaction & Controlled Curing</span>
            </div>

            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300 space-y-1">
              <div className="flex items-center justify-between text-brand-gold font-mono font-semibold">
                <span>Planned Production Target:</span>
                <span>30,000 Bricks / Day</span>
              </div>
              <p className="text-[11px] text-slate-400">
                *Subject to final operational verification prior to commercial distribution.
              </p>
            </div>
          </div>

          {/* COLUMN 3: QUICK NAVIGATION */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-brand-gold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <Link to="/" className="hover:text-brand-gold transition-colors">Home Page</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-brand-gold transition-colors">About Samruddhi</Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-brand-gold transition-colors">Our Products</Link>
              </li>
              <li>
                <Link to="/manufacturing-process" className="hover:text-brand-gold transition-colors">Manufacturing Process</Link>
              </li>
              <li>
                <Link to="/quality-assurance" className="hover:text-brand-gold transition-colors">Quality Assurance</Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-brand-gold transition-colors">Visual Gallery</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-brand-gold transition-colors">Contact & Location</Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 4: PRODUCTS & APPLICATIONS */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-brand-gold mb-4">
              Products & Sectors
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <Link to="/products" className="hover:text-brand-gold transition-colors">Standard Modular (9" × 4" × 3")</Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-brand-gold transition-colors">Commercial 9" × 6" Jumbo Brick</Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-brand-gold transition-colors">High-Strength Load-Bearing Units</Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-brand-gold transition-colors">Residential Infill Masonry</Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-brand-gold transition-colors">Industrial Perimeter Walling</Link>
              </li>
              <li>
                <Link to="/quality-assurance" className="hover:text-brand-gold transition-colors">Compressive Strength Testing</Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 5: FACTORY CONTACT */}
          <div>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-brand-gold mb-4">
              Plant & Inquiries
            </h4>
            <ul className="space-y-3 text-xs text-slate-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" />
                <span>{businessConfig.contact.location}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-gold flex-shrink-0" />
                <a href={`tel:${businessConfig.contact.phonePrimary}`} className="hover:text-brand-gold">
                  {businessConfig.contact.phonePrimary}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-gold flex-shrink-0" />
                <a href={`mailto:${businessConfig.contact.email}`} className="hover:text-brand-gold">
                  {businessConfig.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-brand-gold flex-shrink-0" />
                <span>{businessConfig.contact.workingHours}</span>
              </li>
            </ul>

            <div className="mt-5 pt-4 border-t border-white/10">
              <span className="block text-[11px] text-slate-400 font-mono">Instant Dispatch Desk:</span>
              <a
                href={`https://wa.me/${businessConfig.contact.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>{businessConfig.contact.whatsappDisplay}</span>
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT & LEGAL NOTICE */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} <strong className="text-white">SAMRUDDHI ENTERPRISES</strong>. All rights reserved. Precision Fly Ash Bricks Manufacturing.
          </p>

          <div className="flex items-center gap-6">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Supply Terms</span>
            <span className="hover:text-white cursor-pointer transition-colors">Sitemap</span>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-brand-gold hover:text-brand-navy flex items-center justify-center transition-colors"
              aria-label="Scroll to top of page"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}