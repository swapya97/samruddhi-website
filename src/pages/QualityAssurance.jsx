import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, CheckCircle2, Ruler, Gauge, Droplet, 
  Eye, AlertTriangle, FileText, ArrowRight, XCircle, Sparkles 
} from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import { businessConfig } from '../data/businessInfo';

export default function QualityAssurance({ onOpenQuote }) {
  const qualityProtocols = [
    {
      title: "Raw Material Purity & Sieve Analysis",
      frequency: "Every Inward Consignment",
      desc: "Incoming loads of fly ash, cement, and quarry stone dust are sampled at the weighbridge. Sieve tests verify aggregate grain sizes are within 0 to 4 mm, and moisture sensors calibrate water batching.",
      icon: <FileText className="w-6 h-6 text-brand-gold" />
    },
    {
      title: "Continuous Production Monitoring",
      frequency: "Hourly Shift Checks",
      desc: "Pan-mixer blending uniformity, load-cell hopper weights, and hydraulic machine ram compaction pressures are logged on every production shift to prevent recipe drift.",
      icon: <Gauge className="w-6 h-6 text-brand-gold" />
    },
    {
      title: "Dimensional Caliper Tolerance (±1.5 mm)",
      frequency: "Every 500 Moulded Bricks",
      desc: "Steel vernier calipers verify exact length (230 mm), width (110 mm), and height (70-75 mm). Sharp 90-degree edges ensure straight masonry joints, saving 20–25% in wall plaster.",
      icon: <Ruler className="w-6 h-6 text-brand-gold" />
    },
    {
      title: "Compressive Strength Laboratory Testing",
      frequency: "7, 14 & 21-Day Cured Batches",
      desc: "Hydraulic crushing test machines verify that cured samples withstand load-bearing pressures exceeding designated classes (7.5 to 10+ N/mm²), making them safe for structural multi-storey construction.",
      icon: <ShieldCheck className="w-6 h-6 text-brand-gold" />
    },
    {
      title: "Water Absorption & Density Test",
      frequency: "Batch Lot Sampling",
      desc: "Sample bricks are weighed, fully immersed in clean water for 24 hours, and weighed again. Water absorption must remain below 12% to 15%, eliminating dampness and salt efflorescence on walls.",
      icon: <Droplet className="w-6 h-6 text-brand-gold" />
    },
    {
      title: "Visual & Soundness Inspection",
      frequency: "Manual Inspection at Palletizing",
      desc: "Every palletized brick is examined for smooth uniform texture, consistent cement-gray hue, sharp arrises, and a distinct metallic ring when two bricks are struck together.",
      icon: <Eye className="w-6 h-6 text-brand-gold" />
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* 1. HERO */}
      <PageHero
        kicker="Structural Reliability"
        title="Quality Assurance & Batch Testing"
        subtitle="Inside our rigorous multi-stage inspection system designed to ensure every brick leaving Samruddhi Enterprises meets strict dimensional, compressive, and durability benchmarks."
        breadcrumb={[{ label: 'Quality Assurance' }]}
        highlightWord="Quality Assurance"
        bgImage="https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1600&q=80"
      />

      {/* 2. QUALITY PHILOSOPHY OVERVIEW */}
      <section className="py-20 lg:py-28 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded text-xs font-mono font-medium tracking-wider uppercase bg-brand-goldTint text-brand-goldInk border border-brand-gold/30">
                <span>Inspection Protocol</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy font-display tracking-tight leading-tight">
                Zero Compromise from Raw Grain to Finished Yard<span className="dot">.</span>
              </h2>
              <p className="text-base text-brand-text leading-relaxed font-light">
                In building construction, masonry units endure dead loads, wind resistance, and continuous atmospheric humidity. At Samruddhi Enterprises, our quality control is not an afterthought—it is integrated into every phase of manufacturing.
              </p>
              <p className="text-base text-brand-muted leading-relaxed font-light">
                Our internal inspection checklist ensures that only bricks demonstrating verified dimensional precision, high compressive strength, and low water permeability are cleared for customer dispatch.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-brand-lightBg border border-brand-line">
                  <span className="text-xs text-brand-muted font-mono block">Compressive Benchmark</span>
                  <strong className="text-xl font-bold text-brand-navy font-display">7.5 – 10+ N/mm²</strong>
                </div>
                <div className="p-4 rounded-xl bg-brand-lightBg border border-brand-line">
                  <span className="text-xs text-brand-muted font-mono block">Max Absorption Target</span>
                  <strong className="text-xl font-bold text-brand-navy font-display">&lt; 15% Weight</strong>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="about-frame max-w-lg mx-auto">
                <div className="relative rounded-2xl overflow-hidden shadow-premium border border-brand-line">
                  <img
                    src="https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1000&q=80"
                    alt="Laboratory compressive test measurement"
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navyDeep/80 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <span className="text-xs font-mono text-brand-gold uppercase">Batch Sampling</span>
                    <p className="text-base font-bold font-display">
                      Every production shift is tested for load tolerance and edge sharpness
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. THE 6 QUALITY PROTOCOLS (Cards Grid) */}
      <section className="py-20 bg-brand-lightBg relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="Testing Regimen"
            title="Comprehensive Inspection Stages"
            subtitle="Explore the detailed tests conducted on raw materials, production batches, and fully cured bricks."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {qualityProtocols.map((protocol, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-brand-line shadow-card hover:shadow-premium transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-brand-goldTint flex items-center justify-center mb-6">
                    {protocol.icon}
                  </div>
                  <div className="flex items-center justify-between text-[11px] font-mono text-brand-goldInk uppercase tracking-wider mb-2">
                    <span>PROTOCOL 0{idx + 1}</span>
                    <span className="text-brand-muted font-normal">{protocol.frequency}</span>
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy font-display mb-3">
                    {protocol.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-text leading-relaxed font-light">
                    {protocol.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-brand-line/60 flex items-center gap-2 text-xs font-mono text-emerald-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Mandatory Clearance Milestone</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. REJECTION MANAGEMENT & QUARANTINE PROTOCOL */}
      <section className="py-20 bg-white relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-brand-navyDeep text-white border border-brand-gold/30 shadow-2xl relative overflow-hidden">
            <div className="max-w-2xl space-y-5 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-red-500/20 text-red-400 border border-red-500/30 text-xs font-mono uppercase tracking-wider">
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>Strict Batch Rejection Policy</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold font-display leading-tight">
                Zero Sub-Standard Dispatches Guaranteed<span className="dot">.</span>
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                If any sample in a production shift fails dimensional tolerances (beyond ±1.5 mm), exhibits structural hairline cracks, or does not meet compressive strength thresholds, the entire lot is immediately isolated in our quarantine yard.
              </p>

              <div className="space-y-2 pt-2">
                {[
                  "Green-state defective bricks are immediately recycled into the pan-mixer before curing.",
                  "Cured lots failing compressive benchmarks are marked as non-commercial cull.",
                  "Only certified, prime-grade bricks transfer into our Ready-for-Sale inventory."
                ].map((rule, rIdx) => (
                  <div key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <XCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                    <span>{rule}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={onOpenQuote}
                  className="px-6 py-3 rounded-xl bg-brand-gold text-brand-navy font-bold text-sm hover:bg-brand-goldHover transition-all"
                >
                  Request Batch Test Certificate
                </button>
                <Link
                  to="/contact"
                  className="px-6 py-3 rounded-xl border border-white/20 text-white font-semibold text-sm hover:bg-white/10 transition-all text-center"
                >
                  Contact Quality Desk
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}