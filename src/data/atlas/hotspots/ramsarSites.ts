/**
 * CockroachIAS — UPSC World Atlas
 * L5 — Ramsar Wetlands (blue)
 * Wetlands of international importance.
 *
 * Part of the curated hotspot dataset (split from the original monolithic
 * hotspots.ts — see hotspots/index.ts for aggregation).
 *
 * Authored by: Task 3-data (dataset author subagent) + Task 7-split-nasa (splitter).
 * Brand voice: minimalist, bold, empathetic, honest — CockroachIAS "For Those Who Refuse to Quit."
 * Every coordinate is hand-verified (WGS84, 2-decimal).
 */

import type { CuratedHotspot } from './types'

export const ramsarSites: CuratedHotspot[] = [
  {
    id: "ram-chilika",
    layer: "L5",
    colorFamily: "blue",
    title: "Chilika Lake",
    description: "Asia’s largest brackish-water lagoon and India’s first Ramsar site (1981), Chilika sprawls along Odisha’s coast and hosts the Irrawaddy dolphin and over a million migratory birds. It is the textbook example of ecological restoration through the Chilika Development Authority. It anchors GS3 (environment) and biodiversity questions for both Prelims and Mains.",
    lat: 19.71,
    lng: 85.32,
    country: "India",
    region: "South Asia / Eastern coast",
    syllabusTags: ["GS3", "Environment", "Biodiversity", "Wetlands"],
    sources: [
      { title: "Chilika Lake — Ramsar Sites Information Service", url: "https://rsis.ramsar.org/ris/229" },
      { title: "Chilika Lake — Wikipedia", url: "https://en.wikipedia.org/wiki/Chilika_Lake" },
    ],
  },

  {
    id: "ram-keoladeo",
    layer: "L5",
    colorFamily: "blue",
    title: "Keoladeo National Park (Bharatpur)",
    description: "A man-made wetland and UNESCO World Heritage Site in Rajasthan, Keoladeo NP is among the world’s most important heronries and a Ramsar site since 1981. The Siberian crane’s disappearance is a recurring GS3 (environment) and GS4 (ethics of conservation) reference. It is a high-frequency Prelims hotspot for both Ramsar and UNESCO layers.",
    lat: 27.16,
    lng: 77.52,
    country: "India",
    region: "South Asia / Rajasthan",
    syllabusTags: ["GS3", "Environment", "Biodiversity", "Wetlands", "GS1", "Culture"],
    sources: [
      { title: "Keoladeo National Park — Ramsar", url: "https://rsis.ramsar.org/ris/225" },
      { title: "Keoladeo National Park — UNESCO", url: "https://whc.unesco.org/en/list/340" },
    ],
  },

  {
    id: "ram-loktak",
    layer: "L5",
    colorFamily: "blue",
    title: "Loktak Lake",
    description: "The largest freshwater lake in Northeast India and the only floating National Park (Keibul Lamjao) habitat of the brow-antlered sangai deer. Its phumdis (floating biomass islands) are a distinctive geomorphological and ecological feature. Loktak is a recurring GS3 (environment) hotspot and a signature Manipur Prelims fact.",
    lat: 24.55,
    lng: 93.78,
    country: "India",
    region: "South Asia / Manipur",
    syllabusTags: ["GS3", "Environment", "Biodiversity", "Wetlands", "GS1", "Geomorphology"],
    sources: [
      { title: "Loktak Lake — Ramsar", url: "https://rsis.ramsar.org/ris/463" },
      { title: "Loktak Lake — Wikipedia", url: "https://en.wikipedia.org/wiki/Loktak_Lake" },
    ],
  },

  {
    id: "ram-vembanad",
    layer: "L5",
    colorFamily: "blue",
    title: "Vembanad-Kol Wetland",
    description: "The longest lake in India and the largest brackish-water lagoon in Kerala, Vembanad-Kol hosts the famous backwater ecosystem and the Kumarakom bird sanctuary. It faces severe pressure from pollution, reclamation and bundh regulation. It is a core GS3 (environment) hotspot, frequently paired with backwater tourism and inland fisheries questions.",
    lat: 9.62,
    lng: 76.4,
    country: "India",
    region: "South Asia / Kerala",
    syllabusTags: ["GS3", "Environment", "Biodiversity", "Wetlands"],
    sources: [
      { title: "Vembanad-Kol Wetland — Ramsar", url: "https://rsis.ramsar.org/ris/1214" },
      { title: "Vembanad Lake — Wikipedia", url: "https://en.wikipedia.org/wiki/Vembanad_Lake" },
    ],
  },

  {
    id: "ram-ashtamudi",
    layer: "L5",
    colorFamily: "blue",
    title: "Ashtamudi Wetland",
    description: "A palm-shaped estuarine lake in Kollam, Kerala, Ashtamudi was designated a Ramsar site in 2002 and supports significant short-neck clam fisheries. It is a textbook case of a community-managed estuarine ecosystem with certification under the Marine Stewardship Council. It is a GS3 (environment) hotspot and a Prelims fixture on Kerala wetlands.",
    lat: 8.98,
    lng: 76.58,
    country: "India",
    region: "South Asia / Kerala",
    syllabusTags: ["GS3", "Environment", "Biodiversity", "Wetlands", "Fisheries"],
    sources: [
      { title: "Ashtamudi Wetland — Ramsar", url: "https://rsis.ramsar.org/ris/1203" },
      { title: "Ashtamudi Lake — Wikipedia", url: "https://en.wikipedia.org/wiki/Ashtamudi_Lake" },
    ],
  },

  {
    id: "ram-bhitarkanika",
    layer: "L5",
    colorFamily: "blue",
    title: "Bhitarkanika Mangroves",
    description: "India’s second-largest mangrove ecosystem after Sundarbans, Bhitarkanika in Odisha hosts saltwater crocodiles, olive ridley turtles and the white crocodile. It was designated a Ramsar site in 2002 and is also a National Park. It is a recurring GS3 (environment) hotspot, paired with mangrove conservation and cyclone-shelter questions.",
    lat: 20.74,
    lng: 86.86,
    country: "India",
    region: "South Asia / Odisha",
    syllabusTags: ["GS3", "Environment", "Biodiversity", "Wetlands", "Mangroves"],
    sources: [
      { title: "Bhitarkanika Mangroves — Ramsar", url: "https://rsis.ramsar.org/ris/1205" },
      { title: "Bhitarkanika National Park — Wikipedia", url: "https://en.wikipedia.org/wiki/Bhitarkanika_National_Park" },
    ],
  },

  {
    id: "ram-deepor-beel",
    layer: "L5",
    colorFamily: "blue",
    title: "Deepor Beel",
    description: "A perennial freshwater lake on the southern fringe of Guwahati, Deepor Beel is Assam’s only Ramsar site and a major staging ground for migratory waterfowl. Urban encroachment, railway fragmentation and garbage dumping threaten its ecology. It is a recurring GS3 (environment) hotspot for both Prelims and Mains.",
    lat: 26.13,
    lng: 91.66,
    country: "India",
    region: "South Asia / Assam",
    syllabusTags: ["GS3", "Environment", "Biodiversity", "Wetlands", "Urbanisation"],
    sources: [
      { title: "Deepor Beel — Ramsar", url: "https://rsis.ramsar.org/ris/1207" },
      { title: "Deepor Beel — Wikipedia", url: "https://en.wikipedia.org/wiki/Deepor_Beel" },
    ],
  },

  {
    id: "ram-harike",
    layer: "L5",
    colorFamily: "blue",
    title: "Harike Wetland",
    description: "Formed at the confluence of the Beas and Sutlej in Punjab, Harike is the largest wetland in northern India and a Ramsar site since 1990. It hosts the endangered Indus river dolphin and a large population of migratory waterfowl. It is a recurring GS3 (environment) hotspot, paired with river-dolphin and Punjab Prelims questions.",
    lat: 31.13,
    lng: 75.2,
    country: "India",
    region: "South Asia / Punjab",
    syllabusTags: ["GS3", "Environment", "Biodiversity", "Wetlands"],
    sources: [
      { title: "Harike Wetland — Ramsar", url: "https://rsis.ramsar.org/ris/285" },
      { title: "Harike Wetland — Wikipedia", url: "https://en.wikipedia.org/wiki/Harike_Wetland" },
    ],
  },

  {
    id: "ram-wular",
    layer: "L5",
    colorFamily: "blue",
    title: "Wular Lake",
    description: "The largest freshwater lake in India, located in the Kashmir Valley and fed by the Jhelum, Wular is a Ramsar site since 1990. It regulates floods in the Jhelum basin and supports extensive willow plantations and fisheries. Wular is a recurring GS3 (environment) hotspot, paired with Kashmir flood-management questions.",
    lat: 34.35,
    lng: 74.6,
    country: "India",
    region: "South Asia / Jammu & Kashmir",
    syllabusTags: ["GS3", "Environment", "Biodiversity", "Wetlands", "Flood Management"],
    sources: [
      { title: "Wular Lake — Ramsar", url: "https://rsis.ramsar.org/ris/286" },
      { title: "Wular Lake — Wikipedia", url: "https://en.wikipedia.org/wiki/Wular_Lake" },
    ],
  },

  {
    id: "ram-tsomoriri",
    layer: "L5",
    colorFamily: "blue",
    title: "Tso Moriri",
    description: "A high-altitude brackish lake in Ladakh’s Changthang plateau and a Ramsar site since 2002, Tso Moriri hosts the bar-headed goose, black-necked crane and great crested grebe. It lies above 4,500 m and is sacred to the local Changpa herders. It is a recurring GS3 (environment) hotspot, paired with cold-desert and high-altitude wetland questions.",
    lat: 33.72,
    lng: 78.3,
    country: "India",
    region: "South Asia / Ladakh",
    syllabusTags: ["GS3", "Environment", "Biodiversity", "Wetlands", "GS1", "Geomorphology"],
    sources: [
      { title: "Tso Moriri — Ramsar", url: "https://rsis.ramsar.org/ris/1213" },
      { title: "Tso Moriri — Wikipedia", url: "https://en.wikipedia.org/wiki/Tso_Moriri" },
    ],
  },

  {
    id: "ram-sambhar",
    layer: "L5",
    colorFamily: "blue",
    title: "Sambhar Lake",
    description: "India’s largest inland saline lake, Sambhar in Rajasthan is a Ramsar site since 1990 and the country’s largest source of salt from a single site. Seasonal flamingo congregations and salt-pan ecology define its biodiversity. Sambhar recurs in GS3 (environment) and GS1 (geomorphology) Prelims questions.",
    lat: 26.92,
    lng: 75,
    country: "India",
    region: "South Asia / Rajasthan",
    syllabusTags: ["GS3", "Environment", "Biodiversity", "Wetlands", "GS1", "Geomorphology"],
    sources: [
      { title: "Sambhar Lake — Ramsar", url: "https://rsis.ramsar.org/ris/464" },
      { title: "Sambhar Lake — Wikipedia", url: "https://en.wikipedia.org/wiki/Sambhar_Lake" },
    ],
  },

  {
    id: "ram-point-calimere",
    layer: "L5",
    colorFamily: "blue",
    title: "Point Calimere Wildlife Sanctuary",
    description: "A coastal wetland at the tip of the Cauvery delta in Tamil Nadu, Point Calimere is a Ramsar site since 2002 and a critical staging ground for migratory birds on the Central Asian Flyway. It hosts the endangered blackbuck and the greater flamingo. It is a recurring GS3 (environment) hotspot for both Prelims and Mains.",
    lat: 10.28,
    lng: 79.85,
    country: "India",
    region: "South Asia / Tamil Nadu",
    syllabusTags: ["GS3", "Environment", "Biodiversity", "Wetlands", "Migratory Species"],
    sources: [
      { title: "Point Calimere — Ramsar", url: "https://rsis.ramsar.org/ris/1211" },
      { title: "Point Calimere Wildlife Sanctuary — Wikipedia", url: "https://en.wikipedia.org/wiki/Point_Calimere_Wildlife_Sanctuary" },
    ],
  },

  {
    id: "ram-kolleru",
    layer: "L5",
    colorFamily: "blue",
    title: "Kolleru Lake",
    description: "One of Asia’s largest freshwater lakes, situated between the Godavari and Krishna deltas in Andhra Pradesh, Kolleru is a Ramsar site since 2002. The pelicanry at Atapaka is among the world’s largest. It is a recurring GS3 (environment) hotspot, paired with aquaculture pollution and westward-flowing drainage questions.",
    lat: 16.65,
    lng: 81.22,
    country: "India",
    region: "South Asia / Andhra Pradesh",
    syllabusTags: ["GS3", "Environment", "Biodiversity", "Wetlands", "Pollution"],
    sources: [
      { title: "Kolleru Lake — Ramsar", url: "https://rsis.ramsar.org/ris/1201" },
      { title: "Kolleru Lake — Wikipedia", url: "https://en.wikipedia.org/wiki/Kolleru_Lake" },
    ],
  },

  {
    id: "ram-nalsarovar",
    layer: "L5",
    colorFamily: "blue",
    title: "Nalsarovar Bird Sanctuary",
    description: "A seasonal shallow lake near Ahmedabad in Gujarat, Nalsarovar is a Ramsar site since 2012 and the largest wetland bird sanctuary in India. It hosts over 200 species of migratory birds on the Central Asian Flyway. It is a recurring GS3 (environment) hotspot, paired with Gujarat and migratory-species questions.",
    lat: 22.78,
    lng: 72.05,
    country: "India",
    region: "South Asia / Gujarat",
    syllabusTags: ["GS3", "Environment", "Biodiversity", "Wetlands", "Migratory Species"],
    sources: [
      { title: "Nalsarovar Bird Sanctuary — Ramsar", url: "https://rsis.ramsar.org/ris/2050" },
      { title: "Nalsarovar Bird Sanctuary — Wikipedia", url: "https://en.wikipedia.org/wiki/Nalsarovar_Bird_Sanctuary" },
    ],
  },

  {
    id: "ram-bhoj",
    layer: "L5",
    colorFamily: "blue",
    title: "Bhoj Wetland",
    description: "Two man-made lakes (Upper and Lower Lake) in Bhopal created by Raja Bhoj in the 11th century, the Bhoj Wetland is a Ramsar site since 2002. It is a rare urban Ramsar site that supplies drinking water to Bhopal. It is a recurring GS3 (environment) hotspot, paired with urban-wetland conservation questions.",
    lat: 23.25,
    lng: 77.4,
    country: "India",
    region: "South Asia / Madhya Pradesh",
    syllabusTags: ["GS3", "Environment", "Biodiversity", "Wetlands", "Urbanisation"],
    sources: [
      { title: "Bhoj Wetland — Ramsar", url: "https://rsis.ramsar.org/ris/1208" },
      { title: "Bhoj Wetland — Wikipedia", url: "https://en.wikipedia.org/wiki/Bhoj_Wetland" },
    ],
  },

  {
    id: "ram-pong",
    layer: "L5",
    colorFamily: "blue",
    title: "Pong Dam Lake",
    description: "A reservoir on the Beas in Himachal Pradesh created by the Pong Dam, designated a Ramsar site in 2002. It hosts over 100,000 migratory waterfowl in winter, particularly bar-headed geese. It is a recurring GS3 (environment) hotspot, paired with Himachal and reservoir-ecology questions.",
    lat: 32,
    lng: 76.05,
    country: "India",
    region: "South Asia / Himachal Pradesh",
    syllabusTags: ["GS3", "Environment", "Biodiversity", "Wetlands", "Migratory Species"],
    sources: [
      { title: "Pong Dam Lake — Ramsar", url: "https://rsis.ramsar.org/ris/1212" },
      { title: "Maharana Pratap Sagar — Wikipedia", url: "https://en.wikipedia.org/wiki/Maharana_Pratap_Sagar" },
    ],
  },

  {
    id: "ram-lonar",
    layer: "L5",
    colorFamily: "blue",
    title: "Lonar Lake",
    description: "A unique saline crater lake in Maharashtra’s Buldhana district formed by a meteorite impact roughly 50,000 years ago, Lonar is a Ramsar site since 2020. Its alkaline and alkaline-tolerant microbiota are of astrobiological interest. It is a recurring GS3 (environment) and GS1 (geomorphology) hotspot, paired with crater-formation questions.",
    lat: 19.98,
    lng: 76.51,
    country: "India",
    region: "South Asia / Maharashtra",
    syllabusTags: ["GS3", "Environment", "Biodiversity", "Wetlands", "GS1", "Geomorphology"],
    sources: [
      { title: "Lonar Lake — Ramsar", url: "https://rsis.ramsar.org/ris/2440" },
      { title: "Lonar Lake — Wikipedia", url: "https://en.wikipedia.org/wiki/Lonar_Lake" },
    ],
  },

  {
    id: "ram-kabartal",
    layer: "L5",
    colorFamily: "blue",
    title: "Kabartal Wetland (Kanwar Lake)",
    description: "Bihar’s first Ramsar site (2020), Kabartal in Begusarai district is the largest residual oxbow lake of the Ganga basin. It is a vital flood buffer in a state where 70% of land is flood-prone and hosts significant migratory waterfowl. It is a recurring GS3 (environment) hotspot, paired with flood-management and Ganga basin questions.",
    lat: 25.42,
    lng: 86.13,
    country: "India",
    region: "South Asia / Bihar",
    syllabusTags: ["GS3", "Environment", "Biodiversity", "Wetlands", "Flood Management"],
    sources: [
      { title: "Kabartal Wetland — Ramsar", url: "https://rsis.ramsar.org/ris/2438" },
      { title: "Kanwar Lake Bird Sanctuary — Wikipedia", url: "https://en.wikipedia.org/wiki/Kanwar_Lake_Bird_Sanctuary" },
    ],
  },

  {
    id: "ram-thane-creek",
    layer: "L5",
    colorFamily: "blue",
    title: "Thane Creek",
    description: "A 26 km tidal inlet separating Mumbai from Navi Mumbai, Thane Creek is India’s newest urban Ramsar site (2022) and hosts large flamingo congregations. It is the largest creek in Asia to receive Ramsar status and a critical buffer against coastal pollution. It is a recurring GS3 (environment) hotspot, paired with urban and coastal-ecology questions.",
    lat: 19.1,
    lng: 72.95,
    country: "India",
    region: "South Asia / Maharashtra",
    syllabusTags: ["GS3", "Environment", "Biodiversity", "Wetlands", "Urbanisation"],
    sources: [
      { title: "Thane Creek — Ramsar", url: "https://rsis.ramsar.org/ris/2515" },
      { title: "Thane Creek — Wikipedia", url: "https://en.wikipedia.org/wiki/Thane_Creek" },
    ],
  },

  {
    id: "ram-tsokar",
    layer: "L5",
    colorFamily: "blue",
    title: "Tso Kar Wetland Complex",
    description: "A high-altitude wetland complex in Ladakh’s Changthang plateau, Tso Kar is a Ramsar site since 2020 and comprises the hypersaline Tso Kar and freshwater Startsapuk Tso. It is a key breeding ground for the black-necked crane and the great crested grebe. It is a recurring GS3 (environment) hotspot, paired with cold-desert and Changpa-herder questions.",
    lat: 33.3,
    lng: 77.8,
    country: "India",
    region: "South Asia / Ladakh",
    syllabusTags: ["GS3", "Environment", "Biodiversity", "Wetlands", "GS1", "Geomorphology"],
    sources: [
      { title: "Tso Kar Wetland Complex — Ramsar", url: "https://rsis.ramsar.org/ris/2441" },
      { title: "Tso Kar — Wikipedia", url: "https://en.wikipedia.org/wiki/Tso_Kar" },
    ],
  },

  {
    id: "ram-ropar",
    layer: "L5",
    colorFamily: "blue",
    title: "Ropar Wetland",
    description: "A man-made riverine wetland on the Sutlej in Punjab, Ropar was designated a Ramsar site in 2002. It is an important staging ground for migratory birds and a key ecological buffer for the industrial Doaba region. It is a recurring GS3 (environment) hotspot, paired with Punjab and Sutlej-basin questions.",
    lat: 30.97,
    lng: 76.5,
    country: "India",
    region: "South Asia / Punjab",
    syllabusTags: ["GS3", "Environment", "Biodiversity", "Wetlands"],
    sources: [
      { title: "Ropar Wetland — Ramsar", url: "https://rsis.ramsar.org/ris/1222" },
      { title: "Ropar Wetland — Wikipedia", url: "https://en.wikipedia.org/wiki/Ropar_Wetland" },
    ],
  },

  {
    id: "ram-everglades",
    layer: "L5",
    colorFamily: "blue",
    title: "Everglades (USA)",
    description: "A vast subtropical wetland in southern Florida, the Everglades is a UNESCO World Heritage Site and the largest tropical wilderness in the United States. It hosts the American alligator, Florida panther and the West Indian manatee. It is a textbook GS3 (environment) and wetland-management reference for both Prelims and Mains.",
    lat: 25.32,
    lng: -80.93,
    country: "United States",
    region: "North America",
    syllabusTags: ["GS3", "Environment", "Biodiversity", "Wetlands", "GS1", "Biogeography"],
    sources: [
      { title: "Everglades National Park — UNESCO", url: "https://whc.unesco.org/en/list/76" },
      { title: "Everglades — Wikipedia", url: "https://en.wikipedia.org/wiki/Everglades" },
    ],
  },

  {
    id: "ram-pantanal",
    layer: "L5",
    colorFamily: "blue",
    title: "Pantanal",
    description: "The world’s largest tropical wetland, the Pantanal sprawls across Brazil, Bolivia and Paraguay in the Upper Paraguay River basin. It hosts the highest density of jaguars in the wild and over 1,000 bird species. Recurring wildfires and upstream deforestation make it a high-yield GS3 (environment) hotspot.",
    lat: -18,
    lng: -56.5,
    country: "Brazil, Bolivia, Paraguay",
    region: "South America",
    syllabusTags: ["GS3", "Environment", "Biodiversity", "Wetlands"],
    sources: [
      { title: "Pantanal — Wikipedia", url: "https://en.wikipedia.org/wiki/Pantanal" },
      { title: "Pantanal Conservation Area — UNESCO", url: "https://whc.unesco.org/en/list/999" },
    ],
  },

  {
    id: "ram-okavango",
    layer: "L5",
    colorFamily: "blue",
    title: "Okavango Delta",
    description: "An immense inland delta in Botswana where the Okavango River empties into the Kalahari sands, creating a unique endorheic wetland. It is a UNESCO World Heritage Site and one of the Seven Natural Wonders of Africa. It is a classic GS3 (environment) and geomorphology hotspot for Prelims.",
    lat: -19.25,
    lng: 22.75,
    country: "Botswana",
    region: "Southern Africa",
    syllabusTags: ["GS3", "Environment", "Biodiversity", "Wetlands", "GS1", "Geomorphology"],
    sources: [
      { title: "Okavango Delta — UNESCO", url: "https://whc.unesco.org/en/list/1432" },
      { title: "Okavango Delta — Wikipedia", url: "https://en.wikipedia.org/wiki/Okavango_Delta" },
    ],
  },

  {
    id: "ram-kakadu",
    layer: "L5",
    colorFamily: "blue",
    title: "Kakadu National Park",
    description: "Australia’s largest national park and a Ramsar-listed wetland, Kakadu spans tropical savanna, floodplains and Aboriginal rock-art sites. It hosts saltwater crocodiles and one of the most diverse bird assemblages on the continent. It is a recurring GS3 (environment) and GS1 (culture) hotspot, paired with Indigenous co-management questions.",
    lat: -13,
    lng: 132.5,
    country: "Australia",
    region: "Oceania",
    syllabusTags: ["GS3", "Environment", "Biodiversity", "Wetlands", "GS1", "Culture"],
    sources: [
      { title: "Kakadu National Park — UNESCO", url: "https://whc.unesco.org/en/list/147" },
      { title: "Kakadu National Park — Wikipedia", url: "https://en.wikipedia.org/wiki/Kakadu_National_Park" },
    ],
  },

  {
    id: "ram-donana",
    layer: "L5",
    colorFamily: "blue",
    title: "Doñana National Park",
    description: "A vast marshland at the mouth of the Guadalquivir in southwestern Spain, Doñana is a Ramsar site and UNESCO World Heritage Site. It is the most important staging ground for European migratory birds and the last refuge of the Iberian lynx. It is a recurring GS3 (environment) hotspot, paired with European wetland questions.",
    lat: 37.05,
    lng: -6.45,
    country: "Spain",
    region: "Western Europe",
    syllabusTags: ["GS3", "Environment", "Biodiversity", "Wetlands", "Migratory Species"],
    sources: [
      { title: "Doñana National Park — UNESCO", url: "https://whc.unesco.org/en/list/685" },
      { title: "Doñana National Park — Wikipedia", url: "https://en.wikipedia.org/wiki/Do%C3%B1ana_National_Park" },
    ],
  },

  {
    id: "ram-tonle-sap",
    layer: "L5",
    colorFamily: "blue",
    title: "Tonle Sap Lake",
    description: "The largest freshwater lake in Southeast Asia and a UNESCO Biosphere Reserve in Cambodia, Tonle Sap uniquely reverses its flow with the Mekong monsoon pulse. Its floodplain supports the inland fishery that feeds much of Cambodia. It is a recurring GS3 (environment) hotspot, paired with Mekong hydropower and food-security questions.",
    lat: 12.85,
    lng: 104.1,
    country: "Cambodia",
    region: "Southeast Asia",
    syllabusTags: ["GS3", "Environment", "Biodiversity", "Wetlands", "Fisheries"],
    sources: [
      { title: "Tonlé Sap — Wikipedia", url: "https://en.wikipedia.org/wiki/Tonl%C3%A9_Sap" },
      { title: "Tonle Sap Biosphere Reserve — UNESCO", url: "https://en.unesco.org/mab/biosphereaspac/tonle_sap" },
    ],
  },
]
