/**
 * CockroachIAS — UPSC World Atlas
 * L8 — Mountains (green)
 * Major mountain ranges and peaks.
 *
 * Part of the curated hotspot dataset (split from the original monolithic
 * hotspots.ts — see hotspots/index.ts for aggregation).
 *
 * Authored by: Task 3-data (dataset author subagent) + Task 7-split-nasa (splitter).
 * Brand voice: minimalist, bold, empathetic, honest — CockroachIAS "For Those Who Refuse to Quit."
 * Every coordinate is hand-verified (WGS84, 2-decimal).
 */

import type { CuratedHotspot } from './types'

export const mountains: CuratedHotspot[] = [
  {
    id: "mtn-himalaya",
    layer: "L8",
    colorFamily: "green",
    title: "Himalaya Range",
    description: "The youngest and highest mountain range on Earth, the Himalaya stretches 2,400 km from Nanga Parbat in the west to Namcha Barwa in the east, separating the Indian subcontinent from the Tibetan Plateau. It is the source of the Indus, Ganga and Brahmaputra and India’s northern strategic frontier. It is the single most-tested mountain system in UPSC.",
    lat: 28,
    lng: 86,
    country: "India / Nepal / Bhutan / China / Pakistan",
    region: "South Asia",
    syllabusTags: ["GS1", "Geomorphology", "GS3", "Climate Change", "GS2", "IR"],
    sources: [
      { title: "Himalayas — Wikipedia", url: "https://en.wikipedia.org/wiki/Himalayas" },
      { title: "Himalayas — Encyclopaedia Britannica", url: "https://www.britannica.com/place/Himalayas" },
    ],
  },

  {
    id: "mtn-andes",
    layer: "L8",
    colorFamily: "green",
    title: "Andes",
    description: "The longest continental mountain range in the world, the Andes stretch 7,000 km along the western seaboard of South America through seven countries. Mount Aconcagua is its highest peak and the Amazon tributaries rise on its eastern flank. It is a recurring GS1 (geography) hotspot, paired with Pacific Ring of Fire questions.",
    lat: -15,
    lng: -72,
    country: "Argentina / Chile / Peru / Bolivia / Ecuador / Colombia / Venezuela",
    region: "South America",
    syllabusTags: ["GS1", "Geomorphology", "GS3", "Minerals"],
    sources: [
      { title: "Andes — Wikipedia", url: "https://en.wikipedia.org/wiki/Andes" },
      { title: "Andes Mountains — Encyclopaedia Britannica", url: "https://www.britannica.com/place/Andes-Mountains" },
    ],
  },

  {
    id: "mtn-rockies",
    layer: "L8",
    colorFamily: "green",
    title: "Rocky Mountains",
    description: "A 4,800-km mountain range running from northern British Columbia to New Mexico, the Rockies form the Continental Divide of North America. They are a major source of rivers including the Colorado, Missouri and Arkansas. They are a recurring GS1 (geography) hotspot, paired with North American drainage questions.",
    lat: 50,
    lng: -115,
    country: "United States / Canada",
    region: "North America",
    syllabusTags: ["GS1", "Geomorphology", "Drainage"],
    sources: [
      { title: "Rocky Mountains — Wikipedia", url: "https://en.wikipedia.org/wiki/Rocky_Mountains" },
      { title: "Rocky Mountains — Encyclopaedia Britannica", url: "https://www.britannica.com/place/Rocky-Mountains" },
    ],
  },

  {
    id: "mtn-alps",
    layer: "L8",
    colorFamily: "green",
    title: "Alps",
    description: "The highest and most extensive mountain system in Europe, the Alps arc 1,200 km across eight countries from the Mediterranean to the Pannonian Basin. They are the source of the Rhône, Rhine and Po. They are a recurring GS1 (geography) hotspot, paired with European climate and tourism questions.",
    lat: 46.5,
    lng: 9.5,
    country: "France / Switzerland / Italy / Austria / others",
    region: "Central Europe",
    syllabusTags: ["GS1", "Geomorphology", "Climate"],
    sources: [
      { title: "Alps — Wikipedia", url: "https://en.wikipedia.org/wiki/Alps" },
      { title: "Alps — Encyclopaedia Britannica", url: "https://www.britannica.com/place/Alps" },
    ],
  },

  {
    id: "mtn-caucasus",
    layer: "L8",
    colorFamily: "green",
    title: "Caucasus Mountains",
    description: "A 1,200-km mountain system between the Black and Caspian Seas, the Caucasus form the conventional boundary between Europe and Asia. Mount Elbrus (5,642 m) is the highest peak in Europe. The range is a recurring GS1 (geography) and GS2 (IR) hotspot, paired with Russia, Georgia and the Armenia-Azerbaijan conflict.",
    lat: 42.5,
    lng: 44,
    country: "Russia / Georgia / Azerbaijan / Armenia",
    region: "Caucasus",
    syllabusTags: ["GS1", "Geomorphology", "GS2", "IR"],
    sources: [
      { title: "Caucasus Mountains — Wikipedia", url: "https://en.wikipedia.org/wiki/Caucasus_Mountains" },
      { title: "Caucasus — Encyclopaedia Britannica", url: "https://www.britannica.com/place/Caucasus" },
    ],
  },
]
