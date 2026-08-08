'use client'

/**
 * CockroachIAS — UPSC World Atlas — 3D Globe
 *
 * Visual spec (per CTO):
 *   - Background: pure white
 *   - World map (land): pure black
 *   - Country boundaries: white hairlines (demarcation)
 *   - India states overlay: black land + brand-red state borders (UPSC detail)
 *   - Markings: red / blue / green (by layer family)
 *   - Live EONET events: pulsing rings
 *   - Default view: India (lat 22, lng 80), globe ~30% larger than v1
 *
 * Uses react-globe.gl (three.js). WebGL — browser only (ssr:false via dynamic import).
 */
import { useEffect, useMemo, useRef, useState, useCallback, startTransition } from 'react'
import Globe, { type GlobeMethods } from 'react-globe.gl'
import * as THREE from 'three'
import { useAtlasStore, colorOf } from '@/src/store/atlas'
import type { AtlasHotspot } from '@/src/lib/atlas/types'

interface Props {
  hotspots: AtlasHotspot[]
  loading?: boolean
}

function escapeHtml(s: string) {
  return String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

// Static canvas properties to avoid recreation on re-renders
const pointAltitude = (d: any) => {
  const h = d as AtlasHotspot
  if (h.source === 'eonet') return 0.025
  return 0.015
}

const pointColor = (d: any) => colorOf(d as AtlasHotspot)

const polygonStroke = (d: any) => {
  const f = d as any
  if (f?.properties?._isIndia) {
    return 'rgba(211,47,47,0.65)' // brand red — India state borders
  }
  return 'rgba(255,255,255,0.85)' // white — country borders
}

const polygonCapColor = () => 'rgba(0,0,0,0.96)'
const polygonSideColor = () => 'rgba(0,0,0,0.96)'

const pointLabel = (d: any) => {
  const h = d as AtlasHotspot
  const tag = h.syllabusTags?.slice(0, 3).join(' · ') || ''
  return `
    <div style="background:#000;color:#fff;border-left:3px solid #d32f2f;
                padding:8px 10px;font:12px/1.4 -apple-system,Segoe UI,Roboto,sans-serif;
                max-width:240px;box-shadow:0 6px 20px rgba(0,0,0,.18);border-radius:2px;">
      <div style="font-weight:700;letter-spacing:.3px;">${escapeHtml(h.title)}</div>
      <div style="color:#9aa;margin-top:2px;font-size:10px;text-transform:uppercase;letter-spacing:.5px;">
        ${h.category} · ${h.source === 'eonet' ? 'LIVE · NASA EONET' : h.layer}
      </div>
      ${tag ? `<div style="color:#d32f2f;margin-top:4px;font-size:10px;">${escapeHtml(tag)}</div>` : ''}
      <div style="color:#bbb;margin-top:4px;font-size:10px;">${h.lat.toFixed(2)}°, ${h.lng.toFixed(2)}°</div>
    </div>`
}

// Helper to cache geojson data locally in the browser's Cache Storage for instant loading
async function fetchGeoJsonWithCache(url: string) {
  if (typeof window !== 'undefined' && 'caches' in window) {
    try {
      const cache = await caches.open('approachestoias-geojson-cache')
      const cachedResponse = await cache.match(url)
      if (cachedResponse) {
        return await cachedResponse.json()
      }
      const response = await fetch(url)
      if (response.ok) {
        await cache.put(url, response.clone())
        return await response.json()
      }
    } catch (e) {
      console.warn('[geojson-cache] Cache storage failed, falling back to network:', e)
    }
  }
  const res = await fetch(url)
  return await res.json()
}

export default function WorldGlobe({ hotspots, loading }: Props) {
  const globeEl = useRef<GlobeMethods | undefined>(undefined)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [size, setSize] = useState({ w: 800, h: 600 })
  const [countries, setCountries] = useState<any[] | null>(null)
  const [indiaStates, setIndiaStates] = useState<any[] | null>(null)

  const selectedId = useAtlasStore((s) => s.selectedId)
  const select = useAtlasStore((s) => s.select)
  const flyTo = useAtlasStore((s) => s.flyTo)
  const clearFlyTo = useAtlasStore((s) => s.clearFlyTo)

  // measure container
  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const ro = new ResizeObserver((entries) => {
      const r = entries[0].contentRect
      setSize({ w: Math.max(r.width, 320), h: Math.max(r.height, 320) })
    })
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  // load country boundaries + India states (locally cached for fast loading on slow networks)
  useEffect(() => {
    fetchGeoJsonWithCache('/geo/countries.geojson')
      .then((d) => setCountries(d.features ?? []))
      .catch(() => setCountries([]))
    fetchGeoJsonWithCache('/geo/india-states.geojson')
      .then((d) =>
        setIndiaStates(
          (d.features ?? []).map((f: any) => ({
            ...f,
            properties: { ...f.properties, _isIndia: true },
          }))
        )
      )
      .catch(() => setIndiaStates([]))
  }, [])

  // merged polygons: countries + India states (India states rendered on top)
  const polygons = useMemo(() => {
    if (!countries) return null
    return [...countries, ...(indiaStates ?? [])]
  }, [countries, indiaStates])

  const ready = !!polygons && size.w > 0

  // light-blue globe material = ocean surface (immersive water tone).
  // Land is drawn on top as black polygons; page chrome stays brand-white.
  const globeMaterial = useMemo(
    () =>
      new THREE.MeshPhongMaterial({
        color: new THREE.Color('#a9d6e5'),
        shininess: 14,
        specular: new THREE.Color('#ffffff'),
      }),
    []
  )

  // init camera + controls — runs AFTER the Globe mounts (depends on `ready`)
  useEffect(() => {
    const g = globeEl.current
    if (!g || !ready) return
    // default view: India, globe ~30% larger than v1 (altitude 2.4 -> 1.8)
    g.pointOfView({ lat: 22, lng: 80, altitude: 1.8 }, 0)
    const controls = g.controls() as any
    if (controls) {
      controls.autoRotate = true
      controls.autoRotateSpeed = 0.35
      controls.enableZoom = true
      controls.minDistance = 130
      controls.maxDistance = 600
      controls.enableDamping = true
      controls.dampingFactor = 0.12
    }
  }, [ready])

  // stop auto-rotate once the user interacts with passive events
  useEffect(() => {
    const g = globeEl.current
    if (!g || !ready) return
    const controls = g.controls() as any
    if (!controls) return
    const stop = () => {
      controls.autoRotate = false
    }
    const el = g.renderer().domElement as HTMLElement
    el.addEventListener('pointerdown', stop, { once: true, passive: true })
    el.addEventListener('wheel', stop, { once: true, passive: true })
    return () => {
      el.removeEventListener('pointerdown', stop)
      el.removeEventListener('wheel', stop)
    }
  }, [ready])

  // fly-to
  useEffect(() => {
    const g = globeEl.current
    if (!g || !flyTo) return
    g.pointOfView(
      { lat: flyTo.lat, lng: flyTo.lng, altitude: flyTo.alt ?? 1.0 },
      1200
    )
    const t = setTimeout(clearFlyTo, 1300)
    return () => clearTimeout(t)
  }, [flyTo, clearFlyTo])

  // live (open EONET) hotspots -> pulsing rings
  const ringsData = useMemo(
    () =>
      hotspots
        .filter((h) => h.source === 'eonet' && h.status === 'open')
        .map((h) => ({
          lat: h.lat,
          lng: h.lng,
          color: colorOf(h),
        })),
    [hotspots]
  )

  // points
  const pointsData = useMemo(() => hotspots, [hotspots])

  // Memoize dynamic pointRadius to avoid re-rendering points unless selectedId changes
  const getPointRadius = useCallback(
    (d: any) => {
      const h = d as AtlasHotspot
      if (h.id === selectedId) return 0.42
      if (h.source === 'eonet') return 0.28
      return 0.22
    },
    [selectedId]
  )

  // Memoize event handlers to prevent recreating them on every render
  const handlePointClick = useCallback(
    (d: any) => {
      startTransition(() => {
        select((d as AtlasHotspot).id)
      })
    },
    [select]
  )

  const handleGlobeClick = useCallback(() => {
    startTransition(() => {
      select(null)
    })
  }, [select])

  return (
    <div ref={containerRef} className="absolute inset-0 bg-white">
      {loading && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-white/80">
          <div className="text-center">
            <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-[#e0e0e0] border-t-[#d32f2f]" />
            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#666]">
              Loading the world…
            </p>
          </div>
        </div>
      )}

      {ready && (
        <Globe
          ref={globeEl as any}
          width={size.w}
          height={size.h}
          backgroundColor="#ffffff"
          showAtmosphere={false}
          globeMaterial={globeMaterial as any}
          // polygons: countries (white borders) + India states (red borders)
          polygonsData={polygons ?? []}
          polygonCapColor={polygonCapColor}
          polygonSideColor={polygonSideColor}
          polygonStrokeColor={polygonStroke}
          polygonsTransitionDuration={300}
          // hotspot points
          pointsData={pointsData}
          pointLat={(d: any) => (d as AtlasHotspot).lat}
          pointLng={(d: any) => (d as AtlasHotspot).lng}
          pointAltitude={pointAltitude}
          pointRadius={getPointRadius}
          pointColor={pointColor}
          pointLabel={pointLabel}
          onPointClick={handlePointClick}
          pointsTransitionDuration={400}
          // pulsing rings for live events
          ringsData={ringsData}
          ringColor={(d: any) => (d as any).color}
          ringMaxRadius={(d: any) => 4}
          ringPropagationSpeed={(d: any) => 2}
          ringRepeatPeriod={(d: any) => 1200}
          // click empty ocean -> deselect
          onGlobeClick={handleGlobeClick}
        />
      )}

    </div>
  )
}
