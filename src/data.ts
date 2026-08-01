import { TeamMember, SurvivalTrait } from "./types";

export const SURVIVAL_TRAITS: SurvivalTrait[] = [
  {
    id: "resilience",
    title: "Unrivaled Resilience",
    tagline: "The Test of Time",
    biologyFact: "Throughout history, human resilience has survived extreme epochs, ice ages, and civilizations' rise and fall. Psychological resilience can endure extreme levels of stress, remaining unbroken under pressure.",
    aspirantLesson: "UPSC preparation is a grueling saga of repeated failures, isolation, and mental exhaustion. True selection doesn't require genielike brilliance; it requires a mental toughness that refuses to die, regardless of how many times you fall short of the cut-off.",
    iconName: "ShieldCheck"
  },
  {
    id: "adaptability",
    title: "Deep Adaptability",
    tagline: "Pattern Agnosticism",
    biologyFact: "Adaptable biological systems possess exceptionally fluid structures, allowing them to rapidly adjust to environmental shifts within a single life cycle.",
    aspirantLesson: "The UPSC examiner will throw unexpected pattern changes, tricky current affairs questions, or completely revamp the CSAT paper. Do not build stiff, fragile study routines. Remain fluid. Adapt instantly to any shift in the terrain.",
    iconName: "Compass"
  },
  {
    id: "frugality",
    title: "Extreme Efficiency",
    tagline: "Resource Optimization",
    biologyFact: "A true survivor optimizes resource usage, functioning efficiently on minimal intake while maintaining peak cognitive focus in demanding conditions.",
    aspirantLesson: "Living in a congested 8x8 foot room, breathing humid air, and eating simple mess food is not a sign of your defeat. It is your active training in resourcefulness. He who can govern his desires in a tiny cubicle can govern a district with absolute integrity.",
    iconName: "Flame"
  },
  {
    id: "pressure-resistance",
    title: "Exoskeletal Elasticity",
    tagline: "Thriving Under Heavy Load",
    biologyFact: "Elastic materials can absorb immense load and distribute pressure across their structures, returning to their original shape undamaged.",
    aspirantLesson: "You are constantly crushed under the weight of family expectations, societal comparisons, and heavy syllabi. Instead of breaking under the weight, compress your fears, absorb the stress, slip through the cracks of adversity, and emerge undamaged.",
    iconName: "Award"
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Oracle (Survivor 1)",
    role: "Founder & CEO",
    bio: "Visionary behind the academys' student-first approach to UPSC preparation. An oracle in Ethics, Essay, and Mains Answer Writing, he is known for helping aspirants transform ideas into tech enabled impactful answers and develop the clarity, integrity, and analytical depth expected of future civil servants.",
    yearsOfStruggle: 6,
    specialization: "Ethics & Essay Oracle | Mains Answer Writing Coach"
  },
  {
    name: "Companion (Survivor 2)",
    role: "Managing Director",
    bio: "A trusted UPSC mentor known for simplifying Anthropology and mastering Prelims strategy. Beyond academics, she serves as a constant companion, emotional anchor, and unwavering supporter throughout the preparation journey. Her mission is to help aspirants build knowledge, confidence, resilience, and the determination needed for success.",
    yearsOfStruggle: 4,
    specialization: "Anthropology Expert | Prelims Wizard | Constant Companion"
  },
  {
    name: "Strategist (Survivor 3)",
    role: "Vice President",
    bio: "A dedicated UPSC mentor specializing in Political Science & International Relations (PSIR) and CSAT. Known for his approachable nature, patient listening, and long-term mentorship, he helps aspirants navigate challenges with clarity and confidence. His guidance combines academic excellence, strategic preparation, and genuine care for every student's growth.",
    yearsOfStruggle: 5,
    specialization: "PSIR Expert | CSAT Strategist | Smiling Mentor"
  },
  {
    name: "Architect (Survivor 4)",
    role: "CTO",
    bio: "A tech lead dedicated to engineering seamless learning workspaces and resilient cognitive tools. The Architect ensures that the platform delivers high-speed, interactive syllabus mapping and analytical workspaces for aspirants.",
    yearsOfStruggle: 3,
    specialization: "Tech Architecture | Platform Operations"
  },
  {
    name: "Custodian (Survivor 5)",
    role: "CFO and HR",
    bio: "Manages the academy's fiscal operations and builds supportive mentor networks. The Custodian ensures that our trial companion cohorts remain highly affordable while selecting top-tier, empathetic mentors for handholding.",
    yearsOfStruggle: 3,
    specialization: "Finance Operations | Talent Acquisition"
  }
];

export const CONTROVERSY_DETAILS = {
  quote: "The true test of a UPSC aspirant is not whether they ever fall, but whether they have the grit to rise repeatedly. Success is not about what you study—it is about your approach to the syllabus and your mental endurance.",
  source: "Approaches to IAS Founding Manifesto",
  analysis: "At Approaches to IAS, we choose to focus on the power of the right approach. Every aspirant is unique—whether a working professional, engineer, college student, doctor, rural aspirant, or homemaker. Each requires a tailored strategy, learning style, and roadmap. With the right approach, they survive every setback and return stronger.",
  ourStand: "Approaches to IAS is dedicated to the human capacity to persist when the world expects you to quit. We teach more than subjects—we shape your approach to thinking, writing, and administrative consistency."
};

export const SURVIVOR_QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "You have spent 8 hours in a dark, windowless study cubicle. The air-conditioning breaks, and the air becomes humid. What is your survival response?",
    options: [
      {
        text: "I pack my bag in frustration, tell myself I can't study under these conditions, and feel a wave of anxiety.",
        point: "Fragile State (We will help build your stamina step-by-step.)"
      },
      {
        text: "I step out to drink black water, take 5 deep breaths, compress my fatigue like a resilient exoskeleton, and move to a well-ventilated terrace to finish my daily targets.",
        point: "Survivor Class (Excellent adaptability! You possess real survivor instincts.)"
      },
      {
        text: "I ignore the physical heat completely, telling myself pain is an illusion, but end up with severe burnout and brain-fog the next day.",
        point: "Rigid State (Stiffness breaks. Remember, we must survive safely to serve the state.)"
      }
    ]
  },
  {
    id: 2,
    question: "UPSC changes the Prelims pattern completely, removing standard historical chronology MCQs and replacing them with complex philosophical linkages. How do you respond?",
    options: [
      {
        text: "I go online, read 5 articles criticizing the Commission, and join the fear-mongering forums.",
        point: "Reacting State (Draining your fuel. Power comes from focus, not worry.)"
      },
      {
        text: "I accept that the change is identical for all 10 Lakh aspirants, scrap my rigid study logs, adapt my syllabus linkages, and master the new game of critical thinking.",
        point: "Adaptable Survivor (Brilliant! You adapt to the new temperature in seconds.)"
      },
      {
        text: "I rely on the same notes and short-cuts, hoping that this year was just an anomaly.",
        point: "Inertial State (Inertia is dangerous in a dynamic exam. Let us help you shift gears.)"
      }
    ]
  },
  {
    id: 3,
    question: "You check your mock test results. You scored 68, while the average classmate scored 110. Your heart sinks. What is the immediate survival philosophy?",
    options: [
      {
        text: "My score doesn't define my final rank. A mock test is a research environment, not a court of final verdict. I will dissect each of my 32 incorrect answers with a calm head.",
        point: "Indestructible Mindset (Superb. This deep wisdom is what transforms students into administrators.)"
      },
      {
        text: "I spiral into self-doubt, thinking I shouldn't have named Approaches to IAS my home, and waste the entire evening browsing success stories.",
        point: "Vulnerable State (Let us hold your hands. This is why we are here—to catch you when you fall.)"
      },
      {
        text: "I burn the result sheet, pretend it never happened, and continue reading more books without correcting my structural errors.",
        point: "Avoidant State (Avoidance prolongs the struggle. Face the errors; they are your actual targets.)"
      }
    ]
  }
];
