# Samruddhi Enterprises - Official Business Website

A premium-quality, modern, responsive multi-page business website for **SAMRUDDHI ENTERPRISES**, an Indian Fly Ash Bricks Manufacturing enterprise.

---

## 🏗️ Architecture & References Followed

| Purpose | Reference Site | Implementation Highlights |
| :--- | :--- | :--- |
| **Animations & Interactions** | **Finnect AI** (`https://finnect.org.in/`) | Finnect custom magnetic cursor (`CustomCursor.jsx`), stage HUD status badges, smooth staggered text reveals, animated counter numbers, interactive cards, and glassmorphic header drawer. |
| **Visual Style & Theme** | **Triistic Global** (`https://triistic.netlify.app/`) | Triistic industrial color palette: Warm Amber/Gold (`#ebad21`, `#f2b632`, `#8f6400`, `#fdf4de`), Deep Navy/Midnight (`#03113a`, `#051951`), Slate Charcoal (`#2f313c`, `#3f414f`), geometric gold-accented frames, clean card borders, and bold typography. |
| **Business Inspiration** | **RN Brick & Ritu Bricks** (`rnbrick.com`, `ritubricks.com`) | Brick manufacturing presentation, technical specifications comparison table (Fly Ash vs. Traditional Clay Bricks), 7-stage manufacturing process, and interactive brick quantity calculator. |
| **Business Information** | **Document Extraction** (`SAMRUDDHI SOFTWARE DETAILS.docx`) | Extracted authentic business details: raw materials (Fly Ash, Cement, Stone Dust, Treated Water), planned production capacity (30,000 bricks/day marked for business verification), quality testing parameters, and finished goods inventory flow. No ERP software or tech stack mentions are on the user-facing site. |

---

## 📄 Pages Included

1. **Home (`/`)**:
   - Hero section with split text reveal, primary & secondary CTAs, and live counters.
   - About Samruddhi Enterprises overview with dual-column layout and factory photography.
   - 6 Core Strengths / Why Choose Us cards.
   - Featured Fly Ash Bricks preview with dimension tags.
   - Interactive 6-step manufacturing process overview.
   - Production capacity statistics (30,000 bricks/day configurable).
   - Quality inspection highlights (Compressive strength, water absorption, dimensional tolerance).
   - Construction applications grid.
   - Planning your next project CTA.

2. **About Us (`/about`)**:
   - Comprehensive company background and industrial mission.
   - Manufacturing approach & discipline (Strict Bill of Materials, hydraulic forming, 14–21 day curing).
   - Vision & Mission statements.
   - Quality commitment & long-term client relationships.
   - Scalability roadmap (current 30,000 bricks/day expanding to 50,000–1,00,000 bricks/day).

3. **Our Products (`/products`)**:
   - Standard Modular Fly Ash Brick (`9" × 4" × 3"` / `230 × 110 × 75 mm`).
   - Commercial Load-Bearing Jumbo Brick (`9" × 6" × 3"` / `230 × 150 × 75 mm`).
   - Custom Concrete & Fly Ash Masonry Units.
   - Comprehensive Performance Comparison Table: Fly Ash Bricks vs. Traditional Clay Bricks.
   - Direct quote buttons on every product.

4. **Manufacturing Process (`/manufacturing-process`)**:
   - The 4 core raw materials (Fly Ash, Cement, Quarry Stone Dust, Treated Water).
   - Visual storytelling of the full 7-stage manufacturing workflow:
     1. Raw Material Intake & Gradation Inspection
     2. Computerized Proportioning & Intensive Pan Mixing
     3. High-Pressure Hydraulic Moulding & Vibration
     4. Immediate Green-State Quality Inspection
     5. Controlled Water Curing Regimen (14–21 Days)
     6. Finished Goods Stacking & Yard Inventory
     7. Fleet Loading, E-Way Documentation & Site Dispatch

5. **Quality Assurance (`/quality-assurance`)**:
   - 6 Core testing protocols: Raw Material Purity, Continuous Production Monitoring, Dimensional Caliper Tolerance (±1.5 mm), Compressive Strength Testing (7.5 to 10+ N/mm²), Water Absorption Testing (<15%), and Visual/Soundness Inspection.
   - Strict Batch Rejection & Quarantine Protocol guaranteeing zero sub-standard dispatches.

6. **Gallery (`/gallery`)**:
   - Filterable categorized photo gallery: All Visuals, Fly Ash Bricks, Manufacturing & QC, Factory & Facilities, Raw Materials, Stacking & Dispatch, Construction Projects.
   - Full-featured Lightbox modal with next/prev navigation, zoom, and captions.

7. **Contact Us (`/contact`)**:
   - Direct plant phone, instant WhatsApp link, sales email, and address.
   - Verified client-side validated contact inquiry form with project type and quantity fields.
   - Direct WhatsApp quote generation.
   - Google Maps factory facility embed.

8. **Interactive Quote & Brick Estimator Modal**:
   - Accessible from any page via Header, Hero, Product Cards, and Footer.
   - Built-in Wall Masonry Quantity Estimator (calculates bricks needed based on square footage and 4" or 9" wall thickness).
   - Direct WhatsApp quote dispatch.

---

## 🛠️ Technical Stack

- **Framework**: React 18 with Vite
- **Styling**: Tailwind CSS with custom Triistic color tokens and Finnect styling
- **Animations**: Framer Motion & CSS keyframe transitions
- **Icons**: Lucide React
- **Routing**: React Router DOM (v6) with automatic `ScrollToTop`
- **SEO**: Dynamic metadata, OpenGraph tags, JSON-LD Schema.org structured data, `robots.txt`, and `sitemap.xml`.

---

## 🚀 How to Run Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## ⚙️ Configuration File

All business variables (capacity, phone numbers, emails, addresses, brick specifications) are centralized in:
`src/data/businessInfo.js`
This ensures that any operational detail can be updated in a single place without touching UI components.
