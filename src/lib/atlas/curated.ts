/**
 * CockroachIAS — UPSC World Atlas
 * Adapter: curated dataset (static JSON in repo) -> AtlasHotspot[].
 *
 * No database required — the curated UPSC layer ships as a versioned TS file.
 * Easy to review, easy to deploy, truly frontend-only.
 */
import { curatedHotspots, type LayerId as CuratedLayerId } from '@/src/data/atlas/hotspots'
import type { AtlasHotspot, LayerId } from './types'

export function getCuratedHotspots(): AtlasHotspot[] {
  return curatedHotspots.map((h) => ({
    id: `curated-${h.id}`,
    source: 'curated',
    layer: h.layer as LayerId,
    colorFamily: h.colorFamily,
    category: h.layer,
    title: h.title,
    description: h.description,
    lat: h.lat,
    lng: h.lng,
    country: h.country,
    region: h.region,
    syllabusTags: h.syllabusTags,
    sources: h.sources,
    status: 'open',
  }))
}

export type { CuratedLayerId }
