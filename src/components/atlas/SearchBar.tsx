'use client'

/**
 * CockroachIAS — UPSC World Atlas — SearchBar
 * Fly-to search across all hotspots. On select, the globe flies + sidebar opens.
 */
import { useMemo, useState, useRef, useEffect } from 'react'
import { Search, X, CornerDownLeft } from 'lucide-react'
import { useAtlasStore, colorOf } from '@/src/store/atlas'
import type { AtlasHotspot } from '@/src/lib/atlas/types'

interface Props {
  hotspots: AtlasHotspot[]
}

export default function SearchBar({ hotspots }: Props) {
  const [q, setQ] = useState('')
  const [open, setOpen] = useState(false)
  const [hi, setHi] = useState(0)
  const wrapRef = useRef<HTMLDivElement | null>(null)

  const select = useAtlasStore((s) => s.select)
  const requestFlyTo = useAtlasStore((s) => s.requestFlyTo)

  const results = useMemo(() => {
    const t = q.trim().toLowerCase()
    if (!t) return []
    return hotspots
      .filter(
        (h) =>
          h.title.toLowerCase().includes(t) ||
          h.country?.toLowerCase().includes(t) ||
          h.region?.toLowerCase().includes(t) ||
          h.category.toLowerCase().includes(t)
      )
      .slice(0, 8)
  }, [q, hotspots])

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [])

  const choose = (h: AtlasHotspot) => {
    select(h.id)
    requestFlyTo(h.lat, h.lng, 1.0)
    setOpen(false)
    setQ(h.title)
  }

  return (
    <div ref={wrapRef} className="relative w-full max-w-[380px]">
      <div className="flex items-center gap-2 border border-[#e0e0e0] bg-white px-3 py-2 transition-colors focus-within:border-black">
        <Search className="h-4 w-4 shrink-0 text-[#999]" />
        <input
          value={q}
          onChange={(e) => {
            setQ(e.target.value)
            setHi(0)
            setOpen(true)
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={(e) => {
            if (e.key === 'ArrowDown') {
              e.preventDefault()
              setHi((p) => Math.min(p + 1, results.length - 1))
            } else if (e.key === 'ArrowUp') {
              e.preventDefault()
              setHi((p) => Math.max(p - 1, 0))
            } else if (e.key === 'Enter' && results[hi]) {
              choose(results[hi])
            } else if (e.key === 'Escape') {
              setOpen(false)
            }
          }}
          placeholder="Search a place — Hormuz, Chilika, Himalaya…"
          className="w-full bg-transparent text-[13px] text-black placeholder:text-[#aaa] focus:outline-none"
          aria-label="Search places"
        />
        {q && (
          <button
            type="button"
            onClick={() => {
              setQ('')
              setOpen(false)
            }}
            className="text-[#bbb] hover:text-black"
            aria-label="Clear search"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        )}
      </div>

      {open && results.length > 0 && (
        <ul className="absolute z-30 mt-1 max-h-[60vh] w-full overflow-y-auto border border-[#e0e0e0] bg-white shadow-[0_12px_32px_rgba(0,0,0,0.08)] ci-scroll">
          {results.map((h, i) => (
            <li key={h.id}>
              <button
                type="button"
                onMouseEnter={() => setHi(i)}
                onClick={() => choose(h)}
                className={`flex w-full items-start gap-2.5 px-3 py-2 text-left transition-colors ${
                  i === hi ? 'bg-[rgba(211,47,47,0.06)]' : 'hover:bg-[#f6f6f6]'
                }`}
              >
                <span
                  className="mt-1 inline-block h-2 w-2 shrink-0 rounded-full"
                  style={{ background: colorOf(h) }}
                />
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-[13px] font-semibold text-black">
                    {h.title}
                  </span>
                  <span className="block text-[10px] uppercase tracking-wider text-[#999]">
                    {h.source === 'eonet' ? 'Live · EONET' : h.layer}
                    {h.country ? ` · ${h.country}` : ''}
                  </span>
                </span>
                {i === hi && (
                  <CornerDownLeft className="mt-1 h-3 w-3 shrink-0 text-[#bbb]" />
                )}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
