import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, Target, Eye, TrendingUp, Users, 
  Factory, CheckCircle2, ArrowRight, Layers, Sparkles 
} from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import AnimatedCounter from '../components/AnimatedCounter';
import { businessConfig } from '../data/businessInfo';

export default function About({ onOpenQuote }) {
  return (
    <div className="overflow-hidden">
      {/* 1. CINEMATIC HERO */}
      <PageHero
        kicker="Company Profile"
        title="About Samruddhi Enterprises"
        subtitle="Dedicated to manufacturing precision-engineered Fly Ash Bricks that empower durable, uniform, and sustainable masonry construction."
        breadcrumb={[{ label: 'About Us' }]}
        highlightWord="Samruddhi Enterprises"
        bgImage="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1600&q=80"
      />

      {/* 2. BUSINESS OVERVIEW (2-Column Industrial Presentation) */}
      <section className="py-20 lg:py-28 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded text-xs font-mono font-medium tracking-wider uppercase bg-brand-goldTint text-brand-goldInk border border-brand-gold/30">
                <span>Manufacturing Identity</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy font-display tracking-tight leading-tight">
                Industrial Manufacturing of High-Performance Masonry Units<span className="dot">.</span>
              </h2>

              <p className="text-base text-brand-text leading-relaxed font-light">
                <strong>SAMRUDDHI ENTERPRISES</strong> operates as a quality-driven manufacturer and distributor of Fly Ash Bricks in India. Our business operations encompass raw material procurement, mechanized batching, hydraulic moulding, scheduled hydration curing, and organized fleet logistics.
              </p>

              <p className="text-base text-brand-muted leading-relaxed font-light">
                Constructed with a planned production capacity of <strong>30,000 bricks per day</strong> (subject to final business verification), our facility is engineered to satisfy the demanding structural requirements of modern builders, government infrastructure agencies, real estate developers, and individual home builders.
              </p>

              <div className="p-4 rounded-xl bg-brand-lightBg border border-brand-line space-y-2">
                <div className="flex items-center gap-2 text-sm font-semibold text-brand-navy">
                  <ShieldCheck className="w-4 h-4 text-brand-gold" />
                  <span>Sustainable Civil Infrastructure</span>
                </div>
                <p className="text-xs text-brand-muted leading-relaxed">
                  By utilizing industrial pozzolanic byproducts and high-density hydraulic compaction, our bricks eliminate destructive topsoil excavation and significantly reduce carbon emissions compared to traditional clay brick kilns.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-6"
            >
              <div className="about-frame max-w-lg mx-auto">
                <div className="relative rounded-2xl overflow-hidden shadow-premium border border-brand-line">
                  <img
                    src="https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=1000&q=80"
                    alt="Stack of Quality Fly Ash Bricks"
                    className="w-full h-[420px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navyDeep/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span className="text-xs font-mono text-brand-gold uppercase tracking-wider block mb-1">
                      Batch Uniformity
                    </span>
                    <p className="text-lg font-bold font-display">
                      Engineered for high compressive strength and sharp edges
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. MANUFACTURING APPROACH & DISCIPLINE */}
      <section className="py-20 bg-brand-lightBg relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="Operational Discipline"
            title="Our Manufacturing Approach"
            subtitle="How automated batching and systematic process control deliver reliable building materials day in and day out."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-brand-line shadow-card hover:shadow-premium transition-all">
              <div className="w-12 h-12 rounded-xl bg-brand-goldTint flex items-center justify-center mb-6">
                <Layers className="w-6 h-6 text-brand-gold" />
              </div>
              <h3 className="text-xl font-bold text-brand-navy font-display mb-3">
                Strict Bill of Materials (BOM)
              </h3>
              <p className="text-sm text-brand-text leading-relaxed font-light">
                Every batch follows a calibrated recipe of Fly Ash, high-grade OPC cement, and washed quarry stone dust. No unverified aggregates or inconsistent additives are ever introduced.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-brand-line shadow-card hover:shadow-premium transition-all">
              <div className="w-12 h-12 rounded-xl bg-brand-goldTint flex items-center justify-center mb-6">
                <Factory className="w-6 h-6 text-brand-gold" />
              </div>
              <h3 className="text-xl font-bold text-brand-navy font-display mb-3">
                High-Pressure Hydraulic Forming
              </h3>
              <p className="text-sm text-brand-text leading-relaxed font-light">
                Uniform hydraulic compression ensures zero air voids inside the brick matrix, resulting in high load-bearing compressive tolerance and clean 90-degree arrises.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-brand-line shadow-card hover:shadow-premium transition-all">
              <div className="w-12 h-12 rounded-xl bg-brand-goldTint flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6 text-brand-gold" />
              </div>
              <h3 className="text-xl font-bold text-brand-navy font-display mb-3">
                Full Hydration Curing Cycle
              </h3>
              <p className="text-sm text-brand-text leading-relaxed font-light">
                Bricks are cured under controlled water misting for 14 to 21 days. This ensures that the pozzolanic reactions develop complete crystalline bonds before any brick is certified for dispatch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. VISION & MISSION */}
      <section className="py-20 lg:py-28 bg-brand-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-15 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
            
            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 sm:p-10 rounded-2xl bg-brand-navyCard/70 border border-brand-gold/30 backdrop-blur-md relative overflow-hidden"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-gold/20 border border-brand-gold/40 flex items-center justify-center mb-6 text-brand-gold">
                <Eye className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono uppercase tracking-widest text-brand-gold block mb-2">Our Vision</span>
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-white mb-4">
                To Be India's Most Trusted & Sustainable Brick Manufacturer<span className="dot">.</span>
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
                To set the benchmark for structural consistency, eco-conscious building materials, and reliable supply, transforming how residential, commercial, and infrastructure masonry is executed across regional building sectors.
              </p>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-8 sm:p-10 rounded-2xl bg-brand-navyCard/70 border border-brand-gold/30 backdrop-blur-md relative overflow-hidden"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-gold/20 border border-brand-gold/40 flex items-center justify-center mb-6 text-brand-gold">
                <Target className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono uppercase tracking-widest text-brand-gold block mb-2">Our Mission</span>
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-white mb-4">
                Delivering Excellence in Material, Service, & Trust<span className="dot">.</span>
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
                To produce high-strength Fly Ash Bricks with uncompromising quality inspection, maintain continuous daily supply, foster transparent commercial partnerships with contractors and builders, and support greener construction.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 5. QUALITY COMMITMENT & CUSTOMER RELATIONSHIPS */}
      <section className="py-20 lg:py-28 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded text-xs font-mono font-medium tracking-wider uppercase bg-brand-goldTint text-brand-goldInk border border-brand-gold/30">
                <span>Value Philosophy</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy font-display tracking-tight leading-tight">
                Quality Commitment & Long-Term Relationships<span className="dot">.</span>
              </h2>
              <p className="text-base text-brand-text leading-relaxed font-light">
                At Samruddhi Enterprises, we recognize that bricks represent the structural backbone of any building. A subpar brick compromises safety, accelerates dampness, and balloons plaster costs.
              </p>
              <p className="text-base text-brand-muted leading-relaxed font-light">
                We believe in forging durable customer relationships through transparent billing, reliable transit schedules, exact truckload counts, and consistent compressive strength across repeated batches.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  "Zero Compromise on Raw Material Purity",
                  "Dedicated Batch Codification & Quarantine Control",
                  "Flexible Logistics Coordination with Jobsite Teams",
                  "Transparent Quantity Verification at Dispatch"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm font-medium text-brand-navy">
                    <CheckCircle2 className="w-4 h-4 text-brand-gold flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-brand-lightBg p-8 rounded-2xl border border-brand-line">
              <h3 className="text-xl font-bold text-brand-navy font-display mb-4">
                Future Growth & Capacity Roadmap
              </h3>
              <p className="text-sm text-brand-text leading-relaxed mb-6 font-light">
                Our operations are structured around a planned initial production capacity of <strong>30,000 bricks per day</strong>, with architectural and plant layout provisions to scale up to <strong>50,000 – 1,00,000 bricks per day</strong> to serve expanding regional construction corridors.
              </p>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs font-mono mb-1">
                    <span className="text-brand-navy font-bold">Current Target Phase</span>
                    <span className="text-brand-gold font-bold">30,000 Bricks / Day</span>
                  </div>
                  <div className="w-full h-2.5 bg-slate-200 rounded-full overflow-hidden">
                    <div className="w-1/3 h-full bg-brand-gold rounded-full" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono mb-1">
                    <span className="text-brand-navy font-bold">Phased Scalability Target</span>
                    <span className="text-brand-gold font-bold">50,000 – 1,00,000+ Bricks / Day</span>
                  </div>
                  <div className="w-full h-2.5 bg-slate-200 rounded-full overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-r from-brand-gold via-brand-goldHover to-amber-300 rounded-full opacity-80" />
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-brand-line flex items-center justify-between">
                <button
                  onClick={onOpenQuote}
                  className="px-6 py-3 rounded-xl bg-brand-navy hover:bg-brand-navyCard text-white font-bold text-sm transition-all"
                >
                  Partner With Us
                </button>
                <Link
                  to="/contact"
                  className="text-xs font-mono font-bold text-brand-goldInk hover:text-brand-navy transition-colors flex items-center gap-1"
                >
                  <span>Connect With Plant</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. BOTTOM CTA */}
      <section className="py-16 bg-brand-navyDeep text-white border-t border-white/10 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h3 className="text-2xl sm:text-3xl font-bold font-display">
            Looking for High-Strength Bricks for Your Project<span className="dot">?</span>
          </h3>
          <p className="text-sm text-slate-300 font-light max-w-xl mx-auto">
            Discuss your structural requirements, test certificate requests, and volume delivery schedules with our technical desk.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <button
              onClick={onOpenQuote}
              className="px-7 py-3 rounded-xl bg-brand-gold text-brand-navy font-bold text-sm hover:bg-brand-goldHover transition-all"
            >
              Request Commercial Quote
            </button>
            <Link
              to="/products"
              className="px-7 py-3 rounded-xl border border-white/20 text-white font-semibold text-sm hover:bg-white/10 transition-all"
            >
              View Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}