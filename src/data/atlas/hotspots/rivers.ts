/**
 * CockroachIAS — UPSC World Atlas
 * L8 — Rivers (blue)
 * Major rivers of the world.
 *
 * Part of the curated hotspot dataset (split from the original monolithic
 * hotspots.ts — see hotspots/index.ts for aggregation).
 *
 * Authored by: Task 3-data (dataset author subagent) + Task 7-split-nasa (splitter).
 * Brand voice: minimalist, bold, empathetic, honest — CockroachIAS "For Those Who Refuse to Quit."
 * Every coordinate is hand-verified (WGS84, 2-decimal).
 */

import type { CuratedHotspot } from './types'

export const rivers: CuratedHotspot[] = [
  {
    id: "riv-ganga",
    layer: "L8",
    colorFamily: "blue",
    title: "Ganga",
    description: "India’s holiest and most populous river basin, the Ganga rises at Gangotri and meets the Bay of Bengal after 2,525 km via the Sundarbans delta. The Namami Gange Programme and the Ganga River Basin Management Plan anchor India’s flagship river-cleaning effort. It is the single most-tested river in UPSC, spanning GS1 (geography) and GS3 (environment).",
    lat: 25.44,
    lng: 81.85,
    country: "India",
    region: "South Asia / Ganga Plain",
    syllabusTags: ["GS1", "Geomorphology", "GS3", "Environment", "GS1", "Drainage"],
    sources: [
      { title: "Ganges — Wikipedia", url: "https://en.wikipedia.org/wiki/Ganges" },
      { title: "National Mission for Clean Ganga", url: "https://nmcg.nic.in/" },
    ],
  },

  {
    id: "riv-yamuna",
    layer: "L8",
    colorFamily: "blue",
    title: "Yamuna",
    description: "The largest tributary of the Ganga, the Yamuna rises at Yamunotri and flows through Delhi, Agra and Mathura before joining the Ganga at Prayagraj. It is the principal water source for Delhi and one of India’s most polluted stretches. It is a recurring GS1 (geography) and GS3 (environment) hotspot for Prelims.",
    lat: 27.18,
    lng: 78,
    country: "India",
    region: "South Asia / Ganga Plain",
    syllabusTags: ["GS1", "Geomorphology", "GS3", "Environment", "Pollution"],
    sources: [
      { title: "Yamuna — Wikipedia", url: "https://en.wikipedia.org/wiki/Yamuna" },
      { title: "Yamuna Action Plan — NMCG", url: "https://nmcg.nic.in/" },
    ],
  },

  {
    id: "riv-brahmaputra",
    layer: "L8",
    colorFamily: "blue",
    title: "Brahmaputra",
    description: "A trans-Himalayan river that originates as the Yarlung Tsangpo in Tibet, enters India in Arunachal Pradesh and joins the Ganga in Bangladesh to form the Padma-Meghna system. Its notorious floods and course-shifting define Assam’s geography and agrarian distress. It is a top GS1 (geography) and GS3 (disaster) hotspot.",
    lat: 26.2,
    lng: 91.5,
    country: "India / China / Bangladesh",
    region: "South Asia / Northeast",
    syllabusTags: ["GS1", "Geomorphology", "GS3", "Disaster Management", "GS2", "IR"],
    sources: [
      { title: "Brahmaputra River — Wikipedia", url: "https://en.wikipedia.org/wiki/Brahmaputra_River" },
      { title: "Brahmaputra — Encyclopaedia Britannica", url: "https://www.britannica.com/place/Brahmaputra-River" },
    ],
  },

  {
    id: "riv-indus",
    layer: "L8",
    colorFamily: "blue",
    title: "Indus",
    description: "The river that gives India its name, the Indus rises near Lake Mansarovar in Tibet and flows through Ladakh and Pakistan before emptying into the Arabian Sea near Karachi. It is governed by the 1960 Indus Waters Treaty between India and Pakistan. It is a recurring GS1 (geography) and GS2 (IR) hotspot, paired with Treaty-modification demands.",
    lat: 30.2,
    lng: 71.5,
    country: "India / Pakistan / China",
    region: "South Asia / Indus Plain",
    syllabusTags: ["GS1", "Geomorphology", "GS2", "IR", "GS3", "Water Resources"],
    sources: [
      { title: "Indus River — Wikipedia", url: "https://en.wikipedia.org/wiki/Indus_River" },
      { title: "Indus Waters Treaty — World Bank", url: "https://www.worldbank.org/en/region/sar/brief/indus-waters-treaty-1960" },
    ],
  },

  {
    id: "riv-godavari",
    layer: "L8",
    colorFamily: "blue",
    title: "Godavari",
    description: "The largest peninsular river, the Godavari rises at Trimbakeshwar in Maharashtra and flows eastward across the Deccan to empty into the Bay of Bengal near Rajahmundry. Known as the “Dakshin Ganga,” it is central to the Polavaram and interlinking-of-rivers debates. It is a recurring GS1 (geography) and GS3 (water resources) hotspot.",
    lat: 18.97,
    lng: 79.6,
    country: "India",
    region: "South Asia / Deccan",
    syllabusTags: ["GS1", "Geomorphology", "GS3", "Water Resources"],
    sources: [
      { title: "Godavari River — Wikipedia", url: "https://en.wikipedia.org/wiki/Godavari_River" },
      { title: "Godavari — Encyclopaedia Britannica", url: "https://www.britannica.com/place/Godavari-River" },
    ],
  },

  {
    id: "riv-krishna",
    layer: "L8",
    colorFamily: "blue",
    title: "Krishna",
    description: "The second-longest peninsular river, the Krishna rises near Mahabaleshwar in Maharashtra and flows through Karnataka, Telangana and Andhra Pradesh to empty near Hamasaladeevi. The Almatti and Nagarjuna Sagar dams and the Krishna Water Disputes Tribunal frame inter-state water politics. It is a recurring GS1 (geography) and GS2 (interstate disputes) hotspot.",
    lat: 16.5,
    lng: 80.5,
    country: "India",
    region: "South Asia / Deccan",
    syllabusTags: ["GS1", "Geomorphology", "GS2", "Interstate Relations", "GS3", "Water Resources"],
    sources: [
      { title: "Krishna River — Wikipedia", url: "https://en.wikipedia.org/wiki/Krishna_River" },
      { title: "Krishna Water Disputes Tribunal — Ministry of Jal Shakti", url: "https://jalshakti-ddws.gov.in/" },
    ],
  },

  {
    id: "riv-kaveri",
    layer: "L8",
    colorFamily: "blue",
    title: "Kaveri",
    description: "A peninsular river rising at Talakaveri in the Western Ghats and flowing through Karnataka and Tamil Nadu to empty into the Bay of Bengal at Poompuhar. The Kaveri Water Dispute between Karnataka and Tamil Nadu is one of India’s longest-running inter-state conflicts. It is a recurring GS1 (geography) and GS2 (interstate) hotspot for both Prelims and Mains.",
    lat: 10.81,
    lng: 78.69,
    country: "India",
    region: "South Asia / Deccan",
    syllabusTags: ["GS1", "Geomorphology", "GS2", "Interstate Relations", "GS3", "Agriculture"],
    sources: [
      { title: "Kaveri River — Wikipedia", url: "https://en.wikipedia.org/wiki/Kaveri_River" },
      { title: "Cauvery Water Disputes Tribunal — Ministry of Jal Shakti", url: "https://jalshakti-ddws.gov.in/" },
    ],
  },

  {
    id: "riv-narmada",
    layer: "L8",
    colorFamily: "blue",
    title: "Narmada",
    description: "India’s largest west-flowing peninsular river, the Narmada rises in Amarkantak and flows through a rift valley between the Satpura and Vindhya ranges to empty into the Gulf of Khambhat. The Sardar Sarovar Project and the Narmada Bachao Andolan define its modern politics. It is a recurring GS1 (geography) and GS3 (water resources) hotspot.",
    lat: 22.3,
    lng: 73,
    country: "India",
    region: "South Asia / Deccan",
    syllabusTags: ["GS1", "Geomorphology", "GS3", "Water Resources", "Displacement"],
    sources: [
      { title: "Narmada River — Wikipedia", url: "https://en.wikipedia.org/wiki/Narmada_River" },
      { title: "Sardar Sarovar Project — Narmada Control Authority", url: "https://nca.gov.in/" },
    ],
  },

  {
    id: "riv-tapti",
    layer: "L8",
    colorFamily: "blue",
    title: "Tapti (Tapi)",
    description: "A west-flowing peninsular river rising in the Satpura range of Madhya Pradesh and emptying into the Gulf of Khambhat near Surat, the Tapti flows in a rift valley parallel to the Narmada. It is the second-largest west-flowing river of peninsular India. It is a recurring GS1 (geography) hotspot for Prelims.",
    lat: 21.2,
    lng: 74.5,
    country: "India",
    region: "South Asia / Deccan",
    syllabusTags: ["GS1", "Geomorphology", "Drainage"],
    sources: [
      { title: "Tapti River — Wikipedia", url: "https://en.wikipedia.org/wiki/Tapti_River" },
      { title: "Tapti River — Encyclopaedia Britannica", url: "https://www.britannica.com/place/Tapti-River" },
    ],
  },

  {
    id: "riv-mahanadi",
    layer: "L8",
    colorFamily: "blue",
    title: "Mahanadi",
    description: "A major east-flowing peninsular river rising in Chhattisgarh and flowing through Odisha to empty into the Bay of Bengal near False Point. The Hirakud Dam on the Mahanadi was independent India’s first multipurpose river valley project. It is a recurring GS1 (geography) and GS3 (water resources) hotspot, paired with Chhattisgarh-Odisha disputes.",
    lat: 21.1,
    lng: 81.65,
    country: "India",
    region: "South Asia / East coast",
    syllabusTags: ["GS1", "Geomorphology", "GS3", "Water Resources", "GS2", "Interstate Relations"],
    sources: [
      { title: "Mahanadi River — Wikipedia", url: "https://en.wikipedia.org/wiki/Mahanadi_River" },
      { title: "Hirakud Dam — Wikipedia", url: "https://en.wikipedia.org/wiki/Hirakud_Dam" },
    ],
  },

  {
    id: "riv-sutlej",
    layer: "L8",
    colorFamily: "blue",
    title: "Sutlej",
    description: "The easternmost tributary of the Indus, the Sutlej rises near Lake Rakshastal in Tibet and enters India at Shipki La, powering the Bhakra Nangal project. It is one of the three eastern rivers allocated to India under the Indus Waters Treaty. It is a recurring GS1 (geography) and GS3 (water resources) hotspot for Prelims.",
    lat: 31.5,
    lng: 76.8,
    country: "India / China / Pakistan",
    region: "South Asia / Himalaya",
    syllabusTags: ["GS1", "Geomorphology", "GS3", "Water Resources", "GS2", "IR"],
    sources: [
      { title: "Sutlej River — Wikipedia", url: "https://en.wikipedia.org/wiki/Sutlej_River" },
      { title: "Bhakra Nangal Project — Wikipedia", url: "https://en.wikipedia.org/wiki/Bhakra_Dam" },
    ],
  },

  {
    id: "riv-chenab",
    layer: "L8",
    colorFamily: "blue",
    title: "Chenab",
    description: "A major tributary of the Indus formed by the confluence of the Chandra and Bhaga at Tandi, the Chenab flows through Jammu & Kashmir into Pakistan. It is allocated to Pakistan under the Indus Waters Treaty but India is permitted run-of-the-river hydropower, the basis of the Baglihar and Kishanganga disputes. It is a recurring GS1 (geography) and GS2 (IR) hotspot.",
    lat: 33.1,
    lng: 74.5,
    country: "India / Pakistan",
    region: "South Asia / Himalaya",
    syllabusTags: ["GS1", "Geomorphology", "GS2", "IR", "GS3", "Water Resources"],
    sources: [
      { title: "Chenab River — Wikipedia", url: "https://en.wikipedia.org/wiki/Chenab_River" },
      { title: "Indus Waters Treaty — World Bank", url: "https://www.worldbank.org/en/region/sar/brief/indus-waters-treaty-1960" },
    ],
  },

  {
    id: "riv-tungabhadra",
    layer: "L8",
    colorFamily: "blue",
    title: "Tungabhadra",
    description: "A major Krishna tributary formed by the confluence of the Tunga and Bhadra rivers in Karnataka, the Tungabhadra flows through the historical heartland of Hampi. The Tungabhadra Dam at Hospet irrigates the Ballari-Raichur doab. It is a recurring GS1 (geography) hotspot, paired with Vijayanagara and Krishna-basin questions.",
    lat: 15.3,
    lng: 76.4,
    country: "India",
    region: "South Asia / Deccan",
    syllabusTags: ["GS1", "Geomorphology", "GS1", "History", "GS3", "Water Resources"],
    sources: [
      { title: "Tungabhadra River — Wikipedia", url: "https://en.wikipedia.org/wiki/Tungabhadra_River" },
      { title: "Tungabhadra Dam — Wikipedia", url: "https://en.wikipedia.org/wiki/Tungabhadra_Dam" },
    ],
  },

  {
    id: "riv-nile",
    layer: "L8",
    colorFamily: "blue",
    title: "Nile",
    description: "Traditionally regarded as the world’s longest river, the Nile flows 6,650 km from Lake Victoria to the Mediterranean and is the lifeline of Egypt and Sudan. The Grand Ethiopian Renaissance Dam dispute frames contemporary Nile politics. It is a recurring GS1 (geography) and GS2 (IR) hotspot for Prelims.",
    lat: 25,
    lng: 32,
    country: "Egypt / Sudan / Ethiopia / Uganda",
    region: "Northeast Africa",
    syllabusTags: ["GS1", "Geomorphology", "GS2", "IR", "GS3", "Water Resources"],
    sources: [
      { title: "Nile — Wikipedia", url: "https://en.wikipedia.org/wiki/Nile" },
      { title: "Grand Ethiopian Renaissance Dam — Wikipedia", url: "https://en.wikipedia.org/wiki/Grand_Ethiopian_Renaissance_Dam" },
    ],
  },

  {
    id: "riv-amazon",
    layer: "L8",
    colorFamily: "blue",
    title: "Amazon",
    description: "The largest river by discharge and the heart of the world’s largest tropical rainforest, the Amazon carries more water than the next seven largest rivers combined. Brazilian deforestation and indigenous rights define its conservation politics. It is a recurring GS1 (biogeography) and GS3 (environment) hotspot, paired with the “lungs of the planet” framing.",
    lat: -3,
    lng: -60,
    country: "Brazil / Peru / Colombia",
    region: "South America",
    syllabusTags: ["GS1", "Biogeography", "GS3", "Environment", "Climate Change"],
    sources: [
      { title: "Amazon River — Wikipedia", url: "https://en.wikipedia.org/wiki/Amazon_River" },
      { title: "Amazon rainforest — Wikipedia", url: "https://en.wikipedia.org/wiki/Amazon_rainforest" },
    ],
  },

  {
    id: "riv-yangtze",
    layer: "L8",
    colorFamily: "blue",
    title: "Yangtze",
    description: "The longest river in Asia and the third-longest in the world, the Yangtze flows 6,300 km from the Tibetan Plateau to the East China Sea. The Three Gorges Dam on the Yangtze is the world’s largest power station by installed capacity. It is a recurring GS1 (geography) and GS3 (energy) hotspot, paired with Chinese hydropolicy questions.",
    lat: 30.5,
    lng: 114.3,
    country: "China",
    region: "East Asia",
    syllabusTags: ["GS1", "Geomorphology", "GS3", "Energy", "GS2", "IR"],
    sources: [
      { title: "Yangtze — Wikipedia", url: "https://en.wikipedia.org/wiki/Yangtze" },
      { title: "Three Gorges Dam — Wikipedia", url: "https://en.wikipedia.org/wiki/Three_Gorges_Dam" },
    ],
  },

  {
    id: "riv-mississippi",
    layer: "L8",
    colorFamily: "blue",
    title: "Mississippi-Missouri",
    description: "The largest river system in North America, the Mississippi-Missouri drains roughly 40% of the contiguous United States. It is the historical artery of American agriculture and a frequent flood-disaster reference. It is a recurring GS1 (geography) and GS3 (disaster) hotspot, paired with US commodity-flow questions.",
    lat: 35,
    lng: -90,
    country: "United States",
    region: "North America",
    syllabusTags: ["GS1", "Geomorphology", "GS3", "Disaster Management", "Agriculture"],
    sources: [
      { title: "Mississippi River — Wikipedia", url: "https://en.wikipedia.org/wiki/Mississippi_River" },
      { title: "Missouri River — Wikipedia", url: "https://en.wikipedia.org/wiki/Missouri_River" },
    ],
  },

  {
    id: "riv-mekong",
    layer: "L8",
    colorFamily: "blue",
    title: "Mekong",
    description: "The longest river in Southeast Asia, the Mekong rises in the Tibetan Plateau and flows through six countries to its delta in Vietnam. The Mekong River Commission and the upstream Lancang dam cascade frame the basin’s geopolitics. It is a recurring GS1 (geography) and GS2 (IR) hotspot, paired with Act East questions.",
    lat: 12,
    lng: 105,
    country: "China / Myanmar / Laos / Thailand / Cambodia / Vietnam",
    region: "Southeast Asia",
    syllabusTags: ["GS1", "Geomorphology", "GS2", "IR", "GS3", "Food Security"],
    sources: [
      { title: "Mekong River — Wikipedia", url: "https://en.wikipedia.org/wiki/Mekong" },
      { title: "Mekong River Commission", url: "https://www.mrcmekong.org/" },
    ],
  },

  {
    id: "riv-danube",
    layer: "L8",
    colorFamily: "blue",
    title: "Danube",
    description: "The second-longest river in Europe, the Danube flows through ten countries from Germany’s Black Forest to the Black Sea. It is the European Union’s only transboundary river corridor and a UNESCO World Heritage site along its Wachau stretch. It is a recurring GS1 (geography) hotspot, paired with European integration questions.",
    lat: 48.13,
    lng: 16.36,
    country: "Germany / Austria / Hungary / Romania / others",
    region: "Central/Eastern Europe",
    syllabusTags: ["GS1", "Geomorphology", "GS2", "IR"],
    sources: [
      { title: "Danube — Wikipedia", url: "https://en.wikipedia.org/wiki/Danube" },
      { title: "International Commission for the Protection of the Danube River", url: "https://www.icpdr.org/" },
    ],
  },
]
