/**
 * CockroachIAS — UPSC World Atlas
 * L7 — Straits (red)
 * Maritime chokepoints — Hormuz, Malacca, Bosphorus…
 *
 * Part of the curated hotspot dataset (split from the original monolithic
 * hotspots.ts — see hotspots/index.ts for aggregation).
 *
 * Authored by: Task 3-data (dataset author subagent) + Task 7-split-nasa (splitter).
 * Brand voice: minimalist, bold, empathetic, honest — CockroachIAS "For Those Who Refuse to Quit."
 * Every coordinate is hand-verified (WGS84, 2-decimal).
 */

import type { CuratedHotspot } from './types'

export const straits: CuratedHotspot[] = [
  {
    id: "str-palk",
    layer: "L7",
    colorFamily: "red",
    title: "Palk Strait",
    description: "A shallow strait between Tamil Nadu and northern Sri Lanka, the Palk Strait is complicated by the Ram Sethu (Adam’s Bridge) and the Sethusamudram shipping canal project. Katchatheevu island and fishermen arrests recur in GS2 (IR). It is a recurring GS1 (geography) and GS2 (IR) hotspot for both Prelims and Mains.",
    lat: 10,
    lng: 79.8,
    country: "India / Sri Lanka",
    region: "South Asia / Indian Ocean",
    syllabusTags: ["GS1", "Geography", "GS2", "IR", "Neighbourhood"],
    sources: [
      { title: "Palk Strait — Wikipedia", url: "https://en.wikipedia.org/wiki/Palk_Strait" },
      { title: "Sethusamudram Shipping Canal Project — Wikipedia", url: "https://en.wikipedia.org/wiki/Sethusamudram_Shipping_Canal_Project" },
    ],
  },

  {
    id: "str-hormuz",
    layer: "L7",
    colorFamily: "red",
    title: "Strait of Hormuz",
    description: "A narrow chokepoint between Oman and Iran through which roughly one-fifth of the world’s daily oil consumption flows. It is the lifeline of Gulf petroleum exports to Asia and the most surveilled maritime bottleneck on Earth. It is a top GS2 (IR) and GS3 (energy security) hotspot for both Prelims and Mains.",
    lat: 26.57,
    lng: 56.25,
    country: "Oman / Iran",
    region: "West Asia / Persian Gulf",
    syllabusTags: ["GS2", "IR", "GS3", "Energy Security", "Maritime Security"],
    sources: [
      { title: "Strait of Hormuz — Wikipedia", url: "https://en.wikipedia.org/wiki/Strait_of_Hormuz" },
      { title: "Strait of Hormuz — EIA", url: "https://www.eia.gov/international/analysis/topics-of-interest/hormuz" },
    ],
  },

  {
    id: "str-malacca",
    layer: "L7",
    colorFamily: "red",
    title: "Strait of Malacca",
    description: "A 850-km strait between Malaysia and Indonesia, the Strait of Malacca is the primary sea lane connecting the Indian Ocean with the South China Sea and Pacific. Roughly 40% of global trade by value transits it. It is a top GS2 (IR) hotspot, paired with piracy, China’s String of Pearls and India’s Andaman posture.",
    lat: 2.5,
    lng: 101.5,
    country: "Malaysia / Indonesia / Singapore",
    region: "Southeast Asia",
    syllabusTags: ["GS2", "IR", "Maritime Security", "GS3", "Trade"],
    sources: [
      { title: "Strait of Malacca — Wikipedia", url: "https://en.wikipedia.org/wiki/Strait_of_Malacca" },
      { title: "Malacca Strait — Encyclopaedia Britannica", url: "https://www.britannica.com/place/Strait-of-Malacca" },
    ],
  },

  {
    id: "str-taiwan",
    layer: "L7",
    colorFamily: "red",
    title: "Taiwan Strait",
    description: "A 180-km strait between China and Taiwan carrying a large share of global container traffic. It is the most likely theatre of a US-China maritime conflict and a recurring GS2 (IR) hotspot. India’s semiconductor and supply-chain exposure makes it directly relevant to GS3 (economy).",
    lat: 25,
    lng: 119.5,
    country: "China / Taiwan",
    region: "East Asia",
    syllabusTags: ["GS2", "IR", "Maritime Security", "GS3", "Economy"],
    sources: [
      { title: "Taiwan Strait — Wikipedia", url: "https://en.wikipedia.org/wiki/Taiwan_Strait" },
      { title: "Taiwan Strait — CFR", url: "https://www.cfr.org/global-conflict-tracker" },
    ],
  },

  {
    id: "str-bosphorus",
    layer: "L7",
    colorFamily: "red",
    title: "Bosphorus Strait",
    description: "A 31-km strait bisecting Istanbul and linking the Black Sea with the Sea of Marmara, the Bosphorus is the only warm-water outlet for Black Sea navies and grain exports. It is governed by the 1936 Montreux Convention. It is a recurring GS2 (IR) hotspot, paired with the Ukraine war grain corridor.",
    lat: 41.12,
    lng: 29.08,
    country: "Türkiye",
    region: "Western Asia / Black Sea",
    syllabusTags: ["GS2", "IR", "Maritime Security", "GS3", "Food Security"],
    sources: [
      { title: "Bosphorus — Wikipedia", url: "https://en.wikipedia.org/wiki/Bosphorus" },
      { title: "Montreux Convention — Wikipedia", url: "https://en.wikipedia.org/wiki/Montreux_Convention" },
    ],
  },

  {
    id: "str-gibraltar",
    layer: "L7",
    colorFamily: "red",
    title: "Strait of Gibraltar",
    description: "A 14-km strait between Spain and Morocco linking the Atlantic with the Mediterranean, the Strait of Gibraltar is the gateway to southern Europe and a major migration crossing. The British overseas territory of Gibraltar commands its northern shore. It is a recurring GS1 (geography) and GS2 (IR) hotspot for Prelims.",
    lat: 35.95,
    lng: -5.6,
    country: "Spain / Morocco / UK",
    region: "Western Mediterranean",
    syllabusTags: ["GS1", "Geography", "GS2", "IR", "Migration"],
    sources: [
      { title: "Strait of Gibraltar — Wikipedia", url: "https://en.wikipedia.org/wiki/Strait_of_Gibraltar" },
      { title: "Gibraltar — Encyclopaedia Britannica", url: "https://www.britannica.com/place/Strait-of-Gibraltar" },
    ],
  },

  {
    id: "str-babelmandeb",
    layer: "L7",
    colorFamily: "red",
    title: "Bab-el-Mandeb Strait",
    description: "A 26-km strait between the Horn of Africa and the Arabian Peninsula linking the Red Sea with the Gulf of Aden, Bab-el-Mandeb is the southern gate of the Suez route. Houthi attacks since 2023 have made it a top maritime chokepoint risk. It is a recurring GS2 (IR) and GS3 (energy security) hotspot.",
    lat: 12.6,
    lng: 43.4,
    country: "Djibouti / Yemen / Eritrea",
    region: "West Asia / Horn of Africa",
    syllabusTags: ["GS2", "IR", "Maritime Security", "GS3", "Energy Security"],
    sources: [
      { title: "Bab-el-Mandeb Strait — Wikipedia", url: "https://en.wikipedia.org/wiki/Bab-el-Mandeb" },
      { title: "Bab el-Mandeb — EIA", url: "https://www.eia.gov/international/analysis/topics-of-interest/bab-el-mandeb" },
    ],
  },

  {
    id: "str-bering",
    layer: "L7",
    colorFamily: "red",
    title: "Bering Strait",
    description: "An 85-km strait between Russia’s Chukchi Peninsula and Alaska’s Seward Peninsula linking the Arctic and Pacific Oceans. It is the maritime boundary between the US and Russia and a future trans-Arctic shipping route as ice recedes. It is a recurring GS1 (geography) and GS2 (IR) hotspot, paired with Arctic geopolitics.",
    lat: 65.8,
    lng: -169,
    country: "Russia / United States",
    region: "Arctic / North Pacific",
    syllabusTags: ["GS1", "Geography", "GS2", "IR", "Climate Change"],
    sources: [
      { title: "Bering Strait — Wikipedia", url: "https://en.wikipedia.org/wiki/Bering_Strait" },
      { title: "Bering Strait — Encyclopaedia Britannica", url: "https://www.britannica.com/place/Bering-Strait" },
    ],
  },

  {
    id: "str-magellan",
    layer: "L7",
    colorFamily: "red",
    title: "Strait of Magellan",
    description: "A 570-km navigable strait through southern Chile separating mainland South America from Tierra del Fuego, the Strait of Magellan was the principal pre-Panama shipping route between the Atlantic and Pacific. It remains a strategic alternative to the Panama Canal. It is a recurring GS1 (geography) hotspot for Prelims.",
    lat: -53.5,
    lng: -70,
    country: "Chile / Argentina",
    region: "South America",
    syllabusTags: ["GS1", "Geography", "Maritime Security"],
    sources: [
      { title: "Strait of Magellan — Wikipedia", url: "https://en.wikipedia.org/wiki/Strait_of_Magellan" },
      { title: "Strait of Magellan — Encyclopaedia Britannica", url: "https://www.britannica.com/place/Strait-of-Magellan" },
    ],
  },
]
