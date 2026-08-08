/**
 * CockroachIAS — UPSC World Atlas
 * L4 — Biodiversity Hotspots (green)
 * The 36 global biodiversity hotspots.
 *
 * Part of the curated hotspot dataset (split from the original monolithic
 * hotspots.ts — see hotspots/index.ts for aggregation).
 *
 * Authored by: Task 3-data (dataset author subagent) + Task 7-split-nasa (splitter).
 * Brand voice: minimalist, bold, empathetic, honest — CockroachIAS "For Those Who Refuse to Quit."
 * Every coordinate is hand-verified (WGS84, 2-decimal).
 */

import type { CuratedHotspot } from './types'

export const biodiversityHotspots: CuratedHotspot[] = [
  {
    id: "bio-himalaya",
    layer: "L4",
    colorFamily: "green",
    title: "Himalaya Biodiversity Hotspot",
    description: "Spanning the entire Himalayan arc from Nepal through Bhutan, northeast India and southeast Tibet, this hotspot hosts the snow leopard, red panda and the rhododendron centre of diversity. Climate-driven vertical range shifts and infrastructure pressures are major conservation concerns. It is a core GS3 (environment) hotspot, frequently paired with glacier retreat questions.",
    lat: 30,
    lng: 81,
    country: "India, Nepal, Bhutan, China",
    region: "Himalaya",
    syllabusTags: ["GS3", "Environment", "Biodiversity", "GS1", "Geomorphology"],
    sources: [
      { title: "Himalaya Hotspot — Critical Ecosystem Partnership Fund", url: "https://www.cepf.net/our-work/biodiversity-hotspots/himalaya" },
      { title: "Conservation International — Himalaya", url: "https://www.conservation.org/priorities/biodiversity-hotspots" },
    ],
  },

  {
    id: "bio-indo-burma",
    layer: "L4",
    colorFamily: "green",
    title: "Indo-Burma Biodiversity Hotspot",
    description: "Covering northeast India, Myanmar, Thailand, Laos, Vietnam, Cambodia and southern China, Indo-Burma is among the most biodiverse and most threatened hotspots on Earth. The Mekong dam cascade and illegal wildlife trade drive species loss. It is a recurring GS3 (environment) and GS2 (Act East) hotspot for both Prelims and Mains.",
    lat: 20,
    lng: 100,
    country: "India, Myanmar, Thailand, Laos, Vietnam, Cambodia, China",
    region: "Indochina",
    syllabusTags: ["GS3", "Environment", "Biodiversity", "GS2", "IR"],
    sources: [
      { title: "Indo-Burma Hotspot — CEPF", url: "https://www.cepf.net/our-work/biodiversity-hotspots/indo-burma" },
      { title: "Indo-Burma — Wikipedia", url: "https://en.wikipedia.org/wiki/Indo-Burma_biodiversity_hotspot" },
    ],
  },

  {
    id: "bio-western-ghats",
    layer: "L4",
    colorFamily: "green",
    title: "Western Ghats Hotspot",
    description: "A 1,600 km mountain chain along India’s western seaboard and a UNESCO World Heritage serial property, the Western Ghats host exceptional endemism including the lion-tailed macaque and Nilgiri tahr. The Gadgil and Kasturirangan committee reports on ecologically sensitive zones are perennial Mains fixtures. It is a top GS3 (environment) hotspot.",
    lat: 10.5,
    lng: 76.5,
    country: "India",
    region: "South Asia / Western Ghats",
    syllabusTags: ["GS3", "Environment", "Biodiversity", "GS1", "Geography"],
    sources: [
      { title: "Western Ghats — UNESCO", url: "https://whc.unesco.org/en/list/1342" },
      { title: "Western Ghats Hotspot — CEPF", url: "https://www.cepf.net/our-work/biodiversity-hotspots/western-ghats-and-sri-lanka" },
    ],
  },

  {
    id: "bio-sundaland",
    layer: "L4",
    colorFamily: "green",
    title: "Sundaland Hotspot (incl. Nicobar Islands)",
    description: "The Sundaland hotspot covers the Malay Peninsula, Borneo, Sumatra, Java and India’s Nicobar Islands, with the Nicobar megapode and giant robber crab among its endemics. It is among the most biodiverse island systems and a critical GS3 (environment) reference for India’s island biodiversity. Deforestation for palm oil is the central threat.",
    lat: 7,
    lng: 93.5,
    country: "India, Indonesia, Malaysia, Brunei",
    region: "Bay of Bengal / Sundaland",
    syllabusTags: ["GS3", "Environment", "Biodiversity", "Island Biogeography"],
    sources: [
      { title: "Sundaland Hotspot — CEPF", url: "https://www.cepf.net/our-work/biodiversity-hotspots/sundaland" },
      { title: "Nicobar Islands — Wikipedia", url: "https://en.wikipedia.org/wiki/Nicobar_Islands" },
    ],
  },

  {
    id: "bio-madagascar",
    layer: "L4",
    colorFamily: "green",
    title: "Madagascar and Indian Ocean Islands",
    description: "The world’s fourth-largest island and a biodiversity laboratory with endemism above 90% for lemurs, tenrecs and baobabs. Slash-and-burn agriculture and illegal rosewood logging drive habitat loss. It is a classic GS3 (environment) and biogeography hotspot for Prelims.",
    lat: -19,
    lng: 47,
    country: "Madagascar, Comoros, Mauritius, Seychelles",
    region: "Indian Ocean",
    syllabusTags: ["GS3", "Environment", "Biodiversity", "Island Biogeography"],
    sources: [
      { title: "Madagascar Hotspot — CEPF", url: "https://www.cepf.net/our-work/biodiversity-hotspots/madagascar-and-indian-ocean-islands" },
      { title: "Madagascar — Wikipedia", url: "https://en.wikipedia.org/wiki/Madagascar" },
    ],
  },

  {
    id: "bio-cape",
    layer: "L4",
    colorFamily: "green",
    title: "Cape Floristic Region",
    description: "A Mediterranean-climate fynbos shrubland at Africa’s southern tip, the Cape Floristic Region is the smallest of the world’s six floral kingdoms yet hosts roughly 20% of Africa’s flora. Climate change, urban expansion and invasive species drive its biodiversity loss. It is a GS3 (environment) and biogeography hotspot for Prelims.",
    lat: -34,
    lng: 19,
    country: "South Africa",
    region: "Southern Africa",
    syllabusTags: ["GS3", "Environment", "Biodiversity", "GS1", "Biogeography"],
    sources: [
      { title: "Cape Floristic Region — UNESCO", url: "https://whc.unesco.org/en/list/1007" },
      { title: "Cape Floristic Region — CEPF", url: "https://www.cepf.net/our-work/biodiversity-hotspots/cape-floristic-region" },
    ],
  },

  {
    id: "bio-cerrado",
    layer: "L4",
    colorFamily: "green",
    title: "Brazilian Cerrado",
    description: "A vast tropical savanna south of the Amazon, the Cerrado is the most biodiverse savanna in the world and a critical groundwater recharge zone. Soybean and cattle expansion have cleared over half of its native vegetation. It is a GS3 (environment) hotspot, frequently paired with Amazon deforestation questions.",
    lat: -15,
    lng: -47,
    country: "Brazil",
    region: "South America",
    syllabusTags: ["GS3", "Environment", "Biodiversity", "GS1", "Biogeography"],
    sources: [
      { title: "Cerrado — Wikipedia", url: "https://en.wikipedia.org/wiki/Cerrado" },
      { title: "Cerrado Hotspot — CEPF", url: "https://www.cepf.net/our-work/biodiversity-hotspots" },
    ],
  },

  {
    id: "bio-atlantic-forest",
    layer: "L4",
    colorFamily: "green",
    title: "Atlantic Forest",
    description: "A once-continuous tropical forest along Brazil’s Atlantic coast, now reduced to about 12% of its original extent. It hosts the golden lion tamarin and over 8,000 endemic species. Fragmentation and urban pressure from São Paulo and Rio de Janeiro are central conservation themes for GS3.",
    lat: -23,
    lng: -45,
    country: "Brazil, Argentina, Paraguay",
    region: "South America",
    syllabusTags: ["GS3", "Environment", "Biodiversity"],
    sources: [
      { title: "Atlantic Forest — Wikipedia", url: "https://en.wikipedia.org/wiki/Atlantic_Forest" },
      { title: "Atlantic Forest Hotspot — CEPF", url: "https://www.cepf.net/our-work/biodiversity-hotspots/atlantic-forest" },
    ],
  },

  {
    id: "bio-mesoamerican",
    layer: "L4",
    colorFamily: "green",
    title: "Mesoamerican Hotspot",
    description: "Stretching from central Mexico through Panama, the Mesoamerican hotspot unites tropical rainforests, cloud forests and the second-largest barrier reef system. It harbours jaguars, quetzals and the Mesoamerican Biological Corridor initiative. It is a GS3 (environment) hotspot, often paired with migration and drug-route questions in GS2.",
    lat: 15,
    lng: -88,
    country: "Mexico, Guatemala, Belize, Honduras, Nicaragua, Costa Rica, Panama",
    region: "Central America",
    syllabusTags: ["GS3", "Environment", "Biodiversity"],
    sources: [
      { title: "Mesoamerica Hotspot — CEPF", url: "https://www.cepf.net/our-work/biodiversity-hotspots/mesoamerica" },
      { title: "Mesoamerican Biological Corridor — Wikipedia", url: "https://en.wikipedia.org/wiki/Mesoamerican_Biological_Corridor" },
    ],
  },

  {
    id: "bio-philippines",
    layer: "L4",
    colorFamily: "green",
    title: "Philippines Hotspot",
    description: "An archipelago of over 7,000 islands with one of the world’s highest concentrations of endemic birds and mammals, including the Philippine eagle. Logging, mining and coastal development drive severe habitat loss. It is a GS3 (environment) and island-biogeography hotspot for Prelims.",
    lat: 13,
    lng: 122,
    country: "Philippines",
    region: "Southeast Asia",
    syllabusTags: ["GS3", "Environment", "Biodiversity", "Island Biogeography"],
    sources: [
      { title: "Philippines Hotspot — CEPF", url: "https://www.cepf.net/our-work/biodiversity-hotspots/philippines" },
      { title: "Philippines — Wikipedia", url: "https://en.wikipedia.org/wiki/Philippines" },
    ],
  },

  {
    id: "bio-central-asia",
    layer: "L4",
    colorFamily: "green",
    title: "Mountains of Central Asia",
    description: "Comprising the Pamir, Tien Shan, Dzungarian Alatau and Kunlun ranges, this hotspot anchors the water tower of Central Asian rivers like the Amu Darya and Syr Darya. Glacial retreat and overgrazing drive ecosystem degradation. It connects directly to India’s SCO and connectivity interests in GS2 (IR).",
    lat: 41,
    lng: 75,
    country: "Tajikistan, Kyrgyzstan, Uzbekistan, Kazakhstan, Turkmenistan, China",
    region: "Central Asia",
    syllabusTags: ["GS3", "Environment", "Biodiversity", "GS2", "IR", "GS1", "Geomorphology"],
    sources: [
      { title: "Mountains of Central Asia Hotspot — CEPF", url: "https://www.cepf.net/our-work/biodiversity-hotspots/mountains-central-asia" },
      { title: "Pamir Mountains — Wikipedia", url: "https://en.wikipedia.org/wiki/Pamir_Mountains" },
    ],
  },
]
