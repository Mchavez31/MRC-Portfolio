"use client"
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import NeuralNetworkCanvas from '@/app/components/NeuralNetworkCanvas'
import ContactForm from '@/app/components/ContactForm'
import GitHubStats from '@/app/components/GitHubStats'
import Link from 'next/link'
import {
  RESUME_PDF_PATH,
  aboutParagraphs,
  certifications,
  education,
  experience,
  featuredProjects,
  skillGroups,
} from '@/lib/resume-data'

const NAV_SECTIONS = [
  { href: '#work', label: 'Intro' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Technical Skills' },
  { href: '#projects', label: 'Featured Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#contact', label: 'Get In Touch' },
];

export default function Page() {
  const [expandedExp, setExpandedExp] = useState(null);
  const [navMenuOpen, setNavMenuOpen] = useState(false);
  const [highlightedSkill, setHighlightedSkill] = useState(null);
  const navMenuRef = useRef(null);
  const sectionTitle =
    'font-display text-2xl font-bold tracking-tight text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.45)]';
  const navLinkBtn =
    'neuron-spark-hover inline-flex items-center justify-center rounded-lg border border-[#3a4550] bg-[#0f1418] px-5 py-2 text-sm font-medium text-[#eee] transition hover:border-[#22d3ee] hover:bg-[#22d3ee] hover:text-black';

  useEffect(() => {
    function handlePointerDown(e) {
      if (!navMenuOpen || !navMenuRef.current) return;
      if (!navMenuRef.current.contains(e.target)) setNavMenuOpen(false);
    }
    function handleKey(e) {
      if (e.key === 'Escape') setNavMenuOpen(false);
    }
    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('keydown', handleKey);
    };
  }, [navMenuOpen]);

  const currentlyBuilding = [
    {
      title: 'This Portfolio',
      desc: 'Building a full-stack portfolio with Next.js, React, and Tailwind CSS while learning component architecture, routing, and modern frontend development along the way.',
      usedSkills: ['Next.js', 'React', 'JavaScript', 'Tailwind CSS', 'HTML', 'CSS'],
      github: 'https://github.com/Mchavez31/MRC-Portfolio'
    },
    {
      title: 'AI Agent Development',
      desc: 'Exploring AI agent frameworks and automation workflows, focused on how intelligent tooling can be applied to real engineering and business problems.',
      usedSkills: ['Python', 'Machine Learning'] // Assuming Python-based AI tools
    },
    {
      title: 'Systemize - Engineering AI Automation',
      desc: 'Python application for systemizing engineering drawings, tracking data, comparing revision changes, and generating automated reports. Applying LLMs and AI agents to technical document review, tag validation, and data workflows common in large-scale engineering projects.',
      usedSkills: ['Python', 'Machine Learning'],
      github: 'https://github.com/Mchavez31/Systemize'
    },
    {
      title: 'Full Stack Development',
      desc: 'Completing a full-stack web development course and applying those skills to real projects, strengthening fundamentals in JavaScript, Node.js, and modern frameworks.',
      usedSkills: ['JavaScript', 'Node.js', 'React', 'HTML', 'CSS']
    }
  ]

  const skillChip =
    'inline-flex items-center rounded-md border border-[#2f2f2f] bg-gradient-to-b from-[#161616] to-[#0c0c0c] px-2.5 py-1 text-xs font-medium text-[#e8e8e8] shadow-sm transition hover:border-cyan-500/45 hover:from-[#1a1f22] hover:to-[#101418] hover:text-white'

  const surfaceCard =
    'rounded-xl border border-[#2a2a2a]/90 bg-[rgba(8,8,10,0.63)] shadow-[0_4px_32px_rgba(0,0,0,0.25)] transition hover:border-cyan-500/25'

  const nestedPanel =
    'rounded-lg border border-[#2a2a2a]/80 bg-[rgba(6,6,8,0.54)] shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]'

  // Handle skill click: scroll to projects and highlight matching ones
  const handleSkillClick = (skillName) => {
    setHighlightedSkill(skillName)
    
    // Check if any "Currently Building" items use this skill
    const hasBuildingMatch = currentlyBuilding.some(item => 
      item.usedSkills?.some(skill => 
        skill.toLowerCase().includes(skillName.toLowerCase()) ||
        skillName.toLowerCase().includes(skill.toLowerCase())
      )
    )
    
    // Check if any projects use this skill
    const hasProjectMatch = featuredProjects.some(project => 
      project.usedSkills?.some(skill => 
        skill.toLowerCase().includes(skillName.toLowerCase()) ||
        skillName.toLowerCase().includes(skill.toLowerCase())
      )
    )
    
    // Scroll to the first section with matches
    if (hasBuildingMatch) {
      const buildingSection = document.getElementById('currently-building')
      if (buildingSection) {
        buildingSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    } else if (hasProjectMatch) {
      const projectsSection = document.getElementById('projects')
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
    
    // Clear highlight after 5 seconds
    setTimeout(() => {
      setHighlightedSkill(null)
    }, 5000)
  }

  // Check if a project uses the highlighted skill
  const projectUsesSkill = (project) => {
    if (!highlightedSkill) return false
    return project.usedSkills?.some(skill => 
      skill.toLowerCase().includes(highlightedSkill.toLowerCase()) ||
      highlightedSkill.toLowerCase().includes(skill.toLowerCase())
    )
  }

  // Check if a "Currently Building" item uses the highlighted skill
  const currentlyBuildingUsesSkill = (item) => {
    if (!highlightedSkill) return false
    return item.usedSkills?.some(skill => 
      skill.toLowerCase().includes(highlightedSkill.toLowerCase()) ||
      highlightedSkill.toLowerCase().includes(skill.toLowerCase())
    )
  }

  return (
    <main className="relative min-h-screen bg-transparent font-sans text-[#999] antialiased">
      <NeuralNetworkCanvas />

      {/* Fixed Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[#1a1a1a] bg-[#06080c]">
        <div className="flex w-full items-center justify-between px-4 py-3 sm:px-6 lg:px-10">
          <a href="#work" className="text-lg font-bold tracking-tight text-white transition hover:text-cyan-400">
            MC
          </a>
          <div ref={navMenuRef} className="group relative">
            <button
              type="button"
              className="neuron-spark-hover rounded-md p-2 text-[#aaa] outline-none transition hover:bg-white/5 hover:text-cyan-400 focus-visible:ring-2 focus-visible:ring-cyan-500/50"
              aria-expanded={navMenuOpen}
              aria-haspopup="true"
              aria-label="Page sections menu"
              onClick={() => setNavMenuOpen((o) => !o)}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <div
              className={[
                'absolute right-0 top-full z-[60] mt-2 min-w-[min(100vw-2rem,16rem)] rounded-lg border border-[#2a2a2a] bg-[#06080c] py-2 shadow-xl',
                navMenuOpen ? 'max-md:block max-md:visible max-md:opacity-100' : 'max-md:hidden',
                'md:block md:invisible md:pointer-events-none md:opacity-0 md:transition md:duration-150 md:group-hover:pointer-events-auto md:group-hover:visible md:group-hover:opacity-100',
              ].join(' ')}
              role="menu"
              aria-label="Jump to section"
            >
              {NAV_SECTIONS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  role="menuitem"
                  className="block px-4 py-2.5 text-sm text-[#ccc] transition hover:bg-white/5 hover:text-cyan-400"
                  onClick={() => setNavMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* HERO — light glass panel so the neural net stays visible behind */}
      <section id="work" className="relative z-10 flex min-h-screen scroll-mt-20 items-center justify-center overflow-hidden">
        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          {/* Availability Banner */}
          <div className="mb-8 animate-fade-in">
            <div className="inline-flex items-center gap-3 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-6 py-3 shadow-lg backdrop-blur-sm">
              <div className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-400"></div>
              <span className="text-sm font-semibold text-emerald-300">
                Actively seeking Software Engineering roles · Available for interviews
              </span>
            </div>
          </div>

          <div className="rounded-2xl border border-[#22d3ee]/25 bg-[rgba(11,15,18,0.48)] px-8 py-12 shadow-[0_4px_28px_rgba(0,0,0,0.22)]">
            <div className="mb-4">
              <div className="text-xs tracking-widest text-[#22d3ee] drop-shadow-[0_1px_3px_rgba(0,0,0,0.75)]">SOFTWARE ENGINEER &amp; AI DEVELOPER</div>
            </div>

            <h1 className="text-6xl font-black tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.55)]">Michael Chavez</h1>
            <p className="mt-4 text-sm tracking-wide text-[#e8e8e8] drop-shadow-[0_1px_6px_rgba(0,0,0,0.55)]">M.S. Software Engineering · Oil &amp; Gas · AI &amp; Automation</p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a href="#projects" className={navLinkBtn}>Projects</a>
              <Link href="/resume" className={navLinkBtn}>
                Resume
              </Link>
              <a href="#contact" className={navLinkBtn}>Get In Touch</a>
            </div>

            <div className="mt-12">
              <div className="h-px w-full bg-[rgba(34,211,238,0.2)]" />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="relative z-10 scroll-mt-20 py-24 px-6">
        <div className="mx-auto w-full max-w-5xl">
          <h2 className="font-display text-2xl font-bold tracking-tight text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.45)]">
            About Me
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="space-y-5 rounded-xl border border-[#2a2a2a]/90 border-l-4 border-l-cyan-400/40 bg-[rgba(8,8,10,0.63)] p-8 shadow-[0_4px_32px_rgba(0,0,0,0.25)]">
                {aboutParagraphs.map((text, i) => (
                  <p key={i} className="text-sm leading-relaxed text-[#c8c8c8]">
                    {text}
                  </p>
                ))}
                
                <div className="pt-4 border-t border-white/[0.06]">
                  <a 
                    href={RESUME_PDF_PATH}
                    download="Michael-Chavez-Resume.pdf"
                    className="neuron-spark-hover inline-flex items-center justify-center gap-2 rounded-lg border border-[#22d3ee]/50 bg-[#22d3ee]/10 px-5 py-2.5 text-sm font-semibold text-[#22d3ee] transition hover:bg-[#22d3ee]/20"
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download Resume
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="rounded-xl border border-[#2a2a2a]/90 bg-[rgba(8,8,10,0.63)] p-6 shadow-[0_4px_32px_rgba(0,0,0,0.25)]">
                <div className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                  Quick Facts
                </div>
                <ul className="space-y-3 text-sm text-[#c8c8c8]">
                  <li className="flex gap-2">
                    <span className="flex-shrink-0 text-cyan-400">→</span>
                    <span>M.S. Software Engineering — GPA 3.93</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="flex-shrink-0 text-cyan-400">→</span>
                    <span>10+ years O&G engineering</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="flex-shrink-0 text-cyan-400">→</span>
                    <span>Full-stack & AI development</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="flex-shrink-0 text-cyan-400">→</span>
                    <span>Python · React · Next.js</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-[#2a2a2a]/90 bg-[rgba(8,8,10,0.63)] p-6 shadow-[0_4px_32px_rgba(0,0,0,0.25)]">
                <div className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                  Based In
                </div>
                <p className="text-sm text-[#c8c8c8]">Houston, TX</p>
                <p className="mt-1 text-xs text-[#888]">
                  Available for New Opportunities
                </p>
              </div>

              <GitHubStats />
            </div>
          </div>
        </div>
      </section>

      <section id="currently-building" className="relative z-10 scroll-mt-20 py-24 px-6">
        <div className="mx-auto w-full max-w-5xl">
          <h2 className={sectionTitle}>Currently Building</h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#a8a8a8]">
            What I am actively working on and learning right now.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            {currentlyBuilding.map((item) => {
              const isHighlighted = currentlyBuildingUsesSkill(item)
              const isFiltered = highlightedSkill && !isHighlighted
              
              return (
                <div 
                  key={item.title} 
                  className={`flex h-full flex-col p-6 ${surfaceCard} ${
                    isHighlighted ? 'ring-2 ring-cyan-400 border-cyan-400 scale-[1.02]' : ''
                  } ${
                    isFiltered ? 'opacity-30' : ''
                  }`}
                >
                  <h3 className="border-b border-white/[0.06] pb-3 text-base font-bold leading-snug text-[#22d3ee]">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-[#a8a8a8]">{item.desc}</p>
                  
                  {item.usedSkills && item.usedSkills.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.usedSkills.map((skill) => (
                        <span 
                          key={skill} 
                          className={`${skillChip} text-xs ${
                            highlightedSkill && (
                              skill.toLowerCase().includes(highlightedSkill.toLowerCase()) ||
                              highlightedSkill.toLowerCase().includes(skill.toLowerCase())
                            ) ? 'ring-1 ring-cyan-400 bg-cyan-500/20' : ''
                          }`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                  
                  {item.github && (
                    <a
                      href={item.github}
                      target="_blank"
                      rel="noreferrer"
                      className="neuron-spark-hover mt-5 inline-block rounded-md border border-[#22d3ee]/50 bg-[#22d3ee]/10 px-3 py-2 text-xs font-semibold text-[#22d3ee] shadow-sm transition hover:bg-[#22d3ee]/20"
                    >
                      View on GitHub →
                    </a>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Remaining sections: alternate backgrounds, keep content */}
      <section id="skills" className="relative z-10 scroll-mt-20 bg-[rgba(13,13,13,0.45)] py-24 px-6">
        <div className="mx-auto w-full max-w-5xl">
          <h2 className={sectionTitle}>Technical Skills</h2>
          <p className="mt-2 text-xs text-[#888] italic">Click any skill to see projects using it</p>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {skillGroups.map((group) => (
              <div key={group.title} className={`flex h-full flex-col p-5 ${surfaceCard}`}>
                <h3 className="border-b border-white/[0.06] pb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#22d3ee]">
                  {group.title}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((s) => (
                    <button
                      key={s}
                      onClick={() => handleSkillClick(s)}
                      className={`${skillChip} cursor-pointer hover:scale-105 active:scale-95`}
                      title={`View projects using ${s}`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="relative z-10 scroll-mt-20 py-24 px-6">
        <div className="mx-auto w-full max-w-5xl">
          <h2 className={sectionTitle}>Featured Projects</h2>
          <p className="mt-2 text-[#999]">Featured projects and selected work.</p>
          {highlightedSkill && (
            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-sm">
              <span className="text-cyan-300">Showing projects using:</span>
              <span className="font-semibold text-cyan-400">{highlightedSkill}</span>
              <button
                onClick={() => setHighlightedSkill(null)}
                className="ml-2 text-cyan-400 hover:text-cyan-300"
                aria-label="Clear filter"
              >
                ✕
              </button>
            </div>
          )}

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProjects.map((p) => {
              const isHighlighted = projectUsesSkill(p)
              const isFiltered = highlightedSkill && !isHighlighted
              
              return (
                <div 
                  key={p.title} 
                  className={`flex h-full flex-col p-6 ${surfaceCard} ${
                    isHighlighted ? 'ring-2 ring-cyan-400 border-cyan-400 scale-[1.02]' : ''
                  } ${
                    isFiltered ? 'opacity-30' : ''
                  }`}
                >
                  {/* Project Screenshot */}
                  {p.screenshot && (
                    <div className="mb-4 -mx-6 -mt-6 overflow-hidden rounded-t-xl">
                      <Image
                        src={p.screenshot}
                        alt={`${p.title} screenshot`}
                        width={600}
                        height={400}
                        className="w-full h-48 object-cover object-top transition hover:scale-105"
                        priority={false}
                      />
                    </div>
                  )}
                  
                  <div className="flex items-start justify-between gap-2 border-b border-white/[0.06] pb-3">
                    <h3 className="text-base font-bold leading-snug text-[#22d3ee]">
                      {p.title}
                    </h3>
                    {p.date && (
                      <span className="shrink-0 text-xs font-medium text-[#888]">{p.date}</span>
                    )}
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-[#b8b8b8]">{p.desc}</p>
                  
                  {p.metrics && p.metrics.length > 0 && (
                    <div className="mt-3 space-y-1">
                      {p.metrics.map((metric) => (
                        <div key={metric} className="flex items-center gap-2 text-xs text-[#888]">
                          <span className="text-cyan-400">✓</span>
                          <span>{metric}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span 
                        key={t} 
                        className={`${skillChip} ${
                          highlightedSkill && (
                            t.toLowerCase().includes(highlightedSkill.toLowerCase()) ||
                            highlightedSkill.toLowerCase().includes(t.toLowerCase())
                          ) ? 'ring-1 ring-cyan-400 bg-cyan-500/20' : ''
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.liveUrl && (
                      <a
                        href={p.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="neuron-spark-hover inline-block rounded-md bg-[#22d3ee] px-3 py-2 text-xs font-semibold text-black shadow-sm transition hover:bg-cyan-300"
                      >
                        Live Demo →
                      </a>
                    )}
                    {p.github && !p.liveUrl && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noreferrer"
                        className="neuron-spark-hover inline-block rounded-md bg-[#22d3ee] px-3 py-2 text-xs font-semibold text-black shadow-sm transition hover:bg-cyan-300"
                      >
                        View on GitHub →
                      </a>
                    )}
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </section>

      <section id="experience" className="relative z-10 scroll-mt-20 py-24 px-6">
        <div className="mx-auto w-full max-w-5xl">
          <h2 className={sectionTitle}>Experience</h2>
          <p className="mt-2 text-xs text-[#888] italic">Click any item to view full details</p>
          <div className="mt-8 space-y-8">
            {experience.map((e,i)=> (
              <div key={i} className="flex cursor-pointer gap-6 group" onClick={() => setExpandedExp(expandedExp === i ? null : i)}>
                <div className="flex flex-col items-center">
                  <div className="mt-1 h-3 w-3 rounded-full bg-cyan-400 transition group-hover:scale-125" />
                  <div className="mt-2 w-px flex-1 bg-[#2a2a2a]" />
                </div>
                <div className={`flex-1 p-5 ${surfaceCard}`}>
                  <div className="border-b border-white/[0.06] pb-3">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div className="flex items-center gap-2 flex-1">
                        <h4 className="text-sm font-bold leading-snug text-[#22d3ee] transition group-hover:text-cyan-300">
                          {e.role}
                        </h4>
                        {e.details && e.details.length > 0 && (
                          <svg 
                            className={`h-4 w-4 text-cyan-400 transition-transform duration-200 ${expandedExp === i ? 'rotate-180' : ''}`}
                            fill="none" 
                            viewBox="0 0 24 24" 
                            stroke="currentColor" 
                            strokeWidth="2"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                          </svg>
                        )}
                      </div>
                      <span className="shrink-0 text-xs font-medium uppercase tracking-wider text-[#888]">{e.date}</span>
                    </div>
                  </div>
                  <ul className="mt-4 list-inside list-disc space-y-1.5 text-sm text-[#a8a8a8]">
                    {e.points.map((p, pi) => (
                      <li key={pi}>{p}</li>
                    ))}
                  </ul>
                  {expandedExp === i && e.details && e.details.length > 0 && (
                    <div className={`mt-5 p-4 text-sm text-[#ddd] ${nestedPanel}`}>
                      <p className="mb-4 border-b border-white/[0.06] pb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#22d3ee]">
                        Full details
                      </p>
                      <ul className="space-y-2 text-[#999]">
                        {e.details.map((d,di)=>(
                          <li key={di} className="flex gap-2">
                            <span className="text-cyan-400 flex-shrink-0">•</span>
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="relative z-10 scroll-mt-20 py-24 px-6">
        <div className="mx-auto w-full max-w-5xl">
          <h2 className={sectionTitle}>Education</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((ed, idx) => (
              <div key={idx} className={`flex h-full flex-col p-6 ${surfaceCard}`}>
                <h3 className="border-b border-white/[0.06] pb-3 text-base font-bold leading-snug text-[#22d3ee]">{ed.title}</h3>
                <p className="mt-4 text-sm text-[#a8a8a8]">{ed.school}</p>
                <p className="mt-2 text-sm leading-relaxed text-[#888]">{ed.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="certifications" className="relative z-10 scroll-mt-20 py-24 px-6">
        <div className="mx-auto w-full max-w-5xl">
          <h2 className={sectionTitle}>Certifications</h2>
          <div className="mt-4 flex flex-wrap gap-4">
            {certifications.map((c) => (
              <div key={c.title} className={`flex min-w-[min(100%,280px)] max-w-md flex-1 flex-col p-5 text-sm ${surfaceCard}`}>
                <h3 className="border-b border-white/[0.06] pb-3 text-sm font-bold leading-snug text-[#22d3ee]">{c.title}</h3>
                <p className="mt-4 text-xs font-medium uppercase tracking-wider text-[#888]">{c.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative z-10 scroll-mt-20 py-24 px-6">
        <div className="mx-auto w-full max-w-5xl">
          <h2 className={`${sectionTitle} text-center`}>Get In Touch</h2>
          <p className="mx-auto mt-2 max-w-2xl text-center text-sm leading-relaxed text-[#a8a8a8]">
            I believe the best products come from bold ideas and strong collaboration. If you're ready to build something that matters, I'm ready to help make it real.
          </p>

          <div className="mt-12">
            <ContactForm />
          </div>

          <div className="mt-12 border-t border-white/[0.06] pt-8">
            <p className="text-center text-sm text-[#888] mb-4">Or reach out directly:</p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a href="mailto:michaelrchavez@sbcglobal.net" className={navLinkBtn}>Email</a>
              <a href="tel:+13612055119" className={navLinkBtn}>Phone</a>
              <a href="https://linkedin.com/in/michaelrchavez31/" target="_blank" rel="noreferrer" className={navLinkBtn}>LinkedIn</a>
              <a href="https://github.com/Mchavez31" target="_blank" rel="noreferrer" className={navLinkBtn}>GitHub</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-[#1f2428] bg-[rgba(6,8,12,0.78)] px-6 py-8 text-center">
        <p className="text-sm text-[#c6c8cb]">Copyright © 2026 Michael Chavez</p>
        <p className="mt-2 text-xs uppercase tracking-[0.18em] text-[#808892]">
          Software Engineer • AI Developer • Commissioning Engineer
        </p>
      </footer>
    </main>
  )
}