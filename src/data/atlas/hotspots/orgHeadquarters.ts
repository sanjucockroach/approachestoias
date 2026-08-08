/**
 * CockroachIAS — UPSC World Atlas
 * L10 — Organisation Headquarters (red)
 * HQs of major international organisations.
 *
 * Part of the curated hotspot dataset (split from the original monolithic
 * hotspots.ts — see hotspots/index.ts for aggregation).
 *
 * Authored by: Task 3-data (dataset author subagent) + Task 7-split-nasa (splitter).
 * Brand voice: minimalist, bold, empathetic, honest — CockroachIAS "For Those Who Refuse to Quit."
 * Every coordinate is hand-verified (WGS84, 2-decimal).
 */

import type { CuratedHotspot } from './types'

export const orgHeadquarters: CuratedHotspot[] = [
  {
    id: "org-saarc",
    layer: "L10",
    colorFamily: "red",
    title: "SAARC Secretariat (Kathmandu)",
    description: "The Secretariat of the South Asian Association for Regional Cooperation, established in Kathmandu in 1987 to coordinate the eight-member regional body. SAARC summits have remained frozen since 2016 due to India-Pakistan tensions, pushing New Delhi towards BIMSTEC. It is a recurring GS2 (IR) hotspot for both Prelims and Mains.",
    lat: 27.7,
    lng: 85.34,
    country: "Nepal",
    region: "South Asia",
    syllabusTags: ["GS2", "IR", "Regional Groupings", "Neighbourhood"],
    sources: [
      { title: "SAARC Secretariat", url: "https://saarc-sec.org/" },
      { title: "SAARC — Wikipedia", url: "https://en.wikipedia.org/wiki/South_Asian_Association_for_Regional_Cooperation" },
    ],
  },

  {
    id: "org-un",
    layer: "L10",
    colorFamily: "red",
    title: "United Nations Headquarters (New York)",
    description: "The principal seat of the United Nations, established in New York in 1945 along with the General Assembly and Security Council. It hosts the annual UNGA high-level week that anchors India’s multilateral diplomacy. It is a recurring GS2 (IR) hotspot, paired with UNSC reform and India’s permanent-seat bid.",
    lat: 40.75,
    lng: -73.97,
    country: "United States",
    region: "North America",
    syllabusTags: ["GS2", "IR", "International Organisations"],
    sources: [
      { title: "United Nations — Wikipedia", url: "https://en.wikipedia.org/wiki/United_Nations" },
      { title: "United Nations — Official Site", url: "https://www.un.org/en/" },
    ],
  },

  {
    id: "org-wto",
    layer: "L10",
    colorFamily: "red",
    title: "WTO Headquarters (Geneva)",
    description: "The Geneva-based World Trade Organization, established in 1995 as the successor to the GATT, governs the multilateral trading system. Its dispute settlement body has been paralysed since 2019 due to US blocking of appellate body appointments. It is a recurring GS2 (IR) and GS3 (economy) hotspot, paired with India’s food-stockholding stance.",
    lat: 46.23,
    lng: 6.14,
    country: "Switzerland",
    region: "Western Europe",
    syllabusTags: ["GS2", "IR", "GS3", "Trade", "International Organisations"],
    sources: [
      { title: "World Trade Organization — Wikipedia", url: "https://en.wikipedia.org/wiki/World_Trade_Organization" },
      { title: "WTO — Official Site", url: "https://www.wto.org/" },
    ],
  },

  {
    id: "org-who",
    layer: "L10",
    colorFamily: "red",
    title: "WHO Headquarters (Geneva)",
    description: "The Geneva-based World Health Organization, founded in 1948 as the UN specialised agency for health, sets global health norms and pandemic response. Its COVID-19 performance triggered the pandemic-treaty negotiations. It is a recurring GS2 (IR) and GS3 (health) hotspot, paired with India’s vaccine diplomacy.",
    lat: 46.23,
    lng: 6.14,
    country: "Switzerland",
    region: "Western Europe",
    syllabusTags: ["GS2", "IR", "GS3", "Health", "International Organisations"],
    sources: [
      { title: "World Health Organization — Wikipedia", url: "https://en.wikipedia.org/wiki/World_Health_Organization" },
      { title: "WHO — Official Site", url: "https://www.who.int/" },
    ],
  },

  {
    id: "org-unesco",
    layer: "L10",
    colorFamily: "red",
    title: "UNESCO Headquarters (Paris)",
    description: "The Paris-based UN Educational, Scientific and Cultural Organization, founded in 1945, designates World Heritage Sites, Biosphere Reserves and Global Geoparks. India has 43 World Heritage Sites, the sixth-highest globally. It is a recurring GS2 (IR) and GS1 (culture) hotspot, paired with the World Heritage Convention.",
    lat: 48.85,
    lng: 2.3,
    country: "France",
    region: "Western Europe",
    syllabusTags: ["GS2", "IR", "GS1", "Culture", "International Organisations"],
    sources: [
      { title: "UNESCO — Wikipedia", url: "https://en.wikipedia.org/wiki/UNESCO" },
      { title: "UNESCO — Official Site", url: "https://www.unesco.org/en" },
    ],
  },

  {
    id: "org-imo",
    layer: "L10",
    colorFamily: "red",
    title: "IMO Headquarters (London)",
    description: "The London-based International Maritime Organization, a UN specialised agency, regulates international shipping through conventions such as SOLAS and MARPOL. Its 2023 greenhouse-gas strategy directly affects India’s shipping decarbonisation. It is a recurring GS2 (IR) and GS3 (environment) hotspot, paired with maritime safety.",
    lat: 51.46,
    lng: -0.07,
    country: "United Kingdom",
    region: "Western Europe",
    syllabusTags: ["GS2", "IR", "GS3", "Maritime Security", "Environment"],
    sources: [
      { title: "International Maritime Organization — Wikipedia", url: "https://en.wikipedia.org/wiki/International_Maritime_Organization" },
      { title: "IMO — Official Site", url: "https://www.imo.org/" },
    ],
  },

  {
    id: "org-iaea",
    layer: "L10",
    colorFamily: "red",
    title: "IAEA Headquarters (Vienna)",
    description: "The Vienna-based International Atomic Energy Agency, founded in 1957, is the world’s centre of cooperation in the nuclear field under the NPT. India’s 2008 India-specific safeguards agreement unlocked civil nuclear commerce. It is a recurring GS2 (IR) and GS3 (energy) hotspot, paired with Iran and Fukushima-type monitoring.",
    lat: 48.23,
    lng: 16.42,
    country: "Austria",
    region: "Western Europe",
    syllabusTags: ["GS2", "IR", "GS3", "Energy", "Nuclear", "Internal Security"],
    sources: [
      { title: "International Atomic Energy Agency — Wikipedia", url: "https://en.wikipedia.org/wiki/International_Atomic_Energy_Agency" },
      { title: "IAEA — Official Site", url: "https://www.iaea.org/" },
    ],
  },

  {
    id: "org-fao",
    layer: "L10",
    colorFamily: "red",
    title: "FAO Headquarters (Rome)",
    description: "The Rome-based Food and Agriculture Organization, founded in 1945, leads international efforts to defeat hunger and hosts the Committee on World Food Security. India’s association with FAO ranges from the Green Revolution to the International Year of Millets 2023. It is a recurring GS2 (IR) and GS3 (food security) hotspot.",
    lat: 41.88,
    lng: 12.49,
    country: "Italy",
    region: "Southern Europe",
    syllabusTags: ["GS2", "IR", "GS3", "Agriculture", "Food Security"],
    sources: [
      { title: "Food and Agriculture Organization — Wikipedia", url: "https://en.wikipedia.org/wiki/Food_and_Agriculture_Organization" },
      { title: "FAO — Official Site", url: "https://www.fao.org/" },
    ],
  },

  {
    id: "org-asean",
    layer: "L10",
    colorFamily: "red",
    title: "ASEAN Secretariat (Jakarta)",
    description: "The Secretariat of the Association of Southeast Asian Nations, based in Jakarta, coordinates the ten-member regional grouping. ASEAN centrality anchors India’s Act East policy and the ASEAN-India Free Trade Area. It is a recurring GS2 (IR) hotspot, paired with the South China Sea code-of-conduct and Quad geometry.",
    lat: -6.2,
    lng: 106.84,
    country: "Indonesia",
    region: "Southeast Asia",
    syllabusTags: ["GS2", "IR", "Regional Groupings", "Act East"],
    sources: [
      { title: "ASEAN — Wikipedia", url: "https://en.wikipedia.org/wiki/Association_of_Southeast_Asian_Nations" },
      { title: "ASEAN Secretariat — Official Site", url: "https://asean.org/" },
    ],
  },

  {
    id: "org-au",
    layer: "L10",
    colorFamily: "red",
    title: "African Union Headquarters (Addis Ababa)",
    description: "The headquarters of the 55-member African Union, established in 2002 as the successor to the OAU in Addis Ababa. India-AU engagement was elevated at the 2023 Voice of the Global South Summit and AU was admitted to the G20 under India’s presidency. It is a recurring GS2 (IR) hotspot, paired with the African Continental Free Trade Area.",
    lat: 9.03,
    lng: 38.75,
    country: "Ethiopia",
    region: "East Africa",
    syllabusTags: ["GS2", "IR", "Regional Groupings"],
    sources: [
      { title: "African Union — Wikipedia", url: "https://en.wikipedia.org/wiki/African_Union" },
      { title: "African Union — Official Site", url: "https://au.int/" },
    ],
  },

  {
    id: "org-opec",
    layer: "L10",
    colorFamily: "red",
    title: "OPEC Headquarters (Vienna)",
    description: "The Vienna-based Organisation of the Petroleum Exporting Countries, founded in 1960, coordinates petroleum policy among 12 member states. OPEC+ decisions, especially Saudi Arabia and Russia’s production cuts, directly affect India’s import bill. It is a recurring GS2 (IR) and GS3 (energy security) hotspot for both Prelims and Mains.",
    lat: 48.2,
    lng: 16.36,
    country: "Austria",
    region: "Western Europe",
    syllabusTags: ["GS2", "IR", "GS3", "Energy Security"],
    sources: [
      { title: "OPEC — Wikipedia", url: "https://en.wikipedia.org/wiki/OPEC" },
      { title: "OPEC — Official Site", url: "https://www.opec.org/" },
    ],
  },

  {
    id: "org-nato",
    layer: "L10",
    colorFamily: "red",
    title: "NATO Headquarters (Brussels)",
    description: "The Brussels-based North Atlantic Treaty Organization, founded in 1949, is the principal collective-defence alliance of the West. Finland and Sweden’s accession in 2023–24 followed the Ukraine war. It is a recurring GS2 (IR) hotspot, paired with NATO enlargement and Russia’s strategic calculus.",
    lat: 50.85,
    lng: 4.4,
    country: "Belgium",
    region: "Western Europe",
    syllabusTags: ["GS2", "IR", "Defence", "International Organisations"],
    sources: [
      { title: "NATO — Wikipedia", url: "https://en.wikipedia.org/wiki/NATO" },
      { title: "NATO — Official Site", url: "https://www.nato.int/" },
    ],
  },

  {
    id: "org-eu",
    layer: "L10",
    colorFamily: "red",
    title: "European Union Headquarters (Brussels)",
    description: "The seat of the European Commission and the Council of the EU in Brussels, hosting the executive and intergovernmental arms of the 27-member bloc. The India-EU BTIA negotiations and connectivity partnership anchor India-EU ties. It is a recurring GS2 (IR) hotspot, paired with GDPR, CBAM and trade-negotiation questions.",
    lat: 50.84,
    lng: 4.38,
    country: "Belgium",
    region: "Western Europe",
    syllabusTags: ["GS2", "IR", "GS3", "Trade", "Regional Groupings"],
    sources: [
      { title: "European Union — Wikipedia", url: "https://en.wikipedia.org/wiki/European_Union" },
      { title: "European Commission — Official Site", url: "https://commission.europa.eu/" },
    ],
  },

  {
    id: "org-sco",
    layer: "L10",
    colorFamily: "red",
    title: "SCO Secretariat (Beijing)",
    description: "The Beijing-based Secretariat of the Shanghai Cooperation Organisation, founded in 2001, coordinates the Eurasian grouping on security, energy and connectivity. India became a full member in 2017 and hosted the 2023 virtual summit. It is a recurring GS2 (IR) hotspot, paired with the RATS counter-terror mechanism and Central Asian energy.",
    lat: 39.91,
    lng: 116.4,
    country: "China",
    region: "East Asia",
    syllabusTags: ["GS2", "IR", "Regional Groupings", "Internal Security"],
    sources: [
      { title: "Shanghai Cooperation Organisation — Wikipedia", url: "https://en.wikipedia.org/wiki/Shanghai_Cooperation_Organisation" },
      { title: "SCO — Official Site", url: "http://eng.sectsco.org/" },
    ],
  },
]
