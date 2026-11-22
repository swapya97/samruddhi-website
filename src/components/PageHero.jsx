import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export default function PageHero({
  kicker,
  title,
  subtitle,
  breadcrumb = [],
  highlightWord = "",
  bgImage = "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=1600&q=80"
}) {
  return (
    <div className="relative pt-44 pb-20 md:pt-56 md:pb-28 overflow-hidden bg-brand-navyDeep">
      {/* Background with Dark Overlay and Finnect-style Grid */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20 transform scale-105 transition-transform duration-1000"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-navy/95 via-brand-navy/90 to-brand-navyDeep" />
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />

      {/* Decorative Gold Glow Mesh */}
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-brand-gold/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-brand-gold/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
        {/* Breadcrumb Navigation */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 text-xs font-mono text-slate-300 mb-6 bg-white/5 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10"
        >
          <Link to="/" className="hover:text-brand-gold flex items-center gap-1 transition-colors">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          {breadcrumb.map((crumb, idx) => (
            <React.Fragment key={idx}>
              <ChevronRight className="w-3 h-3 text-slate-400" />
              {crumb.path ? (
                <Link to={crumb.path} className="hover:text-brand-gold transition-colors">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-brand-gold font-medium">{crumb.label}</span>
              )}
            </React.Fragment>
          ))}
        </motion.div>

        {/* Monospace Eyebrow Tag */}
        {kicker && (
          <div>
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded text-xs font-mono font-medium tracking-wider uppercase bg-brand-gold/15 text-brand-gold border border-brand-gold/30 mb-4"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-ping" />
              <span>{kicker}</span>
            </motion.span>
          </div>
        )}

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white font-display tracking-tight leading-tight max-w-4xl"
        >
          {highlightWord ? (
            <>
              {title.split(highlightWord)[0]}
              <span className="text-brand-gold">{highlightWord}</span>
              {title.split(highlightWord)[1]}
            </>
          ) : (
            title
          )}
          <span className="dot font-display">.</span>
        </motion.h1>

        {/* Subtitle */}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-5 text-base sm:text-xl text-slate-300 max-w-3xl leading-relaxed font-light"
          >
            {subtitle}
          </motion.p>
        )}
      </div>

      {/* Bottom Subtle Transition Line */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />
    </div>
  );
}