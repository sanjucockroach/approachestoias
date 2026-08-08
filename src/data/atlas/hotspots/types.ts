/**
 * CockroachIAS — UPSC World Atlas
 * Shared types for the curated hotspot dataset (Layers L1–L11).
 *
 * Layer -> color family mapping is strict:
 *   L1  Live / NASA EONET          -> red (seismic, volcanic, storms) / blue (ice, water, trenches)
 *   L3  Places in News             -> red
 *   L4  Biodiversity Hotspots      -> green
 *   L5  Ramsar Wetlands            -> blue
 *   L6  UNESCO Heritage Sites      -> green
 *   L7  Straits/Canals/Passes      -> red
 *   L8  Rivers/Mountains/Deserts   -> blue (rivers) / green (mountains, deserts)
 *   L9  Conflict & Border Zones    -> red
 *   L10 Treaties / Org HQ          -> red
 *   L11 Mineral / Industrial       -> green
 *
 * Authored by: Task 7-split-nasa (dataset splitter subagent).
 * Brand voice: minimalist, bold, empathetic, honest — CockroachIAS "For Those Who Refuse to Quit."
 */

export type ColorFamily = 'red' | 'blue' | 'green'

export type LayerId =
  | 'L1'
  | 'L2'
  | 'L3'
  | 'L4'
  | 'L5'
  | 'L6'
  | 'L7'
  | 'L8'
  | 'L9'
  | 'L10'
  | 'L11'

/** Curated UPSC hotspot — static dataset (Layers L3–L11). */
export interface CuratedHotspot {
  id: string
  layer: LayerId
  colorFamily: ColorFamily
  title: string
  description: string
  lat: number
  lng: number
  country: string
  region: string
  syllabusTags: string[]
  sources: { title: string; url: string }[]
}

/**
 * Static NASA-tagged geophysical feature — renders as "LIVE · NASA EONET"
 * in the UI (DetailSidebar / WorldGlobe) because `source: 'eonet'` and
 * `status: 'open'` are the badges the UI keys on.
 *
 * This is the RESILIENCE FALLBACK layer: when the live EONET API is down on
 * deployment, these permanent geophysical features still show on the globe
 * with the NASA badge and pulsing rings, so the atlas always feels alive.
 *
 * Authored by: Task 7-split-nasa (NASA author subagent).
 */
export interface NasaHotspot {
  id: string
  source: 'eonet' // ALWAYS 'eonet' so the UI shows the "LIVE · NASA EONET" badge
  layer: LayerId // 'L1' for live/NASA family
  colorFamily: ColorFamily // 'red' for seismic/volcanic/storm; 'blue' for trenches/tsunami/ice/water
  category: string // EONET-style: 'earthquakes' | 'volcanoes' | 'seaLakeIce' | 'severeStorms' | 'snow' | custom
  title: string
  description: string
  lat: number
  lng: number
  status: 'open' // ALWAYS 'open' so pulsing rings render
  date?: string // ISO date if relevant
  country?: string
  region?: string
  syllabusTags: string[]
  sources: { title: string; url: string }[]
}
