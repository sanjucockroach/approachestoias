/**
 * CockroachIAS — UPSC World Atlas
 * L6 — UNESCO Heritage Sites (green)
 * Cultural & natural world heritage sites.
 *
 * Part of the curated hotspot dataset (split from the original monolithic
 * hotspots.ts — see hotspots/index.ts for aggregation).
 *
 * Authored by: Task 3-data (dataset author subagent) + Task 7-split-nasa (splitter).
 * Brand voice: minimalist, bold, empathetic, honest — CockroachIAS "For Those Who Refuse to Quit."
 * Every coordinate is hand-verified (WGS84, 2-decimal).
 */

import type { CuratedHotspot } from './types'

export const unescoSites: CuratedHotspot[] = [
  {
    id: "uni-taj-mahal",
    layer: "L6",
    colorFamily: "green",
    title: "Taj Mahal",
    description: "A white-marble mausoleum in Agra commissioned by Mughal emperor Shah Jahan in memory of Mumtaz Mahal and inscribed in 1983. It is a masterpiece of Indo-Islamic architecture and India’s most recognised cultural site. It is a perennial GS1 (culture) hotspot, paired with Mughal architecture and pollution-threat questions.",
    lat: 27.17,
    lng: 78.04,
    country: "India",
    region: "South Asia / Uttar Pradesh",
    syllabusTags: ["GS1", "Culture", "Architecture", "Mughal"],
    sources: [
      { title: "Taj Mahal — UNESCO", url: "https://whc.unesco.org/en/list/252" },
      { title: "Taj Mahal — Wikipedia", url: "https://en.wikipedia.org/wiki/Taj_Mahal" },
    ],
  },

  {
    id: "uni-agra-fort",
    layer: "L6",
    colorFamily: "green",
    title: "Agra Fort",
    description: "A 16th-century Mughal fortress of red sandstone built by Akbar, Agra Fort was inscribed in 1983. It encapsulates the entire arc of Mughal power from Akbar to Aurangzeb. It is a recurring GS1 (culture) hotspot, paired with Indo-Islamic architecture questions.",
    lat: 27.18,
    lng: 78.02,
    country: "India",
    region: "South Asia / Uttar Pradesh",
    syllabusTags: ["GS1", "Culture", "Architecture", "Mughal"],
    sources: [
      { title: "Agra Fort — UNESCO", url: "https://whc.unesco.org/en/list/251" },
      { title: "Agra Fort — Wikipedia", url: "https://en.wikipedia.org/wiki/Agra_Fort" },
    ],
  },

  {
    id: "uni-ajanta",
    layer: "L6",
    colorFamily: "green",
    title: "Ajanta Caves",
    description: "A cluster of 29 rock-cut Buddhist caves in Maharashtra dating from the 2nd century BCE to the 6th century CE, Ajanta is celebrated for its murals and frescoes. It was inscribed in 1983 and represents the apex of ancient Indian painting. It is a recurring GS1 (culture) hotspot, paired with Buddhist art and Satavahana/Vakataka patronage questions.",
    lat: 20.55,
    lng: 75.7,
    country: "India",
    region: "South Asia / Maharashtra",
    syllabusTags: ["GS1", "Culture", "Buddhism", "Art"],
    sources: [
      { title: "Ajanta Caves — UNESCO", url: "https://whc.unesco.org/en/list/242" },
      { title: "Ajanta Caves — Wikipedia", url: "https://en.wikipedia.org/wiki/Ajanta_Caves" },
    ],
  },

  {
    id: "uni-ellora",
    layer: "L6",
    colorFamily: "green",
    title: "Ellora Caves",
    description: "A sequence of 34 rock-cut caves in Maharashtra (6th–10th century CE) embodying Buddhist, Hindu and Jain faiths side by side, Ellora was inscribed in 1983. The Kailasa temple (Cave 16) is the largest monolithic rock excavation in the world. It is a recurring GS1 (culture) hotspot for Prelims.",
    lat: 20.03,
    lng: 75.18,
    country: "India",
    region: "South Asia / Maharashtra",
    syllabusTags: ["GS1", "Culture", "Architecture", "Syncretism"],
    sources: [
      { title: "Ellora Caves — UNESCO", url: "https://whc.unesco.org/en/list/243" },
      { title: "Ellora Caves — Wikipedia", url: "https://en.wikipedia.org/wiki/Ellora_Caves" },
    ],
  },

  {
    id: "uni-konark",
    layer: "L6",
    colorFamily: "green",
    title: "Sun Temple, Konark",
    description: "A 13th-century temple to Surya shaped as the chariot of the sun god, built by Eastern Ganga king Narasimhadeva I and inscribed in 1984. Its monumental wheels and erotic sculptures exemplify Kalinga architecture. It is a recurring GS1 (culture) hotspot, paired with Odisha temple architecture questions.",
    lat: 19.89,
    lng: 86.1,
    country: "India",
    region: "South Asia / Odisha",
    syllabusTags: ["GS1", "Culture", "Architecture", "Temple"],
    sources: [
      { title: "Sun Temple, Konarak — UNESCO", url: "https://whc.unesco.org/en/list/246" },
      { title: "Konark Sun Temple — Wikipedia", url: "https://en.wikipedia.org/wiki/Konark_Sun_Temple" },
    ],
  },

  {
    id: "uni-mahabalipuram",
    layer: "L6",
    colorFamily: "green",
    title: "Group of Monuments at Mahabalipuram",
    description: "A 7th-century Pallava port-town on the Coromandel coast, Mahabalipuram is celebrated for its rathas, mandapas and the open-air rock relief of the Descent of the Ganges. It was inscribed in 1984 and represents the genesis of South Indian temple architecture. It is a recurring GS1 (culture) hotspot for Prelims.",
    lat: 12.62,
    lng: 80.19,
    country: "India",
    region: "South Asia / Tamil Nadu",
    syllabusTags: ["GS1", "Culture", "Architecture", "Pallava"],
    sources: [
      { title: "Group of Monuments at Mahabalipuram — UNESCO", url: "https://whc.unesco.org/en/list/249" },
      { title: "Mahabalipuram — Wikipedia", url: "https://en.wikipedia.org/wiki/Mamallapuram" },
    ],
  },

  {
    id: "uni-kaziranga",
    layer: "L6",
    colorFamily: "green",
    title: "Kaziranga National Park",
    description: "A UNESCO World Heritage Site in Assam since 1985, Kaziranga hosts two-thirds of the world’s population of the Indian one-horned rhinoceros. It lies in the floodplains of the Brahmaputra and is also a Tiger Reserve. It is a recurring GS3 (environment) hotspot, paired with rhino conservation and flood-ecology questions.",
    lat: 26.58,
    lng: 93.17,
    country: "India",
    region: "South Asia / Assam",
    syllabusTags: ["GS3", "Environment", "Biodiversity", "GS1", "Geography"],
    sources: [
      { title: "Kaziranga National Park — UNESCO", url: "https://whc.unesco.org/en/list/337" },
      { title: "Kaziranga National Park — Wikipedia", url: "https://en.wikipedia.org/wiki/Kaziranga_National_Park" },
    ],
  },

  {
    id: "uni-hampi",
    layer: "L6",
    colorFamily: "green",
    title: "Group of Monuments at Hampi",
    description: "The ruins of Vijayanagara, the last great Hindu empire, Hampi was inscribed in 1986 and hosts the Virupaksha temple and the stone-chariot Vittala complex. It exemplifies Dravidian temple and palace architecture. It is a recurring GS1 (culture) hotspot, paired with Vijayanagara empire questions.",
    lat: 15.33,
    lng: 76.46,
    country: "India",
    region: "South Asia / Karnataka",
    syllabusTags: ["GS1", "Culture", "Architecture", "Vijayanagara"],
    sources: [
      { title: "Group of Monuments at Hampi — UNESCO", url: "https://whc.unesco.org/en/list/241" },
      { title: "Hampi — Wikipedia", url: "https://en.wikipedia.org/wiki/Hampi" },
    ],
  },

  {
    id: "uni-khajuraho",
    layer: "L6",
    colorFamily: "green",
    title: "Khajuraho Group of Monuments",
    description: "A group of 10th–11th century Chandela temples in Madhya Pradesh, Khajuraho is famed for its Nagara-style shikharas and erotic sculpture. It was inscribed in 1986 and blends Hindu and Jain traditions. It is a recurring GS1 (culture) hotspot, paired with Chandela patronage and Nagara temple questions.",
    lat: 24.83,
    lng: 79.92,
    country: "India",
    region: "South Asia / Madhya Pradesh",
    syllabusTags: ["GS1", "Culture", "Architecture", "Temple"],
    sources: [
      { title: "Khajuraho Group of Monuments — UNESCO", url: "https://whc.unesco.org/en/list/240" },
      { title: "Khajuraho — Wikipedia", url: "https://en.wikipedia.org/wiki/Khajuraho" },
    ],
  },

  {
    id: "uni-qutub-minar",
    layer: "L6",
    colorFamily: "green",
    title: "Qutub Minar and its Monuments",
    description: "A 73-metre victory tower begun by Qutb-ud-din Aibak in 1199 and completed by Iltutmish and Alauddin Khalji, the Qutub Minar is the tallest brick minaret in the world. Inscribed in 1993, the complex includes the Iron Pillar of Chandragupta II. It is a recurring GS1 (culture) hotspot, paired with Delhi Sultanate questions.",
    lat: 28.53,
    lng: 77.19,
    country: "India",
    region: "South Asia / Delhi",
    syllabusTags: ["GS1", "Culture", "Architecture", "Delhi Sultanate"],
    sources: [
      { title: "Qutb Minar and its Monuments — UNESCO", url: "https://whc.unesco.org/en/list/233" },
      { title: "Qutb Minar — Wikipedia", url: "https://en.wikipedia.org/wiki/Qutb_Minar" },
    ],
  },

  {
    id: "uni-red-fort",
    layer: "L6",
    colorFamily: "green",
    title: "Red Fort Complex",
    description: "The palace-fort of Shahjahanabad built by Shah Jahan from 1639, the Red Fort was the seat of Mughal power until 1857. Inscribed in 2007, it blends Persian, Timurid and Indian architecture. It is a recurring GS1 (culture) hotspot, paired with later-Mughal and 1857 questions.",
    lat: 28.66,
    lng: 77.24,
    country: "India",
    region: "South Asia / Delhi",
    syllabusTags: ["GS1", "Culture", "Architecture", "Mughal", "Modern India"],
    sources: [
      { title: "Red Fort Complex — UNESCO", url: "https://whc.unesco.org/en/list/231" },
      { title: "Red Fort — Wikipedia", url: "https://en.wikipedia.org/wiki/Red_Fort" },
    ],
  },

  {
    id: "uni-rani-ki-vav",
    layer: "L6",
    colorFamily: "green",
    title: "Rani-ki-Vav (The Queen’s Stepwell)",
    description: "An 11th-century stepwell at Patan in Gujarat built by Queen Udayamati in memory of Solanki king Bhimadeva I, Rani-ki-Vav was inscribed in 2014. It is a subterranean masterpiece of Maru-Gurjara architecture and sculpture. It is a recurring GS1 (culture) hotspot, paired with water architecture and Solanki questions.",
    lat: 23.85,
    lng: 72.13,
    country: "India",
    region: "South Asia / Gujarat",
    syllabusTags: ["GS1", "Culture", "Architecture", "Water Heritage"],
    sources: [
      { title: "Rani-ki-Vav — UNESCO", url: "https://whc.unesco.org/en/list/1101" },
      { title: "Rani ki vav — Wikipedia", url: "https://en.wikipedia.org/wiki/Rani_ki_vav" },
    ],
  },

  {
    id: "uni-jaipur",
    layer: "L6",
    colorFamily: "green",
    title: "Jaipur City, Rajasthan",
    description: "Founded in 1727 by Sawai Jai Singh II on a grid-plan designed by Vidyadhar Bhattacharya, Jaipur was inscribed in 2019. It is an exceptional blend of Vedic architectural doctrines and 18th-century town planning. It is a recurring GS1 (culture) hotspot, paired with Rajput town-planning questions.",
    lat: 26.92,
    lng: 75.82,
    country: "India",
    region: "South Asia / Rajasthan",
    syllabusTags: ["GS1", "Culture", "Architecture", "Town Planning"],
    sources: [
      { title: "Jaipur City, Rajasthan — UNESCO", url: "https://whc.unesco.org/en/list/1605" },
      { title: "Jaipur — Wikipedia", url: "https://en.wikipedia.org/wiki/Jaipur" },
    ],
  },

  {
    id: "uni-nanda-devi",
    layer: "L6",
    colorFamily: "green",
    title: "Nanda Devi and Valley of Flowers",
    description: "A combined wilderness inscribed in 1988 and extended in 2005, this Uttarakhand property encompasses the Nanda Devi peak and the alpine Valley of Flowers. It hosts the snow leopard, Himalayan musk deer and blue sheep. It is a recurring GS3 (environment) and GS1 (geography) hotspot, paired with high-altitude conservation questions.",
    lat: 30.72,
    lng: 79.61,
    country: "India",
    region: "South Asia / Uttarakhand",
    syllabusTags: ["GS3", "Environment", "Biodiversity", "GS1", "Geomorphology"],
    sources: [
      { title: "Nanda Devi and Valley of Flowers — UNESCO", url: "https://whc.unesco.org/en/list/335" },
      { title: "Valley of Flowers National Park — Wikipedia", url: "https://en.wikipedia.org/wiki/Valley_of_Flowers_National_Park" },
    ],
  },

  {
    id: "uni-mahabodhi",
    layer: "L6",
    colorFamily: "green",
    title: "Mahabodhi Temple Complex, Bodh Gaya",
    description: "One of the four holy sites of Buddhism, the Mahabodhi temple marks the spot where the Buddha attained enlightenment. The present brick temple dates to the 5th–6th century CE and was inscribed in 2002. It is a recurring GS1 (culture) hotspot, paired with Buddhist pilgrimage and Gupta-era architecture questions.",
    lat: 24.7,
    lng: 84.99,
    country: "India",
    region: "South Asia / Bihar",
    syllabusTags: ["GS1", "Culture", "Buddhism", "Architecture"],
    sources: [
      { title: "Mahabodhi Temple Complex — UNESCO", url: "https://whc.unesco.org/en/list/1056" },
      { title: "Mahabodhi Temple — Wikipedia", url: "https://en.wikipedia.org/wiki/Mahabodhi_Temple" },
    ],
  },

  {
    id: "uni-great-wall",
    layer: "L6",
    colorFamily: "green",
    title: "Great Wall of China",
    description: "A series of fortifications totalling over 21,000 km built from the 7th century BCE to defend the Chinese states against nomadic incursions. It was inscribed in 1987 and is the largest cultural landscape on Earth. It is a recurring GS1 (culture) hotspot, paired with Chinese dynastic history questions.",
    lat: 40.36,
    lng: 116.02,
    country: "China",
    region: "East Asia",
    syllabusTags: ["GS1", "Culture", "Architecture", "GS1", "History"],
    sources: [
      { title: "The Great Wall — UNESCO", url: "https://whc.unesco.org/en/list/438" },
      { title: "Great Wall of China — Wikipedia", url: "https://en.wikipedia.org/wiki/Great_Wall_of_China" },
    ],
  },

  {
    id: "uni-petra",
    layer: "L6",
    colorFamily: "green",
    title: "Petra",
    description: "The rock-cut capital of the Nabataean kingdom, Petra controlled caravan routes between Arabia, Egypt and the Levant. Its Treasury facade carved into red sandstone cliffs made it an icon of antiquity. Inscribed in 1985, it is a recurring GS1 (culture) hotspot for Prelims.",
    lat: 30.32,
    lng: 35.45,
    country: "Jordan",
    region: "West Asia",
    syllabusTags: ["GS1", "Culture", "Architecture", "Ancient Trade"],
    sources: [
      { title: "Petra — UNESCO", url: "https://whc.unesco.org/en/list/326" },
      { title: "Petra — Wikipedia", url: "https://en.wikipedia.org/wiki/Petra" },
    ],
  },

  {
    id: "uni-machu-picchu",
    layer: "L6",
    colorFamily: "green",
    title: "Machu Picchu",
    description: "A 15th-century Inca citadel on a 2,430 m Andean saddle above the Urubamba River, Machu Picchu was inscribed in 1983. It is the apex of Inca dry-stone architecture and astronomical alignment. It is a recurring GS1 (culture) hotspot, paired with Inca civilisation questions.",
    lat: -13.16,
    lng: -72.55,
    country: "Peru",
    region: "South America",
    syllabusTags: ["GS1", "Culture", "Architecture", "GS1", "History"],
    sources: [
      { title: "Historic Sanctuary of Machu Picchu — UNESCO", url: "https://whc.unesco.org/en/list/274" },
      { title: "Machu Picchu — Wikipedia", url: "https://en.wikipedia.org/wiki/Machu_Picchu" },
    ],
  },

  {
    id: "uni-pyramids-giza",
    layer: "L6",
    colorFamily: "green",
    title: "Pyramids of Giza",
    description: "The Great Pyramids of Khufu, Khafre and Menkaure with the Sphinx were built in the 4th Dynasty (c. 2600 BCE) and inscribed in 1979. They are the only surviving Seven Wonders of the Ancient World. They are a recurring GS1 (culture) hotspot, paired with Egyptian civilisation questions.",
    lat: 29.98,
    lng: 31.13,
    country: "Egypt",
    region: "North Africa",
    syllabusTags: ["GS1", "Culture", "Architecture", "GS1", "History"],
    sources: [
      { title: "Memphis and its Necropolis — UNESCO", url: "https://whc.unesco.org/en/list/86" },
      { title: "Giza pyramid complex — Wikipedia", url: "https://en.wikipedia.org/wiki/Giza_pyramid_complex" },
    ],
  },

  {
    id: "uni-stonehenge",
    layer: "L6",
    colorFamily: "green",
    title: "Stonehenge, Avebury and Associated Sites",
    description: "A Neolithic megalithic complex on Salisbury Plain in southern England, Stonehenge was inscribed in 1986. Its astronomical alignments and ceremonial function remain subjects of debate. It is a recurring GS1 (culture) hotspot, paired with prehistoric Europe questions.",
    lat: 51.18,
    lng: -1.83,
    country: "United Kingdom",
    region: "Western Europe",
    syllabusTags: ["GS1", "Culture", "Prehistory", "Architecture"],
    sources: [
      { title: "Stonehenge, Avebury — UNESCO", url: "https://whc.unesco.org/en/list/373" },
      { title: "Stonehenge — Wikipedia", url: "https://en.wikipedia.org/wiki/Stonehenge" },
    ],
  },

  {
    id: "uni-acropolis",
    layer: "L6",
    colorFamily: "green",
    title: "Acropolis of Athens",
    description: "A citadel on a rocky outcrop above Athens, the Acropolis hosts the Parthenon, Erechtheion and Propylaea — the apex of Classical Greek architecture. It was inscribed in 1987. It is a recurring GS1 (culture) hotspot, paired with classical Greece and Periclean Athens questions.",
    lat: 37.97,
    lng: 23.73,
    country: "Greece",
    region: "Southern Europe",
    syllabusTags: ["GS1", "Culture", "Architecture", "GS1", "History"],
    sources: [
      { title: "Acropolis, Athens — UNESCO", url: "https://whc.unesco.org/en/list/404" },
      { title: "Acropolis of Athens — Wikipedia", url: "https://en.wikipedia.org/wiki/Acropolis_of_Athens" },
    ],
  },

  {
    id: "uni-angkor",
    layer: "L6",
    colorFamily: "green",
    title: "Angkor",
    description: "The Khmer imperial capital from the 9th to 15th century, Angkor hosts the Angkor Wat temple complex — the largest religious monument in the world. Inscribed in 1992, it exemplifies Khmer hydraulic urbanism and Hindu-Buddhist syncretism. It is a recurring GS1 (culture) hotspot, paired with Southeast Asian temple architecture questions.",
    lat: 13.41,
    lng: 103.87,
    country: "Cambodia",
    region: "Southeast Asia",
    syllabusTags: ["GS1", "Culture", "Architecture", "GS1", "History"],
    sources: [
      { title: "Angkor — UNESCO", url: "https://whc.unesco.org/en/list/668" },
      { title: "Angkor Wat — Wikipedia", url: "https://en.wikipedia.org/wiki/Angkor_Wat" },
    ],
  },
]
