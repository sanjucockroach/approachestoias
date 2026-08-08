/**
 * CockroachIAS — UPSC World Atlas
 * Curated hotspot dataset — thin re-export barrel.
 *
 * The monolithic hotspots.ts has been split into individual layer files under
 * ./hotspots/ (see Task 7-split-nasa in the worklog). This file remains as a
 * backward-compatible entry-point so existing imports like
 *   import { curatedHotspots } from '@/data/atlas/hotspots'
 * continue to work without any changes at call-sites.
 *
 * For new code, prefer importing directly from '@/data/atlas/hotspots/index'
 * or from the specific layer file (e.g. '@/data/atlas/hotspots/straits').
 */

export * from './hotspots/index'
