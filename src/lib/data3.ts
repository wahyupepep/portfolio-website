export const profile = {
  name: "Wahyu Febriyanto Utomo",
  initials: "WF",
  role: "System Analyst",
  tagline: "Business Process & Product Thinking · AI Automation Enthusiast",
  email: "wahyufebriyantoutomo@gmail.com",
  location: "Semarang, Central Java · Open to remote / relocation",
  availability: "Open to Product Owner / Technical PM roles",
  resumeUrl: "/resume.pdf", // TODO: export your CV docx as PDF and place it at /public/resume.pdf
  social: {
    linkedin: "https://linkedin.com/in/wahyufebri",
    github: "https://github.com/wahyupepep",
    email: "mailto:wahyufebriyantoutomo@gmail.com",
  },
};

export const heroHeadline = {
  line1: "Turning business problems",
  line2: "into systems worth building.",
  sub: "System Analyst · Business Process & Product Thinking · AI Automation Enthusiast",
};

export const rotatingExpertise = [
  "Business Process Analysis",
  "Requirement Gathering & Documentation",
  "Feature Prioritization & Roadmapping",
  "HRIS & Enterprise Systems",
  "AI Automation (learning)",
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Journey", href: "#journey" },
  { label: "Thinking", href: "#product-thinking" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "AI Lab", href: "#ai-lab" },
  { label: "Contact", href: "#contact" },
];

export const aboutStory = [
  {
    id: "start",
    kicker: "Where it started",
    title: "Understanding how businesses actually work",
    body: "I started my career close to the business side, talking to stakeholders, mapping processes, and learning that every system exists to serve a workflow that already runs on people, not just software.",
  },
  {
    id: "realization",
    kicker: "The turning point",
    title: "Requirements aren't the job. Solving the problem is.",
    body: "At PT Apparel One Indonesia, I spent years digitalizing manual factory processes like fabric tracking, QC digitalization, production data control, also real-time operational dashboards. I learned that a thorough specification isn't success if the business problem underneath it never gets solved.",
  },
  {
    id: "now",
    kicker: "Where I'm headed",
    title: "From analysis to product ownership",
    body: "At JMC Indonesia, my role has started shifting from analyzing what's needed to deciding what to build and why it is necessary. Currently shaping the roadmap for the company's first subscription-based HRIS product, while building hands-on AI automation skills on the side.",
  },
];

export const currentInterests = [
  "Product Thinking",
  "Feature Prioritization",
  "HRIS & Enterprise Systems",
  "AI Automation (n8n)",
  "Business Process Digitalization",
];

export type JourneyStage = {
  id: string;
  stage: string;
  title: string;
  period: string;
  summary: string;
  responsibilities: string[];
  businessProblems: string[];
  achievements: string[];
  technologies: string[];
  lessons: string;
};

export const journeyStages: JourneyStage[] = [
  {
    id: "business-development-impala",
    stage: "01",
    title: "Business Development Intern",
    period: "Oct 2021 - Jan 2022",
    summary:
      "A short internship in the creative industry | not related to my current field, but it's where I first dealt directly with clients: researching prospects, pitching, following up, helping put proposals together.",
    responsibilities: [
      "Researched potential clients and partners",
      "Communicated directly with clients, including pitching and follow-up",
      "Helped prepare proposals and presentation materials for client meetings",
    ],
    businessProblems: [
      "Finding and engaging the right potential clients/partners for a creative agency",
    ],
    achievements: [
      "Got comfortable talking to clients directly and turning what they wanted into an actual proposal",
    ],
    technologies: ["Client Communication", "Proposal Support", "Research"],
    lessons:
      "It's a bit of a detour from what I do now, but the client-facing part stuck with me. Figuring out what a client actually wants versus what they say they want turned out to be useful later, even in a completely different field.",
  },
  {
    id: "it-support",
    stage: "02",
    title: "IT Support",
    period: "Feb 2021 — Apr 2021",
    summary:
      "My first real IT role. Mostly hands-on | setting up systems, fixing whatever broke during events, general troubleshooting.",
    responsibilities: [
      "Provided technical support for organizational events and system installations",
      "Assisted in troubleshooting hardware and software issues during deployment",
      "Supported day-to-day IT operational needs",
    ],
    businessProblems: [
      "Ad-hoc technical issues during live events and system rollouts that needed fast, reliable troubleshooting",
    ],
    achievements: [
      "Got a practical, on-the-ground sense of how systems actually get deployed and supported, before I moved into analysis work",
    ],
    technologies: ["Hardware Troubleshooting", "IT Operations Support"],
    lessons:
      "Two months of fixing things people complained about taught me something I still use: if a system is confusing to support, it was probably designed wrong in the first place, not just used wrong.",
  },
  {
    id: "system-analyst-apparel-one",
    stage: "03",
    title: "System Analyst",
    period: "Oct 2022 — Apr 2025",
    summary:
      "Almost three years doing full business process analysis for a garment factory. Fabric tracking, production data, documentation standards used across the whole company | this is where most of my hands-on experience comes from.",
    responsibilities: [
      "Identified operational process gaps through structured AS-IS / TO-BE workflow analysis",
      "Authored BRD, FSD, process flows, and SOPs adopted as the formal reference across 5+ departments",
      "Directed QA and User Acceptance Testing (UAT) phases before factory-wide rollout",
      "Monitored project timelines and coordinated directly with shop-floor teams",
    ],
    businessProblems: [
      "Manual, low-visibility fabric tracking through the cutting process (CDMS)",
      "Manual, error-prone production data handling (PDC)",
      "No real-time visibility into production output for stakeholders",
    ],
    achievements: [
      "Led requirement gathering, process design, and testing for CDMS (Cutting Distribution Management System), digitalizing manual fabric tracking",
      "Led the same end-to-end process for PDC (Production Data Control)",
      "Designed the visualization and validated the data for a real-time operational dashboard used by stakeholders to track production output at a glance",
    ],
    technologies: ["PostgreSQL", "BRD / FSD Documentation", "Process Mapping (AS-IS/TO-BE)", "UAT & QA"],
    lessons:
      "I didn't track most of this in formal metrics, which I used to think was a gap in my work. Looking back, the more useful skill was probably knowing which processes actually needed fixing versus which ones just felt inefficient.",
  },
  {
    id: "freelance-mega-jati",
    stage: "04",
    title: "Business Process Analyst (Freelance)",
    period: "Apr 2025 — Oct 2025",
    summary:
      "Took on a freelance project alongside my main job | looking at a furniture retailer's manual processes and sketching out how they could digitalize.",
    responsibilities: [
      "Analyzed existing manual business processes end-to-end",
      "Designed a digitalization blueprint to guide the company's transition to system-based operations",
    ],
    businessProblems: [
      "Business operations running entirely on manual, undocumented processes with no digitalization roadmap",
    ],
    achievements: [
      "Delivered a digitalization blueprint the business could use to plan its transition to digital operations",
    ],
    technologies: ["Business Process Mapping", "Stakeholder Interviews"],
    lessons:
      "No team to lean on this time, just me and the client. Made me realize how much of my usual process depends on having other people to sanity-check ideas with.",
  },
  {
    id: "jmc-rnd",
    stage: "05",
    title: "Middle R&D System Analyst",
    period: "Feb 2026 — Present",
    summary:
      "Where I'm at now. Started as more analysis work, but I've been pulled more into deciding what gets built, not just documenting it | currently shaping the roadmap for our first subscription HRIS product.",
    responsibilities: [
      "Designed and managed the product roadmap for a new subscription-based HRIS product, from concept through feature prioritization",
      "Architected and delivered a custom HRIS implementation for an enterprise client, independently mapping complex leave and permission logic",
      "Conducted technical feasibility research on an AI-powered CV screening feature for a new ATS",
      "Partnered with developers and business analysts to translate business requirements into system solutions",
    ],
    businessProblems: [
      "No existing product definition or feature roadmap for turning HRIS into a repeatable, sellable product",
      "Complex leave/permission exceptions that didn't fit a standard HRIS template",
      "AI-based CV screening approach was ruled out by budget constraints, requiring a redesigned solution",
    ],
    achievements: [
      "Produced the company's first structured roadmap for a productized (SaaS) HRIS offering — this project is ongoing",
      "Delivered a complete, implementable specification for a client's complex leave/permission system",
      "Redesigned the AI-screening proposal into a rule-based system that still met the product's core recruitment-automation goal after budget constraints ruled out the AI approach",
    ],
    technologies: ["Feature Prioritization", "Roadmap Planning", "AI Feasibility Research", "PostgreSQL"],
    lessons:
      "The AI screening idea got rejected over budget, which was frustrating at first. Ended up building the rule-based version instead. It still worked. Turns out the AI part wasn't actually the point, but solving the screening problem was.",
  },
];

export type ProductThinkingStep = {
  id: string;
  title: string;
  description: string;
};

export const productThinkingSteps: ProductThinkingStep[] = [
  {
    id: "understand",
    title: "Understand the real problem",
    description:
      "Talk to stakeholders and map the AS-IS process before proposing anything, including the workarounds nobody documented.",
  },
  {
    id: "define",
    title: "Define what's worth building",
    description:
      "Prioritize features and scope the smallest version that addresses the actual problem, not the whole wish list.",
  },
  {
    id: "specify",
    title: "Design & specify the solution",
    description:
      "Turn decisions into system-ready specs, such as flows, BRD/FSD, and logic developers can build from without ambiguity.",
  },
  {
    id: "validate",
    title: "Validate against reality",
    description:
      "Test with real scenarios and adapt when constraints like budget or timeline push back on the ideal solution.",
  },
];

export type SkillCategory = {
  id: string;
  title: string;
  accent: "electric" | "cyan" | "emerald" | "purple" | "orange";
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "business-product-analysis",
    title: "Business & Product Analysis",
    accent: "electric",
    skills: [
      "Business Process Mapping (AS-IS/TO-BE)",
      "Requirement Gathering & Documentation (BRD, FSD)",
      "Feature Prioritization & Roadmap Planning",
      "AI Feasibility Research",
      "SOP Development",
      "QA & UAT",
    ],
  },
  {
    id: "technical",
    title: "Technical",
    accent: "emerald",
    skills: ["PostgreSQL & Database Management", "System Integration", "Automation Testing", "CMS Management"],
  },
  {
    id: "ai-automation",
    title: "AI & Automation — Currently Learning",
    accent: "cyan",
    skills: ["n8n (in progress)", "AI/LLM Feasibility Research", "Prompt Engineering (exploring)"],
  },
  {
    id: "soft-skills",
    title: "Soft Skills",
    accent: "purple",
    skills: [
      "Analytical & Structured Problem Solving",
      "Cross-functional Collaboration",
      "Stakeholder Communication",
      "Detail-Oriented Execution",
    ],
  },
];

export type Project = {
  id: string;
  title: string;
  tagline: string;
  categories: string[];
  businessProblem: string;
  context: string;
  solution: string;
  impact: string[];
  technologies: string[];
  github?: string;
  demo?: string;
};

export const projectFilters = ["All", "Product", "HRIS", "Manufacturing", "Analysis"];

export const projects: Project[] = [
  {
    id: "hris-subscription-roadmap",
    title: "Subscription-Based HRIS Product Roadmap",
    tagline: "Defining the company's first productized HRIS, from zero to a prioritized feature roadmap",
    categories: ["Product", "HRIS"],
    businessProblem:
      "JMC had only built custom, one-off HRIS systems for individual clients. Leadership wanted to explore a repeatable, sellable subscription product — but there was no product definition, target user profile, or roadmap.",
    context:
      "Working as the R&D System Analyst at JMC Indonesia, tasked with translating scattered internal ideas and market observations into a structured product plan.",
    solution:
      "Gathered input on common HR pain points across the client base already served, mapped them into a prioritized feature list separating MVP must-haves from later additions, and sanity-checked feasibility with developers before finalizing scope.",
    impact: [
      "Produced the company's first structured roadmap for a productized HRIS offering",
      "Shifted internal conversation from 'build whatever the client asks' to 'build a product with defined scope' — this project is ongoing",
    ],
    technologies: ["Feature Prioritization", "Roadmap Planning", "Stakeholder Interviews"],
    github: undefined,
    demo: undefined,
  },
  {
    id: "hris-client-leave-logic",
    title: "Custom HRIS — Complex Leave & Permission Logic",
    tagline: "Mapping a client's real-world approval exceptions into a clean, implementable system spec",
    categories: ["HRIS", "Analysis"],
    businessProblem:
      "The client's leave and permission approval process had many exceptions by employee level, department, and leave type — too complex for a standard HRIS template.",
    context: "Enterprise client implementation at JMC Indonesia. Sole analyst responsible for the requirement end-to-end.",
    solution:
      "Interviewed HR stakeholders to extract every exception case, mapped the full decision logic as flowcharts, and validated it with HR before handoff to development.",
    impact: [
      "Delivered a complete, implementable specification that handled the client's real complexity",
      "Avoided the common failure of a system that demos well but breaks on edge cases in production",
    ],
    technologies: ["BRD / FSD", "Process Flow Design", "PostgreSQL"],
    github: undefined,
    demo: undefined,
  },
  {
    id: "cdms",
    title: "CDMS — Cutting Distribution Management System",
    tagline: "Digitalizing manual, low-visibility fabric tracking on the factory cutting floor",
    categories: ["Manufacturing", "Analysis"],
    businessProblem:
      "Fabric tracking through the cutting process was manual, with limited visibility into where batches were at any given time — creating room for errors.",
    context: "System Analyst role at PT Apparel One Indonesia, garment manufacturing.",
    solution:
      "Mapped the manual workflow to find where visibility broke down, designed a more detailed and traceable digital process, and tested it against real cutting-floor conditions before rollout.",
    impact: [
      "Replaced a manual, low-visibility process with clearer, more detailed digital traceability",
      "Impact was tracked qualitatively (fewer blind spots), not through a formal metric",
    ],
    technologies: ["Requirement Gathering", "Process Design", "System Testing"],
    github: undefined,
    demo: undefined,
  },
  {
    id: "pdc",
    title: "PDC — Production Data Control",
    tagline: "Structuring a previously manual production data process",
    categories: ["Manufacturing", "Analysis"],
    businessProblem:
      "Production data was handled manually, limiting accuracy and visibility into production status.",
    context: "System Analyst role at PT Apparel One Indonesia, working alongside the CDMS initiative.",
    solution:
      "Analyzed how production data was captured and where manual handling introduced delay or error, then designed and tested a more structured, digitized capture process.",
    impact: [
      "Digitized a previously manual process, improving structure and reducing manual handling",
      "Impact was tracked qualitatively, not through a formal metric",
    ],
    technologies: ["Requirement Gathering", "Process Design", "System Testing"],
    github: undefined,
    demo: undefined,
  },
  {
    id: "ops-dashboard",
    title: "Real-Time Operational Dashboard",
    tagline: "Giving stakeholders an at-a-glance view of production output, replacing manual reports",
    categories: ["Manufacturing", "Product"],
    businessProblem:
      "Production output data existed but wasn't visible in a fast, intuitive way — stakeholders had to dig through reports instead of seeing status at a glance.",
    context: "System Analyst role at PT Apparel One Indonesia.",
    solution:
      "Designed the visual layout to prioritize the metrics that mattered most, balancing information density with readability, then tested and validated the real-time data against the source before go-live.",
    impact: [
      "Gave stakeholders a real-time, at-a-glance view of production output",
      "Removed the need to manually check reports for current status",
    ],
    technologies: ["Data Visualization Design", "Data Validation", "Stakeholder Requirements"],
    github: undefined,
    demo: undefined,
  },
];

export type AILabProject = {
  id: string;
  title: string;
  description: string;
  workflow: string[];
  benefits: string[];
};

// Intentionally empty — no automation project is finished yet.
// Fill this in once your first real n8n automation is built and tested.
// Do not add placeholder/fictional projects here; an empty array is safer
// for this section than content that can't hold up if someone asks about it.
export const aiLabProjects: AILabProject[] = [];

export const learningRoadmap = {
  currentFocus: [
    "Product thinking (prioritization frameworks like RICE/MoSCoW)",
    "n8n & AI automation basics",
    "Writing clear product requirements",
  ],
  futureVision: ["Product Owner", "Technical Product Manager"],
};

export const contactPrompts = [
  "Let's Build Better Products Together.",
  "Let's Talk About Your Next Product Hire.",
];
