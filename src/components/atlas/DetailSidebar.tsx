'use client'

/**
 * CockroachIAS — UPSC World Atlas — right DetailSidebar
 * Shows full detail for the selected hotspot: description, syllabus tags,
 * coords, status, magnitude, sources. Slides in (framer-motion).
 */
import React, { useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink, MapPin, Calendar, Activity, Tag } from 'lucide-react'
import { useAtlasStore, colorOf } from '@/src/store/atlas'
import type { AtlasHotspot } from '@/src/lib/atlas/types'

interface Props {
  hotspots: AtlasHotspot[]
}

export default function DetailSidebar({ hotspots }: Props) {
  const selectedId = useAtlasStore((s) => s.selectedId)
  const select = useAtlasStore((s) => s.select)
  const requestFlyTo = useAtlasStore((s) => s.requestFlyTo)

  const hotspot = useMemo(
    () => hotspots.find((h) => h.id === selectedId) || null,
    [hotspots, selectedId]
  )

  return (
    <AnimatePresence>
      {hotspot && (
        <motion.aside
          key={hotspot.id}
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 40, opacity: 0 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-auto flex h-full w-full flex-col bg-white"
        >
          {/* header */}
          <div className="relative border-b border-[#e0e0e0] px-5 pt-5 pb-4">
            <div className="flex items-center gap-2">
              <span
                className="inline-block h-2.5 w-2.5 rounded-full"
                style={{ background: colorOf(hotspot) }}
              />
              <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#666]">
                {hotspot.source === 'eonet' ? 'LIVE · NASA EONET' : hotspot.layer}
                {hotspot.category && hotspot.source === 'eonet'
                  ? ` · ${hotspot.category}`
                  : ''}
              </span>
            </div>
            <h2 className="mt-1.5 text-[20px] font-bold leading-tight text-black">
              {hotspot.title}
            </h2>
            <div className="ci-rule mt-3 w-10" />

            <button
              type="button"
              onClick={() => select(null)}
              className="absolute right-3 top-3 rounded-sm p-1.5 text-[#999] transition-colors hover:bg-[#f6f6f6] hover:text-black"
              aria-label="Close detail"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* body */}
          <div className="ci-scroll flex-1 overflow-y-auto px-5 py-4">
            {/* meta grid */}
            <dl className="grid grid-cols-2 gap-x-4 gap-y-3 text-[12px]">
              <Meta
                icon={<MapPin className="h-3.5 w-3.5" />}
                label="Coordinates"
                value={`${hotspot.lat.toFixed(2)}°, ${hotspot.lng.toFixed(2)}°`}
              />
              {hotspot.country && (
                <Meta icon={<Tag className="h-3.5 w-3.5" />} label="Country" value={hotspot.country} />
              )}
              {hotspot.region && (
                <Meta icon={<Tag className="h-3.5 w-3.5" />} label="Region" value={hotspot.region} />
              )}
              {hotspot.status && (
                <Meta
                  icon={<Activity className="h-3.5 w-3.5" />}
                  label="Status"
                  value={hotspot.status === 'open' ? 'Open / Active' : 'Closed'}
                />
              )}
              {hotspot.date && (
                <Meta
                  icon={<Calendar className="h-3.5 w-3.5" />}
                  label="Date"
                  value={new Date(hotspot.date).toLocaleDateString('en-GB', {
                    day: '2-digit',
                    month: 'short',
                    year: 'numeric',
                  })}
                />
              )}
              {hotspot.magnitude && (
                <Meta
                  icon={<Activity className="h-3.5 w-3.5" />}
                  label="Magnitude"
                  value={`${hotspot.magnitude.value} ${hotspot.magnitude.unit}`}
                />
              )}
            </dl>

            {/* description */}
            {hotspot.description && (
              <div className="mt-5">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.22em] text-black">
                  Why it matters
                </h3>
                <div className="ci-rule mt-2 w-8" />
                <p className="mt-2 text-[13.5px] leading-relaxed text-[#333]">
                  {hotspot.description}
                </p>
              </div>
            )}

            {/* syllabus tags */}
            {hotspot.syllabusTags.length > 0 && (
              <div className="mt-5">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.22em] text-black">
                  Syllabus
                </h3>
                <div className="ci-rule mt-2 w-8" />
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {hotspot.syllabusTags.map((t) => (
                    <span
                      key={t}
                      className="rounded-sm border border-[#e0e0e0] bg-[#fafafa] px-2 py-0.5 text-[10.5px] font-semibold text-[#444]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* sources */}
            {hotspot.sources.length > 0 && (
              <div className="mt-5">
                <h3 className="text-[10px] font-bold uppercase tracking-[0.22em] text-black">
                  Sources
                </h3>
                <div className="ci-rule mt-2 w-8" />
                <ul className="mt-2 space-y-1.5">
                  {hotspot.sources.map((s, i) => (
                    <li key={i}>
                      <a
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-start gap-1.5 text-[12px] text-[#1565c0] hover:text-[#0d47a1]"
                      >
                        <ExternalLink className="mt-0.5 h-3 w-3 shrink-0" />
                        <span className="underline-offset-2 group-hover:underline">
                          {s.title}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* live-data note for EONET */}
            {hotspot.source === 'eonet' && (
              <p className="mt-5 border-l-2 border-[#d32f2f] bg-[rgba(211,47,47,0.04)] px-3 py-2 text-[10.5px] leading-snug text-[#666]">
                This event is streamed live from <strong className="text-black">NASA EONET</strong>.
                Data refreshes every 20 minutes on our server.
              </p>
            )}
          </div>

          {/* footer: re-center */}
          <div className="border-t border-[#e0e0e0] px-5 py-3">
            <button
              type="button"
              onClick={() => requestFlyTo(hotspot.lat, hotspot.lng, 1.0)}
              className="w-full rounded-sm bg-black px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.18em] text-white transition-colors hover:bg-[#d32f2f]"
            >
              Re-center on map
            </button>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  )
}

function Meta({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode
  label: string
  value: string
}) {
  return (
    <div>
      <dt className="flex items-center gap-1 text-[9.5px] font-bold uppercase tracking-[0.18em] text-[#999]">
        {icon}
        {label}
      </dt>
      <dd className="mt-0.5 font-mono text-[12px] font-semibold text-black">{value}</dd>
    </div>
  )
}
