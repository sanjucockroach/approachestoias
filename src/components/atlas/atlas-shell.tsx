'use client'

/**
 * CockroachIAS — UPSC World Atlas — application shell.
 *
 * Layout (per CTO): the world map fills the whole screen; panels float over it.
 *   ┌ Header (brand + search + live ticker)
 *   ├ Globe (full-bleed, pure white, black land, red/blue/green markers)
 *   │   ├ FilterPanel (floating left)      [Sheet on mobile]
 *   │   └ DetailSidebar (floating right)   [Sheet on mobile]
 *   └ Footer (sticky — CockroachIAS mantras)
 */
import { useMemo, useState, useEffect } from 'react'
import { useQuery, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import logo from '@/assets/logo.jpg'
import { motion, AnimatePresence } from 'framer-motion'
import { SlidersHorizontal, X, Globe2, Radio, ChevronRight, Sliders } from 'lucide-react'
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/src/components/ui/sheet'
import { useAtlasStore } from '@/src/store/atlas'
import { getCuratedHotspots } from '@/src/lib/atlas/curated'
import { getEonetHotspots } from '@/src/lib/atlas/eonet'
import type { AtlasHotspot, LayerId } from '@/src/lib/atlas/types'
import FilterPanel from './FilterPanel'
import DetailSidebar from './DetailSidebar'
import SearchBar from './SearchBar'
import WorldGlobe from './WorldGlobe'

const LAYER_OF_CURATED: Record<string, LayerId> = {
  L3: 'L3', L4: 'L4', L5: 'L5', L6: 'L6', L7: 'L7', L8: 'L8', L9: 'L9', L10: 'L10', L11: 'L11',
}

export default function AtlasShell() {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <AtlasInner />
    </QueryClientProvider>
  )
}

function AtlasInner() {
  const activeLayers = useAtlasStore((s) => s.activeLayers)
  const syllabusLens = useAtlasStore((s) => s.syllabusLens)
  const liveStatus = useAtlasStore((s) => s.liveStatus)
  const selectedId = useAtlasStore((s) => s.selectedId)
  const select = useAtlasStore((s) => s.select)

  const [mobileFilters, setMobileFilters] = useState(false)
  const [desktopFilters, setDesktopFilters] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 1023px)')
    const update = () => setIsMobile(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  // curated (static, memoised)
  const curated = useMemo(() => getCuratedHotspots(), [])

  // live EONET (TanStack Query — client fetch, 20-min cache, keyless)
  const { data: eonetData, isLoading: eonetLoading, isError: eonetError } = useQuery({
    queryKey: ['eonet', liveStatus],
    queryFn: async () => {
      const hotspots = await getEonetHotspots({ status: liveStatus, days: 120 })
      return { count: hotspots.length, hotspots }
    },
    staleTime: 20 * 60 * 1000,
    refetchInterval: 20 * 60 * 1000,
    retry: 1,
  })

  const eonetHotspots = eonetData?.hotspots ?? []

  // merge
  const allHotspots = useMemo(
    () => [...eonetHotspots, ...curated],
    [eonetHotspots, curated]
  )

  // apply filters
  const visibleHotspots = useMemo(() => {
    return allHotspots.filter((h) => {
      const layer: LayerId = h.source === 'eonet' ? 'L1' : LAYER_OF_CURATED[h.layer] ?? h.layer
      if (!activeLayers.has(layer)) return false
      if (syllabusLens !== 'ALL' && !h.syllabusTags.includes(syllabusLens)) return false
      return true
    })
  }, [allHotspots, activeLayers, syllabusLens])

  // hotspot of the day (deterministic, from curated)
  const spotlight = useMemo(() => {
    const pool = curated.filter((h) => h.layer === 'L7' || h.layer === 'L3')
    if (pool.length === 0) return null
    const day = Math.floor(Date.now() / 86400000)
    return pool[day % pool.length]
  }, [curated])

  const selected = useMemo(
    () => allHotspots.find((h) => h.id === selectedId) ?? null,
    [allHotspots, selectedId]
  )

  const liveCount = eonetHotspots.filter((h) => h.status === 'open').length

  return (
    <div className="flex min-h-screen flex-col bg-white text-black">
      {/* ===== Header ===== */}
      <header className="z-30 border-b border-[#e0e0e0] bg-white">
        <div className="flex items-center gap-3 px-4 py-3.5 lg:px-6 lg:py-4">
          {/* brand */}
          <div className="flex items-center gap-3.5">
            <div className="flex h-[55px] w-[55px] items-center justify-center overflow-hidden rounded-sm bg-white border border-slate-200 shrink-0 shadow-xs">
              <img src={logo} alt="Approaches to IAS Logo" className="h-full w-full object-contain" />
            </div>
            <div className="flex flex-col justify-center">
              <div className="text-[12px] font-bold uppercase tracking-[0.24em] text-[#d32f2f] leading-none">
                Approaches to IAS
              </div>
              <div className="mt-1 text-[16px] font-bold uppercase tracking-[0.12em] text-black leading-none">
                World Atlas
              </div>
              <div className="mt-1.5 text-[9px] font-semibold text-[#888] uppercase tracking-wider leading-none">
                This World Atlas is indigenously made by Approaches to IAS team
              </div>
            </div>
          </div>

          <div className="hidden h-12 w-px bg-[#e0e0e0] sm:block" />

          {/* live ticker (desktop) */}
          <div className="hidden min-w-0 flex-1 items-center gap-2 lg:flex">
            <span className="inline-flex items-center gap-1.5 rounded-sm border border-[#e0e0e0] px-2 py-1 text-[10px] font-bold uppercase tracking-wider">
              <span className="ci-pulse-dot relative inline-block h-1.5 w-1.5 rounded-full bg-[#d32f2f]" />
              <Radio className="h-3 w-3 text-[#d32f2f]" />
              <span className="text-black">{liveCount}</span>
              <span className="text-[#999]">live events</span>
              {eonetError && (
                <span className="ml-1 text-[#d32f2f]">· feed retrying</span>
              )}
            </span>
            {spotlight && (
              <button
                type="button"
                onClick={() => {
                  select(spotlight.id)
                  useAtlasStore.getState().requestFlyTo(spotlight.lat, spotlight.lng, 1.0)
                }}
                className="flex min-w-0 items-center gap-1.5 text-[12px] text-[#555] hover:text-black"
              >
                <span className="font-bold uppercase tracking-wider text-[#d32f2f]">
                  Hotspot of the day:
                </span>
                <span className="truncate font-semibold">{spotlight.title}</span>
                <span className="text-[#aaa]">— tap to explore</span>
              </button>
            )}
          </div>

          {/* search */}
          <div className="ml-auto flex items-center gap-2">
            <SearchBar hotspots={allHotspots} />
            {/* mobile filter toggle */}
            <button
              type="button"
              onClick={() => setMobileFilters(true)}
              className="inline-flex items-center gap-1.5 border border-[#e0e0e0] px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-black transition-colors hover:border-black lg:hidden"
            >
              <SlidersHorizontal className="h-3.5 w-3.5" />
              Filters
            </button>
          </div>
        </div>
        <div className="ci-rule" />
      </header>

      {/* ===== Main: full-bleed globe + floating panels ===== */}
      <main className="relative flex-1 overflow-hidden">
        {/* globe fills the whole main area */}
        <WorldGlobe hotspots={visibleHotspots} loading={eonetLoading && eonetHotspots.length === 0} />

        {/* desktop floating filter toggle tab (always visible, left edge) */}
        <button
          type="button"
          onClick={() => setDesktopFilters((v) => !v)}
          className="absolute left-0 top-1/2 z-20 hidden -translate-y-1/2 items-center gap-1.5 rounded-r-sm border border-l-0 border-[#e0e0e0] bg-white px-2.5 py-3 text-black shadow-[4px_4px_16px_rgba(0,0,0,0.06)] transition-colors hover:bg-black hover:text-white lg:flex"
          aria-label={desktopFilters ? 'Close filters' : 'Open filters'}
        >
          {desktopFilters ? (
            <X className="h-4 w-4" />
          ) : (
            <>
              <Sliders className="h-4 w-4 text-[#d32f2f]" />
              <span
                className="text-[10px] font-bold uppercase tracking-[0.2em]"
                style={{ writingMode: 'vertical-rl' }}
              >
                Layers & Filters
              </span>
            </>
          )}
        </button>

        {/* desktop floating filter panel (collapsible — opens on click) */}
        <AnimatePresence>
          {desktopFilters && (
            <motion.div
              key="desktop-filters"
              initial={{ x: -280, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -280, opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="absolute left-12 top-4 bottom-4 z-20 hidden w-[260px] lg:block"
            >
              <div className="pointer-events-auto h-full overflow-hidden border border-[#e0e0e0] bg-white shadow-[0_8px_30px_rgba(0,0,0,0.10)]">
                <FilterPanel hotspots={allHotspots} onClose={() => setDesktopFilters(false)} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* desktop floating detail sidebar */}
        {selected && !isMobile && (
          <div className="pointer-events-none absolute right-4 top-4 bottom-4 z-20 w-[360px]">
            <div className="pointer-events-auto h-full overflow-hidden border border-[#e0e0e0] bg-white shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
              <DetailSidebar hotspots={allHotspots} />
            </div>
          </div>
        )}

        {/* mobile filter sheet */}
        <Sheet open={mobileFilters} onOpenChange={setMobileFilters}>
          <SheetContent side="left" className="w-[300px] overflow-y-auto p-0 ci-scroll">
            <SheetHeader className="border-b border-[#e0e0e0] px-4 py-3">
              <SheetTitle className="text-left text-[11px] font-bold uppercase tracking-[0.22em]">
                Layers & Filters
              </SheetTitle>
            </SheetHeader>
            <FilterPanel hotspots={allHotspots} />
          </SheetContent>
        </Sheet>

        {/* mobile detail sheet */}
        <Sheet open={!!selected && isMobile} onOpenChange={(o) => !o && select(null)}>
          <SheetContent side="bottom" className="max-h-[80vh] overflow-y-auto p-0 ci-scroll" >
            <SheetHeader className="sr-only">
              <SheetTitle>{selected?.title}</SheetTitle>
            </SheetHeader>
            {selected && <DetailSidebar hotspots={allHotspots} />}
          </SheetContent>
        </Sheet>

        {/* empty-state hint when nothing selected */}
        {!selected && (
          <div className="pointer-events-none absolute bottom-4 left-1/2 z-10 -translate-x-1/2 rounded-sm bg-black/85 px-3 py-1.5 text-[10.5px] uppercase tracking-[0.18em] text-white">
            Click any marker to explore · drag to rotate · scroll to zoom
          </div>
        )}
      </main>

      {/* ===== Footer (sticky) ===== */}
      <footer className="z-30 border-t border-[#e0e0e0] bg-white">
        <div className="ci-rule" />
        <div className="flex flex-col items-center justify-between gap-1 px-4 py-2.5 text-center sm:flex-row sm:px-6 sm:text-left">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-black">
            For Those Who Refuse to QUIT.
          </p>
          <p className="text-[11px] italic text-[#666]">
            UPSC is a marathon. Walk slow, walk long.
          </p>
          <p className="text-[10px] uppercase tracking-[0.16em] text-[#999]">
            © 2026 Approaches to IAS · Built on the bedrock of Resilience · <a href="/seo-atlas.html" className="underline hover:text-[#d32f2f] transition-colors">Atlas Directory</a>
          </p>
        </div>
      </footer>
    </div>
  )
}
