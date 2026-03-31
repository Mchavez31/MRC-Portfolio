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
  "I hold a Master's in Software Engineering with a 3.93 GPA and I am actively building expertise in AI agents, Python automation, full-stack development, and machine learning. I am the kind of developer who takes the time to understand your business before writing a single line of code, because the best solutions come from understanding the problem first.",
  "If your team is looking for someone who brings both technical skill and real-world perspective, I would love to connect.",
];

export const resumeContact = {
  email: "michaelrchavez@sbcglobal.net",
  phoneDisplay: "+1 (361) 205-5119",
  phoneTel: "+13612055119",
  linkedin: "https://linkedin.com/in/michaelrchavez31/",
  github: "https://github.com/Mchavez31",
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

export const experience = [
  {
    role: "Commissioning Coordinator/Engineer, Wood. (ConocoPhillips Willow Project)",
    date: "Aug 2021 - Present",
    points: [
      "Master Deliverables Register, tag register management",
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
    points: ["Led technical team", "System testing", "Procedure authoring"],
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
    note: "GPA 3.93",
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
  { title: "Six Sigma Process Improvement Lean", date: "2013" },
  { title: "Full Stack Web Development - Udemy", date: "In Progress" },
];
