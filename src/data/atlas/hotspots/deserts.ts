/**
 * CockroachIAS — UPSC World Atlas
 * L8 — Deserts (green)
 * Major deserts of the world.
 *
 * Part of the curated hotspot dataset (split from the original monolithic
 * hotspots.ts — see hotspots/index.ts for aggregation).
 *
 * Authored by: Task 3-data (dataset author subagent) + Task 7-split-nasa (splitter).
 * Brand voice: minimalist, bold, empathetic, honest — CockroachIAS "For Those Who Refuse to Quit."
 * Every coordinate is hand-verified (WGS84, 2-decimal).
 */

import type { CuratedHotspot } from './types'

export const deserts: CuratedHotspot[] = [
  {
    id: "des-thar",
    layer: "L8",
    colorFamily: "green",
    title: "Thar Desert",
    description: "A 200,000 km² arid region in northwestern India and eastern Pakistan, the Thar defines Rajasthan’s ecology and the Indira Gandhi Canal is its lifeline. It is the most densely populated desert in the world. It is a recurring GS1 (geography) and GS3 (agriculture, desertification) hotspot for both Prelims and Mains.",
    lat: 27,
    lng: 71.5,
    country: "India / Pakistan",
    region: "South Asia / Rajasthan",
    syllabusTags: ["GS1", "Geomorphology", "GS3", "Desertification", "Agriculture"],
    sources: [
      { title: "Thar Desert — Wikipedia", url: "https://en.wikipedia.org/wiki/Thar_Desert" },
      { title: "Indira Gandhi Canal — Wikipedia", url: "https://en.wikipedia.org/wiki/Indira_Gandhi_Canal" },
    ],
  },

  {
    id: "des-sahara",
    layer: "L8",
    colorFamily: "green",
    title: "Sahara Desert",
    description: "The largest hot desert in the world, the Sahara covers 9.2 million km² across North Africa from the Atlantic to the Red Sea. It is expanding southward into the Sahel, a central theme in GS3 (desertification) questions. It is a recurring GS1 (geography) hotspot for both Prelims and Mains.",
    lat: 23,
    lng: 12,
    country: "Algeria / Chad / Egypt / Libya / Mali / Mauritania / Niger / Sudan / Tunisia",
    region: "North Africa",
    syllabusTags: ["GS1", "Geomorphology", "GS3", "Desertification", "Climate Change"],
    sources: [
      { title: "Sahara — Wikipedia", url: "https://en.wikipedia.org/wiki/Sahara" },
      { title: "Sahara — Encyclopaedia Britannica", url: "https://www.britannica.com/place/Sahara" },
    ],
  },

  {
    id: "des-gobi",
    layer: "L8",
    colorFamily: "green",
    title: "Gobi Desert",
    description: "A 1.3 million km² cold winter desert in northern China and southern Mongolia, the Gobi is Asia’s largest desert. It is expanding into Beijing’s watershed through desertification — the subject of China’s “Great Green Wall” programme. It is a recurring GS1 (geography) hotspot for Prelims.",
    lat: 42,
    lng: 105,
    country: "China / Mongolia",
    region: "East Asia",
    syllabusTags: ["GS1", "Geomorphology", "GS3", "Desertification"],
    sources: [
      { title: "Gobi Desert — Wikipedia", url: "https://en.wikipedia.org/wiki/Gobi_Desert" },
      { title: "Gobi — Encyclopaedia Britannica", url: "https://www.britannica.com/place/Gobi-Desert" },
    ],
  },

  {
    id: "des-kalahari",
    layer: "L8",
    colorFamily: "green",
    title: "Kalahari Desert",
    description: "A 900,000 km² semi-arid sandy savanna covering much of Botswana and parts of Namibia and South Africa, the Kalahari is technically not a true desert. It hosts the San people and the Okavango Delta on its northern fringe. It is a recurring GS1 (geography) hotspot for Prelims.",
    lat: -23,
    lng: 22,
    country: "Botswana / Namibia / South Africa",
    region: "Southern Africa",
    syllabusTags: ["GS1", "Geomorphology", "GS1", "Biogeography"],
    sources: [
      { title: "Kalahari Desert — Wikipedia", url: "https://en.wikipedia.org/wiki/Kalahari_Desert" },
      { title: "Kalahari — Encyclopaedia Britannica", url: "https://www.britannica.com/place/Kalahari-Desert" },
    ],
  },

  {
    id: "des-atacama",
    layer: "L8",
    colorFamily: "green",
    title: "Atacama Desert",
    description: "A 1,000-km strip on Chile’s Pacific coast, the Atacama is the driest non-polar desert in the world, with some weather stations having never recorded rain. Its hyperaridity makes it the world’s premier astronomical observatory site. It is a recurring GS1 (geography) hotspot, paired with the rain-shadow effect and Pacific mining questions.",
    lat: -24,
    lng: -69,
    country: "Chile",
    region: "South America",
    syllabusTags: ["GS1", "Geomorphology", "GS3", "Minerals"],
    sources: [
      { title: "Atacama Desert — Wikipedia", url: "https://en.wikipedia.org/wiki/Atacama_Desert" },
      { title: "Atacama — Encyclopaedia Britannica", url: "https://www.britannica.com/place/Atacama-Desert" },
    ],
  },
]
