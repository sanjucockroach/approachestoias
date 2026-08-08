/**
 * CockroachIAS — UPSC World Atlas
 * L11 — Mineral & Industrial Regions (green)
 * Resource & industrial belts.
 *
 * Part of the curated hotspot dataset (split from the original monolithic
 * hotspots.ts — see hotspots/index.ts for aggregation).
 *
 * Authored by: Task 3-data (dataset author subagent) + Task 7-split-nasa (splitter).
 * Brand voice: minimalist, bold, empathetic, honest — CockroachIAS "For Those Who Refuse to Quit."
 * Every coordinate is hand-verified (WGS84, 2-decimal).
 */

import type { CuratedHotspot } from './types'

export const minerals: CuratedHotspot[] = [
  {
    id: "min-jharia",
    layer: "L11",
    colorFamily: "green",
    title: "Jharia Coalfield",
    description: "India’s largest store of prime coking coal and the country’s most important coalfield, located in Jharia-Dhanbad belt of Jharkhand. It has been burning underground for over a century due to spontaneous combustion, triggering large-scale displacement. It is a recurring GS3 (economy) and GS1 (geography) hotspot for both Prelims and Mains.",
    lat: 23.75,
    lng: 86.42,
    country: "India",
    region: "South Asia / Jharkhand",
    syllabusTags: ["GS3", "Economy", "Minerals", "GS1", "Geography", "Energy Security"],
    sources: [
      { title: "Jharia coalfield — Wikipedia", url: "https://en.wikipedia.org/wiki/Jharia_coalfield" },
      { title: "Jharia — Coal India", url: "https://www.coalindia.in/" },
    ],
  },

  {
    id: "min-raniganj",
    layer: "L11",
    colorFamily: "green",
    title: "Raniganj Coalfield",
    description: "India’s oldest coalfield, mined since 1774, located across West Bengal’s Bardhaman district and parts of Jharkhand. It produces non-coking coal for the Damodar Valley industries. It is a recurring GS3 (economy) and GS1 (geography) hotspot, paired with coal nationalisation and Damodar Valley Corporation questions.",
    lat: 23.62,
    lng: 87.1,
    country: "India",
    region: "South Asia / West Bengal",
    syllabusTags: ["GS3", "Economy", "Minerals", "GS1", "Geography"],
    sources: [
      { title: "Raniganj Coalfield — Wikipedia", url: "https://en.wikipedia.org/wiki/Raniganj_Coalfield" },
      { title: "Eastern Coalfields Limited", url: "https://www.easterncoal.gov.in/" },
    ],
  },

  {
    id: "min-bailadila",
    layer: "L11",
    colorFamily: "green",
    title: "Bailadila Iron Ore Range",
    description: "A range of 14 deposits in Dantewada district of Chhattisgarh that holds some of the world’s highest-grade hematite iron ore. NMDC’s Bailadila mines feed both domestic steel plants and Japanese and Korean steelmakers via Visakhapatnam port. It is a recurring GS3 (economy) and GS1 (geography) hotspot.",
    lat: 18.69,
    lng: 81.22,
    country: "India",
    region: "South Asia / Chhattisgarh",
    syllabusTags: ["GS3", "Economy", "Minerals", "GS1", "Geography"],
    sources: [
      { title: "Bailadila mine — Wikipedia", url: "https://en.wikipedia.org/wiki/Bailadila_mine" },
      { title: "NMDC Bailadila Iron Ore Mine", url: "https://www.nmdc.co.in/" },
    ],
  },

  {
    id: "min-singhbhum",
    layer: "L11",
    colorFamily: "green",
    title: "Singhbhum Copper Belt",
    description: "India’s richest copper belt, extending across East and West Singhbhum and Saraikela-Kharsawan districts of Jharkhand. Hindustan Copper’s mines at Mosabani, Surda and Rakha anchor India’s primary copper production. It is a recurring GS3 (economy) and GS1 (geography) hotspot for both Prelims and Mains.",
    lat: 22.7,
    lng: 85.8,
    country: "India",
    region: "South Asia / Jharkhand",
    syllabusTags: ["GS3", "Economy", "Minerals", "GS1", "Geography"],
    sources: [
      { title: "Singhbhum copper belt — Wikipedia", url: "https://en.wikipedia.org/wiki/Singhbhum_copper_belt" },
      { title: "Hindustan Copper Limited", url: "https://www.hindustancopper.com/" },
    ],
  },

  {
    id: "min-kolar",
    layer: "L11",
    colorFamily: "green",
    title: "Kolar Gold Fields",
    description: "One of the deepest gold mines in the world, Kolar Gold Fields in Karnataka was mined continuously from the 1880s until closure in 2001 due to unviable costs. The fields have been a recurring GS1 (history) and GS3 (economy) reference for India’s gold-mining legacy.",
    lat: 13.14,
    lng: 78.27,
    country: "India",
    region: "South Asia / Karnataka",
    syllabusTags: ["GS3", "Economy", "Minerals", "GS1", "History"],
    sources: [
      { title: "Kolar Gold Fields — Wikipedia", url: "https://en.wikipedia.org/wiki/Kolar_Gold_Fields" },
      { title: "Bharat Gold Mines Limited", url: "https://bgml.in/" },
    ],
  },

  {
    id: "min-hutti",
    layer: "L11",
    colorFamily: "green",
    title: "Hutti Gold Mines",
    description: "India’s only active primary gold-producing mine, located in Raichur district of Karnataka and operated by the state-owned Hutti Gold Mines Company. It is the second deepest gold mine in India after Kolar. It is a recurring GS3 (economy) hotspot, paired with India’s gold-import substitution questions.",
    lat: 16.18,
    lng: 76.63,
    country: "India",
    region: "South Asia / Karnataka",
    syllabusTags: ["GS3", "Economy", "Minerals"],
    sources: [
      { title: "Hutti Gold Mines — Wikipedia", url: "https://en.wikipedia.org/wiki/Hutti_Gold_Mines" },
      { title: "Hutti Gold Mines Company Limited", url: "https://hgml.karnataka.gov.in/" },
    ],
  },

  {
    id: "min-zawar",
    layer: "L11",
    colorFamily: "green",
    title: "Zawar Zinc-Lead Belt",
    description: "A zinc-lead mining belt 40 km south of Udaipur in Rajasthan, Zawar has been mined for over 2,000 years and is among the world’s oldest zinc-smelting sites. Operated today by Hindustan Zinc, it includes the Mochia, Balaria, Baroi and Zawarmala mines. It is a recurring GS3 (economy) and GS1 (geography) hotspot.",
    lat: 24.35,
    lng: 73.7,
    country: "India",
    region: "South Asia / Rajasthan",
    syllabusTags: ["GS3", "Economy", "Minerals", "GS1", "Geography"],
    sources: [
      { title: "Zawar — Wikipedia", url: "https://en.wikipedia.org/wiki/Zawar" },
      { title: "Hindustan Zinc — Zawar Mine", url: "https://www.hzlindia.com/what-we-do/our-mining-operations/zawar-mine/" },
    ],
  },

  {
    id: "min-neyveli",
    layer: "L11",
    colorFamily: "green",
    title: "Neyveli Lignite Fields",
    description: "One of the largest lignite deposits in the world, located in Cuddalore district of Tamil Nadu and operated by NLC India. The linked thermal power stations supply southern India. It is a recurring GS3 (economy) and GS1 (geography) hotspot, paired with energy-transition and coal-substitution questions.",
    lat: 11.62,
    lng: 79.48,
    country: "India",
    region: "South Asia / Tamil Nadu",
    syllabusTags: ["GS3", "Economy", "Minerals", "Energy Security"],
    sources: [
      { title: "Neyveli — Wikipedia", url: "https://en.wikipedia.org/wiki/Neyveli" },
      { title: "NLC India Limited", url: "https://www.nlcindia.in/" },
    ],
  },

  {
    id: "min-ankleshwar",
    layer: "L11",
    colorFamily: "green",
    title: "Ankleshwar Oil Field",
    description: "An onshore oil and gas field in Gujarat’s Bharuch district, Ankleshwar was discovered by ONGC in 1961 and was independent India’s first major commercial oil find. It anchors the Ankleshwar industrial estate and Gujarat’s petrochemical corridor. It is a recurring GS3 (economy) and GS1 (geography) hotspot for Prelims.",
    lat: 21.63,
    lng: 73.01,
    country: "India",
    region: "South Asia / Gujarat",
    syllabusTags: ["GS3", "Economy", "Minerals", "Energy Security"],
    sources: [
      { title: "Ankleshwar — Wikipedia", url: "https://en.wikipedia.org/wiki/Ankleshwar" },
      { title: "ONGC — Official Site", url: "https://ongcindia.com/" },
    ],
  },

  {
    id: "min-digboi",
    layer: "L11",
    colorFamily: "green",
    title: "Digboi Oil Field",
    description: "Asia’s oldest continuously producing oilfield, Digboi was discovered in 1889 in upper Assam’s Tinsukia district and gave India its first refinery in 1901. It remains the symbolic birthplace of the Indian petroleum industry. It is a recurring GS3 (economy) and GS1 (geography) hotspot for both Prelims and Mains.",
    lat: 27.39,
    lng: 95.62,
    country: "India",
    region: "South Asia / Assam",
    syllabusTags: ["GS3", "Economy", "Minerals", "Energy Security", "GS1", "History"],
    sources: [
      { title: "Digboi — Wikipedia", url: "https://en.wikipedia.org/wiki/Digboi" },
      { title: "Digboi Refinery — IOCL", url: "https://iocl.com/" },
    ],
  },

  {
    id: "min-bombay-high",
    layer: "L11",
    colorFamily: "green",
    title: "Bombay High Offshore Field",
    description: "India’s largest offshore oil and gas field, discovered in 1974 about 160 km northwest of Mumbai in the Arabian Sea. It contributes roughly half of India’s domestic crude production. It is a recurring GS3 (economy) and GS1 (geography) hotspot, paired with energy-security and exclusive economic zone questions.",
    lat: 19.05,
    lng: 71.5,
    country: "India",
    region: "South Asia / Arabian Sea",
    syllabusTags: ["GS3", "Economy", "Minerals", "Energy Security", "Maritime Security"],
    sources: [
      { title: "Bombay High — Wikipedia", url: "https://en.wikipedia.org/wiki/Bombay_High" },
      { title: "ONGC Offshore — Official Site", url: "https://ongcindia.com/" },
    ],
  },

  {
    id: "min-singareni",
    layer: "L11",
    colorFamily: "green",
    title: "Singareni Coalfield",
    description: "A 220-million-tonne coal belt across six districts of Telangana operated by the Singareni Collieries Company, a joint venture of the Government of Telangana and the Government of India. It is the largest coal-producing company in South India. It is a recurring GS3 (economy) hotspot, paired with Telangana industry questions.",
    lat: 17.56,
    lng: 80.62,
    country: "India",
    region: "South Asia / Telangana",
    syllabusTags: ["GS3", "Economy", "Minerals", "Energy Security"],
    sources: [
      { title: "Singareni Collieries Company — Wikipedia", url: "https://en.wikipedia.org/wiki/Singareni_Collieries_Company" },
      { title: "SCCL — Official Site", url: "https://scclmines.com/" },
    ],
  },

  {
    id: "min-malanjkhand",
    layer: "L11",
    colorFamily: "green",
    title: "Malanjkhand Copper Project",
    description: "India’s single largest copper deposit, located in Balaghat district of Madhya Pradesh and operated by Hindustan Copper since 1982. The open-pit mine is the principal source of feed for Indian copper smelters. It is a recurring GS3 (economy) hotspot for both Prelims and Mains.",
    lat: 22.02,
    lng: 80.72,
    country: "India",
    region: "South Asia / Madhya Pradesh",
    syllabusTags: ["GS3", "Economy", "Minerals"],
    sources: [
      { title: "Malanjkhand Copper Project — Wikipedia", url: "https://en.wikipedia.org/wiki/Malanjkhand" },
      { title: "Hindustan Copper — Malanjkhand", url: "https://www.hindustancopper.com/Page/MCCPlant" },
    ],
  },

  {
    id: "min-bhilai",
    layer: "L11",
    colorFamily: "green",
    title: "Bhilai Steel Plant",
    description: "India’s first integrated steel plant in the public sector, inaugurated in 1959 with Soviet collaboration at Bhilai in Chhattisgarh. It is the flagship unit of the Steel Authority of India and the principal supplier of rails for Indian Railways. It is a recurring GS3 (economy) hotspot, paired with the Heavy Industry (1956) resolution.",
    lat: 21.2,
    lng: 81.35,
    country: "India",
    region: "South Asia / Chhattisgarh",
    syllabusTags: ["GS3", "Economy", "Industry", "GS1", "History"],
    sources: [
      { title: "Bhilai Steel Plant — Wikipedia", url: "https://en.wikipedia.org/wiki/Bhilai_Steel_Plant" },
      { title: "SAIL Bhilai — Official Site", url: "https://www.sail.co.in/en/about-us/bhilai-steel-plant" },
    ],
  },

  {
    id: "min-ghawar",
    layer: "L11",
    colorFamily: "green",
    title: "Ghawar Oil Field",
    description: "The largest conventional oil field in the world, Ghawar is a 280 km by 30 km anticlinal structure in Saudi Arabia’s Eastern Province. It accounts for roughly half of Saudi Arabia’s cumulative crude production and is central to global oil-price stability. It is a recurring GS3 (energy security) and GS2 (IR) hotspot.",
    lat: 25.4,
    lng: 49.7,
    country: "Saudi Arabia",
    region: "West Asia / Eastern Province",
    syllabusTags: ["GS3", "Energy Security", "GS2", "IR", "Minerals"],
    sources: [
      { title: "Ghawar Field — Wikipedia", url: "https://en.wikipedia.org/wiki/Ghawar_Field" },
      { title: "Saudi Aramco — Official Site", url: "https://www.aramco.com/" },
    ],
  },

  {
    id: "min-witwatersrand",
    layer: "L11",
    colorFamily: "green",
    title: "Witwatersrand Gold Basin",
    description: "The world’s single largest gold-producing region, the Witwatersrand basin around Johannesburg has yielded about half of all gold ever mined. Discovered in 1886, it shaped South Africa’s mining economy and apartheid labour system. It is a recurring GS3 (economy) and GS1 (history) hotspot for both Prelims and Mains.",
    lat: -26.2,
    lng: 28.05,
    country: "South Africa",
    region: "Southern Africa",
    syllabusTags: ["GS3", "Economy", "Minerals", "GS1", "History"],
    sources: [
      { title: "Witwatersrand — Wikipedia", url: "https://en.wikipedia.org/wiki/Witwatersrand" },
      { title: "Witwatersrand gold rush — Wikipedia", url: "https://en.wikipedia.org/wiki/Witwatersrand_Gold_Rush" },
    ],
  },
]
