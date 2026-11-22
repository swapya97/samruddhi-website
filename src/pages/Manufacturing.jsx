import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Layers, ShieldCheck, Box, Droplets, CheckCircle, 
  ArrowRight, Truck, Factory, Gauge, Eye, Ruler 
} from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import { businessConfig } from '../data/businessInfo';

export default function Manufacturing({ onOpenQuote }) {
  const rawMaterialIcons = {
    Layers: <Layers className="w-6 h-6 text-brand-gold" />,
    ShieldCheck: <ShieldCheck className="w-6 h-6 text-brand-gold" />,
    Box: <Box className="w-6 h-6 text-brand-gold" />,
    Droplets: <Droplets className="w-6 h-6 text-brand-gold" />
  };

  const fullWorkflow = [
    {
      step: 1,
      number: "01",
      title: "Raw Material Intake & Gradation Inspection",
      subtitle: "Material Sourcing & Laboratory Quality Check",
      desc: "Incoming thermal fly ash, Ordinary Portland Cement, and washed quarry crusher sand undergo strict sieve analysis and moisture calibration before pneumatic transfer to sealed silos.",
      details: [
        "Calibrated weighbridge truckload verification",
        "Sieve gradation test to confirm particle size under 4 mm",
        "Moisture percentage estimation for water-cement balancing"
      ],
      image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1000&q=80"
    },
    {
      step: 2,
      number: "02",
      title: "Computerized Proportioning & Intensive Pan Mixing",
      subtitle: "Homogeneous Binder & Aggregate Blending",
      desc: "Electronic load-cell hoppers meter the designated Bill of Materials (BOM) ratio into heavy-duty pan mixers. High-shear rotating blades ensure micro-silica particles wrap evenly around each mineral aggregate.",
      details: [
        "Automated digital batching eliminating manual error",
        "Uniform distribution of cement paste across fly ash grains",
        "Optimum water-cement ratio for peak compaction density"
      ],
      image: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1000&q=80"
    },
    {
      step: 3,
      number: "03",
      title: "High-Pressure Hydraulic Moulding & Vibration",
      subtitle: "Eliminating Voids for Maximum Compressive Strength",
      desc: "The mixed green mortar enters precision-machined alloy steel mould cavities. High-tonnage hydraulic cylinders apply intense compressive force alongside high-frequency vibration to compact the brick uniformly.",
      details: [
        "Multi-ton hydraulic compaction pressure",
        "Zero honeycombing or structural air cavities",
        "Sharp 90-degree edges and flush rectangular faces"
      ],
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80"
    },
    {
      step: 4,
      number: "04",
      title: "Immediate Green-State Quality Inspection",
      subtitle: "Shift Inspection & Defective Cull",
      desc: "Freshly pressed green bricks are instantly sampled for dimensional accuracy, weight, and handling strength. Any imperfect units are immediately separated and recycled back into the pan mixer.",
      details: [
        "Digital vernier caliper measurement across length, width, and height",
        "Visual check for surface hairline fissures",
        "Immediate rejection protocol preventing defective curing"
      ],
      image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1000&q=80"
    },
    {
      step: 5,
      number: "05",
      title: "Controlled Water Curing Regimen (14–21 Days)",
      subtitle: "Hydration Optimization for Long-Term Durability",
      desc: "Green bricks are placed on heavy-duty wooden/PVC pallets and moved to designated curing bays. Automated water sprinklers maintain continuous humidity for 14 to 21 days, allowing silicate crystals to fully mature.",
      details: [
        "Strict 14 to 21-day hydration schedule",
        "Monitored moisture retention prevents thermal shock",
        "Ensures classified compressive strength (7.5 to 10+ N/mm²)"
      ],
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1000&q=80"
    },
    {
      step: 6,
      number: "06",
      title: "Finished Goods Stacking & Yard Inventory",
      subtitle: "Batch Codification & Ready-for-Sale Storage",
      desc: "Once cured and lab-cleared, bricks are systematically stacked in clean yard bays, codified by production batch date, and marked as Ready for Sale in inventory management records.",
      details: [
        "Palletized neat stacking avoiding corner chipping",
        "Batch traceability linking raw materials to production date",
        "Safe forklift handling onto commercial transport trucks"
      ],
      image: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=1000&q=80"
    },
    {
      step: 7,
      number: "07",
      title: "Fleet Loading, E-Way Documentation & Site Dispatch",
      subtitle: "Direct Transit to Residential & Commercial Sites",
      desc: "Dispatched orders are loaded using mechanical clamps or trained handlers. Each truck is issued an official Delivery Challan and E-Way Bill to ensure transparent, on-time delivery across regional construction sites.",
      details: [
        "Verified truckload counting avoiding site disputes",
        "Secured transit ensuring less than 2% breakage",
        "Flexible 24/7 dispatch scheduling according to pour timings"
      ],
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80"
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* 1. HERO */}
      <PageHero
        kicker="Manufacturing Technology"
        title="Manufacturing Process & Workflow"
        subtitle="A transparent, step-by-step look into how Samruddhi Enterprises transforms thermal pozzolana and mineral aggregates into high-strength Fly Ash Bricks."
        breadcrumb={[{ label: 'Manufacturing Process' }]}
        highlightWord="Manufacturing Process"
        bgImage="https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1600&q=80"
      />

      {/* 2. RAW MATERIALS SECTION */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="Raw Material Integrity"
            title="The 4 Core Elements of Our Fly Ash Bricks"
            subtitle="Premium bricks begin with rigorously verified, unadulterated raw materials sourced from certified industrial suppliers."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessConfig.rawMaterials.map((mat) => (
              <div
                key={mat.id}
                className="p-6 rounded-2xl bg-brand-lightBg border border-brand-line hover:border-brand-gold/60 transition-all hover:bg-white hover:shadow-card flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-brand-goldTint flex items-center justify-center mb-5">
                    {rawMaterialIcons[mat.icon] || <Layers className="w-6 h-6 text-brand-gold" />}
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-brand-goldInk font-bold block mb-1">
                    {mat.source}
                  </span>
                  <h3 className="text-lg font-bold text-brand-navy font-display mb-3">
                    {mat.name}
                  </h3>
                  <p className="text-xs text-brand-text leading-relaxed font-light mb-4">
                    {mat.role}
                  </p>
                </div>
                <div className="pt-3 border-t border-brand-line/60 text-[11px] font-mono text-brand-muted">
                  <strong>Verification:</strong> {mat.specs}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. STEP-BY-STEP DETAILED PROCESS (Visual Storytelling Layout) */}
      <section className="py-20 lg:py-28 bg-brand-lightBg relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="Visual Manufacturing Flow"
            title="From Intake to Final Jobsite Delivery"
            subtitle="Every single brick manufactured at Samruddhi Enterprises follows this certified 7-stage quality journey."
          />

          <div className="space-y-16 lg:space-y-24">
            {fullWorkflow.map((item, idx) => {
              const isEven = idx % 2 === 1;

              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6 }}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Photo Column */}
                  <div className={`lg:col-span-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="relative rounded-2xl overflow-hidden shadow-premium border border-brand-line group">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-brand-navy text-brand-gold font-mono font-black flex items-center justify-center text-base shadow-lg border border-brand-gold/30">
                        {item.number}
                      </div>
                      <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-brand-navyDeep/90 via-transparent to-transparent p-5 text-white">
                        <span className="text-xs font-mono text-brand-gold uppercase">{item.subtitle}</span>
                      </div>
                    </div>
                  </div>

                  {/* Text Column */}
                  <div className={`lg:col-span-6 space-y-5 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded text-xs font-mono font-medium tracking-wider uppercase bg-brand-goldTint text-brand-goldInk border border-brand-gold/30">
                      <span>STAGE {item.number} OF 07</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-navy font-display leading-tight">
                      {item.title}
                    </h3>

                    <p className="text-sm sm:text-base text-brand-text leading-relaxed font-light">
                      {item.desc}
                    </p>

                    <div className="pt-2 space-y-2.5">
                      {item.details.map((detail, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-brand-navy">
                          <CheckCircle className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. PLANNED PRODUCTION CAPACITY HIGHLIGHT */}
      <section className="py-20 bg-brand-navy text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-brand-gold">
                Configurable Production Metric
              </span>
              <h3 className="text-3xl sm:text-4xl font-extrabold font-display leading-tight">
                Planned Output: 30,000 Bricks / Day<span className="dot">.</span>
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed font-light">
                Our plant's mechanical pan-mixers, hydraulic presses, and multi-bay curing yards are engineered to sustain a planned daily throughput of 30,000 bricks, ensuring uninterrupted deliveries to residential and commercial construction contractors.
              </p>
              <p className="text-xs text-slate-400 font-mono">
                *Stated throughput represents planned production capability, subject to final business verification.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-brand-navyCard border border-brand-gold/30 flex flex-col justify-between space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="block text-xs text-slate-400 font-mono">Current Daily Plan:</span>
                  <strong className="text-2xl font-bold text-brand-gold font-display">30,000 Bricks</strong>
                </div>
                <div>
                  <span className="block text-xs text-slate-400 font-mono">Expansion Target:</span>
                  <strong className="text-2xl font-bold text-white font-display">50,000–1,00,000</strong>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <button
                  onClick={onOpenQuote}
                  className="px-6 py-3 rounded-xl bg-brand-gold text-brand-navy font-bold text-xs uppercase tracking-wider hover:bg-brand-goldHover transition-all"
                >
                  Book Production Slot
                </button>
                <Link
                  to="/quality-assurance"
                  className="text-xs text-slate-300 hover:text-brand-gold font-mono flex items-center gap-1"
                >
                  <span>See Quality Testing</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}