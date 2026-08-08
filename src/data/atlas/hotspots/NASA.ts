/**
 * CockroachIAS — UPSC World Atlas
 * L1 — NASA-tagged static geophysical features (resilience fallback).
 *
 * This file is the RESILIENCE FALLBACK for the live NASA EONET layer. When the
 * live EONET API is unavailable on deployment, these permanent geophysical
 * features still render on the globe with the "LIVE · NASA EONET" badge and
 * pulsing rings — because the UI keys on `source: 'eonet' && status: 'open'`.
 *
 * These are NOT current events. They are permanent geographical features
 * drawn from the GS1 "Important Geophysical Phenomena" syllabus — seismic
 * belts, volcanic arcs, ocean trenches, tsunami-prone zones, cyclone belts,
 * and ice caps & glaciers — so the globe always feels alive even when the
 * live feed is silent.
 *
 * Every coordinate is web-verified (WGS84, 2-decimal) via z-ai web_search.
 * No fabricated coordinates. Better to omit than to be wrong.
 *
 * Authored by: Task 7-split-nasa (NASA author subagent).
 * Brand voice: minimalist, bold, empathetic, honest — CockroachIAS "For Those Who Refuse to Quit."
 */

import type { NasaHotspot } from './types'

export const nasaHotspots: NasaHotspot[] = [
  // ============================================================
  // SEISMIC ZONES / EARTHQUAKE-PRONE BELTS  (10 entries)
  // category: 'earthquakes'  ·  colorFamily: 'red'
  // tags: GS1 Geomorphology/Earthquakes, GS3 Disaster Management
  // ============================================================

  {
    id: 'nasa-ring-of-fire-seismic',
    source: 'eonet',
    layer: 'L1',
    colorFamily: 'red',
    category: 'earthquakes',
    title: 'Pacific Ring of Fire (Seismic Belt)',
    description:
      'A 40,000-km horseshoe-shaped belt tracing the rim of the Pacific Ocean where about 90% of the world’s earthquakes and 75% of its active volcanoes cluster. Subduction of the Pacific Plate beneath the Eurasian, Philippine, and North American plates drives the belt’s constant megathrust activity. It is the single most-tested geophysical phenomenon in UPSC Prelims and recurs in GS3 disaster-management questions.',
    lat: 25.0,
    lng: 135.0,
    status: 'open',
    country: 'Multi (Japan, Philippines, Indonesia, Chile, Peru, USA)',
    region: 'Pacific Rim',
    syllabusTags: ['GS1', 'Geomorphology', 'Earthquakes', 'GS3', 'Disaster Management'],
    sources: [
      { title: 'Pacific Ring of Fire — USGS', url: 'https://www.usgs.gov/news/featured-story/ring-fire' },
      { title: 'Ring of Fire — Wikipedia', url: 'https://en.wikipedia.org/wiki/Pacific_Ring_of_Fire' },
    ],
  },

  {
    id: 'nasa-alpide-belt',
    source: 'eonet',
    layer: 'L1',
    colorFamily: 'red',
    category: 'earthquakes',
    title: 'Alpide Belt (Alpine–Himalayan Seismic Belt)',
    description:
      'The world’s second-most seismically active belt, stretching from the Mediterranean through Turkey, Iran, the Himalaya and into Myanmar. Continental-continental collision between the African, Arabian and Indian plates with Eurasia produces the deep-focus and shallow earthquakes that devastated Turkey (2023), Iran and Nepal. It is the dominant seismic source for India and a high-frequency GS1/GS3 hotspot.',
    lat: 35.0,
    lng: 50.0,
    status: 'open',
    country: 'Multi (Türkiye, Iran, Pakistan, India, Nepal, Myanmar)',
    region: 'Alpine–Himalayan Orogenic Belt',
    syllabusTags: ['GS1', 'Geomorphology', 'Earthquakes', 'GS3', 'Disaster Management'],
    sources: [
      { title: 'Alpide Belt — Wikipedia', url: 'https://en.wikipedia.org/wiki/Alpide_Belt' },
      { title: 'Alpine-Himalayan Belt — NASA Earth Observatory', url: 'https://earthobservatory.nasa.gov/' },
    ],
  },

  {
    id: 'nasa-mid-atlantic-ridge-seismic',
    source: 'eonet',
    layer: 'L1',
    colorFamily: 'red',
    category: 'earthquakes',
    title: 'Mid-Atlantic Ridge (Seismic)',
    description:
      'A 16,000-km divergent plate boundary running through the Atlantic Ocean where the Eurasian and North American plates pull apart from the South American and African plates. The spreading centre generates shallow, low-magnitude earthquakes and forms new oceanic crust at Iceland, the Azores and Ascension. It is the textbook example of a constructive plate margin for GS1 Prelims.',
    lat: 0.0,
    lng: -30.0,
    status: 'open',
    country: 'International waters (Atlantic Ocean)',
    region: 'Atlantic Ocean',
    syllabusTags: ['GS1', 'Geomorphology', 'Earthquakes', 'Physical Geography'],
    sources: [
      { title: 'Mid-Atlantic Ridge — Wikipedia', url: 'https://en.wikipedia.org/wiki/Mid-Atlantic_Ridge' },
      { title: 'Mid-Atlantic Ridge — NASA Earth Observatory', url: 'https://earthobservatory.nasa.gov/images/7166-mid-atlantic-ridge' },
    ],
  },

  {
    id: 'nasa-japan-seismic',
    source: 'eonet',
    layer: 'L1',
    colorFamily: 'red',
    category: 'earthquakes',
    title: 'Japan Seismic Zone',
    description:
      'Japan sits atop the convergence of four tectonic plates — Pacific, Philippine Sea, Eurasian and North American — making it among the most seismically active countries on Earth. The 2011 Tōhoku Mw 9.0 megathrust and the 2024 Noto Peninsula quakes are recent reminders of the relentless hazard. It is a recurring GS1 (geomorphology) and GS3 (disaster management) case study for earthquake-resistant engineering and early-warning systems.',
    lat: 35.5,
    lng: 140.0,
    status: 'open',
    country: 'Japan',
    region: 'East Asia',
    syllabusTags: ['GS1', 'Geomorphology', 'Earthquakes', 'GS3', 'Disaster Management'],
    sources: [
      { title: 'Japan earthquakes — USGS', url: 'https://earthquake.usgs.gov/' },
      { title: '2011 Tōhoku earthquake — Wikipedia', url: 'https://en.wikipedia.org/wiki/2011_T%C5%8Dhoku_earthquake_and_tsunami' },
    ],
  },

  {
    id: 'nasa-chile-peru-seismic',
    source: 'eonet',
    layer: 'L1',
    colorFamily: 'red',
    category: 'earthquakes',
    title: 'Chile–Peru Seismic Zone',
    description:
      'The South American subduction margin where the oceanic Nazca Plate dives beneath the South American Plate at about 7–10 cm/yr, generating the largest instrumentally recorded earthquake in history — the 1960 Valdivia Mw 9.5. The Peru–Chile Trench offshore and the Andean orogeny onshore are inseparable from the seismicity. It is a standard GS1 plate-tectonics example and a GS3 tsunami case study.',
    lat: -20.0,
    lng: -70.5,
    status: 'open',
    country: 'Chile / Peru',
    region: 'Western South America',
    syllabusTags: ['GS1', 'Geomorphology', 'Earthquakes', 'GS3', 'Disaster Management'],
    sources: [
      { title: '1960 Valdivia earthquake — Wikipedia', url: 'https://en.wikipedia.org/wiki/1960_Valdivia_earthquake' },
      { title: 'South American Plate — USGS', url: 'https://www.usgs.gov/' },
    ],
  },

  {
    id: 'nasa-north-anatolian-fault',
    source: 'eonet',
    layer: 'L1',
    colorFamily: 'red',
    category: 'earthquakes',
    title: 'North Anatolian Fault (Türkiye)',
    description:
      'A 1,500-km right-lateral transform fault accommodating the westward escape of the Anatolian Plate as the Arabian Plate collides with Eurasia. Its “seismic sequence” westward migration produced the 1999 İzmit and 2023 Kahramanmaraş doublet disasters. It is a recurring GS1 (transform boundary) and GS3 (disaster management) hotspot, especially relevant after the 2023 Türkiye–Syria quake.',
    lat: 40.5,
    lng: 33.0,
    status: 'open',
    country: 'Türkiye',
    region: 'Anatolia',
    syllabusTags: ['GS1', 'Geomorphology', 'Earthquakes', 'GS3', 'Disaster Management'],
    sources: [
      { title: 'North Anatolian Fault — Wikipedia', url: 'https://en.wikipedia.org/wiki/North_Anatolian_Fault' },
      { title: '2023 Türkiye–Syria earthquakes — Wikipedia', url: 'https://en.wikipedia.org/wiki/2023_Turkey%E2%80%93Syria_earthquakes' },
    ],
  },

  {
    id: 'nasa-nepal-himalayan-seismic',
    source: 'eonet',
    layer: 'L1',
    colorFamily: 'red',
    category: 'earthquakes',
    title: 'Nepal–Himalayan Seismic Zone',
    description:
      'The India–Eurasia collision zone that has uplifted the Himalaya continues to accumulate strain along the Main Himalayan Thrust, releasing it in great earthquakes such as the 1934 Bihar–Nepal and 2015 Gorkha events. Seismic-gap analysis suggests a large “reapportionment” quake remains overdue in western Nepal. It is the most India-relevant seismic belt and a high-yield GS1/GS3 hotspot.',
    lat: 28.0,
    lng: 85.0,
    status: 'open',
    country: 'Nepal / India / Bhutan',
    region: 'Himalaya',
    syllabusTags: ['GS1', 'Geomorphology', 'Earthquakes', 'GS3', 'Disaster Management', 'Neighbourhood'],
    sources: [
      { title: '2015 Gorkha earthquake — Wikipedia', url: 'https://en.wikipedia.org/wiki/April_2015_Nepal_earthquake' },
      { title: 'Himalayan seismic hazard — USGS', url: 'https://www.usgs.gov/' },
    ],
  },

  {
    id: 'nasa-sumatra-andaman-seismic',
    source: 'eonet',
    layer: 'L1',
    colorFamily: 'red',
    category: 'earthquakes',
    title: 'Sumatra–Andaman Seismic Zone',
    description:
      'The Indo-Australian Plate subducts beneath the Burma micro-plate along the Sunda Trench, generating the 2004 Mw 9.1 Sumatra–Andaman earthquake and Indian Ocean tsunami that killed ~230,000 across 14 countries. Recurring megathrust events (2005 Nias, 2010 Mentawai) confirm the persistent hazard. It is the definitive Indian-Ocean seismic case study for GS1 and the disaster-management syllabus.',
    lat: 5.0,
    lng: 95.0,
    status: 'open',
    country: 'Indonesia / India (Andaman & Nicobar)',
    region: 'Bay of Bengal / Andaman Sea',
    syllabusTags: ['GS1', 'Geomorphology', 'Earthquakes', 'Tsunami', 'GS3', 'Disaster Management'],
    sources: [
      { title: '2004 Indian Ocean earthquake — Wikipedia', url: 'https://en.wikipedia.org/wiki/2004_Indian_Ocean_earthquake' },
      { title: 'Sumatra–Andaman earthquake — USGS', url: 'https://earthquake.usgs.gov/learn/today/hist_events_year.php' },
    ],
  },

  {
    id: 'nasa-new-madrid-fault',
    source: 'eonet',
    layer: 'L1',
    colorFamily: 'red',
    category: 'earthquakes',
    title: 'New Madrid Seismic Zone (USA)',
    description:
      'An intraplate fault zone in the central Mississippi Valley that produced three of the largest North American earthquakes in recorded history during the winter of 1811–12 (estimated Mw 7.5–8). Unlike western US interplate quakes, intraplate seismicity is poorly understood but capable of damaging a wide area. It is a classic GS1 counter-example to “earthquakes only occur at plate boundaries”.',
    lat: 36.58,
    lng: -89.59,
    status: 'open',
    country: 'USA',
    region: 'Mid-Mississippi Valley (Missouri / Arkansas / Tennessee)',
    syllabusTags: ['GS1', 'Geomorphology', 'Earthquakes', 'GS3', 'Disaster Management'],
    sources: [
      { title: 'New Madrid Seismic Zone — USGS', url: 'https://www.usgs.gov/programs/earthquake-hazards/new-madrid-seismic-zone' },
      { title: 'New Madrid Seismic Zone — Wikipedia', url: 'https://en.wikipedia.org/wiki/New_Madrid_Seismic_Zone' },
    ],
  },

  {
    id: 'nasa-san-andreas-fault',
    source: 'eonet',
    layer: 'L1',
    colorFamily: 'red',
    category: 'earthquakes',
    title: 'San Andreas Fault (USA)',
    description:
      'A 1,200-km right-lateral transform fault slicing through California that marks the boundary between the Pacific and North American plates. The 1906 San Francisco and 1989 Loma Prieta earthquakes released only part of the accumulated strain; the “Big One” on the southern segment remains overdue. It is the world’s most-studied transform boundary and a perennial GS1 (plate tectonics) case study.',
    lat: 36.5,
    lng: -120.5,
    status: 'open',
    country: 'USA',
    region: 'California',
    syllabusTags: ['GS1', 'Geomorphology', 'Earthquakes', 'GS3', 'Disaster Management'],
    sources: [
      { title: 'San Andreas Fault — USGS', url: 'https://pubs.usgs.gov/publication/pp1515' },
      { title: 'San Andreas Fault — Wikipedia', url: 'https://en.wikipedia.org/wiki/San_Andreas_Fault' },
    ],
  },

  // ============================================================
  // VOLCANOES & VOLCANIC BELTS  (12 entries)
  // category: 'volcanoes'  ·  colorFamily: 'red'
  // tags: GS1 Geomorphology/Volcanism
  // ============================================================

  {
    id: 'nasa-ring-of-fire-volcanic',
    source: 'eonet',
    layer: 'L1',
    colorFamily: 'red',
    category: 'volcanoes',
    title: 'Pacific Ring of Fire (Volcanic Arc)',
    description:
      'The volcanic arc of the Pacific Ring of Fire hosts more than 450 active and dormant stratovolcanoes, including Mount St. Helens, Mount Fuji, Krakatoa, and the Andean chain. Subduction-zone magmatism feeds explosive Plinian eruptions characteristic of the circum-Pacific margin. It is the textbook GS1 illustration of convergent-boundary volcanism and an evergreen Prelims topic.',
    lat: -20.0,
    lng: -70.0,
    status: 'open',
    country: 'Multi (Andean nations, USA, Japan, Philippines, Indonesia)',
    region: 'Pacific Rim',
    syllabusTags: ['GS1', 'Geomorphology', 'Volcanism'],
    sources: [
      { title: 'Ring of Fire — NASA Earth Observatory', url: 'https://earthobservatory.nasa.gov/' },
      { title: 'Pacific Ring of Fire — Wikipedia', url: 'https://en.wikipedia.org/wiki/Pacific_Ring_of_Fire' },
    ],
  },

  {
    id: 'nasa-yellowstone-caldera',
    source: 'eonet',
    layer: 'L1',
    colorFamily: 'red',
    category: 'volcanoes',
    title: 'Yellowstone Caldera (USA)',
    description:
      'A 55 × 72 km supervolcano caldera in Wyoming produced by three massive Pleistocene eruptions, the most recent ~640,000 years ago forming the Lava Creek Tuff. Its restless geothermal system (Old Faithful, ground deformation, harmonic tremors) is monitored continuously by the USGS Yellowstone Volcano Observatory. It is a recurring GS1 (volcanism) and Prelims case study for hot-spot magmatism.',
    lat: 44.43,
    lng: -110.67,
    status: 'open',
    country: 'USA',
    region: 'Wyoming / Yellowstone National Park',
    syllabusTags: ['GS1', 'Geomorphology', 'Volcanism'],
    sources: [
      { title: 'Yellowstone Caldera — USGS', url: 'https://www.usgs.gov/volcanoes/yellowstone' },
      { title: 'Yellowstone Caldera — Wikipedia', url: 'https://en.wikipedia.org/wiki/Yellowstone_Caldera' },
    ],
  },

  {
    id: 'nasa-krakatoa',
    source: 'eonet',
    layer: 'L1',
    colorFamily: 'red',
    category: 'volcanoes',
    title: 'Krakatoa / Anak Krakatau (Indonesia)',
    description:
      'The 1883 eruption of Krakatoa in the Sunda Strait produced the loudest sound in recorded history and a tsunami that killed ~36,000. The post-1927 cone “Anak Krakatau” (Child of Krakatoa) caused the deadly 2018 Sunda Strait tsunami after a flank collapse. It is a textbook GS1 example of caldera-forming eruptions and volcanic tsunami hazard.',
    lat: -6.1,
    lng: 105.42,
    status: 'open',
    country: 'Indonesia',
    region: 'Sunda Strait',
    syllabusTags: ['GS1', 'Geomorphology', 'Volcanism', 'Tsunami', 'GS3', 'Disaster Management'],
    sources: [
      { title: 'Anak Krakatau — Wikipedia', url: 'https://en.wikipedia.org/wiki/Anak_Krakatau' },
      { title: 'Krakatoa — Wikipedia', url: 'https://en.wikipedia.org/wiki/Krakatoa' },
    ],
  },

  {
    id: 'nasa-vesuvius',
    source: 'eonet',
    layer: 'L1',
    colorFamily: 'red',
    category: 'volcanoes',
    title: 'Mount Vesuvius (Italy)',
    description:
      'A Somma-stratovolcano on the Bay of Naples infamous for its AD 79 eruption that buried Pompeii and Herculaneum, immortalised by Pliny the Younger’s eyewitness account. It last erupted in 1944 and is considered among the world’s most dangerous volcanoes given the dense population on its flanks. It is a standard GS1 (volcanism) reference and the origin of the term “Plinian eruption”.',
    lat: 40.82,
    lng: 14.43,
    status: 'open',
    country: 'Italy',
    region: 'Campania',
    syllabusTags: ['GS1', 'Geomorphology', 'Volcanism'],
    sources: [
      { title: 'Mount Vesuvius — Wikipedia', url: 'https://en.wikipedia.org/wiki/Mount_Vesuvius' },
      { title: 'Vesuvius — NASA Earth Observatory', url: 'https://earthobservatory.nasa.gov/' },
    ],
  },

  {
    id: 'nasa-etna',
    source: 'eonet',
    layer: 'L1',
    colorFamily: 'red',
    category: 'volcanoes',
    title: 'Mount Etna (Italy)',
    description:
      'Europe’s largest and most active stratovolcano on the east coast of Sicily, Etna has been in near-continuous activity for millennia and is a UNESCO World Heritage Site. Its lava flows and paroxysmal ash columns regularly close Catania airport. It is a frequent GS1 (volcanism) Prelims reference for shield-to-stratovolcano transition and Hawaiian/Strombolian eruption styles.',
    lat: 37.75,
    lng: 15.0,
    status: 'open',
    country: 'Italy',
    region: 'Sicily',
    syllabusTags: ['GS1', 'Geomorphology', 'Volcanism'],
    sources: [
      { title: 'Mount Etna — Wikipedia', url: 'https://en.wikipedia.org/wiki/Mount_Etna' },
      { title: 'Etna — NASA Earth Observatory', url: 'https://earthobservatory.nasa.gov/images/151793/etna-erupts-again' },
    ],
  },

  {
    id: 'nasa-st-helens',
    source: 'eonet',
    layer: 'L1',
    colorFamily: 'red',
    category: 'volcanoes',
    title: 'Mount St. Helens (USA)',
    description:
      'A stratovolcano in Washington state whose 18 May 1980 eruption — triggered by the largest landslide in recorded history — killed 57 people and levelled 600 km² of forest. The lateral blast and dacitic dome growth transformed volcanology. It is a classic GS1 case study of Plinian eruption dynamics and volcanic-hazard monitoring.',
    lat: 46.2,
    lng: -122.18,
    status: 'open',
    country: 'USA',
    region: 'Washington (Cascade Range)',
    syllabusTags: ['GS1', 'Geomorphology', 'Volcanism', 'GS3', 'Disaster Management'],
    sources: [
      { title: 'Mount St. Helens — USGS', url: 'https://www.usgs.gov/volcanoes/mount-st.-helens' },
      { title: 'Mount St. Helens — Wikipedia', url: 'https://en.wikipedia.org/wiki/Mount_St._Helens' },
    ],
  },

  {
    id: 'nasa-fuji',
    source: 'eonet',
    layer: 'L1',
    colorFamily: 'red',
    category: 'volcanoes',
    title: 'Mount Fuji (Japan)',
    description:
      'Japan’s highest peak (3,776 m) and a sacred cultural icon, Mount Fuji is an active stratovolcano last erupted in 1707 (the Hōei eruption). Its shallowing magma chamber and tectonic stress from the 2011 Tōhoku quake have raised concern about a future eruption that could blanket Tokyo in ash. It is a recurring GS1 (volcanism) Prelims reference and a UNESCO cultural site.',
    lat: 35.36,
    lng: 138.73,
    status: 'open',
    country: 'Japan',
    region: 'Honshū',
    syllabusTags: ['GS1', 'Geomorphology', 'Volcanism', 'GS3', 'Disaster Management'],
    sources: [
      { title: 'Mount Fuji — Wikipedia', url: 'https://en.wikipedia.org/wiki/Mount_Fuji' },
      { title: 'Mount Fuji — NASA Earth Observatory', url: 'https://earthobservatory.nasa.gov/' },
    ],
  },

  {
    id: 'nasa-merapi',
    source: 'eonet',
    layer: 'L1',
    colorFamily: 'red',
    category: 'volcanoes',
    title: 'Mount Merapi (Indonesia)',
    description:
      'The most active volcano in Indonesia, located on Java between Yogyakarta and Central Java, Merapi is famed for its dangerous pyroclastic flows called “awan panas” that descend its slopes during dome-collapse eruptions. The 2010 eruption killed ~350 people. It is a standard GS1 case study on stratovolcano hazards and volcanic disaster management.',
    lat: -7.54,
    lng: 110.45,
    status: 'open',
    country: 'Indonesia',
    region: 'Java',
    syllabusTags: ['GS1', 'Geomorphology', 'Volcanism', 'GS3', 'Disaster Management'],
    sources: [
      { title: 'Mount Merapi — Wikipedia', url: 'https://en.wikipedia.org/wiki/Mount_Merapi' },
      { title: 'Merapi — NASA Earth Observatory', url: 'https://earthobservatory.nasa.gov/' },
    ],
  },

  {
    id: 'nasa-barren-island',
    source: 'eonet',
    layer: 'L1',
    colorFamily: 'red',
    category: 'volcanoes',
    title: 'Barren Island (India — Andaman)',
    description:
      'India’s only confirmed active volcano, a stratovolcano in the Andaman Sea about 135 km north-east of Port Blair. Subduction of the Indian Plate beneath the Burma micro-plate drives its activity, with eruptions recorded since 1787 and most recently in 2022. It is a recurring GS1 (volcanism) Prelims fact, paired with Andaman & Nicobar geography questions.',
    lat: 12.27,
    lng: 93.86,
    status: 'open',
    country: 'India',
    region: 'Andaman & Nicobar Islands',
    syllabusTags: ['GS1', 'Geomorphology', 'Volcanism', 'Physical Geography'],
    sources: [
      { title: 'Barren Island (Andaman) — Wikipedia', url: 'https://en.wikipedia.org/wiki/Barren_Island_(Andaman_Islands)' },
      { title: 'Barren Island Volcano — GSI India', url: 'https://www.gsi.gov.in/' },
    ],
  },

  {
    id: 'nasa-iceland-volcanic',
    source: 'eonet',
    layer: 'L1',
    colorFamily: 'red',
    category: 'volcanoes',
    title: 'Iceland Volcanic Zone (Mid-Atlantic Ridge)',
    description:
      'Iceland is the only place on Earth where a mid-ocean ridge rises above sea level, exposing the Mid-Atlantic Ridge’s constructive volcanism. The 2010 Eyjafjallajökull eruption paralysed European aviation; the 2023–2024 Sundhnúkagígar fissure eruptions displaced Grindavík. It is the textbook GS1 example of a divergent-plate volcanic province and an evergreen GS3 aviation-hazard case study.',
    lat: 64.0,
    lng: -19.0,
    status: 'open',
    country: 'Iceland',
    region: 'North Atlantic',
    syllabusTags: ['GS1', 'Geomorphology', 'Volcanism', 'GS3', 'Disaster Management'],
    sources: [
      { title: 'Geology of Iceland — Wikipedia', url: 'https://en.wikipedia.org/wiki/Geology_of_Iceland' },
      { title: 'Iceland volcanism — NASA Earth Observatory', url: 'https://earthobservatory.nasa.gov/' },
    ],
  },

  {
    id: 'nasa-east-african-rift-volcanic',
    source: 'eonet',
    layer: 'L1',
    colorFamily: 'red',
    category: 'volcanoes',
    title: 'East African Rift Volcanism',
    description:
      'The East African Rift — the world’s largest active continental rift — stretches from the Afar Triangle through Kenya and Tanzania to Mozambique, with a unique carbonatite and alkaline volcanism exemplified by Ol Doinyo Lengai and Erta Ale. It is the only place where a continent is actively splitting apart — the nascent Somali Plate is calving away from the Nubian Plate. It is a high-yield GS1 (geomorphology) Prelims reference for continental rifting.',
    lat: -2.0,
    lng: 35.5,
    status: 'open',
    country: 'Multi (Ethiopia, Kenya, Tanzania, DRC, Mozambique)',
    region: 'East Africa',
    syllabusTags: ['GS1', 'Geomorphology', 'Volcanism', 'Physical Geography'],
    sources: [
      { title: 'East African Rift — Wikipedia', url: 'https://en.wikipedia.org/wiki/East_African_Rift' },
      { title: 'East African Rift — NASA Earth Observatory', url: 'https://earthobservatory.nasa.gov/' },
    ],
  },

  {
    id: 'nasa-deccan-traps',
    source: 'eonet',
    layer: 'L1',
    colorFamily: 'red',
    category: 'volcanoes',
    title: 'Deccan Traps (India — Flood Basalt Province)',
    description:
      'A 500,000 km² layered flood-basalt province in west-central India erupted ~66 million years ago across roughly 30,000–50,000 years, contemporaneous with the Cretaceous–Paleogene mass extinction. The step-like erosion of its lava flows produces the “ghats” of the Western Ghats. It is a perennial GS1 (volcanism) Prelims fact and an active research front on plume-volcanism and mass extinction.',
    lat: 19.5,
    lng: 73.5,
    status: 'open',
    country: 'India',
    region: 'Maharashtra / Western Ghats',
    syllabusTags: ['GS1', 'Geomorphology', 'Volcanism', 'Physical Geography'],
    sources: [
      { title: 'Deccan Traps — Wikipedia', url: 'https://en.wikipedia.org/wiki/Deccan_Traps' },
      { title: 'Deccan volcanism — Geological Survey of India', url: 'https://www.gsi.gov.in/' },
    ],
  },

  // ============================================================
  // DEEP OCEAN TRENCHES  (8 entries)
  // category: 'seaLakeIce'  ·  colorFamily: 'blue'
  // tags: GS1 Physical Geography/Water-bodies, Geomorphology
  // ============================================================

  {
    id: 'nasa-mariana-trench',
    source: 'eonet',
    layer: 'L1',
    colorFamily: 'blue',
    category: 'seaLakeIce',
    title: 'Mariana Trench (Pacific)',
    description:
      'The deepest known oceanic trench in the world, reaching ~10,935 m at the Challenger Deep in the western Pacific near the Mariana Islands. It marks the subduction of the Pacific Plate beneath the Mariana Plate. It is a standard GS1 (physical geography) Prelims fact for ocean-floor relief and plate tectonics.',
    lat: 11.37,
    lng: 142.6,
    status: 'open',
    country: 'International waters (Pacific Ocean)',
    region: 'Western Pacific',
    syllabusTags: ['GS1', 'Physical Geography', 'Water-bodies', 'Geomorphology'],
    sources: [
      { title: 'Mariana Trench — Wikipedia', url: 'https://en.wikipedia.org/wiki/Mariana_Trench' },
      { title: 'Challenger Deep — Wikipedia', url: 'https://en.wikipedia.org/wiki/Challenger_Deep' },
    ],
  },

  {
    id: 'nasa-puerto-rico-trench',
    source: 'eonet',
    layer: 'L1',
    colorFamily: 'blue',
    category: 'seaLakeIce',
    title: 'Puerto Rico Trench (Atlantic)',
    description:
      'The deepest point in the Atlantic Ocean (~8,376 m at Milwaukee Deep), the Puerto Rico Trench runs roughly parallel to and north of Puerto Rico along the boundary between the Caribbean and North American plates. It is associated with significant seismic and tsunami hazard for the Caribbean. It is a recurring GS1 (physical geography) Prelims fact.',
    lat: 19.5,
    lng: -66.5,
    status: 'open',
    country: 'International waters (Atlantic Ocean)',
    region: 'Caribbean',
    syllabusTags: ['GS1', 'Physical Geography', 'Water-bodies', 'Geomorphology', 'GS3', 'Disaster Management'],
    sources: [
      { title: 'Puerto Rico Trench — Wikipedia', url: 'https://en.wikipedia.org/wiki/Puerto_Rico_Trench' },
      { title: 'Puerto Rico Trench — NOAA', url: 'https://www.noaa.gov/' },
    ],
  },

  {
    id: 'nasa-java-trench',
    source: 'eonet',
    layer: 'L1',
    colorFamily: 'blue',
    category: 'seaLakeIce',
    title: 'Java Trench (Indian Ocean)',
    description:
      'The deepest point in the Indian Ocean (~7,725 m at the Java Deep), the Java Trench is the south-eastern segment of the broader Sunda Trench system running south of Java and the Lesser Sunda Islands. It marks the subduction of the Indo-Australian Plate beneath the Sunda Plate. It is a recurring GS1 (physical geography) Prelims fact and the source of the 2004 Indian Ocean tsunami.',
    lat: -10.0,
    lng: 110.0,
    status: 'open',
    country: 'International waters (Indian Ocean)',
    region: 'Eastern Indian Ocean (south of Java)',
    syllabusTags: ['GS1', 'Physical Geography', 'Water-bodies', 'Geomorphology', 'GS3', 'Disaster Management'],
    sources: [
      { title: 'Java Trench — Wikipedia', url: 'https://en.wikipedia.org/wiki/Java_Trench' },
      { title: 'Java Trench — Encyclopædia Britannica', url: 'https://www.britannica.com/place/Java-Trench' },
    ],
  },

  {
    id: 'nasa-kuril-kamchatka-trench',
    source: 'eonet',
    layer: 'L1',
    colorFamily: 'blue',
    category: 'seaLakeIce',
    title: 'Kuril–Kamchatka Trench',
    description:
      'A 2,100-km oceanic trench in the North Pacific running parallel to the Kuril Islands and Kamchatka Peninsula, reaching depths of ~9,717 m. It marks the subduction of the Pacific Plate beneath the Okhotsk Plate and is the source of frequent M8+ megathrust earthquakes and tsunamis. It is a recurring GS1 (physical geography) Prelims fact and a GS3 tsunami-hazard reference.',
    lat: 47.0,
    lng: 152.0,
    status: 'open',
    country: 'International waters (North Pacific)',
    region: 'Northwest Pacific',
    syllabusTags: ['GS1', 'Physical Geography', 'Water-bodies', 'Geomorphology', 'GS3', 'Disaster Management'],
    sources: [
      { title: 'Kuril–Kamchatka Trench — Wikipedia', url: 'https://en.wikipedia.org/wiki/Kuril%E2%80%93Kamchatka_Trench' },
      { title: 'Kuril–Kamchatka Trench — Encyclopædia Britannica', url: 'https://www.britannica.com/' },
    ],
  },

  {
    id: 'nasa-peru-chile-trench',
    source: 'eonet',
    layer: 'L1',
    colorFamily: 'blue',
    category: 'seaLakeIce',
    title: 'Peru–Chile Trench (Atacama Trench)',
    description:
      'A 5,900-km oceanic trench in the eastern Pacific about 160 km off the coast of Peru and Chile, reaching ~8,065 m at Richards Deep. Also called the Atacama Trench, it marks the subduction of the Nazca Plate beneath the South American Plate — the engine of Andean uplift and the 1960 Valdivia M9.5 earthquake. It is a recurring GS1 (physical geography) Prelims fact.',
    lat: -23.18,
    lng: -71.31,
    status: 'open',
    country: 'International waters (Pacific Ocean)',
    region: 'Southeast Pacific (off Peru / Chile)',
    syllabusTags: ['GS1', 'Physical Geography', 'Water-bodies', 'Geomorphology', 'GS3', 'Disaster Management'],
    sources: [
      { title: 'Peru–Chile Trench — Wikipedia', url: 'https://en.wikipedia.org/wiki/Peru%E2%80%93Chile_Trench' },
      { title: 'Peru–Chile Trench — Encyclopædia Britannica', url: 'https://www.britannica.com/place/Peru-Chile-Trench' },
    ],
  },

  {
    id: 'nasa-tonga-trench',
    source: 'eonet',
    layer: 'L1',
    colorFamily: 'blue',
    category: 'seaLakeIce',
    title: 'Tonga Trench',
    description:
      'The deepest trench in the Southern Hemisphere (~10,882 m at the Horizon Deep), the Tonga Trench runs north–south just west of the Tonga archipelago where the Pacific Plate subducts beneath the Australian Plate at the fastest convergence rate on Earth (~24 cm/yr). It is a recurring GS1 (physical geography) Prelims fact and the locus of the 2022 Hunga Tonga–Hunga Ha‘apai volcanic eruption.',
    lat: -22.0,
    lng: -175.0,
    status: 'open',
    country: 'International waters (South Pacific)',
    region: 'South Pacific',
    syllabusTags: ['GS1', 'Physical Geography', 'Water-bodies', 'Geomorphology', 'GS3', 'Disaster Management'],
    sources: [
      { title: 'Tonga Trench — Wikipedia', url: 'https://en.wikipedia.org/wiki/Tonga_Trench' },
      { title: 'Hunga Tonga eruption — NASA Earth Observatory', url: 'https://earthobservatory.nasa.gov/' },
    ],
  },

  {
    id: 'nasa-philippine-trench',
    source: 'eonet',
    layer: 'L1',
    colorFamily: 'blue',
    category: 'seaLakeIce',
    title: 'Philippine Trench',
    description:
      'A 1,320-km oceanic trench east of the Philippines reaching depths of ~10,540 m at the Galathea Depth, among the deepest in the world. It marks the subduction of the Philippine Sea Plate beneath the Eurasian Plate and is associated with the recurring Mindanao earthquakes and the 1976 Moro Gulf tsunami. It is a recurring GS1 (physical geography) Prelims fact.',
    lat: 10.0,
    lng: 128.0,
    status: 'open',
    country: 'International waters (Philippine Sea)',
    region: 'Western Pacific (east of Philippines)',
    syllabusTags: ['GS1', 'Physical Geography', 'Water-bodies', 'Geomorphology', 'GS3', 'Disaster Management'],
    sources: [
      { title: 'Philippine Trench — Wikipedia', url: 'https://en.wikipedia.org/wiki/Philippine_Trench' },
      { title: 'Philippine Trench — Encyclopædia Britannica', url: 'https://www.britannica.com/' },
    ],
  },

  {
    id: 'nasa-sunda-trench',
    source: 'eonet',
    layer: 'L1',
    colorFamily: 'blue',
    category: 'seaLakeIce',
    title: 'Sunda Trench (Sumatra segment)',
    description:
      'The Sunda Trench — historically and still interchangeably called the Java Trench — is the only major oceanic trench in the Indian Ocean, running from south of Sumatra to south of Java and the Lesser Sunda Islands. Its north-western Sumatra segment was the rupture zone of the 2004 Mw 9.1 Sumatra–Andaman earthquake and Indian Ocean tsunami. It is the definitive GS1 (physical geography) and GS3 (disaster management) Indian-Ocean reference.',
    lat: -5.0,
    lng: 100.0,
    status: 'open',
    country: 'International waters (Indian Ocean)',
    region: 'Eastern Indian Ocean (south of Sumatra)',
    syllabusTags: ['GS1', 'Physical Geography', 'Water-bodies', 'Geomorphology', 'GS3', 'Disaster Management'],
    sources: [
      { title: 'Sunda Trench — Wikipedia', url: 'https://en.wikipedia.org/wiki/Sunda_Trench' },
      { title: 'Sunda Trench — Encyclopædia Britannica', url: 'https://www.britannica.com/' },
    ],
  },

  // ============================================================
  // TSUNAMI-PRONE ZONES  (3 entries)
  // category: 'earthquakes'  ·  colorFamily: 'blue'
  // tags: GS1 Geomorphology/Tsunami, GS3 Disaster Management
  // ============================================================

  {
    id: 'nasa-indian-ocean-tsunami-belt',
    source: 'eonet',
    layer: 'L1',
    colorFamily: 'blue',
    category: 'earthquakes',
    title: 'Indian Ocean Tsunami Belt (2004 zone)',
    description:
      'The 26 December 2004 Indian Ocean tsunami was generated by a Mw 9.1 megathrust rupture of the Sumatra–Andaman segment of the Sunda Trench, killing approximately 230,000 people across 14 countries including India’s Andaman & Nicobar Islands and Tamil Nadu coast. It catalysed the establishment of the Indian Ocean Tsunami Warning System under UNESCO IOC. It is the definitive GS3 (disaster management) case study for India and a recurring GS1 (geomorphology) Prelims reference.',
    lat: 3.3,
    lng: 95.98,
    status: 'open',
    date: '2004-12-26',
    country: 'Multi (Indonesia, India, Sri Lanka, Thailand, Maldives)',
    region: 'Eastern Indian Ocean',
    syllabusTags: ['GS1', 'Geomorphology', 'Tsunami', 'GS3', 'Disaster Management', 'Neighbourhood'],
    sources: [
      { title: '2004 Indian Ocean tsunami — NOAA NCTR', url: 'https://nctr.pmel.noaa.gov/indo_1204.html' },
      { title: '2004 Indian Ocean earthquake — Wikipedia', url: 'https://en.wikipedia.org/wiki/2004_Indian_Ocean_earthquake' },
    ],
  },

  {
    id: 'nasa-pacific-tsunami-zone',
    source: 'eonet',
    layer: 'L1',
    colorFamily: 'blue',
    category: 'earthquakes',
    title: 'Pacific Tsunami Warning Zone',
    description:
      'The Pacific Tsunami Warning Center (PTWC) at Ewa Beach, Hawaii, is the operational hub of the Pacific Tsunami Warning System established in 1949 after the 1946 Aleutian tsunami killed 159 in Hawaii. The Ring of Fire generates roughly 80% of the world’s tsunamis, making the Pacific basin the most tsunami-prone ocean on Earth. It is a recurring GS1/GS3 case study for early-warning architecture and international cooperation.',
    lat: 21.3,
    lng: -158.0,
    status: 'open',
    country: 'USA (Hawaii) — covers all Pacific Rim nations',
    region: 'Pacific Ocean',
    syllabusTags: ['GS1', 'Geomorphology', 'Tsunami', 'GS3', 'Disaster Management', 'GS2', 'International Institutions'],
    sources: [
      { title: 'Pacific Tsunami Warning Center — NOAA', url: 'https://tsunami.gov/' },
      { title: 'Pacific Tsunami Warning Center — Wikipedia', url: 'https://en.wikipedia.org/wiki/Pacific_Tsunami_Warning_Center' },
    ],
  },

  {
    id: 'nasa-japan-trench-tsunami',
    source: 'eonet',
    layer: 'L1',
    colorFamily: 'blue',
    category: 'earthquakes',
    title: 'Japan Trench Tsunami Zone',
    description:
      'The 11 March 2011 Tōhoku Mw 9.0 megathrust earthquake on the Japan Trench generated a tsunami with run-up heights up to 40 m that killed ~19,700, triggered the Fukushima Dai-ichi nuclear disaster, and shifted Honshū 2.4 m east. The event exposed limits of seawall design and probabilistic hazard assessment. It is the definitive post-2000 GS3 (disaster management) case study for cascading nuclear–tsunami risk.',
    lat: 38.1,
    lng: 142.86,
    status: 'open',
    date: '2011-03-11',
    country: 'Japan',
    region: 'Northwest Pacific (off Tōhoku)',
    syllabusTags: ['GS1', 'Geomorphology', 'Tsunami', 'GS3', 'Disaster Management', 'Nuclear'],
    sources: [
      { title: '2011 Tōhoku earthquake — Wikipedia', url: 'https://en.wikipedia.org/wiki/2011_T%C5%8Dhoku_earthquake_and_tsunami' },
      { title: 'Fukushima nuclear disaster — Wikipedia', url: 'https://en.wikipedia.org/wiki/Fukushima_nuclear_accident' },
    ],
  },

  // ============================================================
  // CYCLONE / HURRICANE BELTS  (6 entries)
  // category: 'severeStorms'  ·  colorFamily: 'red'
  // tags: GS1 Climatology/Cyclones, GS3 Disaster Management
  // ============================================================

  {
    id: 'nasa-bay-of-bengal-cyclones',
    source: 'eonet',
    layer: 'L1',
    colorFamily: 'red',
    category: 'severeStorms',
    title: 'Bay of Bengal Cyclone Belt',
    description:
      'The Bay of Bengal is the world’s deadliest tropical-cyclone basin, generating about a quarter of all named storms and accounting for the majority of cyclone-related deaths globally. Recent disasters — 1999 Odisha Super Cyclone, 2013 Phailin, 2019 Fani, 2023 Michaung, and 2024 Remal — recur in Prelims and GS3 disaster-management questions. IMD’s Cyclone Warning Division and the National Disaster Management Authority’s cyclone shelters are routine Mains references.',
    lat: 15.0,
    lng: 88.0,
    status: 'open',
    country: 'India / Bangladesh / Myanmar',
    region: 'Bay of Bengal',
    syllabusTags: ['GS1', 'Climatology', 'Cyclones', 'GS3', 'Disaster Management', 'Neighbourhood'],
    sources: [
      { title: 'Cyclones in Bay of Bengal — IMD', url: 'https://rsmcnewdelhi.imd.gov.in/' },
      { title: 'North Indian Ocean tropical cyclones — Wikipedia', url: 'https://en.wikipedia.org/wiki/North_Indian_Ocean_tropical_cyclone' },
    ],
  },

  {
    id: 'nasa-arabian-sea-cyclones',
    source: 'eonet',
    layer: 'L1',
    colorFamily: 'red',
    category: 'severeStorms',
    title: 'Arabian Sea Cyclone Zone',
    description:
      'Warming Arabian Sea surface temperatures have driven a marked rise in severe cyclonic storms — Tauktae (2021), Biparjoy (2023), Tej (2023) — affecting Gujarat, Maharashtra, Karnataka, and the western Indian coast. The basin historically produced fewer cyclones than the Bay of Bengal but climate change is narrowing the gap. It is a recurring GS1 (climatology) and GS3 (climate change) hotspot for India.',
    lat: 15.0,
    lng: 65.0,
    status: 'open',
    country: 'India / Oman / Yemen / Pakistan',
    region: 'Arabian Sea',
    syllabusTags: ['GS1', 'Climatology', 'Cyclones', 'GS3', 'Disaster Management', 'Climate Change'],
    sources: [
      { title: 'Arabian Sea cyclones — IMD', url: 'https://rsmcnewdelhi.imd.gov.in/' },
      { title: 'Tropical cyclones and climate change — IPCC', url: 'https://www.ipcc.ch/' },
    ],
  },

  {
    id: 'nasa-caribbean-hurricanes',
    source: 'eonet',
    layer: 'L1',
    colorFamily: 'red',
    category: 'severeStorms',
    title: 'Caribbean Hurricane Belt',
    description:
      'The Caribbean Sea and Gulf of Mexico lie in the Atlantic hurricane alley where Cape Verde-type storms intensify over warm SSTs, devastating Small Island Developing States (SIDS) and Central American coasts. Hurricanes Maria (2017), Dorian (2019), and Beryl (2024) recur in GS2 (IR — SIDS), GS3 (climate finance, loss & damage), and Prelims current affairs. They drive the COP loss-and-damage fund debate.',
    lat: 18.0,
    lng: -75.0,
    status: 'open',
    country: 'Multi (Cuba, Haiti, Dominican Republic, Jamaica, Bahamas, USA)',
    region: 'Caribbean Sea',
    syllabusTags: ['GS1', 'Climatology', 'Cyclones', 'GS3', 'Disaster Management', 'Climate Change', 'GS2', 'International Institutions'],
    sources: [
      { title: 'Atlantic hurricane season — NOAA', url: 'https://www.noaa.gov/hurricane' },
      { title: 'Atlantic hurricane — Wikipedia', url: 'https://en.wikipedia.org/wiki/Atlantic_hurricane' },
    ],
  },

  {
    id: 'nasa-south-china-sea-typhoons',
    source: 'eonet',
    layer: 'L1',
    colorFamily: 'red',
    category: 'severeStorms',
    title: 'South China Sea Typhoon Belt',
    description:
      'The South China Sea and the western North Pacific basin generate more tropical cyclones per year than any other basin on Earth — about a third of the global total. Typhoons Haiyan (2013), Mangkhut (2018), Yagi (2024) repeatedly devastated the Philippines, Vietnam, southern China, and Taiwan. It is a recurring GS1 (climatology) Prelims fact and a GS3 (disaster management) case study for the Indo-Pacific.',
    lat: 15.0,
    lng: 115.0,
    status: 'open',
    country: 'Multi (Philippines, Vietnam, China, Taiwan)',
    region: 'South China Sea',
    syllabusTags: ['GS1', 'Climatology', 'Cyclones', 'GS3', 'Disaster Management'],
    sources: [
      { title: 'Typhoon — Wikipedia', url: 'https://en.wikipedia.org/wiki/Typhoon' },
      { title: 'Western North Pacific TC — Japan Meteorological Agency', url: 'https://www.jma.go.jp/jma/jma-eng/jma-center/rsmc-hp-pub-eg/AboutRSMC.htm' },
    ],
  },

  {
    id: 'nasa-gulf-of-mexico-hurricanes',
    source: 'eonet',
    layer: 'L1',
    colorFamily: 'red',
    category: 'severeStorms',
    title: 'Gulf of Mexico Hurricane Zone',
    description:
      'The Gulf of Mexico is a critical hurricane formation and intensification zone where Loop Current eddies super-fuel storms before landfall on the US Gulf Coast and eastern Mexico. Katrina (2005), Harvey (2017), and Ida (2021) caused catastrophic flooding and oil-supply shocks. It is a recurring GS3 (disaster management) case study and intersects GS3 (energy security) via Gulf of Mexico offshore oil infrastructure.',
    lat: 25.0,
    lng: -92.0,
    status: 'open',
    country: 'USA / Mexico / Cuba',
    region: 'Gulf of Mexico',
    syllabusTags: ['GS1', 'Climatology', 'Cyclones', 'GS3', 'Disaster Management', 'Energy Security'],
    sources: [
      { title: 'Gulf of Mexico hurricanes — NOAA', url: 'https://www.noaa.gov/hurricane' },
      { title: 'Hurricane Katrina — Wikipedia', url: 'https://en.wikipedia.org/wiki/Hurricane_Katrina' },
    ],
  },

  {
    id: 'nasa-coral-sea-cyclones',
    source: 'eonet',
    layer: 'L1',
    colorFamily: 'red',
    category: 'severeStorms',
    title: 'Coral Sea / Australian Cyclone Region',
    description:
      'The Coral Sea and the Australian region generate an average of 11 tropical cyclones per season (November–April), affecting Queensland, the Northern Territory, and Western Australia, as well as Vanuatu, Fiji, and New Caledonia. Cyclone Yasi (2011) and Jasper (2023) recur as GS3 (disaster management) and GS1 (El Niño / climate variability) references for the Indo-Pacific.',
    lat: -18.0,
    lng: 155.0,
    status: 'open',
    country: 'Multi (Australia, Vanuatu, Fiji, New Caledonia)',
    region: 'Coral Sea / South Pacific',
    syllabusTags: ['GS1', 'Climatology', 'Cyclones', 'GS3', 'Disaster Management', 'Climate Change'],
    sources: [
      { title: 'Australian region tropical cyclones — Bureau of Meteorology', url: 'http://www.bom.gov.au/cyclone/' },
      { title: 'Australian region cyclone — Wikipedia', url: 'https://en.wikipedia.org/wiki/Australian_region_tropical_cyclone' },
    ],
  },

  // ============================================================
  // ICE CAPS & GLACIERS  (5 entries)
  // category: 'snow' or 'seaLakeIce'  ·  colorFamily: 'blue'
  // tags: GS1 Climatology, GS3 Environment/Climate Change
  // ============================================================

  {
    id: 'nasa-antarctic-ice-sheet',
    source: 'eonet',
    layer: 'L1',
    colorFamily: 'blue',
    category: 'seaLakeIce',
    title: 'Antarctic Ice Sheet',
    description:
      'The Antarctic Ice Sheet is the largest single mass of ice on Earth, containing about 60% of the world’s fresh water; complete melt would raise global sea level by ~58 m. West Antarctic Ice Sheet instability and the Thwaites “Doomsday” Glacier are among the most-watched climate tipping points. It is a perennial GS1 (climatology) and GS3 (climate change) Prelims reference and a recurring GS2 (Antarctic Treaty System) Mains hook.',
    lat: -83.0,
    lng: 35.0,
    status: 'open',
    country: 'Antarctica (Antarctic Treaty System)',
    region: 'East and West Antarctica',
    syllabusTags: ['GS1', 'Climatology', 'GS3', 'Environment', 'Climate Change', 'GS2', 'International Institutions'],
    sources: [
      { title: 'Antarctic ice sheet — Wikipedia', url: 'https://en.wikipedia.org/wiki/Antarctic_ice_sheet' },
      { title: 'Antarctica — NASA Earth Observatory', url: 'https://earthobservatory.nasa.gov/' },
    ],
  },

  {
    id: 'nasa-greenland-ice-sheet',
    source: 'eonet',
    layer: 'L1',
    colorFamily: 'blue',
    category: 'seaLakeIce',
    title: 'Greenland Ice Sheet',
    description:
      'The Greenland Ice Sheet is the second-largest ice body on Earth after Antarctica, holding enough water to raise global sea level by ~7.4 m if fully melted. Surface melt has roughly doubled in the 21st century, contributing about 1 mm/yr to sea-level rise and disrupting the Atlantic Meridional Overturning Circulation. It is a high-frequency GS1 (climatology) and GS3 (climate change) Prelims fact.',
    lat: 72.0,
    lng: -40.0,
    status: 'open',
    country: 'Greenland (Kingdom of Denmark)',
    region: 'Arctic',
    syllabusTags: ['GS1', 'Climatology', 'GS3', 'Environment', 'Climate Change'],
    sources: [
      { title: 'Greenland ice sheet — Wikipedia', url: 'https://en.wikipedia.org/wiki/Greenland_ice_sheet' },
      { title: 'Greenland Ice Sheet Today — NASA NSIDC', url: 'https://nsidc.org/greenland-today' },
    ],
  },

  {
    id: 'nasa-arctic-sea-ice',
    source: 'eonet',
    layer: 'L1',
    colorFamily: 'blue',
    category: 'seaLakeIce',
    title: 'Arctic Sea Ice',
    description:
      'Arctic sea ice has declined by about 40% in summer extent since 1979, with the first ice-free summer projected within decades. The Arctic is warming nearly four times faster than the global average (Arctic amplification), driving albedo feedback, permafrost methane release, and geopolitical competition over new shipping lanes. It is a recurring GS1 (climatology) and GS3 (climate change) hotspot and a GS2 (Arctic Council) reference.',
    lat: 85.0,
    lng: 0.0,
    status: 'open',
    country: 'International waters (Arctic Ocean)',
    region: 'Arctic Ocean',
    syllabusTags: ['GS1', 'Climatology', 'GS3', 'Environment', 'Climate Change', 'GS2', 'International Institutions'],
    sources: [
      { title: 'Arctic sea ice — NASA NSIDC', url: 'https://nsidc.org/' },
      { title: 'Arctic sea ice decline — Wikipedia', url: 'https://en.wikipedia.org/wiki/Arctic_sea_ice_decline' },
    ],
  },

  {
    id: 'nasa-himalayan-glaciers',
    source: 'eonet',
    layer: 'L1',
    colorFamily: 'blue',
    category: 'snow',
    title: 'Himalayan Glaciers (Third Pole)',
    description:
      'The Hindu Kush–Karakoram–Himalaya glacier system — the “Third Pole” — holds the largest freshwater reserve outside the polar regions and feeds the Indus, Ganga, Brahmaputra, and other major Asian rivers sustaining ~1.9 billion people. Glacier retreat, glacial-lake outburst floods (GLOFs) like the 2023 South Lhonak disaster in Sikkim, and downstream water-security implications are high-frequency GS1/GS3 hotspots. India’s State of Himalayan Glaciers reports and the International Centre for Integrated Mountain Development (ICIMOD) assessments are routine Mains references.',
    lat: 28.0,
    lng: 86.0,
    status: 'open',
    country: 'Multi (India, Nepal, Bhutan, Pakistan, China)',
    region: 'Hindu Kush–Karakoram–Himalaya',
    syllabusTags: ['GS1', 'Climatology', 'Geomorphology', 'GS3', 'Environment', 'Climate Change', 'Disaster Management', 'Neighbourhood'],
    sources: [
      { title: 'The Third Pole — ICIMOD', url: 'https://www.icimod.org/' },
      { title: 'Himalayan glaciers — NASA Earth Observatory', url: 'https://earthobservatory.nasa.gov/' },
    ],
  },

  {
    id: 'nasa-patagonian-ice-fields',
    source: 'eonet',
    layer: 'L1',
    colorFamily: 'blue',
    category: 'snow',
    title: 'Patagonian Ice Fields',
    description:
      'The Northern and Southern Patagonian Ice Fields are the largest expanse of ice in the Southern Hemisphere outside Antarctica, covering roughly 16,800 km² (Southern) and 4,200 km² (Northern). They are thinning at some of the fastest rates observed anywhere, contributing to about a third of the sea-level rise attributable to non-polar glaciers. They are a recurring GS1 (climatology) Prelims reference and a GS3 climate-change case study.',
    lat: -49.0,
    lng: -73.5,
    status: 'open',
    country: 'Chile / Argentina',
    region: 'Patagonian Andes',
    syllabusTags: ['GS1', 'Climatology', 'GS3', 'Environment', 'Climate Change'],
    sources: [
      { title: 'Southern Patagonian Ice Field — Wikipedia', url: 'https://en.wikipedia.org/wiki/Southern_Patagonian_Ice_Field' },
      { title: 'Patagonian icefields — Antarctic Glaciers', url: 'https://www.antarcticglaciers.org/glacial-geology/patagonian-ice-sheet/the-patagonian-icefields/' },
    ],
  },
]
