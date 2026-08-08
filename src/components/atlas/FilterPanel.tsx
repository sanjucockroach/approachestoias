'use client'

/**
 * CockroachIAS — UPSC World Atlas — FilterPanel
 * Layer toggles + syllabus lens + live-status filter.
 * (Legend removed per CTO — layer dots already encode colour.)
 * Entire panel content scrolls if it overflows.
 */
import { useMemo } from 'react'
import { X } from 'lucide-react'
import { useAtlasStore } from '@/src/store/atlas'
import { LAYERS, COLOR_HEX } from '@/src/lib/atlas/types'
import type { AtlasHotspot, LayerId } from '@/src/lib/atlas/types'
import { cn } from '@/src/lib/utils'

interface Props {
  hotspots: AtlasHotspot[]
  onClose?: () => void
}

const SYLLABUS_OPTIONS = [
  { id: 'ALL', label: 'All Papers' },
  { id: 'GS1', label: 'GS1 — Geography / Culture' },
  { id: 'GS2', label: 'GS2 — IR / Polity' },
  { id: 'GS3', label: 'GS3 — Env / Eco / Security' },
  { id: 'GS4', label: 'GS4 — Ethics' },
] as const

export default function FilterPanel({ hotspots, onClose }: Props) {
  const activeLayers = useAtlasStore((s) => s.activeLayers)
  const toggleLayer = useAtlasStore((s) => s.toggleLayer)
  const syllabusLens = useAtlasStore((s) => s.syllabusLens)
  const setSyllabusLens = useAtlasStore((s) => s.setSyllabusLens)
  const liveStatus = useAtlasStore((s) => s.liveStatus)
  const setLiveStatus = useAtlasStore((s) => s.setLiveStatus)

  const counts = useMemo(() => {
    const c: Record<string, number> = {}
    for (const h of hotspots) {
      const key = h.source === 'eonet' ? 'L1' : h.layer
      c[key] = (c[key] || 0) + 1
    }
    return c
  }, [hotspots])

  return (
    <div className="flex h-full flex-col">
      {/* header (sticky) */}
      <div className="sticky top-0 z-10 border-b border-[#e0e0e0] bg-white px-4 py-3">
        <div className="flex items-center justify-between">
          <h2 className="text-[11px] font-bold uppercase tracking-[0.22em] text-black">
            Layers & Filters
          </h2>
          {onClose && (
            <button
              type="button"
              onClick={onClose}
              className="rounded-sm p-1 text-[#999] transition-colors hover:bg-[#f6f6f6] hover:text-black"
              aria-label="Close filters"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
        <div className="ci-rule mt-2 w-8" />
      </div>

      {/* scrollable content */}
      <div className="ci-scroll flex-1 overflow-y-auto">
        {/* layers */}
        <div className="px-2 py-2">
          <h3 className="px-2.5 pb-1 text-[10px] font-bold uppercase tracking-[0.22em] text-[#999]">
            Layers
          </h3>
          {LAYERS.map((layer) => {
            const on = activeLayers.has(layer.id as LayerId)
            const count = counts[layer.id] ?? 0
            const hex = COLOR_HEX[layer.colorFamily]
            return (
              <button
                key={layer.id}
                type="button"
                onClick={() => toggleLayer(layer.id as LayerId)}
                className={cn(
                  'group flex w-full items-start gap-2.5 rounded-sm px-2.5 py-2 text-left transition-colors',
                  on ? 'bg-[rgba(211,47,47,0.06)]' : 'hover:bg-[#f6f6f6]'
                )}
              >
                <span
                  className="mt-1 block h-2.5 w-2.5 shrink-0 rounded-full ring-1 ring-black/10"
                  style={{
                    background: on ? hex : 'transparent',
                    border: `1.5px solid ${hex}`,
                  }}
                  aria-hidden
                />
                <span className="min-w-0 flex-1">
                  <span className="flex items-center justify-between gap-2">
                    <span
                      className={cn(
                        'text-[12.5px] font-semibold leading-tight',
                        on ? 'text-black' : 'text-[#999]'
                      )}
                    >
                      {layer.label}
                    </span>
                    <span
                      className={cn(
                        'shrink-0 text-[10px] font-medium tabular-nums',
                        on ? 'text-[#d32f2f]' : 'text-[#bbb]'
                      )}
                    >
                      {count}
                    </span>
                  </span>
                  <span className="mt-0.5 block text-[10.5px] leading-snug text-[#888]">
                    {layer.description}
                  </span>
                  {layer.live && (
                    <span className="mt-1 inline-flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider text-[#d32f2f]">
                      <span className="ci-pulse-dot relative inline-block h-1.5 w-1.5 rounded-full bg-[#d32f2f]" />
                      Live · NASA EONET
                    </span>
                  )}
                </span>
              </button>
            )
          })}
        </div>

        {/* syllabus lens */}
        <div className="border-t border-[#e0e0e0] px-4 py-3">
          <h3 className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#999]">
            Syllabus Lens
          </h3>
          <div className="mt-2 space-y-0.5">
            {SYLLABUS_OPTIONS.map((o) => {
              const active = syllabusLens === o.id
              return (
                <button
                  key={o.id}
                  type="button"
                  onClick={() => setSyllabusLens(o.id as any)}
                  className={cn(
                    'flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-left text-[12px] transition-colors',
                    active ? 'bg-black text-white' : 'text-[#444] hover:bg-[#f6f6f6]'
                  )}
                >
                  <span
                    className={cn(
                      'inline-block h-2.5 w-2.5 rounded-full border',
                      active ? 'border-white' : 'border-[#bbb]'
                    )}
                    style={{ background: active ? '#d32f2f' : 'transparent' }}
                  />
                  {o.label}
                </button>
              )
            })}
          </div>
        </div>

        {/* live status */}
        <div className="border-t border-[#e0e0e0] px-4 py-3">
          <h3 className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#999]">
            Live Status
          </h3>
          <div className="mt-2 grid grid-cols-3 gap-1">
            {(['open', 'closed', 'all'] as const).map((s) => {
              const active = liveStatus === s
              return (
                <button
                  key={s}
                  type="button"
                  onClick={() => setLiveStatus(s)}
                  className={cn(
                    'rounded-sm px-1 py-1.5 text-[10.5px] font-semibold uppercase tracking-wider transition-colors',
                    active
                      ? 'bg-[#d32f2f] text-white'
                      : 'border border-[#e0e0e0] text-[#666] hover:border-[#d32f2f]'
                  )}
                >
                  {s}
                </button>
              )
            })}
          </div>
        </div>

        {/* mini colour key (compact, single row — replaces the old legend list) */}
        <div className="border-t border-[#e0e0e0] px-4 py-3">
          <div className="flex items-center gap-3 text-[10px] text-[#888]">
            <span className="inline-flex items-center gap-1">
              <span className="inline-block h-2 w-2 rounded-full bg-[#d32f2f]" /> Alerts
            </span>
            <span className="inline-flex items-center gap-1">
              <span className="inline-block h-2 w-2 rounded-full bg-[#1565c0]" /> Water
            </span>
            <span className="inline-flex items-center gap-1">
              <span className="inline-block h-2 w-2 rounded-full bg-[#2e7d32]" /> Life
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
