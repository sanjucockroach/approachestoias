/**
 * CockroachIAS — UPSC World Atlas
 * EONET helpers: fetch, normalise, syllabus-tag, cache.
 *
 * NASA EONET is a FREE, PUBLIC, KEYLESS API (https://eonet.gsfc.nasa.gov/).
 * No backend service or API key is required. These helpers run server-side
 * inside a Next.js route handler (part of the same app — not a separate backend).
 */

import { EONET_CATEGORY_MAP, type AtlasHotspot } from './types'

const EONET_BASE = 'https://eonet.gsfc.nasa.gov/api/v3'

/** In-memory cache (per server instance). TTL 20 minutes. */
let cache: { at: number; data: AtlasHotspot[] } | null = null
const TTL_MS = 20 * 60 * 1000

interface EonetEvent {
  id: string
  title: string
  description?: string
  link?: string
  closed?: string | null
  categories?: { id: string; title: string }[]
  sources?: { id: string; url: string; title?: string }[]
  geometry?: Array<
    | { type: 'Point'; coordinates: [number, number]; date: string }
    | { type: 'Polygon'; coordinates: number[][][]; date: string }
  >
  magnitudeValue?: number
  magnitudeUnit?: string
}

/** Compute a simple centroid for a GeoJSON polygon ring. */
function centroid(ring: number[][]): [number, number] {
  let x = 0,
    y = 0
  for (const [lng, lat] of ring) {
    x += lng
    y += lat
  }
  return [y / ring.length, x / ring.length] // [lat, lng]
}

/** Check if a coordinate is inside the US region boundaries (CONUS, Alaska, Hawaii) */
function isInsideUS(lat: number, lng: number): boolean {
  // Contiguous United States (CONUS)
  if (lat >= 24.4 && lat <= 49.4 && lng >= -125.0 && lng <= -66.9) {
    return true
  }
  // Alaska
  if (lat >= 51.2 && lat <= 71.6 && lng >= -179.2 && lng <= -129.9) {
    return true
  }
  // Hawaii
  if (lat >= 18.9 && lat <= 28.5 && lng >= -178.4 && lng <= -154.8) {
    return true
  }
  return false
}

function normalise(events: EonetEvent[]): AtlasHotspot[] {
  const out: AtlasHotspot[] = []
  for (const ev of events) {
    const cat = ev.categories?.[0]
    const catId = cat?.id ?? 'manMade'
    const mapping = EONET_CATEGORY_MAP[catId] ?? EONET_CATEGORY_MAP.manMade
    const geom = ev.geometry?.[ev.geometry.length - 1] // latest geometry
    if (!geom) continue

    let lat: number
    let lng: number
    if (geom.type === 'Point') {
      ;[lng, lat] = geom.coordinates
    } else {
      // Polygon — use centroid of outer ring
      const [la, ln] = centroid(geom.coordinates[0])
      lat = la
      lng = ln
    }
    if (!Number.isFinite(lat) || !Number.isFinite(lng)) continue

    // Stop live NASA events for only the US region
    if (isInsideUS(lat, lng)) {
      continue
    }

    out.push({
      id: `eonet-${ev.id}`,
      source: 'eonet',
      layer: mapping.layer,
      colorFamily: mapping.colorFamily,
      category: cat?.title ?? catId,
      title: ev.title,
      description: ev.description || undefined,
      lat,
      lng,
      date: geom.date,
      status: ev.closed ? 'closed' : 'open',
      magnitude:
        ev.magnitudeValue != null && ev.magnitudeUnit
          ? { value: ev.magnitudeValue, unit: ev.magnitudeUnit }
          : undefined,
      syllabusTags: mapping.tags,
      sources:
        ev.sources?.map((s) => ({
          title: s.title || s.id,
          url: s.url,
        })) ?? [],
    })
  }
  return out
}

/**
 * Fetch EONET open events from the last 60 days, normalise to AtlasHotspot[],
 * cache for 20 minutes. Safe to call on every request.
 */
export async function getEonetHotspots(opts?: {
  days?: number
  status?: 'open' | 'closed' | 'all'
  force?: boolean
}): Promise<AtlasHotspot[]> {
  const now = Date.now()
  if (!opts?.force && cache && now - cache.at < TTL_MS) {
    return cache.data
  }

  const days = opts?.days ?? 60
  const status = opts?.status ?? 'open'
  const url = `${EONET_BASE}/events?status=${status}&days=${days}&limit=500`

  try {
    const res = await fetch(url, {
      // Next.js fetch cache hint — revalidate at most every 20 min
      next: { revalidate: 1200 },
      headers: { Accept: 'application/json' },
    })
    if (!res.ok) {
      throw new Error(`EONET responded ${res.status}`)
    }
    const json = (await res.json()) as { events?: EonetEvent[] }
    const events = json.events ?? []
    const data = normalise(events)
    cache = { at: now, data }
    return data
  } catch (err) {
    // If we have stale cache, return it rather than failing the map.
    if (cache) return cache.data
    console.error('[atlas] EONET fetch failed:', err)
    return []
  }
}
