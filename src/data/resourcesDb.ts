export interface EditorialItem {
  id: string;
  title: string;
  date: string;
  syllabusTag: string; // e.g. "GS Paper 2 (Polity)"
  source: string; // e.g. "The Hindu", "Indian Express"
  summary: string;
  content: string; // supports HTML or text
  takeaways: string[];
  image?: string; // base64 or placeholder
}

export interface BlogItem {
  id: string;
  title: string;
  date: string;
  category: string; // e.g. "Mental Prep", "Strategy", "UPSC Journey"
  author: string;
  readTime: string;
  summary: string;
  content: string; // supports HTML or text
  image?: string;
}

const SEED_EDITORIALS: EditorialItem[] = [
  {
    id: "editorial-1",
    title: "Sedition Law vs Freedom of Expression: Balancing Liberty and Security",
    date: "2026-08-01",
    syllabusTag: "GS Paper 2 (Polity & Governance)",
    source: "The Hindu",
    summary: "An analysis of Section 124A of the IPC in light of recent Law Commission reports and judicial reviews regarding individual liberties.",
    content: `<p>Section 124A of the Indian Penal Code (IPC), which criminalizes sedition, has remained one of the most controversial colonial-era legacies in modern Indian jurisprudence. While security agencies argue it is an essential safeguard against secessionist threats, civil rights groups highlight its potential for silencing political dissent.</p>
<h4>Core Constitutional Dilemma</h4>
<p>The primary clash lies between state security interests and the Fundamental Right to Freedom of Speech and Expression under <strong>Article 19(1)(a)</strong>, subject to reasonable restrictions under <strong>Article 19(2)</strong>. Historically, in the landmark <em>Kedarnath Singh v. State of Bihar (1962)</em> case, the Supreme Court upheld the validity of sedition but restricted its application only to acts involving intention or tendency to create disorder or incitement to violence.</p>
<h4>Key Recommendations and Concerns</h4>
<ul>
  <li><strong>Law Commission Report:</strong> The 22nd Law Commission recommended retaining Section 124A with modifications to procedural safeguards to prevent misuse.</li>
  <li><strong>Sedition in the New Penal Code:</strong> The Bhartiya Nyaya Sanhita (BNS) seeks to replace sedition with a broader term penalizing acts endangering sovereignty, unity, and integrity of India, creating a new debate on scope and definition.</li>
</ul>`,
    takeaways: [
      "Understand the application of Article 19(2) reasonable restrictions in mains answers.",
      "Cite Kedarnath (1962) and Shreya Singhal (2015) landmark judgments in GS2 constitution scripts.",
      "Balance national security demands against individual civil liberty claims."
    ]
  },
  {
    id: "editorial-2",
    title: "The DPDP Act: Strengthening India's Digital Sovereignty",
    date: "2026-07-30",
    syllabusTag: "GS Paper 3 (Science & Tech / Internal Security)",
    source: "Indian Express",
    summary: "Evaluating the implementation framework of the Digital Personal Data Protection (DPDP) Act and its impact on the data economy.",
    content: `<p>The enactment of the Digital Personal Data Protection (DPDP) Act marks a paradigm shift in how individual data is handled by businesses and state organs in India. Establishing a robust privacy framework is essential for both digital economy growth and protecting individual liberty.</p>
<h4>Three Pillars of the DPDP Framework</h4>
<p>The act rests on three main actors:</p>
<ol>
  <li><strong>Data Principal:</strong> The individual whose personal data is being processed (possessing rights to correction, erasure, and grievances).</li>
  <li><strong>Data Fiduciary:</strong> The entity determining the purpose and means of processing personal data, bound by strict consent requirements.</li>
  <li><strong>Data Protection Board (DPB):</strong> The adjudicating authority tasked with monitoring compliance and imposing financial penalties for breaches.</li>
</ol>
<h4>Aspirant Takeaway for GS Paper 3</h4>
<p>When writing answers on India's digital economy, integrate the balance between data monetization and user privacy. Address issues of state surveillance exemptions under the Act and evaluate how they compare with global standards like GDPR in Europe.</p>`,
    takeaways: [
      "Detail rights of Data Principals and responsibilities of Data Fiduciaries.",
      "Compare DPDP Act structural exemptions against EU General Data Protection Regulations (GDPR).",
      "Explain the impact of data localization rules on cross-border business models."
    ]
  }
];

const SEED_BLOGS: BlogItem[] = [
  {
    id: "blog-1",
    title: "The Psychology of the UPSC Attempt: Facing the Dread of Failure",
    date: "2026-08-01",
    category: "Mental Prep",
    author: "Oracle (Companion Team)",
    readTime: "6 Min Read",
    summary: "An honest letter to aspirants struggling with mock scores, isolation, and the looming fear of losing productive years to the preparation cycle.",
    content: `<p>Every evening, thousands of aspirants sit in tiny 8x8 foot cubicles across Delhi, Bengaluru, and Hyderabad, staring at a mountain of books. You have revised Laxmikanth three times, yet when a mock test throws a tricky statement about parliamentary committees, your score drops below 80. The fear creeps in—am I wasting my youth?</p>
<h4>Failure is a Research Environment</h4>
<p>In our years of mentoring ex-aspirants who lived the struggle, we realized that the primary differentiator of selection is not IQ—it is emotional regulation. A low score on a mock exam is not a verdict; it is diagnostic data. It is showing you exactly where the gaps in your approach lie.</p>
<h4>Actions to Reset Your Mental Framework:</h4>
<ul>
  <li><strong>Step away from comparative charts:</strong> What others score in standard commercial coaching mocks is irrelevant. Focus exclusively on your custom progress logs.</li>
  <li><strong>The 20-minute transition:</strong> When you hit severe brain fog, close the book. Step out of your room, take 5 deep breaths, and drink a glass of water. Transition your environment.</li>
  <li><strong>Speak to an anchor:</strong> Do not lock yourself in complete silence. Call a parent, a trusted friend, or reach our direct Companion Line. You are not alone in this saga.</li>
  <li><strong>Consult our interactive companion:</strong> Chat directly with our Companion chatbot for mental resilience templates and structured advice.</li>
</ul>`
  },
  {
    id: "blog-2",
    title: "Mastering GS Paper 4: How to Structure Case Studies for Maximum Marks",
    date: "2026-07-28",
    category: "Strategy",
    author: "Companion (Mentor Team)",
    readTime: "8 Min Read",
    summary: "A practical framework to tackle complex ethical dilemmas in GS4 by identifying stakeholders and evaluating options with administrative grit.",
    content: `<p>Case studies in GS Paper 4 contribute 120 marks—exactly half the paper. Yet, most aspirants write generic, theoretical answers that fail to impress the examiner. To score 110+, your case study answers must read like an administrator's decision log, not a philosophical thesis.</p>
<h4>The 4-Step Analytical Framework</h4>
<p>Every case study answer should be structured using this blueprint:</p>
<ol>
  <li><strong>Identify the Ethical Dilemma:</strong> Write a concise 2-line intro stating the core clash (e.g., Public Duty vs. Personal Integrity, Economic Development vs. Tribal Rights).</li>
  <li><strong>Stakeholder Mapping:</strong> Create a stakeholder matrix listing all affected parties (including silent stakeholders like public trust or future generations).</li>
  <li><strong>Evaluate Options:</strong> Present 3 potential options. For each option, clearly list pros and cons alongside the ethical values at stake. Avoid extreme options (e.g., resigning immediately or ignoring the corruption).</li>
  <li><strong>The Administrative Path:</strong> Choose the most balanced option. Support your choice with constitutional principles, administrative rules, and Gandhian philosophy.</li>
</ol>`
  }
];

const LOCAL_STORAGE_KEY_EDITORIALS = "approachestoias_editorials";
const LOCAL_STORAGE_KEY_BLOGS = "approachestoias_blogs";

export function getEditorials(): EditorialItem[] {
  try {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY_EDITORIALS);
    if (!stored) {
      localStorage.setItem(LOCAL_STORAGE_KEY_EDITORIALS, JSON.stringify(SEED_EDITORIALS));
      return SEED_EDITORIALS;
    }
    return JSON.parse(stored);
  } catch (e) {
    console.error("Error reading editorials database", e);
    return SEED_EDITORIALS;
  }
}

export function saveEditorial(item: Omit<EditorialItem, "id"> & { id?: string }): EditorialItem[] {
  const current = getEditorials();
  const newItem: EditorialItem = {
    ...item,
    id: item.id || `editorial-${Date.now()}`
  };
  
  // Check if item already exists to update it, else append
  const index = current.findIndex(x => x.id === newItem.id);
  if (index >= 0) {
    current[index] = newItem;
  } else {
    current.unshift(newItem); // add to top
  }
  
  localStorage.setItem(LOCAL_STORAGE_KEY_EDITORIALS, JSON.stringify(current));
  return current;
}

export function deleteEditorial(id: string): EditorialItem[] {
  const current = getEditorials();
  const filtered = current.filter(x => x.id !== id);
  localStorage.setItem(LOCAL_STORAGE_KEY_EDITORIALS, JSON.stringify(filtered));
  return filtered;
}

export function getBlogs(): BlogItem[] {
  try {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY_BLOGS);
    if (!stored) {
      localStorage.setItem(LOCAL_STORAGE_KEY_BLOGS, JSON.stringify(SEED_BLOGS));
      return SEED_BLOGS;
    }
    return JSON.parse(stored);
  } catch (e) {
    console.error("Error reading blogs database", e);
    return SEED_BLOGS;
  }
}

export function saveBlog(item: Omit<BlogItem, "id"> & { id?: string }): BlogItem[] {
  const current = getBlogs();
  const newItem: BlogItem = {
    ...item,
    id: item.id || `blog-${Date.now()}`
  };
  
  const index = current.findIndex(x => x.id === newItem.id);
  if (index >= 0) {
    current[index] = newItem;
  } else {
    current.unshift(newItem); // add to top
  }
  
  localStorage.setItem(LOCAL_STORAGE_KEY_BLOGS, JSON.stringify(current));
  return current;
}

export function deleteBlog(id: string): BlogItem[] {
  const current = getBlogs();
  const filtered = current.filter(x => x.id !== id);
  localStorage.setItem(LOCAL_STORAGE_KEY_BLOGS, JSON.stringify(filtered));
  return filtered;
}
