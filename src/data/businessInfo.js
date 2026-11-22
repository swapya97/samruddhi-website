// SAMRUDDHI ENTERPRISES - BUSINESS DATA & CONFIGURATION
// Extracted and structured in accordance with business requirements & operational document

export const businessConfig = {
  companyName: "SAMRUDDHI ENTERPRISES",
  tagline: "Building Strong Foundations with Quality Fly Ash Bricks",
  subTagline: "Precision-engineered Fly Ash Bricks delivering structural durability, uniform dimensional accuracy, and sustainable construction across India.",
  
  // Production Statistics (Configurable - marked for business verification)
  stats: {
    dailyCapacity: "30,000",
    dailyCapacityUnit: "Bricks / Day",
    dailyCapacityNote: "Planned production capacity subject to final business verification",
    futureCapacityTarget: "50,000 - 1,00,000+",
    futureCapacityNote: "Targeted phased expansion roadmap",
    curingCycleDays: "14 - 21",
    curingCycleUnit: "Days Curing",
    uniformityRate: "99.2%",
    uniformityNote: "Dimensional accuracy tolerance within ±1.5 mm",
    co2Reduction: "Up to 40%",
    co2ReductionNote: "Compared to conventional kiln-fired clay bricks",
  },

  // Contact Information (Configurable placeholders)
  contact: {
    location: "Industrial Manufacturing Zone, Maharashtra, India",
    addressFull: "[Factory Address / Plot No., Industrial Area, City, State - PIN Code, India]",
    phonePrimary: "+91 98XXX XXXXX",
    phoneSecondary: "+91 94XXX XXXXX",
    whatsappNumber: "919800000000",
    whatsappDisplay: "+91 98XXX XXXXX (WhatsApp Desk)",
    email: "contact@samruddhibricks.in",
    salesEmail: "sales@samruddhibricks.in",
    workingHours: "Monday – Saturday: 8:00 AM – 7:00 PM (IST)",
    dispatchHours: "24/7 Scheduled Fleet Dispatch",
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2613173278896!2d73.914110!3d18.562744!2m3!1f0!2f0!3f0!3m2!1i1024!2f768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDMzJzQ1LjkiTiA3M8KwNTQnNTAuOCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin",
    gstinNote: "GST Registered Enterprise [GSTIN subject to formal business confirmation]"
  },

  // Raw Materials
  rawMaterials: [
    {
      id: "fly-ash",
      name: "Class F / Class C Fly Ash",
      source: "Certified Thermal Power Stations",
      role: "Primary pozzolanic binder providing high silicate content, chemical resistance, and smooth surface texture.",
      specs: "Finely graded, consistent moisture control, low unburnt carbon",
      icon: "Layers"
    },
    {
      id: "cement",
      name: "Ordinary Portland Cement (OPC 43 / 53)",
      source: "Standard High-Grade Cement",
      role: "Critical hydraulic bonding matrix ensuring early handling strength and progressive structural curing.",
      specs: "Controlled batch consumption per standard mix recipe (BOM)",
      icon: "ShieldCheck"
    },
    {
      id: "stone-dust",
      name: "Graded Stone Dust / Quarry Sand",
      source: "Hard Rock Crushing Units",
      role: "Fine mineral aggregate replacing river sand, imparting dimensional solidity, density, and compressive resistance.",
      specs: "0 to 4 mm well-graded micro-aggregates free from clay or organic matter",
      icon: "Box"
    },
    {
      id: "water-additives",
      name: "Treated Water & Hardening Accelerators",
      source: "Regulated On-site Reservoirs",
      role: "Optimizes hydration reaction, uniform compaction density, and reduces water-cement ratio.",
      specs: "Potable standard water, pH regulated, specialized plasticizers",
      icon: "Droplets"
    }
  ],

  // Manufacturing Workflow Steps
  manufacturingSteps: [
    {
      step: 1,
      number: "01",
      title: "Raw Material Selection & Inward Inspection",
      subtitle: "Material Sourcing & Laboratory Verification",
      description: "Rigorous intake testing of Fly Ash, Cement, and Stone Dust for moisture level, sieve gradation, and chemical purity prior to silo storage.",
      keyPoints: ["Weighbridge calibrated intake", "Moisture & silt content test", "Automated silo storage"],
      image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80"
    },
    {
      step: 2,
      number: "02",
      title: "Precision Batching & Homogeneous Mixing",
      subtitle: "Computerized Recipe Proportioning (BOM)",
      description: "Automated pan-mixer blending combining controlled quantities of pozzolana, cementitious binders, and stone aggregate with calibrated water ratios.",
      keyPoints: ["Automated load-cell batching", "High-shear intensive mixing", "Even binder dispersion"],
      image: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80"
    },
    {
      step: 3,
      number: "03",
      title: "High-Pressure Hydraulic Moulding",
      subtitle: "Uniform Compaction & Edge Definition",
      description: "Heavy-duty hydraulic press applying multi-ton compaction force to eliminate micro-voids, producing uniform density and razor-sharp arrises.",
      keyPoints: ["High tonnage hydraulic compression", "Zero honeycomb structural matrix", "Exact dimensional stability"],
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
    },
    {
      step: 4,
      number: "04",
      title: "Systematic Multi-Stage Quality Inspection",
      subtitle: "Immediate Green-State & Batch Verification",
      description: "Each production shift undergoes strict dimension checks, green strength validation, and surface inspection before shifting to curing bays.",
      keyPoints: ["Digital caliper tolerance testing", "Shift-wise batch codification", "Immediate defective cull"],
      image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80"
    },
    {
      step: 5,
      number: "05",
      title: "Controlled Water Curing Regimen",
      subtitle: "Hydration Optimization for Peak Strength",
      description: "Bricks are cured systematically under scheduled water sprinkling or misting for 14 to 21 days to attain designated compressive strength.",
      keyPoints: ["14-21 day monitored hydration", "Even moisture retention", "Long-term strength development"],
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80"
    },
    {
      step: 6,
      number: "06",
      title: "Pallet Stacking, Inventory & Dispatched Fleet",
      subtitle: "Organized Yard Management & Safe Logistics",
      description: "Fully cured, QC-approved bricks are stacked on pallets, cataloged in finished goods inventory, and loaded with mechanical handling for site transit.",
      keyPoints: ["Palletized breakage-free transit", "E-way bill & dispatch documentation", "Reliable fleet transport"],
      image: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=800&q=80"
    }
  ],

  // Quality Assurance Parameters
  qualityTesting: [
    {
      title: "Raw Material Grade Inspection",
      metric: "Intake Purity & Moisture",
      desc: "Every incoming batch of fly ash, cement, and quarry stone dust is verified before silo discharge to avoid contamination.",
      icon: "CheckCircle2"
    },
    {
      title: "Dimensional Uniformity (±1.5 mm)",
      metric: "Length, Width & Height",
      desc: "Precision steel moulds and hydraulic alignment ensure each brick has sharp arrises, parallel faces, and uniform dimensions, reducing plaster and mortar costs by up to 25%.",
      icon: "Ruler"
    },
    {
      title: "Compressive Strength Validation",
      metric: "Classified Load-Bearing (7.5 - 10+ N/mm²)",
      desc: "Hydraulic crushing tests verify load-bearing capacity suitable for multi-storey framed structures, load-bearing masonry, and commercial perimeters.",
      icon: "Gauge"
    },
    {
      title: "Water Absorption Testing",
      metric: "< 15% Absorption Target",
      desc: "Low porosity minimizes dampness penetration, eliminates efflorescence salts, and protects internal wall finishes from moisture stains.",
      icon: "Droplet"
    },
    {
      title: "Visual & Soundness Inspection",
      metric: "Uniform Gray Hue & Metallic Ring",
      desc: "Manual sorting checks for clear metallic ringing sound upon impact, absence of fissures, chipped corners, or soft inclusions.",
      icon: "Eye"
    },
    {
      title: "Batch Rejection & Quarantine Protocol",
      metric: "Zero Sub-standard Dispatch",
      desc: "Any lot failing dimension or strength thresholds is instantly isolated into non-commercial cull inventory, guaranteeing only prime bricks reach client jobsites.",
      icon: "ShieldAlert"
    }
  ],

  // Core Value Propositions / Why Choose Us
  strengths: [
    {
      title: "Quality-Focused Manufacturing",
      desc: "High-tonnage hydraulic compression and engineered pozzolanic batching ensure consistently superior structural strength.",
      icon: "Award"
    },
    {
      title: "Durable Construction Materials",
      desc: "High density and low water absorption shield buildings against thermal stress, efflorescence, and weathering.",
      icon: "Building2"
    },
    {
      title: "Consistent Daily Production",
      desc: "Planned daily capacity of 30,000 bricks ensures sustained supply for large-scale housing projects and commercial contracts.",
      icon: "Zap"
    },
    {
      title: "Rigorous Quality Inspection",
      desc: "Multi-point testing spanning raw materials, dimensional tolerance, and compressive batch sampling.",
      icon: "CheckCircle"
    },
    {
      title: "Reliable Supply & Fleet Logistics",
      desc: "Structured yard inventory, palletized stacking, and coordinated transport ensure on-time delivery at job sites.",
      icon: "Truck"
    },
    {
      title: "Customer-Focused Service",
      desc: "Transparent quotes, project estimation support, dedicated order tracking, and responsive technical assistance.",
      icon: "Users"
    }
  ],

  // Product Catalog Varieties
  products: [
    {
      id: "std-modular",
      name: "High-Strength Fly Ash Brick (Standard Modular)",
      sizeInches: '9" × 4" × 3"',
      sizeMm: "230 mm × 110 mm × 70-75 mm",
      density: "Approx. 1650 - 1850 kg/m³",
      compressiveStrength: "7.5 to 10+ N/mm² (Load Bearing Class)",
      waterAbsorption: "Under 12% - 15%",
      color: "Uniform Industrial Gray",
      bestFor: "Residential walls, multi-storey framing infill, commercial complexes, and boundary walls",
      advantages: [
        "Uniform edges reduce plaster mortar by 20–25%",
        "High compressive strength supports load-bearing structures",
        "Low thermal conductivity improves room cooling efficiency",
        "Free from efflorescence and salt leaching"
      ],
      image: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=800&q=80",
      featured: true
    },
    {
      id: "heavy-duty-9-6",
      name: "Commercial Load-Bearing Fly Ash Brick (9-Inch Jumbo)",
      sizeInches: '9" × 6" × 3"',
      sizeMm: "230 mm × 150 mm × 75 mm",
      density: "Approx. 1750 - 1900 kg/m³",
      compressiveStrength: "10 to 12.5+ N/mm² (Heavy Load)",
      waterAbsorption: "Under 12%",
      color: "Uniform Slate Gray",
      bestFor: "Industrial boundary walls, warehouse partitions, basement retainers, and heavy civil masonry",
      advantages: [
        "Faster wall construction speed with fewer joints",
        "Superior acoustic dampening for industrial zones",
        "Enhanced structural stability for perimeter boundary walls",
        "Consistent factory finish requires minimal joint work"
      ],
      image: "https://images.unsplash.com/photo-1584463699042-3375836a6e2e?auto=format&fit=crop&w=800&q=80",
      featured: true
    },
    {
      id: "fly-ash-pavers",
      name: "Custom Concrete & Fly Ash Masonry Units",
      sizeInches: "Custom Specification",
      sizeMm: "Engineered to client drawings",
      density: "High Compaction Grade",
      compressiveStrength: "Engineered upon order",
      waterAbsorption: "Low Porosity Formulation",
      color: "Industrial Cement Gray",
      bestFor: "Specialized infrastructure, drains, compound perimeters, and institutional infrastructure",
      advantages: [
        "Formulated to custom project specification",
        "Uniform compaction using heavy industrial presses",
        "Volume batch discounts for developer projects",
        "Continuous quality testing per delivery shift"
      ],
      image: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&w=800&q=80",
      featured: false
    }
  ],

  // Construction Applications
  applications: [
    {
      title: "Residential Construction",
      desc: "Ideal for external and partition walls in independent bungalows, row houses, and residential apartment towers, giving smooth plaster surfaces.",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
      tag: "Residential"
    },
    {
      title: "Commercial & Office Buildings",
      desc: "Delivers rapid construction cycles, high acoustic insulation, and thermal efficiency for IT parks, shopping plazas, and institutional facilities.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      tag: "Commercial"
    },
    {
      title: "Industrial Plants & Warehouses",
      desc: "Engineered durability and chemical resistance for industrial shed perimeter walls, godowns, sub-stations, and logistics hubs.",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
      tag: "Industrial"
    },
    {
      title: "Boundary & Compound Walls",
      desc: "Superior weather resistance against monsoon rains and soil moisture, providing durable and cost-effective perimeter protection.",
      image: "https://images.unsplash.com/photo-1584463699042-3375836a6e2e?auto=format&fit=crop&w=800&q=80",
      tag: "Infrastructure"
    },
    {
      title: "Institutional & Public Projects",
      desc: "Certified green materials suitable for government infrastructure, educational complexes, hospitals, and civil structures.",
      image: "https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&w=800&q=80",
      tag: "Public Works"
    }
  ],

  // Comparison: Fly Ash Bricks vs Traditional Clay Bricks
  comparisonData: [
    {
      parameter: "Dimensional Accuracy",
      flyAsh: "Machine-moulded with precise sharp edges (±1.5 mm tolerance)",
      clayBrick: "Manual kiln-fired variations; irregular dimensions & warped faces"
    },
    {
      parameter: "Compressive Strength",
      flyAsh: "Consistently 7.5 to 10+ N/mm² through hydraulic compaction",
      clayBrick: "Variable (approx. 3.5 to 5.0 N/mm²; high breakage rate)"
    },
    {
      parameter: "Plaster & Mortar Savings",
      flyAsh: "Saves 20% to 25% mortar due to smooth faces and flush joints",
      clayBrick: "Requires thick mortar bed (15-20 mm) and heavy plaster coats"
    },
    {
      parameter: "Water Absorption",
      flyAsh: "Low (< 12–15%); resists dampness and seepage",
      clayBrick: "High (often 15%–25%); prone to water logging and efflorescence"
    },
    {
      parameter: "Environmental Footprint",
      flyAsh: "Eco-friendly utilization of thermal byproducts; zero topsoil depletion",
      clayBrick: "Destructive topsoil excavation; high carbon emissions from kilns"
    },
    {
      parameter: "Breakage During Transit",
      flyAsh: "Less than 2% due to uniform internal structural density",
      clayBrick: "Often 8% to 15% transit breakage, leading to material wastage"
    }
  ]
};
