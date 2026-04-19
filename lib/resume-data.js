/** Shared resume / portfolio content — single source of truth. */
export const RESUME_PDF_PATH = "/Resume.pdf";

export const profile = {
  name: "Michael Chavez",
  headline: "Software Engineer & AI Developer",
  tagline: "M.S. Software Engineering · Oil & Gas · AI & Automation",
};

/** Portfolio About section — edit these paragraphs to match your voice. */
export const aboutParagraphs = [
  "After a decade of working on some of the largest and most complex engineering projects in the oil and gas industry, I made the decision to transition into software engineering—where I could apply the same analytical rigor and systems thinking to building software tools that solve real problems. I completed my M.S. in Software Engineering (GPA 3.93) while continuing to work full-time, developing skills in full-stack development, machine learning, and modern frameworks.",

  "That foundation in large-scale industrial systems drives my work in software development and AI. I understand how data flows through complex organizations, how teams collaborate across disciplines, and where intelligent automation can create the greatest impact. My goal is to bring that combination of domain knowledge and modern technical skill to organizations that want to work smarter, automate intelligently, and build tools that genuinely improve how their teams operate.",

  "If your team is looking for someone who brings both technical skill and real-world perspective, I would love to connect.",
];

export const resumeContact = {
  email: "michaelrchavez@sbcglobal.net",
  phoneDisplay: "+1 (361) 205-5119",
  phoneTel: "+13612055119",
  linkedin: "https://linkedin.com/in/michaelrchavez31/",
  github: "https://github.com/Mchavez31",
  githubUsername: "Mchavez31", // For GitHub stats widget
};

/** Web resume header — phone as shown next to email. */
export const resumeHeaderContact = {
  phoneDisplay: "(361) 205-5119",
};

export const skills = {
  languages: ["Python", "JavaScript", "TypeScript", "Java", "C++", "R"],
  web: ["HTML", "CSS", "Tailwind CSS", "Node.js", "React", "Angular", "Next.js", "Bootstrap"],
  data: [
    "Machine Learning",
    "Data Science",
    "Pandas",
    "R (dplyr, ggplot2, caret)",
    "R Studio",
    "Tableau",
    "LLMs (Claude, ChatGPT)",
    "Weka",
  ],
  tools: ["GitHub", "GitLab", "Jira", "VS Code", "Netlify"],
  engineeringTools: [
    "Aveva",
    "Navisworks",
    "Bluebeam Revu / Studio",
    "Go Completions",
    "Mathcad",
    "Matlab",
    "LabVIEW",
    "SharePoint",
    "FusionLive",
    "Autodesk Inventor",
    "Creo",
  ],
  engineeringSkills: [
    "P&IDs",
    "SLDs",
    "PFDs",
    "ISOs",
    "Panel Schedules",
    "Architecture Diagrams",
    "LOTO",
    "Piping & Valve Specs",
    "Cause & Effect Testing",
    "System Walkdowns",
  ],
  methods: ["Agile/SCRUM", "Waterfall", "Project Management"],
};

export const skillGroups = [
  { title: "Languages", items: skills.languages },
  { title: "Web", items: skills.web },
  { title: "Data & AI", items: skills.data },
  { title: "Tools", items: skills.tools },
  { title: "Engineering Tools", items: skills.engineeringTools },
  { title: "Engineering Skills", items: skills.engineeringSkills },
  { title: "Methods", items: skills.methods },
];

/** Featured portfolio projects — shown on home page and web resume. */
export const featuredProjects = [
  {
    title: "Calorie Tracking Web App",
    desc: "Full stack application for logging daily meals and tracking macros with user input validation and dynamic calorie summaries.",
    tech: ["HTML", "CSS", "JavaScript", "Node.js"],
    github: "https://mchavez31.github.io/CaloriEat/",
    liveUrl: "https://mchavez31.github.io/CaloriEat/",
    date: "2025-2026",
    metrics: [], // Add metrics like: ["X users", "Y features", "Z% test coverage"]
    screenshot: "/images/calorie-tracker.png",
    usedSkills: ["HTML", "CSS", "JavaScript", "Node.js"], // Links to skills section
  },
  {
    title: "AI Career Impact Prediction",
    desc: "Machine learning project analyzing 93,000+ employment records from Bureau of Labor Statistics and O*NET databases to predict which occupations face AI displacement risk, stability, or growth. Led data cleaning and feature engineering, developing automation risk scores, human skill indices, and occupational trajectory classifications using R (dplyr, ggplot2, caret).",
    tech: ["R", "dplyr", "ggplot2", "caret", "Machine Learning", "Data Cleaning", "Tableau", "PCA", "Random Forest", "Clustering"],
    date: "2025",
    metrics: [
      "93,000+ employment records analyzed",
      "Merged BLS & O*NET datasets (800+ occupations)",
      "Created 15+ engineered features",
      "Built interactive Tableau dashboard",
      "3 ML models: Random Forest, CART, J48",
      "Led Data Cleaning & Feature Engineering"
    ],
    github: null,
    documentUrl: null,
    screenshot: "/images/ai-dashboard.png",
    usedSkills: ["R", "dplyr", "ggplot2", "caret", "Machine Learning", "Data Science", "Tableau"], // R packages used for data cleaning, visualization, and ML
  },
  {
    title: "QuickByte Restaurant Finder",
    desc: "Angular-based restaurant discovery platform with advanced filtering, user authentication, and real-time search. Built with Kendo UI framework featuring multi-criteria filtering (name, category, price, rating, location) and intuitive dashboard interface.",
    tech: ["Angular", "TypeScript", "Kendo UI", "RxJS", "HTML", "CSS", "JavaScript"],
    date: "2024",
    liveUrl: null,
    metrics: [
      "Team project (3 developers)",
      "User authentication system",
      "7 filter criteria with advanced operators",
      "Responsive Kendo UI grid interface",
      "Local storage data management"
    ],
    github: null,
    screenshot: "/images/quickbyte-home.png",
    usedSkills: ["Angular", "TypeScript", "JavaScript", "HTML", "CSS"], // Angular project with TypeScript
  },
  {
    title: "Cybertruck UI Software Requirements Specification",
    desc: "Comprehensive 45-page IEEE-compliant SRS document for Tesla Cybertruck user interface system. Defined complete system architecture including 8 major functional requirements, 12+ stakeholder groups, security/reliability/usability specifications, use cases, and multi-level data flow diagrams.",
    tech: ["Requirements Engineering", "UML", "Data Flow Diagrams", "IEEE Standards", "System Design", "Technical Documentation"],
    date: "2024",
    metrics: [
      "45-page IEEE-compliant SRS document",
      "8 major functional requirements",
      "12+ stakeholder groups identified",
      "Complete use case & DFD diagrams",
      "Security, reliability, performance specs",
      "Version-controlled deliverables"
    ],
    github: null,
    documentUrl: null,
    screenshot: "/images/cybertruck-dfd.png",
    usedSkills: [], // Documentation project - no coding skills
  },
];

export const experience = [
  {
    role: "Commissioning Coordinator/Engineer, Wood. (ConocoPhillips Willow Project)",
    date: "Aug 2021 - Present",
    points: [
      "Master Deliverables Register, data management",
      "R programming for data validation",
      "Cross-functional team leadership",
    ],
    details: [
      "Developed and maintained Master Deliverables Register (MDR) to track project scope, task ownership, and execution status across a large-scale engineering project.",
      "Consolidated and normalized data across multiple equipment databases to produce a unified tag register.",
      "Led cross-functional stakeholder meetings to kick off new work scopes, gather requirements, align teams, and resolve technical challenges.",
      "Managed technical teams responsible for producing layered systems documentation, resolving database discrepancies, and maintaining tag/subsystem registers.",
      "Applied R programming to clean, validate, and analyze large project datasets, identifying data discrepancies and generating actionable insights.",
      "Developed commissioning strategies, plans, procedures, and module/subsystem sequencing diagrams.",
      "Developed commissioning estimates for overall project scope and various scope phases.",
    ],
  },
  {
    role: "Commissioning Coordinator/Manager, Wood. (Monument Chemical)",
    date: "Dec 2020 - Aug 2021",
    points: ["Led technical team", "System testing", "Procedure development"],
    details: [
      "Led and managed a technical team, strategically planning work scope and ensuring efficient execution to meet client-defined milestones.",
      "Reported project status, resource needs, and milestone progress to senior management, producing structured updates that enabled stakeholder visibility.",
      "Authored, reviewed, and revised detailed technical procedures for system testing, startup, and verification.",
      "Coordinated work scope across engineering, construction, and commissioning teams, providing technical support to ensure quality deliverables were produced on schedule.",
      "Supervised and executed start-to-finish system testing, troubleshooting, and acceptance validation for complex industrial systems prior to client handover.",
    ],
  },
  {
    role: "Commissioning Lead, Wood. (XTO Cowboy Project)",
    date: "Jan 2020 - Feb 2021",
    points: [
      "Technical procedures",
      "Process flow diagrams",
      "Configuration tracking",
    ],
    details: [
      "Executed cause-and-effect testing to validate system logic and control communications, troubleshooting failures and verifying functional behavior.",
      "Conducted thorough system walkthroughs to verify design compliance and construction integrity, generating a prioritized punch list of defects and corrective actions.",
      "Ensured all project handover documentation was completed, verified, signed, filed, and handed over.",
      "Authored, reviewed, and revised comprehensive technical procedures for system testing and startup, iterating through multiple review cycles to ensure accuracy and completeness.",
      "Coordinated work scope and requirements with a dedicated procedure development team, providing ongoing technical support to ensure deliverables were produced on schedule.",
      "Produced and distributed a wide range of technical deliverables to field teams including work-aids, process flow diagrams, test sequencing spreadsheets, issue tracking records, and inspection reports.",
      "Maintained detailed configuration tracking documentation to record current states, required changes, scheduled dates, and precise locations.",
    ],
  },
];

/** Reverse chronological (newest first) — matches typical resume PDF order. */
export const education = [
  {
    title: "M.S. Software Engineering",
    school: "University of Houston Clear Lake",
    note: "GPA 3.93 · Graduated December 2025",
  },
  {
    title: "Full Stack Web Developer Course",
    school: "Udemy",
    note: "Jan 2025 - Present",
  },
  {
    title: "B.S. Mechanical-Nuclear Engineering",
    school: "University of Texas Permian Basin",
    note: "GPA 3.62, Cum Laude, Outstanding ME Graduate 2015",
  },
  {
    title: "B.S. Mechanical Engineering",
    school: "Texas A&M Corpus Christi",
    note: "GPA 3.90 — Presidents Honor Roll, Dean's Honor Roll",
  },
];

export const certifications = [
  { title: "Full Stack Web Development (Udemy)", date: "In Progress - Expected July 2026" },
  { title: "Six Sigma Process Improvement Lean", date: "2013" },
];

/** Printable / web resume — professional summary (PDF order follows data below). */
export const professionalSummary =
  "Software Engineer with M.S. in Software Engineering and full-stack development skills in JavaScript, Python, React, and Node.js. Experienced building web applications, applying machine learning techniques, and solving complex data problems. Bringing unique analytical rigor and systems thinking from 10+ years of engineering experience in large-scale industrial projects. Seeking software engineering roles where I can apply modern development practices, ML/AI techniques, and domain expertise to build tools that solve real-world problems.";

/** Skills section — bullet lines as on PDF resume. */
export const resumeSkillBullets = [
  "Java, Javascript, TypeScript, Python, C++, and R.",
  "HTML, CSS, Bootstrap, Node.js",
  "GitHub, GitLab, Jira, R Studio, Weka, Netlify, Tableau, VS Code, Visual Studio",
  "Agile/SCRUM, Waterfall, Requirements Engineering, Version Control",
  "Data Science, Data Cleaning, Machine Learning, R (dplyr, ggplot2, caret)",
  "LLMs (ChatGPT, Claude, Perplexity, Grok)",
  "Project Management",
  "Procedure Development",
  "Microsoft Excel, Word, Outlook, and PowerPoint",
  "Scheduling, Estimating, and Budgeting",
];

/** Software Projects — bullet lines as on PDF resume. */
export const resumeProjectBullets = [
  "Calorie Tracking Web Application – Full stack app for logging daily meals and tracking macros, with user input validation and dynamic calorie summaries. Built with HTML, CSS, JavaScript, and Node.js",
  "AI Career Impact Prediction – Led data cleaning and feature engineering for ML project analyzing 93,000+ Bureau of Labor Statistics and O*NET employment records. Developed automation risk scores and occupational trajectory classifications using R (dplyr, ggplot2, caret), PCA, Random Forest, CART, and J48 decision trees. Created interactive Tableau dashboard.",
  "QuickByte Restaurant Finder – Angular-based restaurant discovery platform with user authentication and advanced multi-criteria filtering. Built with Kendo UI, TypeScript, and RxJS featuring responsive grid interface and local storage management. Team project (3 developers).",
  "Cybertruck UI Software Requirements Specification – Authored comprehensive 45-page IEEE-compliant SRS document defining system architecture, 8 major functional requirements, 12+ stakeholder groups, use cases, data flow diagrams, and security/reliability/usability specifications for Tesla Cybertruck user interface system.",
];

/** Education — PDF resume only (two degrees). Portfolio may use broader `education` export. */
export const resumeEducation = [
  {
    school: "University of Houston Clear Lake",
    location: "Clear Lake, TX",
    degree: "Masters of Science: Software Engineering",
    dates: "Aug. 2023 - Dec 2025",
    bullets: ["GPA 3.93/4.00"],
  },
  {
    school: "University of Texas of the Permian Basin",
    location: "Odessa, TX",
    degree: "Bachelor of Science: Mechanical-Nuclear Engineering",
    dates: "Aug. 2010 - May 2015",
    bullets: [
      "GPA 3.62/4.00 (Honors Graduate - Cum Laude)",
      "Awarded Outstanding Mechanical Engineering Graduate 2015",
    ],
  },
];

/** Full work history for web resume — newest first (matches PDF order). */
export const resumeExperience = [
  {
    company: "Wood.",
    location: "Houston, TX",
    date: "Aug. 2021 - Current",
    project: "Conoco Phillips Willow Project",
    role: "Commissioning Coordinator",
    bullets: [
      "Developed and maintained Master Deliverables Register (MDR) to track project scope, task ownership, and execution status across a large-scale engineering project.",
      "Consolidated and normalized data across multiple equipment databases to produce a unified tag register.",
      "Led cross-functional stakeholder meetings to kick off new work scopes, gather requirements, align teams, and resolve technical challenges.",
      "Managed technical teams responsible for producing layered systems documentation, resolving database discrepancies, and maintaining tag/subsystem registers.",
      "Applied R programming to clean, validate, and analyze large project datasets, identifying data discrepancies and generating actionable insights.",
      "Developed commissioning strategies, plans, procedures, and module/subsystem sequencing diagrams",
      "Developed commissioning estimates for overall project scope and various scope phases.",
    ],
  },
  {
    company: "Wood.",
    location: "Houston, TX",
    date: "Dec. 2020 - Aug. 2021",
    project: "Monument Chemical Project",
    role: "Mechanical Commissioning Coordinator/Manager",
    bullets: [
      "Led and managed a technical team, strategically planning work scope and ensuring efficient execution to meet client-defined milestones.",
      "Reported project status, resource needs, and milestone progress to senior management, producing structured updates that ensured stakeholder visibility.",
      "Authored, reviewed, and revised detailed technical procedures for system testing, startup, and verification.",
      "Coordinated work scope across engineering, construction, and commissioning teams, providing technical support to ensure quality deliverables were produced on schedule.",
      "Supervised and executed start-to-finish system testing, troubleshooting, and acceptance validation for complex industrial systems prior to client handover.",
      "Executed cause-and-effect testing to validate system logic and control communications, troubleshooting failures and verifying functional behavior.",
      "Conducted thorough system walkthroughs to verify design compliance and construction integrity, generating a prioritized punch list of defects and corrective actions.",
      "Ensured all project handover documentation was completed, verified, signed, filed, and handed over.",
    ],
  },
  {
    company: "Wood.",
    location: "Houston, TX & Carlsbad, NM",
    date: "Jan. 2020 - Feb 2021",
    project: "XTO Cowboy Project",
    role: "Mechanical Commissioning Lead",
    bullets: [
      "Authored, reviewed, and revised comprehensive technical procedures for system testing and startup, iterating through multiple review cycles to ensure accuracy and completeness.",
      "Coordinated work scope and requirements with a dedicated procedure development team, providing ongoing technical support to ensure quality deliverables were produced on schedule.",
      "Produced and distributed a wide range of technical deliverables to field teams including work-aids, process flow diagrams, test sequencing spreadsheets, issue tracking records, and inspection reports.",
      "Maintained detailed configuration tracking documentation to record current states, required changes, scheduled dates, and precise locations.",
    ],
  },
  {
    company: "Gibson Applied Technology & Engineering",
    location: "Ingleside, TX",
    date: "Jan. 2019 – July 2019",
    project: "Noble Energy Leviathan Project",
    role: "Mechanical Commissioning Technician / Piping Inspector",
    bullets: [
      "Executed systematic verification walkthroughs across complex industrial systems, applying structured inspection protocols to confirm physical layout matched technical specifications.",
      "Graphically charted and documented pressure test results platform-wide, applying data recording and visualization practices to communicate system status to technical stakeholders.",
      "Authored and activated work permits, JSA documentation, and isolation certificates.",
    ],
  },
  {
    company: "Wood.",
    location: "Ingleside, TX",
    date: "June 2017 – Nov. 2018",
    project: "Chevron Bigfoot Project",
    role: "Mechanical Commissioning Technician",
    bullets: [
      "Executed end-to-end functional testing procedures (FTPs) on industrial operating systems, validating behavior against design specifications and obtaining client acceptance sign-off.",
      "Redlined P&IDs and isometrics to reflect as-built changes, maintaining accurate living documentation.",
      "Coordinated across multiple companies and disciplines to align on work scope, requirements, and execution timelines.",
    ],
  },
  {
    company: "Various Companies (Marathon Petroleum, CB&I)",
    location: "Multiple Locations",
    date: "2013 – 2017",
    project: null,
    role: "Engineering Roles - Project Engineer, Equipment Engineer, Data Manager",
    bullets: [
      "Managed capital projects from requirements through implementation, producing charter and estimate packages and securing funding approval through technical presentations to upper management.",
      "Conducted equipment failure analysis and root cause investigations, applying quantitative analysis to optimize operating configurations and drive efficiency decisions.",
      "Developed and maintained data management systems for emissions monitoring and component tracking, applying data-driven decision-making to categorize and escalate issues across hundreds of process components.",
      "Performed compliance audits of production facilities and authored structured technical reports synthesizing observations and regulatory requirements for management review.",
    ],
  },
];
