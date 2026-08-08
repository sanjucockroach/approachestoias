/**
 * CockroachIAS — UPSC World Atlas — client state (Zustand).
 * Tracks active layers, syllabus lens, live-status filter, selection & search.
 */
import { create } from 'zustand'
import type { AtlasHotspot, LayerId, SyllabusPaper } from '@/src/lib/atlas/types'

export type SyllabusLens = 'ALL' | SyllabusPaper
export type LiveStatus = 'open' | 'closed' | 'all'

interface AtlasState {
  // filters
  activeLayers: Set<LayerId>
  syllabusLens: SyllabusLens
  liveStatus: LiveStatus
  // selection
  selectedId: string | null
  // search
  query: string
  // ephemeral
  flyTo: { lat: number; lng: number; alt?: number } | null

  // actions
  toggleLayer: (id: LayerId) => void
  setLayer: (id: LayerId, on: boolean) => void
  setSyllabusLens: (l: SyllabusLens) => void
  setLiveStatus: (s: LiveStatus) => void
  select: (id: string | null) => void
  setQuery: (q: string) => void
  requestFlyTo: (lat: number, lng: number, alt?: number) => void
  clearFlyTo: () => void
}

export const useAtlasStore = create<AtlasState>((set) => ({
  activeLayers: new Set<LayerId>([
    'L1', 'L3', 'L5', 'L6', 'L7', 'L8', 'L9', 'L11',
  ]),
  syllabusLens: 'ALL',
  liveStatus: 'open',
  selectedId: null,
  query: '',
  flyTo: null,

  toggleLayer: (id) =>
    set((s) => {
      const next = new Set(s.activeLayers)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return { activeLayers: next }
    }),
  setLayer: (id, on) =>
    set((s) => {
      const next = new Set(s.activeLayers)
      if (on) next.add(id)
      else next.delete(id)
      return { activeLayers: next }
    }),
  setSyllabusLens: (l) => set({ syllabusLens: l }),
  setLiveStatus: (st) => set({ liveStatus: st }),
  select: (id) => set({ selectedId: id }),
  setQuery: (q) => set({ query: q }),
  requestFlyTo: (lat, lng, alt) => set({ flyTo: { lat, lng, alt } }),
  clearFlyTo: () => set({ flyTo: null }),
}))

/** Resolve a hotspot's accent color from its colorFamily. */
export function colorOf(h: Pick<AtlasHotspot, 'colorFamily'>): string {
  switch (h.colorFamily) {
    case 'red':
      return '#d32f2f'
    case 'blue':
      return '#1565c0'
    case 'green':
      return '#2e7d32'
  }
}
