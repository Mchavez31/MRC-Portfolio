/** Shared resume / portfolio content — single source of truth. */
export const RESUME_PDF_PATH = "/Resume.pdf";

export const profile = {
  name: "Michael Chavez",
  headline: "Software Engineer & AI Developer",
  tagline: "M.S. Software Engineering · Oil & Gas · AI & Automation",
};

/** Portfolio About section — edit these paragraphs to match your voice. */
export const aboutParagraphs = [
  "After a decade of working on some of the largest and most complex engineering projects in the oil and gas industry, I developed a deep understanding of how large organizations operate, how data flows through industrial systems, and where technology has the greatest opportunity to create real impact. I have led technical teams, managed large-scale databases and tag registers, and used programming to solve problems that directly affected project outcomes.",

  "That foundation now drives my work in software development and AI. I am learning these technologies with a clear picture of where they can be applied and what they can change. My goal is to bring that combination of domain knowledge and modern technical skill to organizations that want to work smarter, automate intelligently, and build tools that genuinely improve how their teams operate.",

  "If your team is looking for someone who brings both technical skill and real-world perspective, I would love to connect.",
];

export const resumeContact = {
  email: "michaelrchavez@sbcglobal.net",
  phoneDisplay: "+1 (361) 205-5119",
  phoneTel: "+13612055119",
  linkedin: "https://linkedin.com/in/michaelrchavez31/",
  github: "https://github.com/Mchavez31",
};

/** Web resume header — phone as shown next to email. */
export const resumeHeaderContact = {
  phoneDisplay: "(361) 205-5119",
};

export const skills = {
  languages: ["Python", "JavaScript", "Java", "C++", "R"],
  web: ["HTML", "CSS", "Node.js", "React", "Angular", "Next.js", "Bootstrap"],
  data: [
    "Machine Learning",
    "Data Science",
    "Pandas",
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
  },
  {
    title: "AI Career Impact Prediction",
    desc: "Analyzed 32,000-93,000 record datasets to predict AI's impact on employment using PCA, clustering, decision trees, and feature engineering.",
    tech: ["R", "Machine Learning", "EDA", "Data Cleaning"],
  },
  {
    title: "Software Requirements Specification Project",
    desc: "Authored a full SRS document for a Cybertruck UI feature, defining functional and non-functional requirements, use cases, and system constraints following IEEE standards.",
    tech: ["Requirements engineering", "UML", "IEEE", "Documentation"],
  },
  {
    title: "Restaurant Finder Web App",
    desc: "Location-based app for searching and filtering restaurants by cuisine and rating.",
    tech: ["HTML", "CSS", "JavaScript", "Angular"],
  },
  {
    title: "My Portfolio Website",
    desc: "Personal portfolio built with Next.js and Tailwind CSS, deployed on Vercel.",
    tech: ["Next.js", "Tailwind CSS", "React"],
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
  { title: "Full Stack Web Development (Udemy)", date: "In Progress" },
  { title: "Six Sigma Process Improvement Lean", date: "2013" },
];

/** Printable / web resume — professional summary (PDF order follows data below). */
export const professionalSummary =
  "Software Engineering M.S. graduate with hands on experience building web applications, applying machine learning techniques, and programming in JavaScript, Python, Java, C++, and R. I have a strong foundation in systems thinking, data management, technical documentation, and cross-functional team leadership from a decade of engineering experience. Seeking a software engineering role where analytical rigor and full-stack development skills can drive real impact.";

/** Skills section — bullet lines as on PDF resume. */
export const resumeSkillBullets = [
  "Java, Javascript, Python, C++, and R.",
  "HTML, CSS, Bootstrap, Node.js",
  "GitHub, GitLab, Jira, R Studio, Weka, Netlify, Tableau, VS Code, Visual Studio",
  "Agile/SCRUM, Waterfall, Requirements Engineering, Version Control",
  "Data Science, Data Cleaning, Machine Learning",
  "LLMs (ChatGPT, Claude, Perplexity, Grok)",
  "Project Management",
  "Procedure Development",
  "Microsoft Excel, Word, Outlook, and PowerPoint",
  "Scheduling, Estimating, and Budgeting",
];

/** Software Projects — bullet lines as on PDF resume. */
export const resumeProjectBullets = [
  "Calorie Tracking Web Application – Full stack app for logging daily meals and tracking macros, with user input validation and dynamic calorie summaries. Built with HTML, CSS, JavaScript, and Node.js",
  "AI Impact Prediction Project - Analyzed multiple datasets with 32,000-93,000 records to predict AI's impact on employment using PCA, clustering, decision tree modeling, and feature engineering. Applied data cleaning, EDA, and machine learning techniques in R.",
  "Restaurant Finder Web Application - Location based app that lets users search and filter restaurants by cuisine and rating. Built with HTML, CSS, JavaScript, and Angular",
  "Software Requirements Specification Project - Authored a full SRS document for a Cybertruck UI feature, defining functional and non-functional requirements, use cases, and system constraints following IEEE standards.",
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
    company: "Chicago Bridge & Iron (CB&I)",
    location: "Corpus Christi, TX",
    date: "Feb. 2017 – May 2017",
    project: "Flint Hills Resources",
    role: "LDAR Technician/Data Manager",
    bullets: [
      "Monitored and categorized emissions data across hundreds of process components using threshold-based logic, applying data-driven decision-making to triage and escalate issues based on severity levels.",
      "Created and maintained a component tagging and tracking system for new and unregistered equipment, establishing asset data integrity practices consistent with database record management.",
    ],
  },
  {
    company: "Marathon Petroleum Corporation",
    location: "Galveston Bay Refinery, TX",
    date: "Jan. 2016 – May 2016",
    project: null,
    role: "Project Engineer",
    bullets: [
      "Managed capital projects end-to-end from requirements definition through implementation, producing charter, definition, and estimate packages.",
      "Developed decision support packages to secure funding approval, presenting technical scope, cost estimates, and risk analysis to upper management.",
      "Coordinated with external engineering firms and internal stakeholders to define scope, set deliverable deadlines, and verify completion.",
    ],
  },
  {
    company: "Marathon Petroleum Corporation",
    location: "Garyville, LA",
    date: "May 2014 – Aug. 2014",
    project: null,
    role: "Rotating Equipment Engineer",
    bullets: [
      "Investigated equipment failures, conducted root cause analysis, and produced detailed technical reports with findings and recommended corrective actions.",
      "Evaluated pump performance data to determine optimal operating configurations, applying quantitative analysis and engineering judgment to drive efficiency decisions.",
    ],
  },
  {
    company: "Marathon Petroleum Corporation",
    location: "Findlay, OH",
    date: "June 2013 – Aug. 2013",
    project: null,
    role: "Biofuels and Emerging Technology Engineer",
    bullets: [
      "Conducted on-site audits of biofuel production facilities, reviewing business documents and observing operational processes to assess compliance and performance.",
      "Authored compliance and performance reports on biofuel producers, synthesizing technical observations and regulatory requirements into structured written deliverables for management review.",
    ],
  },
];
