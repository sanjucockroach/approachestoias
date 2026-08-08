/**
 * CockroachIAS — UPSC World Atlas
 * L3 — Places in News (red)
 * Geopolitical flashpoints in current affairs.
 *
 * Part of the curated hotspot dataset (split from the original monolithic
 * hotspots.ts — see hotspots/index.ts for aggregation).
 *
 * Authored by: Task 3-data (dataset author subagent) + Task 7-split-nasa (splitter).
 * Brand voice: minimalist, bold, empathetic, honest — CockroachIAS "For Those Who Refuse to Quit."
 * Every coordinate is hand-verified (WGS84, 2-decimal).
 */

import type { CuratedHotspot } from './types'

export const placesInNews: CuratedHotspot[] = [
  {
    id: "pin-afghanistan",
    layer: "L3",
    colorFamily: "red",
    title: "Afghanistan",
    description: "A landlocked, multi-ethnic state at the crossroads of Central and South Asia, Afghanistan remains central to India’s neighbourhood-first policy and regional security. The 2021 Taliban takeover reshaped power equations and revived concerns over terrorism, narcotics, and humanitarian crisis. It is a recurring GS2 (IR) and internal-security hotspot for both Prelims and Mains.",
    lat: 34.53,
    lng: 69.17,
    country: "Afghanistan",
    region: "South/Central Asia",
    syllabusTags: ["GS2", "IR", "Internal Security", "Neighbourhood"],
    sources: [
      { title: "Afghanistan — Wikipedia", url: "https://en.wikipedia.org/wiki/Afghanistan" },
      { title: "MEA India — India-Afghanistan Relations", url: "https://www.mea.gov.in/Portal/ForeignRelation/india-afghan_relations.pdf" },
    ],
  },

  {
    id: "pin-pakistan",
    layer: "L3",
    colorFamily: "red",
    title: "Pakistan",
    description: "India’s western neighbour and a nuclear-armed rival, Pakistan frames much of New Delhi’s security calculus, from Kashmir and cross-border terrorism to Indus water sharing. Its deepening alignment with China via the CPEC corridor of BRI directly affects India’s strategic environment. It is a perennial GS2 (IR) and internal-security topic.",
    lat: 33.69,
    lng: 73.05,
    country: "Pakistan",
    region: "South Asia",
    syllabusTags: ["GS2", "IR", "Internal Security", "Neighbourhood"],
    sources: [
      { title: "Pakistan — Wikipedia", url: "https://en.wikipedia.org/wiki/Pakistan" },
      { title: "MEA India — India-Pakistan Relations", url: "https://www.mea.gov.in/Portal/ForeignRelation/Pakistan_Dec_2021.pdf" },
    ],
  },

  {
    id: "pin-bangladesh",
    layer: "L3",
    colorFamily: "red",
    title: "Bangladesh",
    description: "India’s largest South Asian neighbour by population and a partner in trade, transit and the Shared Teesta waters. Dhaka’s graduation from LDC status, the Rohingya refugee burden, and connectivity to India’s Northeast make it a high-yield GS2 (IR) hotspot. Bilateral cooperation on power, defence and the Farakka-Ganges treaty are routine Prelims/Mains themes.",
    lat: 23.81,
    lng: 90.41,
    country: "Bangladesh",
    region: "South Asia",
    syllabusTags: ["GS2", "IR", "Neighbourhood", "GS3", "Disaster Management"],
    sources: [
      { title: "Bangladesh — Wikipedia", url: "https://en.wikipedia.org/wiki/Bangladesh" },
      { title: "MEA India — India-Bangladesh Relations", url: "https://www.mea.gov.in/Portal/ForeignRelation/Bilateral_Brief_Bangladesh_2024.pdf" },
    ],
  },

  {
    id: "pin-sri-lanka",
    layer: "L3",
    colorFamily: "red",
    title: "Sri Lanka",
    description: "A strategic island neighbour at the centre of the Indian Ocean sea lanes, Sri Lanka is central to India’s SAGAR maritime vision and counter-China posture. The 2022 economic collapse, IMF bailout, and Tamil reconciliation question are recurring GS2 (IR) and GS3 (economy) themes. Katchatheevu, fishing rights and the 13th Amendment are frequent Mains hooks.",
    lat: 6.93,
    lng: 79.86,
    country: "Sri Lanka",
    region: "South Asia",
    syllabusTags: ["GS2", "IR", "Neighbourhood", "GS3", "Economy"],
    sources: [
      { title: "Sri Lanka — Wikipedia", url: "https://en.wikipedia.org/wiki/Sri_Lanka" },
      { title: "MEA India — India-Sri Lanka Relations", url: "https://www.mea.gov.in/Portal/ForeignRelation/India-Sri_Lanka_Brief_May_2024.pdf" },
    ],
  },

  {
    id: "pin-maldives",
    layer: "L3",
    colorFamily: "red",
    title: "Maldives",
    description: "An Indian Ocean archipelago of 26 atolls, the Maldives sits astride the westward shipping lanes from the Strait of Malacca and is vital to India’s maritime neighbourhood. The India-out / China-in oscillation of Maldivian politics and climate-change existential risk for atoll states make it a high-yield GS2 (IR) and GS3 (climate) hotspot.",
    lat: 4.18,
    lng: 73.51,
    country: "Maldives",
    region: "South Asia / Indian Ocean",
    syllabusTags: ["GS2", "IR", "Neighbourhood", "GS3", "Climate Change"],
    sources: [
      { title: "Maldives — Wikipedia", url: "https://en.wikipedia.org/wiki/Maldives" },
      { title: "MEA India — India-Maldives Relations", url: "https://www.mea.gov.in/Portal/ForeignRelation/Maldives-2024.pdf" },
    ],
  },

  {
    id: "pin-myanmar",
    layer: "L3",
    colorFamily: "red",
    title: "Myanmar",
    description: "India’s only ASEAN-neighbouring gateway and the land bridge to Act East policy, Myanmar is critical for the Kaladan and India-Myanmar-Thailand trilateral highway projects. The 2021 military coup, refugee inflows into Mizoram and Manipur, and the porous 1,643 km border feed GS2 (IR) and GS3 (internal security) questions. The Free Movement Regime and Rohingya issue recur in Mains.",
    lat: 19.76,
    lng: 96.08,
    country: "Myanmar",
    region: "Southeast Asia",
    syllabusTags: ["GS2", "IR", "Act East", "GS3", "Internal Security", "Neighbourhood"],
    sources: [
      { title: "Myanmar — Wikipedia", url: "https://en.wikipedia.org/wiki/Myanmar" },
      { title: "MEA India — India-Myanmar Relations", url: "https://www.mea.gov.in/Portal/ForeignRelation/myanmar-aug-2022.pdf" },
    ],
  },

  {
    id: "pin-nepal",
    layer: "L3",
    colorFamily: "red",
    title: "Nepal",
    description: "A Hindu-majority Himalayan republic with open borders and deep civilisational ties, Nepal is central to India’s northern neighbourhood and the 1950 Treaty framework. The Kalapani-Limpiyadhura-Lipulekh territorial dispute and the rise of Chinese engagement are frequent GS2 (IR) Prelims hooks. Hydropower cooperation, the 2015 blockade legacy, and Gurkha recruitment reforms are routine Mains dimensions.",
    lat: 27.71,
    lng: 85.32,
    country: "Nepal",
    region: "South Asia",
    syllabusTags: ["GS2", "IR", "Neighbourhood", "GS1", "Geography"],
    sources: [
      { title: "Nepal — Wikipedia", url: "https://en.wikipedia.org/wiki/Nepal" },
      { title: "MEA India — India-Nepal Relations", url: "https://www.mea.gov.in/Portal/ForeignRelation/nepal_jan_2024.pdf" },
    ],
  },

  {
    id: "pin-bhutan",
    layer: "L3",
    colorFamily: "red",
    title: "Bhutan",
    description: "A small Himalayan kingdom with the closest India-Bhutan ties among South Asian states, anchored in the 1949 and 2007 treaties. The Doklam (2017) and 2020 standoffs near the India-China-Bhutan trijunction underline Bhutan’s strategic salience for India’s Siliguri corridor defence. Hydropower exports, GNH philosophy, and the SDG agenda surface in GS2 and GS3.",
    lat: 27.47,
    lng: 89.64,
    country: "Bhutan",
    region: "South Asia",
    syllabusTags: ["GS2", "IR", "Neighbourhood", "Internal Security"],
    sources: [
      { title: "Bhutan — Wikipedia", url: "https://en.wikipedia.org/wiki/Bhutan" },
      { title: "MEA India — India-Bhutan Relations", url: "https://www.mea.gov.in/Portal/ForeignRelation/india-bhutan_rel.pdf" },
    ],
  },

  {
    id: "pin-tibet",
    layer: "L3",
    colorFamily: "red",
    title: "Tibet (Xizang)",
    description: "The high-altitude Tibetan Plateau is the source of India’s major transboundary rivers — the Indus, Brahmaputra (Yarlung Tsangpo), Sutlej and Karnali — and the strategic backdrop to the India-China LAC. The Dalai Lama’s government-in-exile in Dharamshala and Tibet’s autonomy question shape India-China ties. The Zangmu dam cascade and water-security dimension are emerging GS2/GS3 hooks.",
    lat: 29.65,
    lng: 91.11,
    country: "China (Tibet Autonomous Region)",
    region: "Central Asia / Himalaya",
    syllabusTags: ["GS2", "IR", "GS1", "Geomorphology", "Internal Security"],
    sources: [
      { title: "Tibet — Wikipedia", url: "https://en.wikipedia.org/wiki/Tibet" },
      { title: "Tibetan Government in Exile", url: "https://tibet.net/" },
    ],
  },

  {
    id: "pin-iran",
    layer: "L3",
    colorFamily: "red",
    title: "Iran",
    description: "A theocratic republic commanding the northern shore of the Strait of Hormuz, Iran is pivotal to India’s energy and connectivity interests via Chabahar Port. The Joint Comprehensive Plan of Action (JCPOA), US sanctions, and the Iran-Saudi détente shape India’s Gulf calculus. The Israel-Hamas, Houthis and Shia crescent dimensions make Tehran a high-frequency Prelims IR theme.",
    lat: 35.69,
    lng: 51.39,
    country: "Iran",
    region: "West Asia",
    syllabusTags: ["GS2", "IR", "GS3", "Energy Security", "Connectivity"],
    sources: [
      { title: "Iran — Wikipedia", url: "https://en.wikipedia.org/wiki/Iran" },
      { title: "MEA India — India-Iran Relations", url: "https://www.mea.gov.in/Portal/ForeignRelation/Iran_2021.pdf" },
    ],
  },

  {
    id: "pin-russia",
    layer: "L3",
    colorFamily: "red",
    title: "Russia",
    description: "India’s longstanding strategic partner through the Indo-Soviet treaty lineage and the principal defence supplier; Russia anchors the India-Russia-China (RIC) and BRICS geometry. The 2022 Ukraine war, sanctions architecture, and the ruble-rupee trade question directly affect Indian diplomacy. S-400 delivery, Vladivostok-Chennai sea lane and Arctic LNG are recurring GS2 themes.",
    lat: 55.75,
    lng: 37.62,
    country: "Russia",
    region: "Eurasia",
    syllabusTags: ["GS2", "IR", "GS3", "Defence", "Energy Security"],
    sources: [
      { title: "Russia — Wikipedia", url: "https://en.wikipedia.org/wiki/Russia" },
      { title: "MEA India — India-Russia Relations", url: "https://www.mea.gov.in/Portal/ForeignRelation/Russia_brief.pdf" },
    ],
  },

  {
    id: "pin-ukraine",
    layer: "L3",
    colorFamily: "red",
    title: "Ukraine",
    description: "A major grain and sunflower-oil exporter whose 2022 Russian invasion triggered a global food-and-energy shock that New Delhi had to navigate diplomatically. The war reshaped NATO, EU enlargement and the Global South’s non-aligned reflex. Ukraine recurs in GS2 (IR) and GS3 (food security, fertiliser prices) for both Prelims and Mains.",
    lat: 50.45,
    lng: 30.52,
    country: "Ukraine",
    region: "Eastern Europe",
    syllabusTags: ["GS2", "IR", "GS3", "Food Security", "GS1", "Geography"],
    sources: [
      { title: "Ukraine — Wikipedia", url: "https://en.wikipedia.org/wiki/Ukraine" },
      { title: "Russo-Ukrainian War — Wikipedia", url: "https://en.wikipedia.org/wiki/Russo-Ukrainian_War" },
    ],
  },

  {
    id: "pin-israel",
    layer: "L3",
    colorFamily: "red",
    title: "Israel",
    description: "A high-technology defence and agriculture partner of India since full diplomatic ties in 1992, Israel is central to India’s West Asia balancing act alongside the Gulf and Iran. The October 2023 Hamas attack and the resulting Gaza war tested India’s careful de-hyphenation. The I2U2 grouping and India-Middle East-Europe Economic Corridor (IMEC) are GS2 (IR) staples.",
    lat: 31.78,
    lng: 35.22,
    country: "Israel",
    region: "West Asia",
    syllabusTags: ["GS2", "IR", "GS3", "Defence", "Agriculture"],
    sources: [
      { title: "Israel — Wikipedia", url: "https://en.wikipedia.org/wiki/Israel" },
      { title: "MEA India — India-Israel Relations", url: "https://www.mea.gov.in/Portal/ForeignRelation/Israel_Oct_2024.pdf" },
    ],
  },

  {
    id: "pin-gaza",
    layer: "L3",
    colorFamily: "red",
    title: "Gaza Strip",
    description: "A 365 km² Palestinian enclave blockaded since 2007 by Israel and Egypt, Gaza became the epicentre of the October 2023 Israel-Hamas war. The humanitarian crisis, Rafah offensive and ICJ genocide case shape India’s Global South positioning. It is a recurring GS2 (IR) and international-law Prelims hotspot.",
    lat: 31.5,
    lng: 34.47,
    country: "Palestine",
    region: "West Asia",
    syllabusTags: ["GS2", "IR", "International Law", "GS4", "Ethics"],
    sources: [
      { title: "Gaza Strip — Wikipedia", url: "https://en.wikipedia.org/wiki/Gaza_Strip" },
      { title: "United Nations OCHA — Gaza", url: "https://www.ochaopt.org/location/gaza-strip" },
    ],
  },

  {
    id: "pin-palestine",
    layer: "L3",
    colorFamily: "red",
    title: "Palestine (West Bank)",
    description: "The West Bank, with Ramallah as the Palestinian Authority seat, is the political core of the two-state solution that India has long endorsed. Settlement expansion, the Oslo Accord framework and the Abraham Accords frame India’s voting record at the UN. It is a GS2 (IR) and GS4 (ethics of occupation) hotspot.",
    lat: 31.9,
    lng: 35.2,
    country: "Palestine",
    region: "West Asia",
    syllabusTags: ["GS2", "IR", "International Law"],
    sources: [
      { title: "Palestine — Wikipedia", url: "https://en.wikipedia.org/wiki/State_of_Palestine" },
      { title: "United Nations — Question of Palestine", url: "https://www.un.org/unispal/" },
    ],
  },

  {
    id: "pin-taiwan",
    layer: "L3",
    colorFamily: "red",
    title: "Taiwan",
    description: "A semiconductor powerhouse and self-governing democracy whose status is the most sensitive flashpoint in US-China relations. India-Taiwan ties have deepened in semiconductor, trade and people-to-people domains while observing the One-China policy. It is a high-frequency GS2 (IR) and GS3 (electronics supply chain) hotspot.",
    lat: 25.03,
    lng: 121.57,
    country: "Taiwan",
    region: "East Asia",
    syllabusTags: ["GS2", "IR", "GS3", "Economy", "GS1", "Geomorphology"],
    sources: [
      { title: "Taiwan — Wikipedia", url: "https://en.wikipedia.org/wiki/Taiwan" },
      { title: "Taiwan–China tensions — BBC", url: "https://www.bbc.com/news/world-asia-61728898" },
    ],
  },

  {
    id: "pin-north-korea",
    layer: "L3",
    colorFamily: "red",
    title: "North Korea (DPRK)",
    description: "A nuclear-armed Stalinist state whose missile proliferation history has direct Indian security consequences via Pakistan. The Six-Party Talks framework, US-DPRK summits and UN sanctions architecture are recurring GS2 (IR) themes. Its 2024 Putin-Kim pact and ammunition transfers to Russia reintroduced it to current-affairs Prelims.",
    lat: 39.02,
    lng: 125.75,
    country: "North Korea",
    region: "East Asia",
    syllabusTags: ["GS2", "IR", "Internal Security", "Nuclear"],
    sources: [
      { title: "North Korea — Wikipedia", url: "https://en.wikipedia.org/wiki/North_Korea" },
      { title: "Council on Foreign Relations — North Korea Crisis", url: "https://www.cfr.org/global-conflict-tracker/conflict/north-korea-crisis" },
    ],
  },

  {
    id: "pin-scs",
    layer: "L3",
    colorFamily: "red",
    title: "South China Sea",
    description: "A semi-enclosed sea carrying roughly one-third of global maritime trade, contested by China’s nine-dash line claim against Vietnam, the Philippines, Malaysia, Brunei and Taiwan. The 2016 UNCLOS arbitration, island-building and freedom-of-navigation operations make it a top GS2 (IR) hotspot. India’s Act East and SAGAR doctrines intersect here via oil blocks in Vietnam and Quad posture.",
    lat: 10,
    lng: 114,
    country: "Disputed (China, Vietnam, Philippines, Malaysia, Brunei, Taiwan)",
    region: "Indo-Pacific",
    syllabusTags: ["GS2", "IR", "Maritime Security", "Quad"],
    sources: [
      { title: "South China Sea — Wikipedia", url: "https://en.wikipedia.org/wiki/South_China_Sea" },
      { title: "PCA — South China Sea Arbitration", url: "https://pca-cpa.org/en/cases/7/" },
    ],
  },

  {
    id: "pin-crimea",
    layer: "L3",
    colorFamily: "red",
    title: "Crimea",
    description: "A Black Sea peninsula annexed by Russia in 2014 and the staging ground for the 2022 invasion of southern Ukraine. The Kerch Strait bridge and Sevastopol naval base anchor Russia’s Black Sea Fleet. It is a GS2 (IR) and GS1 (geography) hotspot, frequently paired with sanctions and grain-export questions.",
    lat: 44.95,
    lng: 34.1,
    country: "Ukraine / Russia (disputed)",
    region: "Eastern Europe",
    syllabusTags: ["GS2", "IR", "GS1", "Geography"],
    sources: [
      { title: "Crimea — Wikipedia", url: "https://en.wikipedia.org/wiki/Crimea" },
      { title: "Annexation of Crimea by the Russian Federation", url: "https://en.wikipedia.org/wiki/Annexation_of_Crimea_by_the_Russian_Federation" },
    ],
  },

  {
    id: "pin-syria",
    layer: "L3",
    colorFamily: "red",
    title: "Syria",
    description: "A Levantine state devastated since 2011 by civil war involving Russia, Iran, Türkiye, the US and various non-state actors. The fall of the Assad regime in late 2024 reopened questions of governance, reconstruction and refugee return. Syria is a perennial GS2 (IR) and GS3 (internal security, radicalisation) hotspot.",
    lat: 33.51,
    lng: 36.29,
    country: "Syria",
    region: "West Asia",
    syllabusTags: ["GS2", "IR", "GS3", "Internal Security"],
    sources: [
      { title: "Syria — Wikipedia", url: "https://en.wikipedia.org/wiki/Syria" },
      { title: "Syrian Civil War — Wikipedia", url: "https://en.wikipedia.org/wiki/Syrian_civil_war" },
    ],
  },

  {
    id: "pin-yemen",
    layer: "L3",
    colorFamily: "red",
    title: "Yemen",
    description: "An Arab state at the southern tip of the Arabian Peninsula, hosting the Houthi movement whose Red Sea attacks since 2023 have disrupted Suez-bound shipping. The Saudi-led intervention, Iranian support to Houthis and the resulting Bab-el-Mandeb chokepoint risk make Yemen a high-yield GS2 (IR) hotspot. It intersects with energy security and global supply chains.",
    lat: 15.37,
    lng: 44.19,
    country: "Yemen",
    region: "West Asia / Arabian Peninsula",
    syllabusTags: ["GS2", "IR", "GS3", "Energy Security", "Maritime Security"],
    sources: [
      { title: "Yemen — Wikipedia", url: "https://en.wikipedia.org/wiki/Yemen" },
      { title: "Yemeni Crisis — UN OCHA", url: "https://www.unocha.org/yemen" },
    ],
  },

  {
    id: "pin-sudan",
    layer: "L3",
    colorFamily: "red",
    title: "Sudan",
    description: "A Sahel-to-Red Sea state whose April 2023 armed conflict between the SAF and the RSF triggered the world’s largest displacement crisis. The Nile waters, the Grand Ethiopian Renaissance Dam and Indian diaspora evacuation are recurring GS2 (IR) dimensions. Sudan recurs in GS3 (internal security, humanitarian crisis) for Mains.",
    lat: 15.5,
    lng: 32.56,
    country: "Sudan",
    region: "North-East Africa",
    syllabusTags: ["GS2", "IR", "GS3", "Internal Security", "GS1", "Geography"],
    sources: [
      { title: "Sudan — Wikipedia", url: "https://en.wikipedia.org/wiki/Sudan" },
      { title: "Sudan conflict — UN", url: "https://www.un.org/en/situation-observer/sudan" },
    ],
  },
]
