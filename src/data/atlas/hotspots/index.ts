/**
 * CockroachIAS — UPSC World Atlas
 * Curated hotspot dataset — aggregation & re-exports.
 *
 * This barrel exports:
 *   - `curatedHotspots`  — all L3–L11 curated entries (concatenation).
 *   - `nasaHotspots`     — static NASA-tagged geophysical features (L1).
 *   - Convenience helpers (`curatedHotspotCounts`, `curatedHotspotTotal`,
 *     `CURATED_HOTSPOT_LAYER_COLORS`) for backward-compat with the
 *     original monolithic hotspots.ts.
 *   - All types from ./types.
 *
 * Authored by: Task 7-split-nasa (dataset splitter + NASA author).
 */

import type { ColorFamily, CuratedHotspot, LayerId } from './types'

import { placesInNews } from './placesInNews'
import { biodiversityHotspots } from './biodiversity'
import { ramsarSites } from './ramsarSites'
import { unescoSites } from './unescoSites'
import { straits } from './straits'
import { canals } from './canals'
import { passes } from './passes'
import { rivers } from './rivers'
import { mountains } from './mountains'
import { deserts } from './deserts'
import { conflicts } from './conflicts'
import { treaties } from './treaties'
import { orgHeadquarters } from './orgHeadquarters'
import { minerals } from './minerals'

export { nasaHotspots } from './NASA'

// Re-export all types
export type { ColorFamily, CuratedHotspot, LayerId, NasaHotspot } from './types'

// Re-export individual arrays so consumers can import a single layer if needed
export { placesInNews } from './placesInNews'
export { biodiversityHotspots } from './biodiversity'
export { ramsarSites } from './ramsarSites'
export { unescoSites } from './unescoSites'
export { straits } from './straits'
export { canals } from './canals'
export { passes } from './passes'
export { rivers } from './rivers'
export { mountains } from './mountains'
export { deserts } from './deserts'
export { conflicts } from './conflicts'
export { treaties } from './treaties'
export { orgHeadquarters } from './orgHeadquarters'
export { minerals } from './minerals'

/**
 * All curated L3–L11 hotspots (concatenation). Layer order is preserved
 * (L3 → L4 → L5 → L6 → L7 straits/canals/passes → L8 rivers/mountains/deserts
 * → L9 conflicts → L10 treaties/orgHQ → L11 minerals).
 */
export const curatedHotspots: CuratedHotspot[] = [
  ...placesInNews,
  ...biodiversityHotspots,
  ...ramsarSites,
  ...unescoSites,
  ...straits,
  ...canals,
  ...passes,
  ...rivers,
  ...mountains,
  ...deserts,
  ...conflicts,
  ...treaties,
  ...orgHeadquarters,
  ...minerals,
]

/** Per-layer entry count (L3–L11). */
export const curatedHotspotCounts: Record<LayerId, number> = {
  L1: 0,
  L2: 0,
  L3: curatedHotspots.filter((h) => h.layer === 'L3').length,
  L4: curatedHotspots.filter((h) => h.layer === 'L4').length,
  L5: curatedHotspots.filter((h) => h.layer === 'L5').length,
  L6: curatedHotspots.filter((h) => h.layer === 'L6').length,
  L7: curatedHotspots.filter((h) => h.layer === 'L7').length,
  L8: curatedHotspots.filter((h) => h.layer === 'L8').length,
  L9: curatedHotspots.filter((h) => h.layer === 'L9').length,
  L10: curatedHotspots.filter((h) => h.layer === 'L10').length,
  L11: curatedHotspots.filter((h) => h.layer === 'L11').length,
}

/** Total curated entries (L3–L11). */
export const curatedHotspotTotal = curatedHotspots.length

/** Layer-level default color family (per-entry `colorFamily` is the source of truth for L8). */
export const CURATED_HOTSPOT_LAYER_COLORS: Record<LayerId, ColorFamily> = {
  L1: 'red',
  L2: 'red',
  L3: 'red',
  L4: 'green',
  L5: 'blue',
  L6: 'green',
  L7: 'red',
  L8: 'blue', // rivers dominate L8; mountains & deserts are green under same layer
  L9: 'red',
  L10: 'red',
  L11: 'green',
}
