"use client"
import React, { useEffect, useRef, useState } from 'react'
import NeuralNetworkCanvas from '@/app/components/NeuralNetworkCanvas'
import Link from 'next/link'
import {
  aboutParagraphs,
  certifications,
  education,
  experience,
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
  const navMenuRef = useRef(null);
  const sectionTitle =
    'font-display text-2xl font-bold tracking-tight text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.45)]';
  const navLinkBtn =
    'inline-flex items-center justify-center rounded-lg border border-[#3a4550] bg-[#0f1418] px-5 py-2 text-sm font-medium text-[#eee] transition hover:border-[#22d3ee] hover:bg-[#22d3ee] hover:text-black';

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

  const featuredProjects = [
    {
      title: 'Calorie Tracking Web App',
      desc: 'Full stack application for logging daily meals and tracking macros with user input validation and dynamic calorie summaries.',
      tech: ['HTML','CSS','JavaScript','Node.js'],
      github: 'https://mchavez31.github.io/CaloriEat/'
    },
    {
      title: "AI Career Impact Prediction",
      desc: "Analyzed 32,000-93,000 record datasets to predict AI's impact on employment using PCA, clustering, decision trees, and feature engineering.",
      tech: ['R','Machine Learning','EDA','Data Cleaning']
    },
    {
      title: 'Restaurant Finder Web App',
      desc: 'Location-based app for searching and filtering restaurants by cuisine and rating.',
      tech: ['HTML','CSS','JavaScript','Angular']
    },
    {
      title: 'My Portfolio Website',
      desc: 'Personal portfolio built with Next.js and Tailwind CSS, deployed on Vercel.',
      tech: ['Next.js','Tailwind CSS','React']
    }
  ]

  const currentlyBuilding = [
    {
      title: 'This Portfolio',
      desc: 'Building a full-stack portfolio with Next.js, React, and Tailwind CSS — learning component architecture, routing, and modern frontend development along the way.'
    },
    {
      title: 'AI Agent Development',
      desc: 'Exploring AI agent frameworks and automation workflows — focused on how intelligent tooling can be applied to real engineering and business problems.'
    },
    {
      title: 'Engineering AI Automation',
      desc: 'Investigating how LLMs and AI agents can be applied to technical document review, tag validation, and data workflows common in large-scale engineering projects.'
    },
    {
      title: 'Full Stack Development',
      desc: 'Completing a full-stack web development course and applying those skills to real projects — strengthening fundamentals in JavaScript, Node.js, and modern frameworks.'
    }
  ]

  const skillChip =
    'inline-flex items-center rounded-md border border-[#2f2f2f] bg-gradient-to-b from-[#161616] to-[#0c0c0c] px-2.5 py-1 text-xs font-medium text-[#e8e8e8] shadow-sm transition hover:border-cyan-500/45 hover:from-[#1a1f22] hover:to-[#101418] hover:text-white'

  const surfaceCard =
    'rounded-xl border border-[#2a2a2a]/90 bg-[rgba(8,8,10,0.63)] shadow-[0_4px_32px_rgba(0,0,0,0.25)] transition hover:border-cyan-500/25'

  const nestedPanel =
    'rounded-lg border border-[#2a2a2a]/80 bg-[rgba(6,6,8,0.54)] shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]'

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
              className="rounded-md p-2 text-[#aaa] outline-none transition hover:bg-white/5 hover:text-cyan-400 focus-visible:ring-2 focus-visible:ring-cyan-500/50"
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
          <h2 className={`${sectionTitle} text-center`}>About</h2>
          <p className="mt-2 text-center text-sm leading-relaxed text-[#a8a8a8]">
            A quick snapshot of who I am and what I focus on.
          </p>
          <div className={`mt-8 max-w-5xl space-y-4 p-6 sm:p-8 ${surfaceCard}`}>
            <div className="text-xl leading-none text-cyan-400/75">"</div>
            {aboutParagraphs.map((text, i) => (
              <div key={i} className={`border-l-2 border-cyan-400/50 p-4 ${nestedPanel}`}>
                <p className="text-sm leading-relaxed text-[#c8c8c8]">{text}</p>
              </div>
            ))}
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
            {currentlyBuilding.map((item) => (
              <div key={item.title} className={`flex h-full flex-col p-6 ${surfaceCard}`}>
                <h3 className="border-b border-white/[0.06] pb-3 text-base font-bold leading-snug text-[#22d3ee]">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-[#a8a8a8]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Remaining sections: alternate backgrounds, keep content */}
      <section id="skills" className="relative z-10 scroll-mt-20 bg-[rgba(13,13,13,0.45)] py-24 px-6">
        <div className="mx-auto w-full max-w-5xl">
          <h2 className={sectionTitle}>Technical Skills</h2>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {skillGroups.map((group) => (
              <div key={group.title} className={`flex h-full flex-col p-5 ${surfaceCard}`}>
                <h3 className="border-b border-white/[0.06] pb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#22d3ee]">
                  {group.title}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((s) => (
                    <span key={s} className={skillChip}>
                      {s}
                    </span>
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

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProjects.map((p) => (
              <div key={p.title} className={`flex h-full flex-col p-6 ${surfaceCard}`}>
                <h3 className="border-b border-white/[0.06] pb-3 text-base font-bold leading-snug text-[#22d3ee]">
                  {p.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-[#b8b8b8]">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className={skillChip}>
                      {t}
                    </span>
                  ))}
                </div>
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-block rounded-md bg-[#22d3ee] px-3 py-2 text-xs font-semibold text-black shadow-sm transition hover:bg-cyan-300"
                  >
                    View on GitHub →
                  </a>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      <section id="experience" className="relative z-10 scroll-mt-20 py-24 px-6">
        <div className="mx-auto w-full max-w-5xl">
          <h2 className={sectionTitle}>Experience</h2>
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
                      <h4 className="text-sm font-bold leading-snug text-[#22d3ee] transition group-hover:text-cyan-300">
                        {e.role}
                      </h4>
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
        <div className="mx-auto w-full max-w-5xl text-center">
          <h2 className={sectionTitle}>Get In Touch</h2>
          <p className="mt-2 text-[#999]">Reach out by email, phone, or connect on LinkedIn and GitHub.</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <a href="mailto:michaelrchavez@sbcglobal.net" className={navLinkBtn}>Email</a>
            <a href="tel:+13612055119" className={navLinkBtn}>Phone</a>
            <a href="https://linkedin.com/in/michaelrchavez31/" target="_blank" rel="noreferrer" className={navLinkBtn}>LinkedIn</a>
            <a href="https://github.com/Mchavez31" target="_blank" rel="noreferrer" className={navLinkBtn}>GitHub</a>
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