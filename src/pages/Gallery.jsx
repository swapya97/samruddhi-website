import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, ZoomIn, ChevronLeft, ChevronRight, Filter, 
  Layers, ArrowRight, Eye 
} from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import { galleryItems, galleryCategories } from '../data/galleryData';

export default function Gallery({ onOpenQuote }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Filter items
  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const prevImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <div className="overflow-hidden">
      {/* 1. HERO */}
      <PageHero
        kicker="Visual Showcase"
        title="Manufacturing & Facility Gallery"
        subtitle="Explore high-resolution photography capturing our brick manufacturing facilities, raw material stockpiles, high-pressure hydraulic presses, cured bricks, and on-site construction applications."
        breadcrumb={[{ label: 'Gallery' }]}
        highlightWord="Gallery"
        bgImage="https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=1600&q=80"
      />

      {/* 2. GALLERY GRID SECTION */}
      <section className="py-20 lg:py-28 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* CATEGORY FILTER PILLS */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12 sm:mb-16">
            {galleryCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  activeCategory === cat.id
                    ? 'bg-brand-navy text-white font-bold shadow-md'
                    : 'bg-brand-lightBg hover:bg-slate-200 text-brand-text border border-brand-line'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* GRID OF IMAGES */}
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            <AnimatePresence>
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => openLightbox(index)}
                  className="group relative rounded-2xl overflow-hidden shadow-card border border-brand-line cursor-pointer bg-brand-lightBg h-72 sm:h-80"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Subtle Gradient Veil */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navyDeep/90 via-brand-navy/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Category Pill */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-brand-navy/80 text-brand-gold font-mono text-[11px] font-semibold backdrop-blur-sm border border-brand-gold/30">
                    {item.categoryLabel}
                  </div>

                  {/* Zoom Icon */}
                  <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 text-white backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ZoomIn className="w-4 h-4" />
                  </div>

                  {/* Caption on Hover */}
                  <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <h3 className="text-base sm:text-lg font-bold font-display leading-tight mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-300 line-clamp-2 font-light">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Bottom Note */}
          <div className="mt-16 text-center text-xs font-mono text-brand-muted">
            <span>Showing {filteredItems.length} curated images of Fly Ash Bricks & industrial manufacturing.</span>
          </div>
        </div>
      </section>

      {/* 3. LIGHTBOX MODAL */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-navyDeep/95 backdrop-blur-md">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-5 right-5 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-20"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev Button */}
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 sm:left-8 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-20"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 sm:right-8 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-20"
              aria-label="Next Image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Main Lightbox Content */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl max-h-[85vh] flex flex-col items-center justify-center relative z-10"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filteredItems[lightboxIndex].image}
                alt={filteredItems[lightboxIndex].title}
                className="max-w-full max-h-[70vh] rounded-xl object-contain shadow-2xl border border-white/10"
              />

              <div className="mt-4 text-center text-white max-w-xl">
                <span className="text-xs font-mono uppercase tracking-widest text-brand-gold">
                  {filteredItems[lightboxIndex].categoryLabel}
                </span>
                <h4 className="text-xl font-bold font-display mt-1">
                  {filteredItems[lightboxIndex].title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 font-light">
                  {filteredItems[lightboxIndex].desc}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 4. CALLOUT STRIP */}
      <section className="py-16 bg-brand-lightBg border-t border-brand-line text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h3 className="text-2xl font-bold text-brand-navy font-display">
            Need High-Volume Brick Supply for Your Jobsite<span className="dot">?</span>
          </h3>
          <p className="text-sm text-brand-text font-light">
            We provide on-site inspections, sample batches, and flexible fleet delivery tailored to your civil project timelines.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenQuote}
              className="px-8 py-3.5 rounded-xl bg-brand-navy text-white font-bold text-sm hover:bg-brand-navyCard transition-all shadow-md"
            >
              Request Sample or Quote
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}