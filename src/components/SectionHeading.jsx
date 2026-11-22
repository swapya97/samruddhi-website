import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeading({
  kicker,
  title,
  subtitle,
  centered = true,
  dark = false,
  className = "",
  highlightWord = ""
}) {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? 'text-center mx-auto max-w-3xl' : 'max-w-2xl'} ${className}`}>
      {/* Monospace Eyebrow / Kicker (Finnect-style) */}
      {kicker && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-md text-xs font-mono font-medium tracking-wider uppercase border border-brand-gold/30 bg-brand-goldTint text-brand-goldInk"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
          <span>{kicker}</span>
        </motion.div>
      )}

      {/* Main Title with Finnect-style .dot */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight font-display ${
          dark ? 'text-white' : 'text-brand-navy'
        }`}
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
      </motion.h2>

      {/* Subtitle / Paragraph */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            dark ? 'text-slate-300' : 'text-brand-muted'
          }`}
        >
          {subtitle}
        </motion.p>
      )}

      {/* Subtle decorative accent line */}
      {centered && (
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-16 h-1 bg-gradient-to-r from-brand-gold to-brand-goldHover mx-auto mt-6 rounded-full"
        />
      )}
    </div>
  );
}