export const profile = {
  name: "Wahyu Febriyanto Utomo",
  initials: "WF",
  role: "System Analyst → Future Product Owner",
  tagline: "AI Automation Enthusiast",
  email: "wahyufebriyantoutomo@gmail.com",
  location: "Indonesia · Open to remote",
  availability: "Open to Product & AI Automation roles",
  resumeUrl: "/resume.pdf",
  social: {
    linkedin: "https://linkedin.com/in/your-handle",
    github: "https://github.com/your-handle",
    email: "mailto:wahyufebriyantoutomo@gmail.com",
  },
};

export const heroHeadline = {
  line1: "Building Products Where",
  line2: "Business Meets AI.",
  sub: "System Analyst · Future Product Owner · AI Automation Enthusiast",
};

export const rotatingExpertise = [
  "Business Process Analysis",
  "Product Discovery",
  "Product Strategy",
  "AI Automation",
  "Digital Transformation",
  "Requirements Engineering",
  "User Experience Thinking",
  "Product Management",
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
    body: "Writing a thorough specification isn't success if the business problem underneath it never gets solved. I started treating every analysis as the first step of a product decision, not the last step of a documentation task.",
  },
  {
    id: "now",
    kicker: "Where I'm headed",
    title: "Product ownership, powered by automation",
    body: "Today I'm transitioning from System Analyst toward Product Ownership, while going deep on AI automation — using agents, workflows, and LLMs to redesign how business processes run, not just document them.",
  },
];

export const currentInterests = [
  "Product Management",
  "AI Agents",
  "Workflow Automation",
  "Business Analysis",
  "Product Strategy",
  "Digital Transformation",
  "UX Thinking",
  "Product Discovery",
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
    id: "business-development",
    stage: "01",
    title: "Business Development",
    period: "[Start year] — [End year]",
    summary:
      "Learned how revenue, clients, and business goals actually connect — the foundation for understanding what software is supposed to serve.",
    responsibilities: [
      "Identified business opportunities and client needs",
      "Communicated directly with stakeholders and partners",
      "Translated business goals into actionable initiatives",
    ],
    businessProblems: [
      "[Add a specific business challenge you tackled in this role]",
    ],
    achievements: ["[Add a measurable outcome or recognition from this role]"],
    technologies: ["CRM Tools", "Presentation & Reporting", "Stakeholder Communication"],
    lessons:
      "Every system requirement traces back to a business goal — this is where I learned to ask 'why' before 'how'.",
  },
  {
    id: "cms-administrator",
    stage: "02",
    title: "CMS Administrator",
    period: "[Start year] — [End year]",
    summary:
      "Moved closer to the systems side, managing content platforms and learning the operational realities of running digital products day to day.",
    responsibilities: [
      "Managed and maintained CMS platforms",
      "Coordinated content workflows across teams",
      "Monitored data quality and platform reliability",
    ],
    businessProblems: [
      "[Add a specific operational bottleneck you resolved]",
    ],
    achievements: ["[Add a measurable improvement, e.g. reduced turnaround time]"],
    technologies: ["WordPress", "CMS Workflows", "SQL", "Basic Automation Scripts"],
    lessons:
      "Small operational inefficiencies compound — this is where automation thinking started.",
  },
  {
    id: "system-analyst",
    stage: "03",
    title: "System Analyst",
    period: "[Start year] — [End year]",
    summary:
      "Took full ownership of requirements engineering — bridging business stakeholders and engineering teams to design systems that actually get used.",
    responsibilities: [
      "Gathered and documented functional requirements",
      "Performed business process and GAP analysis",
      "Designed ERDs, system flows, and functional specifications",
      "Facilitated stakeholder workshops and UAT sessions",
    ],
    businessProblems: [
      "[Add a business problem you diagnosed through analysis]",
    ],
    achievements: [
      "[Add a delivery outcome — e.g. systems shipped, adoption improvements]",
    ],
    technologies: ["BPMN", "SQL", "REST API", "ERD", "Figma", "Jira"],
    lessons:
      "Good analysis prevents the wrong product from ever being built — that's leverage, not paperwork.",
  },
  {
    id: "middle-system-analyst",
    stage: "04",
    title: "Middle System Analyst (R&D)",
    period: "[Start year] — [Present]",
    summary:
      "Operating at the R&D edge — exploring how AI and automation can redesign existing business processes rather than just digitize them.",
    responsibilities: [
      "Led discovery for R&D initiatives across business units",
      "Prototyped AI-assisted workflows and automation pipelines",
      "Partnered with engineering on system architecture decisions",
      "Owned end-to-end analysis from problem framing to solution validation",
    ],
    businessProblems: [
      "[Add an R&D problem statement — e.g. manual process ready for automation]",
    ],
    achievements: [
      "[Add an outcome — e.g. hours saved, process automated end-to-end]",
    ],
    technologies: ["n8n", "LLM APIs", "Prompt Engineering", "SQL", "API Integration"],
    lessons:
      "AI doesn't replace analysis — it multiplies the value of good analysis by making solutions actionable immediately.",
  },
  {
    id: "product-owner",
    stage: "05",
    title: "Future Product Owner",
    period: "Next chapter",
    summary:
      "Bringing systems thinking and business analysis into product ownership — where I can own outcomes, not just documentation.",
    responsibilities: [
      "Own product discovery and roadmap prioritization",
      "Translate business strategy into a validated backlog",
      "Partner with design and engineering on shippable increments",
    ],
    businessProblems: ["Turning proven analysis skills into product outcomes"],
    achievements: ["In progress — this is the chapter I'm building toward"],
    technologies: ["Product Discovery", "Roadmapping", "Agile / Scrum", "Product Metrics"],
    lessons:
      "The best product owners still think like analysts — grounded in the business problem, not just the backlog.",
  },
];

export type ProductThinkingStep = {
  id: string;
  title: string;
  description: string;
};

export const productThinkingSteps: ProductThinkingStep[] = [
  {
    id: "discovery",
    title: "Product Discovery",
    description:
      "Start with the problem, not the solution. Talk to users and stakeholders before opening a design tool.",
  },
  {
    id: "journey",
    title: "User Journey Mapping",
    description:
      "Map how people actually move through a process today, including the workarounds nobody documented.",
  },
  {
    id: "validation",
    title: "Problem Validation",
    description:
      "Separate assumptions from evidence. If the problem isn't validated, the roadmap is a guess.",
  },
  {
    id: "opportunity-tree",
    title: "Opportunity Solution Tree",
    description:
      "Connect the outcome to multiple opportunities and solutions instead of committing to the first idea.",
  },
  {
    id: "prioritization",
    title: "Feature Prioritization",
    description:
      "Weigh impact, effort, and business value — say no to good ideas so the right ones ship faster.",
  },
  {
    id: "mvp",
    title: "MVP Planning",
    description:
      "Define the smallest version that tests the riskiest assumption, not the smallest version of the whole vision.",
  },
  {
    id: "roadmap",
    title: "Product Roadmap",
    description:
      "Sequence outcomes over time, and hold the roadmap loosely enough to respond to what's learned.",
  },
  {
    id: "agile",
    title: "Agile Delivery",
    description:
      "Break validated opportunities into shippable increments with tight feedback loops.",
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
    id: "business-analysis",
    title: "Business Analysis",
    accent: "electric",
    skills: [
      "Requirement Gathering",
      "Business Process Analysis",
      "BPMN",
      "GAP Analysis",
      "Functional Specification",
      "User Stories",
      "Stakeholder Management",
      "Documentation",
    ],
  },
  {
    id: "product",
    title: "Product",
    accent: "purple",
    skills: [
      "Product Discovery",
      "Product Strategy",
      "Roadmapping",
      "Agile / Scrum",
      "Backlog Prioritization",
      "Product Metrics",
      "User Research",
      "MVP Planning",
    ],
  },
  {
    id: "ai-automation",
    title: "AI Automation",
    accent: "cyan",
    skills: [
      "AI Agents",
      "n8n",
      "Prompt Engineering",
      "Workflow Automation",
      "MCP",
      "LLM Integration",
      "AI-powered Workflows",
    ],
  },
  {
    id: "technical",
    title: "Technical",
    accent: "emerald",
    skills: ["SQL", "REST API", "Linux", "Database Design", "ERD", "API Testing", "WordPress"],
  },
  {
    id: "design",
    title: "Design",
    accent: "orange",
    skills: ["Figma", "User Flow", "Wireframing", "UX Principles"],
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

export const projectFilters = [
  "All",
  "Product",
  "AI",
  "Analysis",
  "Automation",
  "HRIS",
  "Dashboard",
  "Mobile",
  "Web",
];

export const projects: Project[] = [
  {
    id: "hris-workflow",
    title: "HRIS Process Redesign",
    tagline: "Turning a manual HR workflow into a validated digital product",
    categories: ["Product", "Analysis", "HRIS"],
    businessProblem:
      "Employee onboarding and leave approval ran across spreadsheets and email threads, causing delays and no audit trail.",
    context:
      "[Add context — company size, team, constraints you worked within]",
    solution:
      "Mapped the current-state process, ran stakeholder workshops, and designed a system flow with clear approval states, notifications, and role-based access — then partnered with engineering through delivery.",
    impact: [
      "[Add measurable impact — e.g. reduced approval turnaround time]",
      "[Add adoption or satisfaction metric]",
    ],
    technologies: ["BPMN", "ERD", "REST API", "SQL", "Figma"],
    github: undefined,
    demo: undefined,
  },
  {
    id: "ai-resume-screener",
    title: "AI Resume Screening Assistant",
    tagline: "An LLM-powered first pass on incoming candidate applications",
    categories: ["AI", "Automation", "HRIS"],
    businessProblem:
      "Recruiters spent hours manually screening resumes against role requirements before shortlisting.",
    context: "[Add context — volume of applications, team this served]",
    solution:
      "Built an automation pipeline that parses resumes, scores them against role criteria using an LLM, and routes shortlists into the recruiter's existing workflow.",
    impact: [
      "[Add measurable impact — e.g. hours saved per week]",
      "[Add quality metric — e.g. shortlist precision]",
    ],
    technologies: ["n8n", "LLM API", "Prompt Engineering", "Webhooks"],
    github: undefined,
    demo: undefined,
  },
  {
    id: "ops-dashboard",
    title: "Operations Insight Dashboard",
    tagline: "Giving stakeholders a real-time view into a process that used to be invisible",
    categories: ["Dashboard", "Analysis", "Web"],
    businessProblem:
      "Leadership had no visibility into process bottlenecks until they became escalations.",
    context: "[Add context — which process, which stakeholders]",
    solution:
      "Designed the data model, defined the key metrics with stakeholders, and built a dashboard surfacing bottlenecks before they became incidents.",
    impact: [
      "[Add measurable impact — e.g. faster issue detection]",
    ],
    technologies: ["SQL", "REST API", "Data Modeling"],
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

export const aiLabProjects: AILabProject[] = [
  {
    id: "hr-chatbot",
    title: "AI HR Assistant",
    description:
      "A conversational assistant that answers employee HR policy questions instantly, pulling from an internal knowledge base.",
    workflow: [
      "Employee asks a question via chat",
      "Query embedded and matched against internal HR knowledge base",
      "LLM drafts a grounded answer with source references",
      "Escalates to HR staff automatically when confidence is low",
    ],
    benefits: [
      "[Add benefit — e.g. reduced repetitive HR tickets]",
      "[Add benefit — e.g. faster answers for employees]",
    ],
  },
  {
    id: "payroll-automation",
    title: "Payroll Automation Pipeline",
    description:
      "An automated pipeline that validates attendance data and prepares payroll inputs without manual reconciliation.",
    workflow: [
      "Attendance and leave data pulled on a schedule",
      "Automated validation flags anomalies for review",
      "Approved data formatted and routed to payroll system",
    ],
    benefits: [
      "[Add benefit — e.g. hours saved per payroll cycle]",
      "[Add benefit — e.g. fewer manual reconciliation errors]",
    ],
  },
  {
    id: "whatsapp-automation",
    title: "WhatsApp Business Automation",
    description:
      "Automated customer touchpoints over WhatsApp for routine requests, freeing the team for higher-value conversations.",
    workflow: [
      "Incoming message triggers an automation workflow",
      "Intent classified and routed to the right automated response or human handoff",
      "Structured data logged for follow-up and reporting",
    ],
    benefits: [
      "[Add benefit — e.g. response time improvement]",
      "[Add benefit — e.g. percentage of requests fully automated]",
    ],
  },
];

export const learningRoadmap = {
  currentFocus: [
    "Product Management",
    "Product Analytics",
    "AI Automation",
    "Agentic AI",
    "n8n",
    "Prompt Engineering",
    "AI Product Design",
    "Product Discovery",
  ],
  futureVision: [
    "Associate Product Manager",
    "Product Owner",
    "Senior Product Owner",
    "AI Product Manager",
    "Head of Product",
  ],
};

export const contactPrompts = [
  "Let's Build Better Products Together.",
  "Let's Automate Meaningful Work.",
  "Let's Transform Ideas Into Digital Products.",
];
