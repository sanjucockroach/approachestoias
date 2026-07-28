# CockroachIAS — For Those Who Refused to Quit

CockroachIAS is a premium, empathy-driven companion platform engineered specifically for UPSC Civil Services Examination (CSE) aspirants. Breaking away from corporate coaching formulas and high upfront commercial paywalls, CockroachIAS stands as a supportive, honest mentor, offering interactive cognitive instruments and conceptual pathways to protect student dignity and foster unbreakable resilience.

---

## 🚀 Key Modules & Features

### 🏛️ The Mains Suite
- **Mains PYQ Analysis Engine (`/mains-pyq`):** A sophisticated diagnostic library organizing UPSC Mains GS Questions (2013-2025). Classifies questions by paper (GS 1–4), year, and cognitive demand levels, with structured study tracks.
- **Mains Theme-Wise Analysis (`/mains-themes`):** Aggregates and displays mains syllabus topics broken down by recurring themes, past year frequency, trend trajectories, and focus areas to optimize study prioritization.
- **Mains Cockroach Answers (`/mains-answers`):** Features "Cockroach Answers" — high-scoring model answers crafted by ex-aspirants. Emphasizes structured frameworks (Introduction, Sub-headings, Body Arguments, Case Studies, and forward-looking Conclusions) with highlighted text markers for key concepts, data points, and committee quotes.
- **Mains Deck of Cards (Facts) GS 1, 2, 3:** A premium physical study aid listing high-yield statistics, historical timelines, SC judgments, and active recall card diagrams for mains answer mapping.

### 💼 Administrative Integrity Workspace
- **Governance Pioneers (`/administrative-pioneers`):** A curated library of 59 real-life case studies of exemplary civil servants (e.g., T. N. Seshan, Vinod Rai, U. Sagayam). Mapped directly to core ethical values (Integrity, Moral Courage, Rule of Law) and featuring searchable, filterable grid/table views with detailed slide-over briefing panels. Ideal for GS Paper IV and Essay substantiation.
- **Mythology for Ethics (`/mythology-ethics`):** An interactive database of 73 classic moral dilemmas from Indian Epics (Mahabharata, Ramayana, Upanishads) and world traditions (Greek, Christian, Norse, etc.). Utilizes a premium 3D card-flipping interface providing context, core dilemmas, modern administrative parallels, and direct "quote-ready" copying scripts.

### 🧭 Interactive Cognitive Instruments
- **UPSC Syllabus Metro Map (`/metro-map`):** An interactive, station-by-station visualization mapping every segment of the UPSC CSE syllabus to micro-themes, recommended reading sources, exam weightage, and critical MCQ trap patterns.
- **UPSC Prelims PYQ Analysis Engine (`/pyq-analysis`):** Decodifies 12 years (2014-2025) of Prelims questions by cognitive demand levels (factual, conceptual, analytical), trap types (extreme word traps, dual options), and detailed ex-aspirant logical diagnoses.
- **Constitution Explorer (`/constitution-explorer`):** An interactive catalog detailing the parts, schedules, and key articles of the Constitution of India, designed for quick retrieval and syllabus correlation.
- **India Samvad Map (`/samvad`):** A GeoJSON-driven interactive map depicting regional preparation realities and connecting aspirants nationwide to customized mentoring threads.
- **Indigenous 3D Atlas (3d-atlas.cockroachias.com):** An interactive 3D WebGL-based visualization mapping critical geographical regions, environmental hotspots, and historical mapping parameters.

### 🤝 Mental & Navigational Support
- **Aspirant SOS Portal:** A 24/7 emergency support panel offering grounding exercises, mindfulness timers, and reassuring guidance during high-stakes preparation pressure.
- **Floating Chatbot Companion:** A branded, rule-based Q&A chatbot featuring name-guessing interactions, custom avatars, and direct links to courses, maps, and databases.

---

## 🛠️ Technology Stack

- **Core Library:** React 19 (Single Page Application architecture)
- **Development Tooling & Bundling:** Vite 6
- **Programming Language:** TypeScript & JavaScript
- **Styling:** CSS3, custom design systems, and Tailwind CSS v4
- **Animations:** Framer Motion (`motion/react`) for fluid transitions, page entry animations, and 3D card flips
- **Icons:** Phosphor Icons (`@phosphor-icons/react`)
- **Interactive Maps:** Simple Maps React (`react-simple-maps`) & D3-geo for spatial visualizations

---

## 📂 Project Architecture

```bash
cockroachias/
├── public/                  # Static assets and site icons
├── src/
│   ├── assets/              # Branding graphics, illustrations, and logos
│   ├── components/          # Reusable shell layout structures & global components
│   │   ├── Header.tsx       # Navigation bar with interactive dropdowns
│   │   ├── Footer.tsx       # Brand values & covenant guidelines
│   │   ├── Chatbot.tsx      # Floating rule-based companion chatbot
│   │   ├── IndiaMapSection.tsx # D3-driven interactive map of India
│   │   └── pyq/             # Sub-components for Prelims/Mains PYQ dashboards
│   ├── data/                # Core JSON databases & datasets
│   │   ├── administrativePioneers.json # 59 exemplary civil servant profiles (flat array)
│   │   ├── mythologyEthics.json        # 73 epic & world ethical dilemmas (flat array)
│   │   ├── Cockroachmainsanswers/      # Contains mains model answer JSONs (e.g., 2025gs.json)
│   │   ├── prelimsPYQs/                # Prelims data segmented by year/subject
│   │   ├── data.ts                     # Static landing page content & traits
│   │   └── index.ts                    # Global data exports
│   ├── pages/               # Main route-level pages and interactive screens
│   │   ├── Home.tsx         # Branded homepage & resilience quiz
│   │   ├── AboutUs.tsx      # Platform manifesto & Allies Council profiles
│   │   ├── Contact.tsx      # Mental health support, SOS timer & ticket forms
│   │   ├── Resources.tsx    # Portal hub categorizing Prelims, Mains, and Integrity tools
│   │   ├── ConstitutionExplorerPage.tsx # Indian Constitution lookup index
│   │   ├── AdministrativePioneersPage.tsx # Governance Pioneers Case Library
│   │   ├── MythologyEthicsPage.tsx # 3D Mythology for Ethics dilemma cards
│   │   ├── PYQAnalysisPage.jsx # Prelims PYQ diagnostic console
│   │   ├── UPSCMetroMapPage.jsx # Station-by-station syllabus map
│   │   ├── MainsPYQAnalysisPage.tsx # Mains PYQ diagnostic console
│   │   ├── MainsThemeWiseAnalysisPage.tsx # Mains Syllabus theme matrix
│   │   └── MainsCockroachAnswersPage.tsx # Mains High-Scoring answers platform
│   ├── services/            # Mock analytics & feedback telemetry services
│   ├── types/               # Global TypeScript definitions & schemas
│   │   └── index.ts
│   ├── App.tsx              # Application layout router & view transitions
│   ├── main.tsx             # Application entry point & mounting
│   └── index.css            # Tailored dark-mode CSS variables & card flip styles
├── index.html               # Main index file with SEO meta tags & favicons
├── package.json             # NPM dependencies & deployment scripts
├── vite.config.ts           # Vite configurations
└── tsconfig.json            # TypeScript compiler parameters
```

---

## 💻 Local Development

### Prerequisites
- Node.js (version 18+ recommended)
- npm (Node Package Manager)

### Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Saraththecoder/update.git
   cd update
   ```

2. **Install dependencies:**
   ```bash
   npm install --legacy-peer-deps
   ```
   *(Note: The `--legacy-peer-deps` flag is recommended to resolve version peer conflicts between React 19 and older third-party map libraries).*

3. **Start the local development server:**
   ```bash
   npm run dev
   ```

5. **Verify execution:**
   Open your browser and navigate to [http://localhost:3000](http://localhost:3000) (or the active port displayed in your terminal).

### Production Build

To compile and optimize the codebase for deployment:
```bash
npm run build
```
This command triggers the Vite builder, checks types, compiles code, and outputs a minified, production-ready static bundle inside the `/dist` directory. This directory is ready to be served by any static hosting provider (e.g., Netlify, Vercel, or AWS S3).