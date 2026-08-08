/**
 * CockroachIAS — UPSC World Atlas
 * L9 — Conflict & Border Zones (red)
 * Disputed & militarised borders.
 *
 * Part of the curated hotspot dataset (split from the original monolithic
 * hotspots.ts — see hotspots/index.ts for aggregation).
 *
 * Authored by: Task 3-data (dataset author subagent) + Task 7-split-nasa (splitter).
 * Brand voice: minimalist, bold, empathetic, honest — CockroachIAS "For Those Who Refuse to Quit."
 * Every coordinate is hand-verified (WGS84, 2-decimal).
 */

import type { CuratedHotspot } from './types'

export const conflicts: CuratedHotspot[] = [
  {
    id: "cnf-loc-kashmir",
    layer: "L9",
    colorFamily: "red",
    title: "Line of Control (Kashmir)",
    description: "The 740-km de facto military control line between India and Pakistan in Jammu & Kashmir, formalised by the 1972 Simla Agreement. Ceasefire violations and infiltration attempts remain a perennial GS2 (IR) and GS3 (internal security) theme. Kargil (1999) and the 2019 Balakot airstrike are recurring Mains references.",
    lat: 34,
    lng: 74.5,
    country: "India / Pakistan",
    region: "South Asia",
    syllabusTags: ["GS2", "IR", "GS3", "Internal Security", "Neighbourhood"],
    sources: [
      { title: "Line of Control — Wikipedia", url: "https://en.wikipedia.org/wiki/Line_of_Control" },
      { title: "Simla Agreement — MEA", url: "https://www.mea.gov.in/bilateral-documents.htm?dtl/5147/Simla_Agreement" },
    ],
  },

  {
    id: "cnf-lac-ladakh",
    layer: "L9",
    colorFamily: "red",
    title: "Line of Actual Control (Ladakh)",
    description: "The 3,488-km de facto border between India and China running from Ladakh to Arunachal Pradesh, the LAC is not mutually agreed in several sectors. The 2020 Galwan clash fundamentally reset India-China relations. It is a top GS2 (IR) and GS3 (internal security) hotspot, paired with the Pangong Tso and Depsang standoffs.",
    lat: 33.5,
    lng: 79,
    country: "India / China",
    region: "South Asia / Himalaya",
    syllabusTags: ["GS2", "IR", "GS3", "Internal Security", "Defence"],
    sources: [
      { title: "Line of Actual Control — Wikipedia", url: "https://en.wikipedia.org/wiki/Line_of_Actual_Control" },
      { title: "2020 China–India skirmishes — Wikipedia", url: "https://en.wikipedia.org/wiki/2020%E2%80%932021_China%E2%80%93India_skirmishes" },
    ],
  },

  {
    id: "cnf-sir-creek",
    layer: "L9",
    colorFamily: "red",
    title: "Sir Creek",
    description: "A 96-km tidal estuary in the Rann of Kutch disputed between India and Pakistan, Sir Creek is one of the eight unresolved items on the composite dialogue. The dispute hinges on whether the boundary lies along the eastern or western bank of the creek. It is a recurring GS2 (IR) hotspot, paired with maritime boundary and fishermen arrests.",
    lat: 23.5,
    lng: 68.2,
    country: "India / Pakistan",
    region: "South Asia",
    syllabusTags: ["GS2", "IR", "Maritime Security", "Neighbourhood"],
    sources: [
      { title: "Sir Creek — Wikipedia", url: "https://en.wikipedia.org/wiki/Sir_Creek" },
      { title: "Sir Creek dispute — MEA", url: "https://www.mea.gov.in/" },
    ],
  },

  {
    id: "cnf-mcmahon",
    layer: "L9",
    colorFamily: "red",
    title: "McMahon Line",
    description: "A 890-km line agreed at the 1914 Simla Convention between British India and Tibet, running from Bhutan to the Isu Razi Pass along the Himalayan crest. India treats it as the legal boundary with China in Arunachal Pradesh, which China claims as “South Tibet.” It is a recurring GS1 (geography) and GS2 (IR) hotspot.",
    lat: 28,
    lng: 95,
    country: "India / China",
    region: "South Asia / Eastern Himalaya",
    syllabusTags: ["GS1", "Geography", "GS2", "IR", "Internal Security"],
    sources: [
      { title: "McMahon Line — Wikipedia", url: "https://en.wikipedia.org/wiki/McMahon_Line" },
      { title: "Simla Convention (1914) — Wikipedia", url: "https://en.wikipedia.org/wiki/Simla_Convention_(1914)" },
    ],
  },

  {
    id: "cnf-durand",
    layer: "L9",
    colorFamily: "red",
    title: "Durand Line",
    description: "A 2,640-km border demarcated in 1893 between British India and Afghanistan, the Durand Line is the modern Pakistan-Afghanistan boundary. Afghanistan has never formally accepted it, and the line bisects Pashtun tribal areas. It is a recurring GS1 (geography) and GS2 (IR) hotspot, paired with terrorism and refugee flows.",
    lat: 33.7,
    lng: 70.3,
    country: "Pakistan / Afghanistan",
    region: "South/Central Asia",
    syllabusTags: ["GS1", "Geography", "GS2", "IR", "GS3", "Internal Security"],
    sources: [
      { title: "Durand Line — Wikipedia", url: "https://en.wikipedia.org/wiki/Durand_Line" },
      { title: "Durand Line — Encyclopaedia Britannica", url: "https://www.britannica.com/topic/Durand-Line" },
    ],
  },

  {
    id: "cnf-korean-dmz",
    layer: "L9",
    colorFamily: "red",
    title: "Korean Demilitarized Zone",
    description: "A 250-km-long, 4-km-wide buffer across the Korean Peninsula established by the 1953 Korean Armistice Agreement. It is the most heavily fortified border in the world and the symbolic fault line of the Cold War in Asia. It is a recurring GS2 (IR) hotspot, paired with the denuclearisation question.",
    lat: 38,
    lng: 127,
    country: "South Korea / North Korea",
    region: "East Asia",
    syllabusTags: ["GS2", "IR", "Nuclear", "GS1", "History"],
    sources: [
      { title: "Korean Demilitarized Zone — Wikipedia", url: "https://en.wikipedia.org/wiki/Korean_Demilitarized_Zone" },
      { title: "Korean War — Wikipedia", url: "https://en.wikipedia.org/wiki/Korean_War" },
    ],
  },

  {
    id: "cnf-donbas",
    layer: "L9",
    colorFamily: "red",
    title: "Donbas Frontline",
    description: "The Donetsk and Luhansk oblasts of eastern Ukraine, contested since 2014 and the principal land theatre of the 2022 Russian invasion. The frontline’s movement shapes NATO posture and global energy prices. It is a recurring GS2 (IR) and GS3 (food and energy security) hotspot.",
    lat: 48,
    lng: 38,
    country: "Ukraine / Russia",
    region: "Eastern Europe",
    syllabusTags: ["GS2", "IR", "GS3", "Food Security", "Energy Security"],
    sources: [
      { title: "Donbas — Wikipedia", url: "https://en.wikipedia.org/wiki/Donbas" },
      { title: "War in Donbas — Wikipedia", url: "https://en.wikipedia.org/wiki/War_in_Donbas" },
    ],
  },

  {
    id: "cnf-golan",
    layer: "L9",
    colorFamily: "red",
    title: "Golan Heights",
    description: "A strategic basalt plateau captured by Israel from Syria in the 1967 Six-Day War and effectively annexed in 1981, the Golan overlookes the Sea of Galilee. The US recognised Israeli sovereignty in 2019. It is a recurring GS2 (IR) hotspot, paired with West Asia geopolitics and water security.",
    lat: 33,
    lng: 35.8,
    country: "Israel / Syria",
    region: "West Asia",
    syllabusTags: ["GS2", "IR", "GS3", "Water Resources"],
    sources: [
      { title: "Golan Heights — Wikipedia", url: "https://en.wikipedia.org/wiki/Golan_Heights" },
      { title: "Golan Heights — Encyclopaedia Britannica", url: "https://www.britannica.com/place/Golan-Heights" },
    ],
  },

  {
    id: "cnf-scs-nine-dash",
    layer: "L9",
    colorFamily: "red",
    title: "South China Sea Nine-Dash Line",
    description: "China’s expansive maritime claim demarcated by a nine-dashed U-shaped line covering most of the South China Sea, rejected by the 2016 Permanent Court of Arbitration ruling. It is the most active maritime flashpoint in the Indo-Pacific. It is a top GS2 (IR) hotspot, paired with the Quad, freedom of navigation and ASEAN centrality.",
    lat: 12,
    lng: 114,
    country: "Disputed (China, Vietnam, Philippines, Malaysia, Brunei, Taiwan)",
    region: "Indo-Pacific",
    syllabusTags: ["GS2", "IR", "Maritime Security", "Quad"],
    sources: [
      { title: "Nine-Dash Line — Wikipedia", url: "https://en.wikipedia.org/wiki/Nine-Dash_Line" },
      { title: "PCA — South China Sea Arbitration", url: "https://pca-cpa.org/en/cases/7/" },
    ],
  },

  {
    id: "cnf-taiwan-strait",
    layer: "L9",
    colorFamily: "red",
    title: "Taiwan Strait Flashpoint",
    description: "The narrow body of water separating China from Taiwan, where Chinese grey-zone exercises and US transits have intensified since 2022. A contingency here would disrupt the global semiconductor supply chain and a large share of maritime trade. It is a top GS2 (IR) and GS3 (economy) hotspot, paired with the One-China policy.",
    lat: 24.5,
    lng: 119.5,
    country: "China / Taiwan",
    region: "East Asia",
    syllabusTags: ["GS2", "IR", "Maritime Security", "GS3", "Economy"],
    sources: [
      { title: "Taiwan Strait — Wikipedia", url: "https://en.wikipedia.org/wiki/Taiwan_Strait" },
      { title: "Cross-Strait relations — Wikipedia", url: "https://en.wikipedia.org/wiki/Cross-Strait_relations" },
    ],
  },
]
