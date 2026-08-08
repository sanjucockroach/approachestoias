/**
 * CockroachIAS — UPSC World Atlas
 * L7 — Mountain Passes (red)
 * Himalayan & global mountain passes — Khyber, Bolan…
 *
 * Part of the curated hotspot dataset (split from the original monolithic
 * hotspots.ts — see hotspots/index.ts for aggregation).
 *
 * Authored by: Task 3-data (dataset author subagent) + Task 7-split-nasa (splitter).
 * Brand voice: minimalist, bold, empathetic, honest — CockroachIAS "For Those Who Refuse to Quit."
 * Every coordinate is hand-verified (WGS84, 2-decimal).
 */

import type { CuratedHotspot } from './types'

export const passes: CuratedHotspot[] = [
  {
    id: "str-khyber",
    layer: "L7",
    colorFamily: "red",
    title: "Khyber Pass",
    description: "A historic 53-km mountain pass through the Spin Ghar range linking Peshawar with Kabul, the Khyber Pass has been the gateway for invasions of India from Aryans to Mughals. It is strategically controlled by Pakistan and the historic gateway to Central Asia. It is a recurring GS1 (geography) and GS2 (IR) hotspot for Prelims.",
    lat: 34.07,
    lng: 71.1,
    country: "Pakistan / Afghanistan",
    region: "South/Central Asia",
    syllabusTags: ["GS1", "Geography", "GS2", "IR", "Internal Security"],
    sources: [
      { title: "Khyber Pass — Wikipedia", url: "https://en.wikipedia.org/wiki/Khyber_Pass" },
      { title: "Khyber Pass — Encyclopaedia Britannica", url: "https://www.britannica.com/place/Khyber-Pass" },
    ],
  },

  {
    id: "str-bolan",
    layer: "L7",
    colorFamily: "red",
    title: "Bolan Pass",
    description: "A 120-km pass through the Toba Kakar range of Balochistan linking Sibi with Quetta, the Bolan Pass was the southern invasion route into India used by the British. It remains on the Pakistan-Afghanistan frontier and a key CPEC route. It is a recurring GS1 (geography) hotspot, paired with Balochistan and frontier questions.",
    lat: 29.42,
    lng: 67.05,
    country: "Pakistan",
    region: "South Asia",
    syllabusTags: ["GS1", "Geography", "GS2", "IR"],
    sources: [
      { title: "Bolan Pass — Wikipedia", url: "https://en.wikipedia.org/wiki/Bolan_Pass" },
      { title: "Bolan Pass — Encyclopaedia Britannica", url: "https://www.britannica.com/place/Bolan-Pass" },
    ],
  },

  {
    id: "str-shipki-la",
    layer: "L7",
    colorFamily: "red",
    title: "Shipki La",
    description: "A Himalayan pass on the India-China border in Himachal Pradesh where the Sutlej enters India from Tibet. It is one of the border personnel meeting points and a traditional trade route. It is a recurring GS1 (geography) and GS2 (IR) hotspot, paired with Sutlej and LAC questions.",
    lat: 31.8,
    lng: 78.75,
    country: "India / China",
    region: "South Asia / Himalaya",
    syllabusTags: ["GS1", "Geography", "GS2", "IR", "Internal Security"],
    sources: [
      { title: "Shipki La — Wikipedia", url: "https://en.wikipedia.org/wiki/Shipki_La" },
      { title: "Mountain Passes of India — PIB", url: "https://pib.gov.in/PressReleasePage.aspx?PRID=1743435" },
    ],
  },

  {
    id: "str-nathu-la",
    layer: "L7",
    colorFamily: "red",
    title: "Nathu La",
    description: "A 4,310-m pass on the India-China border in Sikkim on the ancient Silk Route to Lhasa. Nathu La was reopened for border trade in 2006 and is one of the designated BPM points. It is a recurring GS1 (geography) and GS2 (IR) hotspot for Prelims.",
    lat: 27.39,
    lng: 88.83,
    country: "India / China",
    region: "South Asia / Himalaya",
    syllabusTags: ["GS1", "Geography", "GS2", "IR", "Connectivity"],
    sources: [
      { title: "Nathu La — Wikipedia", url: "https://en.wikipedia.org/wiki/Nathu_La" },
      { title: "Nathu La — MEA", url: "https://www.mea.gov.in/articles" },
    ],
  },

  {
    id: "str-zoji-la",
    layer: "L7",
    colorFamily: "red",
    title: "Zoji La",
    description: "A 3,528-m pass on the Srinagar-Leh highway connecting Kashmir Valley with Ladakh, Zoji La is strategically critical for year-round military and civilian access to Ladakh. The ongoing Zoji La tunnel will ensure all-weather connectivity. It is a recurring GS1 (geography) and GS3 (infrastructure) hotspot for both Prelims and Mains.",
    lat: 34.27,
    lng: 75.47,
    country: "India",
    region: "South Asia / Himalaya",
    syllabusTags: ["GS1", "Geography", "GS3", "Infrastructure", "Internal Security"],
    sources: [
      { title: "Zoji La — Wikipedia", url: "https://en.wikipedia.org/wiki/Zoji_La" },
      { title: "Zoji La Tunnel — Wikipedia", url: "https://en.wikipedia.org/wiki/Zoji_La_Tunnel" },
    ],
  },

  {
    id: "str-rohtang",
    layer: "L7",
    colorFamily: "red",
    title: "Rohtang Pass",
    description: "A 3,978-m pass on the Manali-Leh axis in Himachal Pradesh, Rohtang historically connected Kullu with Lahaul-Spiti. The 8.8-km Atal Tunnel beneath it now provides all-weather connectivity. It is a recurring GS1 (geography) and GS3 (infrastructure) hotspot, paired with Himalayan connectivity questions.",
    lat: 32.36,
    lng: 77.25,
    country: "India",
    region: "South Asia / Himalaya",
    syllabusTags: ["GS1", "Geography", "GS3", "Infrastructure"],
    sources: [
      { title: "Rohtang Pass — Wikipedia", url: "https://en.wikipedia.org/wiki/Rohtang_Pass" },
      { title: "Atal Tunnel — Wikipedia", url: "https://en.wikipedia.org/wiki/Atal_Tunnel" },
    ],
  },

  {
    id: "str-lipulekh",
    layer: "L7",
    colorFamily: "red",
    title: "Lipulekh Pass",
    description: "A high-altitude pass at the India-China-Nepal trijunction in Uttarakhand’s Pithoragarh district, on the Kailash Mansarovar pilgrimage route. Its status was disputed by Nepal in 2020 following India’s road inauguration. It is a recurring GS2 (IR) and GS1 (geography) hotspot, paired with Nepal boundary questions.",
    lat: 30.21,
    lng: 81.05,
    country: "India / China / Nepal",
    region: "South Asia / Himalaya",
    syllabusTags: ["GS2", "IR", "GS1", "Geography", "Neighbourhood"],
    sources: [
      { title: "Lipulekh Pass — Wikipedia", url: "https://en.wikipedia.org/wiki/Lipulekh_Pass" },
      { title: "Lipulekh dispute — MEA statement", url: "https://www.mea.gov.in/" },
    ],
  },

  {
    id: "str-banihal",
    layer: "L7",
    colorFamily: "red",
    title: "Banihal Pass",
    description: "A pass in the Pir Panjal range connecting Jammu with the Kashmir Valley, historically closed by snow until the Jawahar Tunnel was opened in 1956. It is being supplemented by the all-weather Banihal-Qazigund rail tunnel. It is a recurring GS1 (geography) and GS3 (infrastructure) hotspot for Prelims.",
    lat: 33.5,
    lng: 75.2,
    country: "India",
    region: "South Asia / Jammu & Kashmir",
    syllabusTags: ["GS1", "Geography", "GS3", "Infrastructure"],
    sources: [
      { title: "Banihal Pass — Wikipedia", url: "https://en.wikipedia.org/wiki/Banihal_Pass" },
      { title: "Jawahar Tunnel — Wikipedia", url: "https://en.wikipedia.org/wiki/Jawahar_Tunnel" },
    ],
  },
]
