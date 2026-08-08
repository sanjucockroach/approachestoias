/**
 * CockroachIAS — UPSC World Atlas
 * L7 — Canals (red)
 * Man-made maritime shortcuts — Suez, Panama…
 *
 * Part of the curated hotspot dataset (split from the original monolithic
 * hotspots.ts — see hotspots/index.ts for aggregation).
 *
 * Authored by: Task 3-data (dataset author subagent) + Task 7-split-nasa (splitter).
 * Brand voice: minimalist, bold, empathetic, honest — CockroachIAS "For Those Who Refuse to Quit."
 * Every coordinate is hand-verified (WGS84, 2-decimal).
 */

import type { CuratedHotspot } from './types'

export const canals: CuratedHotspot[] = [
  {
    id: "str-suez",
    layer: "L7",
    colorFamily: "red",
    title: "Suez Canal",
    description: "A 193-km sea-level canal through Egypt’s Isthmus of Suez linking Port Said on the Mediterranean with Suez on the Red Sea. Opened in 1869, it carries roughly 12% of global trade and is Egypt’s second-largest forex earner. It is a top GS2 (IR) and GS3 (trade) hotspot, paired with the 2021 Ever Given grounding.",
    lat: 30.5,
    lng: 32.35,
    country: "Egypt",
    region: "West Asia / North Africa",
    syllabusTags: ["GS2", "IR", "GS3", "Trade", "Maritime Security"],
    sources: [
      { title: "Suez Canal — Wikipedia", url: "https://en.wikipedia.org/wiki/Suez_Canal" },
      { title: "Suez Canal Authority", url: "https://www.suezcanal.gov.eg/" },
    ],
  },

  {
    id: "str-panama",
    layer: "L7",
    colorFamily: "red",
    title: "Panama Canal",
    description: "An 82-km lock canal across the Isthmus of Panama linking the Atlantic and Pacific Oceans, opened in 1914 and expanded in 2016. It carries roughly 5% of global maritime trade. Climate-driven drought and Chinese port concessions have pushed it back into GS2 (IR) current affairs.",
    lat: 9.1,
    lng: -79.7,
    country: "Panama",
    region: "Central America",
    syllabusTags: ["GS2", "IR", "GS3", "Trade", "GS1", "Geography"],
    sources: [
      { title: "Panama Canal — Wikipedia", url: "https://en.wikipedia.org/wiki/Panama_Canal" },
      { title: "Panama Canal Authority", url: "https://pancanal.com/en/" },
    ],
  },
]
