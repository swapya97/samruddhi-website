import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, ArrowRight, ShieldCheck, Ruler, 
  HelpCircle, Sparkles, Scale, Download, MessageSquare 
} from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import { businessConfig } from '../data/businessInfo';

export default function Products({ onOpenQuote }) {
  const [selectedProduct, setSelectedProduct] = useState(businessConfig.products[0]);

  return (
    <div className="overflow-hidden">
      {/* 1. HERO */}
      <PageHero
        kicker="Product Catalog"
        title="Our Fly Ash Bricks Range"
        subtitle="Precision-formed, hydraulically compacted Fly Ash Bricks designed for superior load-bearing strength, sharp corners, and economical masonry construction."
        breadcrumb={[{ label: 'Products' }]}
        highlightWord="Fly Ash Bricks"
        bgImage="https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=1600&q=80"
      />

      {/* 2. PRODUCT SHOWCASE & CONFIGURATOR */}
      <section className="py-20 lg:py-28 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="Structural Masonry"
            title="Engineered Brick Variations"
            subtitle="Explore our machine-moulded brick profiles designed for multi-storey residential frames, commercial partitions, and heavy-duty perimeter walls."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {businessConfig.products.map((prod) => (
              <motion.div
                key={prod.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`rounded-2xl border transition-all duration-300 flex flex-col justify-between overflow-hidden ${
                  prod.featured 
                    ? 'border-brand-gold/60 shadow-premium bg-gradient-to-b from-amber-50/30 to-white' 
                    : 'border-brand-line shadow-card bg-white'
                }`}
              >
                <div>
                  <div className="relative h-60 overflow-hidden">
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-brand-navy/90 text-brand-gold font-mono text-xs font-bold backdrop-blur-sm border border-brand-gold/30">
                      {prod.sizeInches}
                    </div>
                    {prod.featured && (
                      <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-brand-gold text-brand-navy font-bold text-xs shadow">
                        Popular Choice
                      </div>
                    )}
                  </div>

                  <div className="p-6 sm:p-8">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-brand-goldInk font-semibold block mb-1">
                      {prod.sizeMm}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-brand-navy font-display mb-3">
                      {prod.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-brand-text leading-relaxed mb-6 font-light">
                      {prod.bestFor}
                    </p>

                    {/* Technical Specification Matrix */}
                    <div className="space-y-2 p-4 rounded-xl bg-brand-lightBg border border-brand-line text-xs font-mono mb-6">
                      <div className="flex justify-between py-1 border-b border-brand-line/60">
                        <span className="text-brand-muted">Compressive Class:</span>
                        <span className="font-bold text-brand-navy">{prod.compressiveStrength}</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-brand-line/60">
                        <span className="text-brand-muted">Water Absorption:</span>
                        <span className="font-bold text-brand-navy">{prod.waterAbsorption}</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-brand-line/60">
                        <span className="text-brand-muted">Density Profile:</span>
                        <span className="font-bold text-brand-navy">{prod.density}</span>
                      </div>
                      <div className="flex justify-between py-1">
                        <span className="text-brand-muted">Color Tone:</span>
                        <span className="font-bold text-brand-navy">{prod.color}</span>
                      </div>
                    </div>

                    {/* Key Advantages */}
                    <h4 className="text-xs font-bold uppercase tracking-wider text-brand-navy mb-2">
                      Key Technical Strengths:
                    </h4>
                    <ul className="space-y-1.5 mb-2">
                      {prod.advantages.map((adv, aIdx) => (
                        <li key={aIdx} className="flex items-start gap-2 text-xs text-brand-text">
                          <CheckCircle className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" />
                          <span>{adv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-6 sm:p-8 pt-0 space-y-2">
                  <button
                    onClick={onOpenQuote}
                    className="w-full py-3 rounded-xl bg-brand-gold hover:bg-brand-goldHover text-brand-navy font-bold text-sm text-center shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <span>Request Quotation</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-[11px] text-center text-brand-muted">
                    *Batch delivery pricing varies by project transit distance.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. COMPARISON TABLE: FLY ASH BRICKS VS TRADITIONAL CLAY BRICKS */}
      <section className="py-20 bg-brand-lightBg relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="Performance Analysis"
            title="Fly Ash Bricks vs. Traditional Clay Bricks"
            subtitle="Understand the structural, financial, and environmental superiority of machine-moulded fly ash bricks."
          />

          <div className="bg-white rounded-2xl border border-brand-line shadow-card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-brand-navy text-white text-xs font-mono uppercase tracking-wider">
                    <th className="p-4 sm:p-5">Engineering Parameter</th>
                    <th className="p-4 sm:p-5 bg-brand-navyCard text-brand-gold">
                      Samruddhi Fly Ash Bricks (Machine-Moulded)
                    </th>
                    <th className="p-4 sm:p-5 text-slate-300">
                      Conventional Kiln Clay Bricks
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-brand-line text-xs sm:text-sm">
                  {businessConfig.comparisonData.map((row, idx) => (
                    <tr key={idx} className="hover:bg-amber-50/20 transition-colors">
                      <td className="p-4 sm:p-5 font-semibold text-brand-navy font-display">
                        {row.parameter}
                      </td>
                      <td className="p-4 sm:p-5 bg-brand-goldTint/20 font-medium text-brand-navy">
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{row.flyAsh}</span>
                        </div>
                      </td>
                      <td className="p-4 sm:p-5 text-brand-muted">
                        {row.clayBrick}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-4 bg-brand-navyDeep text-white text-xs font-mono flex flex-col sm:flex-row items-center justify-between gap-3">
              <span>*Standard comparative benchmarks based on IS:12894 and common site observations.</span>
              <button
                onClick={onOpenQuote}
                className="px-4 py-1.5 rounded-lg bg-brand-gold text-brand-navy font-bold text-xs uppercase"
              >
                Estimate Cost Savings
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CONFIGURABLE SPECIFICATIONS & PACKAGING DISCLAIMER */}
      <section className="py-16 bg-white border-t border-brand-line">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 sm:p-8 rounded-2xl bg-amber-50/50 border border-brand-gold/40 flex flex-col sm:flex-row items-start gap-5">
            <ShieldCheck className="w-8 h-8 text-brand-gold flex-shrink-0 mt-1" />
            <div className="space-y-2">
              <h4 className="text-lg font-bold text-brand-navy font-display">
                Configurable Technical Parameters & Batch Testing Notice
              </h4>
              <p className="text-xs sm:text-sm text-brand-text leading-relaxed font-light">
                Product dimensions, weights, and load-bearing classes presented herein are subject to formal batch inspection test certificates provided upon dispatch. As an industrial manufacturer with a planned production capacity of <strong>30,000 bricks per day</strong>, customized strength recipes and dimensional orders can be configured for large commercial and infrastructure developments.
              </p>
              <div className="pt-2">
                <button
                  onClick={onOpenQuote}
                  className="inline-flex items-center gap-2 text-xs font-bold text-brand-goldInk hover:text-brand-navy font-mono uppercase tracking-wider"
                >
                  <span>Request Custom Specification Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}