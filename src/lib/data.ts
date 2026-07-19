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
    body: "I started my career close to the business side — talking to stakeholders, mapping processes, and learning that every system exists to serve a workflow that already runs on people, not just software.",
  },
  {
    id: "realization",
    kicker: "The turning point",
    title: "Requirements aren't the job. Solving the problem is.",
    body: "At PT Apparel One Indonesia, I spent years digitalizing manual factory processes — fabric tracking, production data, real-time dashboards. I learned that a thorough specification isn't success if the business problem underneath it never gets solved.",
  },
  {
    id: "now",
    kicker: "Where I'm headed",
    title: "From analysis to product ownership",
    body: "At JMC Indonesia, my role has started shifting from analyzing what's needed to deciding what to build and why — currently shaping the roadmap for the company's first subscription-based HRIS product, while shipping my first AI automation project on the side (an AI-powered Telegram bookkeeping bot, built with n8n).",
  },
];

export const currentInterests = [
  "Product Thinking",
  "Feature Prioritization",
  "HRIS & Enterprise Systems",
  "AI Automation (n8n)",
  "Business Process Digitalization",
];

export const siteNote =
  "A small note on this site: I directed its content and structure through AI-assisted development rather than writing every line by hand — the same shift from analysis to decision-making described above, just applied to a personal project.";

export type JourneyStage = {
  id: string;
  stage: string;
  title: string;
  company: string;
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
    company: "Impala",
    period: "Oct 2021 — Jan 2022",
    summary:
      "A short internship in the creative industry — not related to my current field, but it's where I first dealt directly with clients: researching prospects, pitching, following up, helping put proposals together.",
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
    company: "DISNAKERTRANS (Central Java)",
    period: "Feb 2021 — Apr 2021",
    summary:
      "My first real IT role. Mostly hands-on — setting up systems, fixing whatever broke during events, general troubleshooting.",
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
    company: "PT Apparel One Indonesia",
    period: "Oct 2022 — Apr 2025",
    summary:
      "Almost three years doing full business process analysis for a garment factory. Fabric tracking, production data, documentation standards used across the whole company — this is where most of my hands-on experience comes from.",
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
    company: "Mega Jati Furniture & Deco",
    period: "Apr 2025 — Oct 2025",
    summary:
      "Took on a freelance project alongside my main job — looking at a furniture retailer's manual processes and sketching out how they could digitalize.",
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
    company: "JMC Indonesia",
    period: "Feb 2026 — Present",
    summary:
      "Where I'm at now. Started as more analysis work, but I've been pulled more into deciding what gets built, not just documenting it — currently shaping the roadmap for our first subscription HRIS product.",
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
      "The AI screening idea got rejected over budget, which was frustrating at first. Ended up building the rule-based version instead. It still worked. Turns out the AI part wasn't actually the point — solving the screening problem was.",
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
      "Talk to stakeholders and map the AS-IS process before proposing anything — including the workarounds nobody documented.",
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
      "Turn decisions into system-ready specs — flows, BRD/FSD, and logic developers can build from without ambiguity.",
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
    title: "AI & Automation",
    accent: "cyan",
    skills: ["n8n Workflow Automation", "AI/LLM Feasibility Research", "Vision API Integration (Gemini)", "Prompt Engineering"],
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
      "The company I worked for had only ever built custom, one-off HRIS systems for individual clients. Leadership wanted to explore turning it into a repeatable, sellable subscription product — but there was no competitor benchmark, feature definition, or roadmap yet.",
    context:
      "R&D System Analyst role at a growing enterprise software company, tasked with turning a vague 'let's productize this' idea into something the team could actually build.",
    solution:
      "Started by curating a list of direct competitors and analyzing them feature-by-feature and structure-by-structure — what they included, how they organized it, where they were weak. Used that to curate our own menu/feature set, then went through what the business actually needed versus where there was real room to do better than what competitors offered. That analysis fed into the FSD, which then went into development and testing.",
    impact: [
      "Produced the company's first structured roadmap for a productized HRIS offering, grounded in competitor analysis instead of guesswork",
      "This project is ongoing — currently in development based on the FSD",
    ],
    technologies: ["Competitor Analysis", "Feature Prioritization", "FSD"],
    github: undefined,
    demo: undefined,
  },
  {
    id: "hris-government-edp",
    title: "Phased HRIS Rollout for a Government Client",
    tagline: "Getting employee master data right first, before building attendance, payroll, and SSO on top of it",
    categories: ["HRIS", "Analysis"],
    businessProblem:
      "The client's employee data and HR processes were entirely manual and scattered across different sources — no single reliable place to treat as the source of truth.",
    context:
      "Custom HRIS implementation for a government institution client, at an enterprise software company. Sole analyst on the requirement side.",
    solution:
      "Split the build into phases instead of trying to do everything at once. Phase 1 is EDP — Employee Data Processing — just getting employee data stored and mastered properly as the core source of truth for everything else. That part alone took real work to standardize, since the data and business processes underneath it were more complex and inconsistent than expected. Attendance is planned for phase 2, payroll for phase 3, then tying the whole thing together with SSO across the client's other systems after that.",
    impact: [
      "Phase 1 (EDP) is currently in its launch stage",
      "Turned a genuinely messy, inconsistent dataset into a structure the rest of the roadmap can actually be built on",
    ],
    technologies: ["Data Modeling", "Process Standardization", "BRD / FSD", "Phased Rollout Planning"],
    github: undefined,
    demo: undefined,
  },
  {
    id: "cdms",
    title: "CDMS — Cutting Distribution Management System",
    tagline: "The most complex system I've worked on — digitalizing fabric flow across cutting, distribution, and half a dozen departments",
    categories: ["Manufacturing", "Analysis"],
    businessProblem:
      "Fabric tracking from warehouse handoff through cutting and into finished panels was entirely manual, and the process touched nearly every department on the floor — cutting, distribution, quality control, production planning, industrial engineering, and more. Each department needed the system to actually fit how they worked, not a one-size-fits-all flow.",
    context:
      "System Analyst role at a garment manufacturing company. This was the most complex system I worked on there — it eventually needed to integrate with cutting machines and pattern-making machines on the floor, not just software.",
    solution:
      "Digitalized the flow starting from fabric handoff at the warehouse, through spreading, cutting, panel inspection, and bundling, up to distribution to the sewing stations (which then fed into a separate system for tracking sewing output). Because so many departments touched this one process, requirements had to be gathered and reconciled across all of them, not just documented from one team's point of view. The bigger challenge was standardization — different factory branches ran the same process differently, so a good part of this project was recurring meetings to align everyone on one standard flow that still worked for each branch's specific conditions.",
    impact: [
      "Digitalized a genuinely complex, multi-department manual process end-to-end, from warehouse handoff to sewing distribution",
      "Impact wasn't tracked in a formal metric — the honest measure is that it became the most complex system on the floor, spanning machine integration and cross-branch standardization",
    ],
    technologies: ["Cross-departmental Requirement Gathering", "Process Standardization", "System Integration", "Process Design"],
    github: undefined,
    demo: undefined,
  },
  {
    id: "pdc",
    title: "PDC — Production Data Control",
    tagline: "Real-time output capture across loading, sewing, QC, and folding — built on a shared standardized foundation",
    categories: ["Manufacturing", "Analysis"],
    businessProblem:
      "Production output data — loading, sewing, QC, folding — was captured inconsistently across each stage, with no shared standard. The formulas and parameters behind the numbers were defined by the Industrial Engineering team and varied process by process, which made a single unified system genuinely hard to design.",
    context:
      "System Analyst role at a garment manufacturing company, running alongside the fabric-tracking initiative. This system ended up with more moving parts than any other project I've worked on — a dozen-plus modules cascading from one shared foundation, plus integration with hanger-line equipment on the floor.",
    solution:
      "Started by standardizing master data as the foundation everything else would build on, since nothing downstream could be consistent if the base data wasn't. From there, modules were rolled out one at a time — loading, sewing, QC inline, QC endline, folding, and several more specialized ones — each needing its own parameter standardization before development. My part across almost every module was the same two things: designing the UI/UX so operators could capture output in real time without slowing the line down, and running the testing/trial phase before each module went live.",
    impact: [
      "Helped standardize and roll out real-time output capture across the full production line, from loading through to folding",
      "Impact wasn't tracked in a formal metric — the honest measure was the sheer number of departments and process variations this ended up covering",
    ],
    technologies: ["Master Data Standardization", "UI/UX Design", "Cross-Module Testing", "IE Formula Integration"],
    github: undefined,
    demo: undefined,
  },
  {
    id: "ops-dashboard",
    title: "Real-Time Operational Dashboard",
    tagline: "Monitors on every department floor, pulling live data from five different systems into one readable view",
    categories: ["Manufacturing", "Product"],
    businessProblem:
      "Each department already had its own system generating data — warehouse management, material readiness, cutting distribution, production data control, finished goods — but that data lived in five separate places. Nobody on the floor had a single, fast view of what was happening right now.",
    context:
      "System Analyst role at a garment manufacturing company. This dashboard pulled from the other systems I'd already built (CDMS, PDC) plus warehouse, material readiness, and finished-goods systems, and got placed on monitors in each department.",
    solution:
      "The real design problem wasn't technical, it was visual: take genuinely complex, multi-system data and make it simple enough to read at a glance on a floor monitor, without losing the detail that mattered. It had to support two different jobs at once — daily monitoring for people just checking status, and fast anomaly detection for people who needed to know something was wrong immediately so they could go check it on the floor. I designed the layout to prioritize whatever would help someone make a good decision fast, not just whatever data was available.",
    impact: [
      "Gave every department a live, at-a-glance view of production status instead of five separate systems to check manually",
      "Built to support faster anomaly detection — spotting a problem on the dashboard first, then verifying it on the floor",
    ],
    technologies: ["Data Visualization Design", "Multi-System Data Integration", "Anomaly Detection Design"],
    github: undefined,
    demo: undefined,
  },
];

export type AILabProject = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  workflow: string[];
  workflowImage?: string;
  benefits: string[];
  logo?: string;
  github?: string;
};

export const aiLabProjects: AILabProject[] = [
  {
    id: "nominala-bookkeeping-bot",
    title: "Nominala",
    tagline: "An AI Telegram bot that logs a business expense from a single photo of the receipt.",
    description:
      "A Telegram bot that turns expense tracking into one action — photograph a receipt — using Gemini Vision to read the amount and date, then guiding the user through categorization via chat. The hardest part wasn't the AI call itself; it was building real multi-step conversation state on top of n8n's stateless execution model, and debugging failure points like binary data handling and OAuth scopes that silently went stale.",
    workflow: [
      "User photographs a receipt in Telegram",
      "Gemini Vision extracts the date and total amount automatically",
      "Bot confirms the details and walks the user through category and notes via inline buttons — no typing needed",
      "Data is saved to Google Sheets, which also works as editable master data for categories",
      "Whitelisted admins can generate on-demand Excel reports by month or year, delivered back in the chat",
    ],
    workflowImage: "/nominala-workflow.svg",
    benefits: [
      "Expense entry drops to a single action instead of manual data entry",
      "Categories can be edited directly in a spreadsheet — no redeployment needed",
      "On-demand financial reporting without leaving the chat interface",
    ],
    logo: "/nominala-icon.png",
    github: "https://github.com/wahyupepep/nominala-telegram-bot",
  },
];

export const learningRoadmap = {
  currentFocus: [
    "Product thinking (prioritization frameworks like RICE/MoSCoW)",
    "Deeper n8n workflows (state management, multi-step conversations)",
    "Writing clear product requirements",
  ],
  futureVision: ["Product Owner", "Technical Product Manager"],
};

export const contactPrompts = [
  "Let's Build Better Products Together.",
  "Let's Talk About Your Next Product Hire.",
];
