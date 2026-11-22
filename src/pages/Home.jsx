import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, ShieldCheck, Factory, Award, CheckCircle, 
  Ruler, Gauge, Droplet, Eye, Truck, Zap, Building2, 
  Phone, MessageSquare, Layers, ChevronRight, Sparkles 
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import AnimatedCounter from '../components/AnimatedCounter';
import FlyingBricksCanvas from '../components/FlyingBricksCanvas';
import { businessConfig } from '../data/businessInfo';

export default function Home({ onOpenQuote }) {
  const heroTrackRef = useRef(null);
  const [activeStage, setActiveStage] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  // 4 Finnect-Style Stations with Unique Headlines
  const stations = [
    {
      id: 'intake',
      tag: '01 INTAKE',
      number: '01',
      kicker: 'STAGE 01 · RAW INTAKE & MINERAL GRADING',
      titleLine1: 'Building Strong Foundations',
      titleLine2: 'With Quality Fly Ash Bricks',
      subtitle: 'Samruddhi Enterprises transforms certified thermal pozzolana, high-grade Ordinary Portland Cement, and quarry stone dust into high-density structural masonry units.',
      cardBadge: 'PLANNED 30,000 / DAY',
      cardMetricTitle: 'Raw Mineral Intake',
      cardMetricValue: 'Silo Verified Purity',
      spec1: 'Fly Ash & Cement Controlled BOM',
      spec2: 'Washed Quarry Aggregate (<4mm)',
      spec3: 'Calibrated Water-Cement Ratio'
    },
    {
      id: 'hydraulic',
      tag: '02 HYDRAULIC',
      number: '02',
      kicker: 'STAGE 02 · HIGH-TONNAGE HYDRAULIC COMPACTION',
      titleLine1: 'Engineered Compaction',
      titleLine2: 'Eliminating Internal Voids',
      subtitle: 'Heavy-duty hydraulic presses apply multi-ton compressive force alongside synchronous vibration, producing razor-sharp 90° edges and uniform dimensions.',
      cardBadge: '100% HYDRAULIC FORMED',
      cardMetricTitle: 'Dimensional Accuracy',
      cardMetricValue: '±1.5 mm Tolerance',
      spec1: 'Sharp 90° Finished Arrises',
      spec2: 'Zero Honeycomb Cavities',
      spec3: 'Saves 25% Plaster Mortar'
    },
    {
      id: 'curing',
      tag: '03 CURING',
      number: '03',
      kicker: 'STAGE 03 · CONTROLLED HYDRATION REGIMEN',
      titleLine1: '14–21 Days Water Curing',
      titleLine2: 'For Peak Compressive Strength',
      subtitle: 'Continuous water misting inside monitored curing bays ensures complete pozzolanic silicate crystallization, low water absorption (<15%), and zero efflorescence.',
      cardBadge: '7.5 – 10+ N/mm² CLASS',
      cardMetricTitle: 'Compressive Load Test',
      cardMetricValue: 'Load Bearing Certified',
      spec1: '14–21 Day Scheduled Hydration',
      spec2: 'Low Water Absorption (<15%)',
      spec3: 'Efflorescence-Free Finish'
    },
    {
      id: 'dispatch',
      tag: '04 DISPATCH',
      number: '04',
      kicker: 'STAGE 04 · DISPATCH & FLEET LOGISTICS',
      titleLine1: 'Reliable Supply & On-Time Delivery',
      titleLine2: 'To Construction Jobsites',
      subtitle: 'Palletized, zero-breakage transportation with immediate E-Way bill logistics delivering directly to residential, commercial, and civil infrastructure developments.',
      cardBadge: 'ON-TIME SITE DISPATCH',
      cardMetricTitle: 'Logistics Integrity',
      cardMetricValue: '< 2% Transit Breakage',
      spec1: 'Palletized Mechanical Loading',
      spec2: 'E-Way Bill Documentation',
      spec3: '24/7 Scheduled Fleet Dispatch'
    }
  ];

  const currentStation = stations[activeStage];

  // Pure scroll-driven station advancement (Finnect-style)
  useEffect(() => {
    const handleScroll = () => {
      if (!heroTrackRef.current) return;
      const rect = heroTrackRef.current.getBoundingClientRect();
      const totalDist = heroTrackRef.current.offsetHeight - window.innerHeight;
      if (totalDist <= 0) return;

      // Calculate progress through hero track: strictly 0.0 to 1.0
      const progress = Math.max(0, Math.min(1, -rect.top / totalDist));
      setScrollProgress(progress);

      // Divide scroll track into 4 distinct stage segments
      const stage = Math.min(3, Math.floor(progress * 4));
      setActiveStage(stage);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to target stage when clicked on rail or HUD
  const scrollToStage = (stageIdx) => {
    if (!heroTrackRef.current) return;
    const trackTop = heroTrackRef.current.getBoundingClientRect().top + window.scrollY;
    const totalDist = heroTrackRef.current.offsetHeight - window.innerHeight;
    const targetProgress = (stageIdx + 0.35) / 4;
    window.scrollTo({
      top: trackTop + totalDist * targetProgress,
      behavior: 'smooth'
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div>
      {/* ========================================================
          1. HERO SECTION (Finnect Scrollytelling Track + Flying Bricks)
          ======================================================== */}
      <section 
        ref={heroTrackRef}
        className="relative bg-brand-navyDeep"
        style={{ height: '300vh' }}
      >
        {/* Pinned Viewport Container (Finnect Sticky Hero) */}
        <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center pt-36 sm:pt-44 pb-12 sm:pb-16 bg-brand-navyDeep">
          {/* Full Authentic Brick Manufacturing Plant Background Image */}
          <img
            src="/images/hero-factory.jpg"
            alt="Samruddhi Enterprises Fly Ash Bricks Manufacturing Plant"
            className="absolute inset-0 w-full h-full object-cover object-center z-0"
          />

          {/* Triistic-Style Dark Gradient Wash (darker on left for typography readability, clear on right to see factory) */}
          <div 
            className="absolute inset-0 z-[1] pointer-events-none"
            style={{
              background: 'linear-gradient(90deg, rgba(3, 17, 58, 0.94) 0%, rgba(3, 17, 58, 0.86) 45%, rgba(3, 17, 58, 0.48) 75%, rgba(3, 17, 58, 0.25) 100%)'
            }}
          />

          {/* 3D Flying / Swirling Bricks Animation Canvas (Finnect-style vortex storm) */}
          <FlyingBricksCanvas scrollProgress={scrollProgress} />

          {/* Finnect-inspired Floating Stage Rail on the right edge */}
          <div className="hidden xl:flex flex-col items-end absolute right-8 top-1/2 -translate-y-1/2 z-20 font-mono text-[11px]">
            <div className="relative pr-6 py-2 space-y-6">
              {/* Background Rail Track */}
              <div className="absolute right-2 top-2 bottom-2 w-0.5 bg-white/20 rounded-full">
                {/* Dynamic Gold Fill Line linked to actual scroll progress */}
                <div 
                  className="w-full bg-brand-gold rounded-full transition-all duration-150"
                  style={{ 
                    height: `${Math.min(100, Math.max(0, scrollProgress * 100))}%` 
                  }}
                />
              </div>

              {stations.map((st, sIdx) => {
                const isActive = activeStage === sIdx;
                return (
                  <button
                    key={st.id}
                    onClick={() => scrollToStage(sIdx)}
                    className={`group flex items-center gap-3 text-right transition-all cursor-pointer ${
                      isActive ? 'text-brand-gold font-bold scale-105' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <span className="tracking-widest uppercase text-[10px]">{st.tag}</span>
                    <span 
                      className={`w-3.5 h-3.5 rounded-full border-2 transition-all flex items-center justify-center ${
                        isActive 
                          ? 'border-brand-gold bg-brand-gold shadow-[0_0_14px_#ebad21]' 
                          : 'border-slate-400 bg-brand-navy group-hover:border-white'
                      }`}
                    >
                      {isActive && <span className="w-1.5 h-1.5 rounded-full bg-brand-navy" />}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

        {/* MAIN HERO CONTENT CONTAINER */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full pt-10 sm:pt-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* HERO TEXT (Left Column - Transitions Smoothly on Scroll & Timer) */}
            <div className="lg:col-span-7 text-center lg:text-left space-y-5">
              
              {/* Finnect-Style Orchestration Core Eyebrow */}
              <div className="inline-flex items-center gap-2 text-[10.5px] sm:text-xs font-mono tracking-widest text-brand-gold uppercase">
                <span className="w-2 h-2 rounded-full bg-brand-gold animate-ping" />
                <span>SAMRUDDHI PRODUCTION CORE • 30,000 BRICKS/DAY RUN</span>
              </div>

              {/* Animated Headline & Subtitle Container keyed to activeStage */}
              <div className="min-h-[220px] sm:min-h-[260px] flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStage}
                    initial={{ opacity: 0, y: 22 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -22 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    className="space-y-4"
                  >
                    {/* Stage Kicker */}
                    <p className="text-xs sm:text-sm font-semibold tracking-[4px] sm:tracking-[5px] uppercase text-white/90 font-mono">
                      {currentStation.kicker}
                    </p>

                    {/* Headline with Finnect .dot accent */}
                    <h1 className="text-3xl sm:text-5xl xl:text-6xl font-extrabold text-white font-display tracking-tight leading-[1.12]">
                      <span className="block">{currentStation.titleLine1}</span>
                      <span className="block text-brand-gold">
                        {currentStation.titleLine2}
                        <span className="dot font-display text-white">.</span>
                      </span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-sm sm:text-base xl:text-lg text-slate-200 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
                      {currentStation.subtitle}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Dual Action Buttons (Triistic Style: Gold + Navy) */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link
                  to="/products"
                  className="w-full sm:w-auto min-w-[200px] px-8 py-4 rounded-xl bg-brand-gold hover:bg-brand-goldHover text-brand-navy font-bold text-sm tracking-wide shadow-xl hover:shadow-brand-gold/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 uppercase group"
                >
                  <span>Explore Our Products</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <button
                  onClick={onOpenQuote}
                  className="w-full sm:w-auto min-w-[180px] px-8 py-4 rounded-xl bg-brand-navy hover:bg-brand-navyCard text-white border-2 border-white/30 hover:border-brand-gold font-bold text-sm transition-all flex items-center justify-center gap-2 uppercase"
                >
                  <span>Request a Quote</span>
                </button>
              </div>

              {/* Quick Operational Metrics Strip */}
              <div className="pt-5 border-t border-white/15 grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0 text-left font-mono">
                <div>
                  <div className="text-lg sm:text-xl font-bold text-brand-gold">30,000</div>
                  <div className="text-[10px] text-slate-300">Bricks/Day Planned</div>
                </div>
                <div>
                  <div className="text-lg sm:text-xl font-bold text-white">±1.5mm</div>
                  <div className="text-[10px] text-slate-300">Sharp Edge Finish</div>
                </div>
                <div>
                  <div className="text-lg sm:text-xl font-bold text-brand-gold">100%</div>
                  <div className="text-[10px] text-slate-300">Hydraulic Pressed</div>
                </div>
              </div>
            </div>

            {/* HERO LOGO EMBLEM CARD (Triistic Signature Floating Card with Live Stage Sync) */}
            <div className="lg:col-span-5 flex justify-center">
              <div 
                className="w-full max-w-[380px] bg-white rounded-3xl p-7 sm:p-8 text-center relative z-10 transition-all duration-300"
                style={{
                  boxShadow: '0 0 0 8px rgba(255, 255, 255, .18), 0 0 0 11px rgba(235, 173, 33, .85), 0 30px 70px rgba(3, 17, 58, .55)'
                }}
              >
                {/* Brand Logo Symbol */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-brand-gold to-brand-goldHover mx-auto flex items-center justify-center shadow-md mb-4">
                  <Layers className="w-9 h-9 sm:w-11 sm:h-11 text-brand-navy" />
                </div>

                {/* Company Name */}
                <h3 className="text-2xl sm:text-3xl font-black font-display text-brand-navy tracking-tight leading-none mb-1">
                  SAMRUDDHI
                </h3>
                <p className="text-xs sm:text-sm font-mono tracking-widest uppercase text-brand-goldInk font-bold mb-3">
                  ENTERPRISES
                </p>

                <div className="w-12 h-0.5 bg-brand-gold mx-auto mb-3" />

                {/* Reactive Stage Badge */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStage}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="inline-block px-3 py-1 rounded-full bg-amber-50 text-brand-goldInk border border-brand-gold/40 text-[11px] font-mono font-bold uppercase mb-4"
                  >
                    {currentStation.cardBadge}
                  </motion.div>
                </AnimatePresence>

                {/* Live Stage Inspection Highlights */}
                <div className="space-y-2 text-left text-xs bg-brand-lightBg p-3.5 rounded-xl border border-brand-line">
                  <div className="flex justify-between items-center pb-1 border-b border-brand-line/60">
                    <span className="text-brand-muted font-mono">{currentStation.cardMetricTitle}:</span>
                    <strong className="text-brand-navy font-mono font-bold">{currentStation.cardMetricValue}</strong>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] text-brand-text">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                    <span>{currentStation.spec1}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] text-brand-text">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                    <span>{currentStation.spec2}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] text-brand-text">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                    <span>{currentStation.spec3}</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-brand-line flex items-center justify-center gap-2 text-xs font-mono text-brand-goldInk font-semibold">
                  <ShieldCheck className="w-4 h-4 text-brand-gold" />
                  <span>Tested Quality Batch Supply</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Finnect-Style Bottom HUD Progress Rail */}
        <div className="absolute bottom-5 inset-x-0 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-[11px] font-mono text-slate-300">
          <div className="hidden md:flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-gold" />
            <span>SAMRUDDHI PIPELINE • {currentStation.tag}</span>
          </div>

          <div className="flex items-center gap-4 mx-auto md:mx-0">
            {/* Clickable Station Selector Pills */}
            <div className="flex items-center gap-1.5 bg-white/10 p-1 rounded-full border border-white/15">
              {stations.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => scrollToStage(idx)}
                  className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold transition-all ${
                    activeStage === idx
                      ? 'bg-brand-gold text-brand-navy shadow-sm'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {s.tag}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-1.5 text-slate-300">
              <span className="text-brand-gold font-bold">SCROLL / CLICK</span>
              <ChevronRight className="w-3.5 h-3.5 text-brand-gold animate-pulse" />
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* ========================================================
          2. ABOUT SAMRUDDHI ENTERPRISES (Directly Follows Hero - NO Blank Screen!)
          ======================================================== */}
      <section className="py-20 lg:py-28 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Visual Column with Triistic Gold Geometric Borders */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5"
            >
              <div className="about-frame max-w-md mx-auto">
                <div className="relative rounded-2xl overflow-hidden shadow-premium border border-brand-line">
                  <img
                    src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
                    alt="Brick Manufacturing Facility"
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-xs font-mono text-brand-gold uppercase">Engineered Compaction</p>
                    <p className="text-sm font-semibold">High-tonnage hydraulic manufacturing unit</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Content Column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded text-xs font-mono font-medium tracking-wider uppercase bg-brand-goldTint text-brand-goldInk border border-brand-gold/30">
                <span>About Samruddhi Enterprises</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy font-display tracking-tight leading-tight">
                Pioneering Quality & Structural Integrity in Brick Manufacturing<span className="dot">.</span>
              </h2>

              <p className="text-base text-brand-text leading-relaxed">
                Samruddhi Enterprises was founded on a commitment to deliver dependable, uniform, and high-strength construction masonry materials. Specializing in the manufacturing and organized supply of modern Fly Ash Bricks, our manufacturing workflow incorporates controlled raw material blending, high-pressure hydraulic compaction, and multi-week water curing cycles.
              </p>

              <p className="text-base text-brand-muted leading-relaxed">
                By replacing traditional kiln-fired clay bricks with precision fly ash masonry units, we provide architects, structural engineers, builders, and individual home owners with bricks that have razor-sharp edges, high compressive strength, and up to 25% savings in plaster mortar consumption.
              </p>

              {/* Core Pillars Bullet Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  "Controlled Fly Ash & Cement Ratio",
                  "High Compaction Hydraulic Press",
                  "14–21 Day Scheduled Hydration Curing",
                  "Dimensional Accuracy within ±1.5 mm"
                ].map((point, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-brand-navy">
                    <div className="w-5 h-5 rounded-full bg-brand-goldTint text-brand-gold flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-3.5 h-3.5 text-brand-goldInk" />
                    </div>
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex items-center gap-4">
                <Link
                  to="/about"
                  className="px-6 py-3 rounded-xl bg-brand-navy hover:bg-brand-navyCard text-white font-semibold text-sm tracking-wide shadow-md transition-all flex items-center gap-2 group"
                >
                  <span>Read Full Company Profile</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-brand-gold" />
                </Link>

                <Link
                  to="/manufacturing-process"
                  className="px-6 py-3 rounded-xl border border-brand-line hover:border-brand-gold text-brand-navy font-semibold text-sm transition-all"
                >
                  View Manufacturing Flow
                </Link>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ========================================================
          3. WHY CHOOSE SAMRUDDHI ENTERPRISES? (Cards Grid)
          ======================================================== */}
      <section className="py-20 lg:py-28 bg-brand-lightBg relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="Manufacturing Strengths"
            title="Why Choose Samruddhi Enterprises"
            subtitle="Engineered with structural rigor and operational discipline to ensure reliable brick supply for all construction needs."
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {businessConfig.strengths.map((item, idx) => {
              const icons = {
                Award: <Award className="w-6 h-6 text-brand-gold" />,
                Building2: <Building2 className="w-6 h-6 text-brand-gold" />,
                Zap: <Zap className="w-6 h-6 text-brand-gold" />,
                CheckCircle: <CheckCircle className="w-6 h-6 text-brand-gold" />,
                Truck: <Truck className="w-6 h-6 text-brand-gold" />,
                Users: <ShieldCheck className="w-6 h-6 text-brand-gold" />
              };

              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="group relative bg-white p-8 rounded-2xl border border-brand-line shadow-card hover:shadow-premium-hover transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
                >
                  <div className="absolute top-0 left-8 right-8 h-1 bg-brand-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-t-full" />
                  
                  <div>
                    <div className="w-14 h-14 rounded-xl bg-brand-goldTint flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      {icons[item.icon] || <ShieldCheck className="w-6 h-6 text-brand-gold" />}
                    </div>
                    <h3 className="text-xl font-bold text-brand-navy font-display mb-3 group-hover:text-brand-goldInk transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-brand-text leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-brand-line/60 flex items-center justify-between text-xs font-mono text-brand-muted">
                    <span>ASSURED STANDARD</span>
                    <span className="text-brand-gold font-bold">0{idx + 1}</span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ========================================================
          4. OUR PRODUCTS SHOWCASE
          ======================================================== */}
      <section className="py-20 lg:py-28 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="Product Catalog"
            title="Engineered Fly Ash Bricks"
            subtitle="Precision-moulded bricks configured for structural residential, commercial, and perimeter masonry."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {businessConfig.products.slice(0, 2).map((prod) => (
              <motion.div
                key={prod.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className="bg-brand-lightBg rounded-2xl border border-brand-line overflow-hidden shadow-card hover:shadow-premium transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-brand-navy/90 text-brand-gold font-mono text-xs font-bold backdrop-blur-sm border border-brand-gold/30">
                      Dimensions: {prod.sizeInches}
                    </div>
                    <div className="absolute bottom-4 right-4 px-3 py-1 rounded bg-white text-brand-navy font-mono text-xs font-semibold shadow">
                      {prod.sizeMm}
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="text-xs font-mono text-brand-goldInk uppercase tracking-wider mb-2">
                      Load Bearing Construction Grade
                    </div>
                    <h3 className="text-2xl font-bold text-brand-navy font-display mb-3">
                      {prod.name}
                    </h3>
                    <p className="text-sm text-brand-text leading-relaxed mb-6 font-light">
                      {prod.bestFor}
                    </p>

                    <div className="grid grid-cols-2 gap-3 p-4 rounded-xl bg-white border border-brand-line mb-6 text-xs">
                      <div>
                        <span className="block text-brand-muted">Compressive Strength</span>
                        <strong className="text-brand-navy font-mono">{prod.compressiveStrength}</strong>
                      </div>
                      <div>
                        <span className="block text-brand-muted">Water Absorption</span>
                        <strong className="text-brand-navy font-mono">{prod.waterAbsorption}</strong>
                      </div>
                      <div>
                        <span className="block text-brand-muted">Density</span>
                        <strong className="text-brand-navy font-mono">{prod.density}</strong>
                      </div>
                      <div>
                        <span className="block text-brand-muted">Surface Color</span>
                        <strong className="text-brand-navy font-mono">{prod.color}</strong>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-2">
                      {prod.advantages.slice(0, 3).map((adv, aIdx) => (
                        <li key={aIdx} className="flex items-start gap-2 text-xs text-brand-text">
                          <CheckCircle className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" />
                          <span>{adv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-8 pt-0 flex items-center justify-between gap-4">
                  <button
                    onClick={onOpenQuote}
                    className="flex-1 py-3 px-5 rounded-xl bg-brand-gold hover:bg-brand-goldHover text-brand-navy font-bold text-sm text-center shadow-md transition-all uppercase"
                  >
                    Enquire for Pricing
                  </button>
                  <Link
                    to="/products"
                    className="py-3 px-5 rounded-xl border border-brand-line hover:border-brand-navy text-brand-navy font-semibold text-sm transition-all"
                  >
                    Details
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-sm font-bold text-brand-navy hover:text-brand-gold transition-colors font-mono uppercase tracking-wider"
            >
              <span>Explore All Brick Sizes & Technical Specifications</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================
          5. MANUFACTURING PROCESS TIMELINE (Interactive steps)
          ======================================================== */}
      <section className="py-20 lg:py-28 bg-brand-navyDeep text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-15 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="The Manufacturing Journey"
            title="From Raw Minerals to High-Strength Bricks"
            subtitle="Explore the precision workflow that ensures consistent density, sharp arrises, and structural integrity in every batch."
            dark={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {businessConfig.manufacturingSteps.map((step) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: step.step * 0.1 }}
                className="bg-brand-navyCard/60 rounded-2xl border border-white/10 p-6 flex flex-col justify-between hover:border-brand-gold/40 transition-all duration-300 group"
              >
                <div>
                  <div className="relative h-44 rounded-xl overflow-hidden mb-6">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 w-10 h-10 rounded-lg bg-brand-gold text-brand-navy font-mono font-extrabold flex items-center justify-center text-sm shadow-md">
                      {step.number}
                    </div>
                  </div>

                  <span className="text-[11px] font-mono text-brand-gold uppercase tracking-wider block mb-1">
                    {step.subtitle}
                  </span>
                  <h3 className="text-xl font-bold font-display text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 space-y-1.5">
                  {step.keyPoints.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-2 text-[11px] text-slate-400 font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/manufacturing-process"
              className="px-8 py-3.5 rounded-xl bg-brand-gold hover:bg-brand-goldHover text-brand-navy font-bold text-sm tracking-wide shadow-lg inline-flex items-center gap-2 transition-all uppercase"
            >
              <span>Read Detailed Process Documentation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================
          6. PRODUCTION CAPABILITY & STATISTICS
          ======================================================== */}
      <section className="py-20 bg-brand-navy text-white relative border-y border-brand-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-brand-gold mb-2">
                <AnimatedCounter end={30000} />
              </div>
              <div className="text-sm font-bold text-white uppercase tracking-wider mb-1">
                Planned Daily Capacity
              </div>
              <p className="text-xs text-slate-400 font-light">
                *Subject to final business confirmation before publication
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-white mb-2">
                14 – 21
              </div>
              <div className="text-sm font-bold text-white uppercase tracking-wider mb-1">
                Days Water Curing
              </div>
              <p className="text-xs text-slate-400 font-light">
                Ensuring complete silicate hydration and maximum compressive strength
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-brand-gold mb-2">
                ±1.5 mm
              </div>
              <div className="text-sm font-bold text-white uppercase tracking-wider mb-1">
                Dimensional Tolerance
              </div>
              <p className="text-xs text-slate-400 font-light">
                Saves up to 25% mortar bed & plaster application on masonry
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-white mb-2">
                &lt; 2%
              </div>
              <div className="text-sm font-bold text-white uppercase tracking-wider mb-1">
                Transit Breakage
              </div>
              <p className="text-xs text-slate-400 font-light">
                Solid internal matrix and organized palletized logistics
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ========================================================
          7. QUALITY ASSURANCE HIGHLIGHTS
          ======================================================== */}
      <section className="py-20 lg:py-28 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="Zero Compromise Standards"
            title="Quality Assurance at Every Stage"
            subtitle="Our laboratory inspection protocols verify that every batch meets rigorous structural benchmarks before leaving our yard."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessConfig.qualityTesting.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="p-6 rounded-2xl bg-brand-lightBg border border-brand-line hover:border-brand-gold/60 transition-all hover:bg-white hover:shadow-card group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-brand-gold uppercase tracking-wider">
                    TEST 0{idx + 1}
                  </span>
                  <span className="px-2.5 py-1 rounded bg-brand-goldTint text-brand-goldInk font-mono text-[11px] font-semibold">
                    {item.metric}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-brand-navy font-display mb-2 group-hover:text-brand-goldInk transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-brand-text leading-relaxed font-light">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/quality-assurance"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-navy hover:text-brand-gold transition-colors font-mono uppercase tracking-wider"
            >
              <span>Learn More About Batch Testing & Quarantine Protocols</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================
          8. CONSTRUCTION APPLICATIONS
          ======================================================== */}
      <section className="py-20 lg:py-28 bg-brand-lightBg relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="Versatile Masonry"
            title="Applications Across Modern Construction"
            subtitle="Designed to support high-performance structural requirements across varied civil building sectors."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessConfig.applications.map((app, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative rounded-2xl overflow-hidden shadow-card border border-brand-line bg-white flex flex-col justify-between"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={app.image}
                    alt={app.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navyDeep/90 via-transparent to-transparent opacity-80" />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-brand-gold text-brand-navy font-mono text-[11px] font-bold uppercase">
                    {app.tag}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl font-bold font-display leading-snug">
                      {app.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-xs sm:text-sm text-brand-text leading-relaxed font-light">
                    {app.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          9. CALL TO ACTION (CTA)
          ======================================================== */}
      <section className="py-20 bg-brand-navyDeep text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-gold/15 text-brand-gold border border-brand-gold/30 text-xs font-mono uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ready for Immediate Supply</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-white tracking-tight leading-tight">
            Planning Your Next Construction Project<span className="dot">?</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
            Connect with Samruddhi Enterprises for quality Fly Ash Bricks and reliable supply tailored to your engineering and delivery schedule.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenQuote}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-gold hover:bg-brand-goldHover text-brand-navy font-bold text-sm tracking-wide shadow-xl hover:shadow-brand-gold/25 transition-all flex items-center justify-center gap-2 uppercase"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 font-semibold text-sm transition-all flex items-center justify-center gap-2 uppercase"
            >
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}