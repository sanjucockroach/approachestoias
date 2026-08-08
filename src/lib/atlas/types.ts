/**
 * CockroachIAS — UPSC World Atlas — shared types
 */

export type ColorFamily = 'red' | 'blue' | 'green'
export type LayerId =
  | 'L1' // live NASA EONET events
  | 'L2' // volcanoes (curated + EONET)
  | 'L3' // places in news
  | 'L4' // biodiversity hotspots
  | 'L5' // Ramsar wetlands
  | 'L6' // UNESCO heritage sites
  | 'L7' // straits / canals / passes
  | 'L8' // rivers / mountains / deserts
  | 'L9' // conflict & border zones
  | 'L10' // treaties / org HQ
  | 'L11' // mineral / industrial regions

export type SyllabusPaper = 'GS1' | 'GS2' | 'GS3' | 'GS4' | 'Prelims' | 'CSAT'

/** Unified hotspot shape rendered by the globe (live + curated). */
export interface AtlasHotspot {
  id: string
  source: 'eonet' | 'curated'
  layer: LayerId
  colorFamily: ColorFamily
  category: string
  title: string
  description?: string
  lat: number
  lng: number
  date?: string // ISO
  status?: 'open' | 'closed'
  magnitude?: { value: number; unit: string }
  country?: string
  region?: string
  syllabusTags: string[]
  sources: { title: string; url: string }[]
}

export interface LayerMeta {
  id: LayerId
  label: string
  colorFamily: ColorFamily
  description: string
  live?: boolean
}

export const LAYERS: LayerMeta[] = [
  { id: 'L1', label: 'Live Earth Events', colorFamily: 'red', description: 'NASA EONET — wildfires, storms, floods, quakes & more, updating live.', live: true },
  { id: 'L3', label: 'Places in News', colorFamily: 'red', description: 'Geopolitical flashpoints in current affairs — Iran, Russia–Ukraine, Taiwan Strait…' },
  { id: 'L4', label: 'Biodiversity Hotspots', colorFamily: 'green', description: 'The 36 global biodiversity hotspots — Western Ghats, Himalaya, Indo-Burma…' },
  { id: 'L5', label: 'Ramsar Wetlands', colorFamily: 'blue', description: 'Wetlands of international importance — India-first, then global.' },
  { id: 'L6', label: 'UNESCO Heritage Sites', colorFamily: 'green', description: 'Cultural & natural world heritage sites.' },
  { id: 'L7', label: 'Straits · Canals · Passes', colorFamily: 'red', description: 'Chokepoints & mountain passes — Hormuz, Malacca, Suez, Khyber…' },
  { id: 'L8', label: 'Rivers · Mountains · Deserts', colorFamily: 'blue', description: 'Physical geography — rivers (blue), mountains & deserts (green).' },
  { id: 'L9', label: 'Conflict & Border Zones', colorFamily: 'red', description: 'Disputed & militarised borders — LoC, LAC, Sir Creek, DMZ…' },
  { id: 'L10', label: 'Treaties · Org HQ', colorFamily: 'red', description: 'International organisations & treaty seats — UN, WTO, WHO, SAARC…' },
  { id: 'L11', label: 'Mineral · Industrial Regions', colorFamily: 'green', description: 'Resource & industrial belts — Jharia, Bailadila, Ruhr, Ghawar…' },
]

export const COLOR_HEX: Record<ColorFamily, string> = {
  red: '#d32f2f',
  blue: '#1565c0',
  green: '#2e7d32',
}

/** EONET category id -> (layer, colorFamily, syllabus tags). */
export const EONET_CATEGORY_MAP: Record<
  string,
  { layer: LayerId; colorFamily: ColorFamily; tags: string[] }
> = {
  wildfires: { layer: 'L1', colorFamily: 'red', tags: ['GS3', 'Environment', 'Disaster Management'] },
  severeStorms: { layer: 'L1', colorFamily: 'red', tags: ['GS1', 'Climatology', 'GS3', 'Disaster Management'] },
  volcanoes: { layer: 'L1', colorFamily: 'red', tags: ['GS1', 'Geomorphology'] },
  earthquakes: { layer: 'L1', colorFamily: 'red', tags: ['GS1', 'Geomorphology', 'GS3', 'Disaster Management'] },
  floods: { layer: 'L1', colorFamily: 'red', tags: ['GS3', 'Disaster Management'] },
  landslides: { layer: 'L1', colorFamily: 'red', tags: ['GS3', 'Disaster Management'] },
  seaLakeIce: { layer: 'L1', colorFamily: 'blue', tags: ['GS1', 'Climatology'] },
  snow: { layer: 'L1', colorFamily: 'blue', tags: ['GS1', 'Climatology'] },
  dustHaze: { layer: 'L1', colorFamily: 'red', tags: ['GS1', 'Environment'] },
  manMade: { layer: 'L1', colorFamily: 'red', tags: ['GS3', 'Internal Security'] },
  tempExtremes: { layer: 'L1', colorFamily: 'red', tags: ['GS3', 'Climate Change'] },
  waterColor: { layer: 'L1', colorFamily: 'blue', tags: ['GS3', 'Environment'] },
  drought: { layer: 'L1', colorFamily: 'red', tags: ['GS3', 'Disaster Management', 'Agriculture'] },
}
