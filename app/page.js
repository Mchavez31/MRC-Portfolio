"use client"
import React, { useLayoutEffect, useState } from 'react'

export default function Page() {
  const [expandedExp, setExpandedExp] = useState(null);
  const [showResumeModal, setShowResumeModal] = useState(false);
  const sectionTitle = 'text-2xl font-bold text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.45)]';

  useLayoutEffect(()=>{
    const canvas = document.getElementById('nnCanvas');
    if(!canvas) return;
    const ctx = canvas.getContext('2d');
    let W = 0; let H = 0;
    const NODE_COUNT = 180;
    const MAX_DIST = 160;
    const SPEED_MULT = 0.4;
    const PULSE_SPAWN_FRAMES = 18;
    const PULSE_SPEED = 0.016;

    let nodes = [];
    let pulses = [];
    let frame = 0;
    let raf = null;

    function randVel(){ return (Math.random()-0.5)*0.4 * 0.4; }

    function setSize(){
      const vpWidth = Math.max(1, window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth);
      const vpHeight = Math.max(1, window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight);
      const dpr = Math.min(window.devicePixelRatio || 1, 2.5);
      W = vpWidth;
      H = vpHeight;
      canvas.width = Math.floor(vpWidth * dpr);
      canvas.height = Math.floor(vpHeight * dpr);
      canvas.style.position = 'fixed';
      canvas.style.left = '0';
      canvas.style.top = '0';
      canvas.style.width = vpWidth + 'px';
      canvas.style.height = vpHeight + 'px';
      canvas.style.zIndex = '0';
      canvas.style.pointerEvents = 'none';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function init(){
      setSize();
      nodes = [];
      for(let i=0;i<NODE_COUNT;i++){
        nodes.push({ x: Math.random()*W, y: Math.random()*H, vx: randVel(), vy: randVel(), id: i });
      }
      pulses = [];
    }

    function onResize(){ init(); }
    window.addEventListener('resize', onResize);

    function spawnPulseOnEdge(a,b){ pulses.push({a,b,t:0}); }

    function step(){
      frame++;
      ctx.clearRect(0,0,W,H);
      // Ambient glow across full width (multiple centers so it isn’t biased to one side)
      const r = Math.max(W, H) * 0.55;
      for (const cx of [W * 0.2, W * 0.5, W * 0.8]) {
        const g = ctx.createRadialGradient(cx, H * 0.25, 0, cx, H * 0.25, r);
        g.addColorStop(0, 'rgba(34,211,238,0.08)');
        g.addColorStop(1, 'rgba(34,211,238,0)');
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, W, H);
      }

      for(const n of nodes){ n.x += n.vx * SPEED_MULT; n.y += n.vy * SPEED_MULT; if(n.x <= 0 || n.x >= W) n.vx *= -1; if(n.y <= 0 || n.y >= H) n.vy *= -1; }

      let connections = [];
      for(let i=0;i<nodes.length;i++){
        for(let j=i+1;j<nodes.length;j++){
          const a = nodes[i], b = nodes[j]; const dx = a.x - b.x, dy = a.y - b.y; const d = Math.sqrt(dx*dx + dy*dy);
          if(d <= MAX_DIST){ const alpha = 1 - (d / MAX_DIST); ctx.strokeStyle = 'rgba(34,211,238,' + alpha.toFixed(3) + ')'; ctx.lineWidth = 0.8; ctx.beginPath(); ctx.moveTo(a.x,a.y); ctx.lineTo(b.x,b.y); ctx.stroke(); connections.push({aIndex:i,bIndex:j,d}); }
        }
      }

      for(let i=pulses.length-1;i>=0;i--){ const p = pulses[i]; p.t += PULSE_SPEED * SPEED_MULT; if(p.t >= 1){ pulses.splice(i,1); continue; } const a = nodes[p.a], b = nodes[p.b]; const px = a.x + (b.x - a.x) * p.t; const py = a.y + (b.y - a.y) * p.t; ctx.fillStyle = 'rgba(34,211,238,0.9)'; ctx.beginPath(); ctx.arc(px,py,2.2,0,Math.PI*2); ctx.fill(); ctx.fillStyle = 'rgba(34,211,238,0.12)'; ctx.beginPath(); ctx.arc(px,py,6 + 6*p.t,0,Math.PI*2); ctx.fill(); }

      if(frame % PULSE_SPAWN_FRAMES === 0 && connections.length>0){ const toSpawn = Math.min(3, Math.max(1, Math.floor(connections.length * 0.01))); for(let s=0;s<toSpawn;s++){ const c = connections[Math.floor(Math.random()*connections.length)]; spawnPulseOnEdge(c.aIndex, c.bIndex); } }

      const time = Date.now(); for(const n of nodes){ const bright = 0.7 + 0.3 * Math.abs(Math.sin((time*0.00025) + n.id)); if(bright > 0.85){ const g = ctx.createRadialGradient(n.x,n.y,0,n.x,n.y,18); g.addColorStop(0, 'rgba(34,211,238,0.14)'); g.addColorStop(1, 'rgba(34,211,238,0)'); ctx.fillStyle = g; ctx.beginPath(); ctx.arc(n.x,n.y,18,0,Math.PI*2); ctx.fill(); } ctx.fillStyle = '#22d3ee'; ctx.beginPath(); ctx.arc(n.x,n.y,3.2 * (0.8 + 0.2*bright),0,Math.PI*2); ctx.fill(); }

      raf = requestAnimationFrame(step);
    }

    init(); step();

    return ()=>{
      if(raf) cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
    };
  },[]);
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

  const udemyProjects = [
    { title: 'Birthday Invitation Card', desc: 'Webpage built with HTML/CSS/JS (Udemy)' },
    { title: 'Resume Webpage', desc: 'Responsive resume page (Udemy)' },
    { title: 'Dog Meetup Webpage', desc: 'Built with Bootstrap (Udemy)' }
  ]

  const skills = {
    languages: ['Python','JavaScript','Java','C++','R'],
    web: ['HTML','CSS','Node.js','React','Angular','Next.js','Bootstrap'],
    data: ['Machine Learning','Data Science','Pandas','R Studio','Tableau','LLMs (Claude, ChatGPT)'],
    tools: ['GitHub','GitLab','Jira','VS Code','Weka','Netlify'],
    engineeringTools: ['Aveva','Navisworks','Bluebeam Revu','Go Completions','Mathcad','Matlab','LabVIEW','SharePoint','FusionLive','Autodesk Inventor','Creo','Bluebeam Studio'],
    engineeringSkills: ['P&IDs','SLDs','PFDs','ISOs','Panel Schedules','Architecture Diagrams','LOTO','Piping & Valve Specs','Cause & Effect Testing','System Walkdowns'],
    methods: ['Agile/SCRUM','Waterfall','Project Management']
  }

  const experience = [
    {
      role: 'Commissioning Coordinator/Engineer, Wood. (ConocoPhillips Willow Project)',
      date: 'Aug 2021 - Present',
      points: ['Master Deliverables Register, tag register management','R programming for data validation','Cross-functional team leadership'],
      details: [
        'Developed and maintained Master Deliverables Register (MDR) to track project scope, task ownership, and execution status across a large-scale engineering project.',
        'Consolidated and normalized data across multiple equipment databases to produce a unified tag register.',
        'Led cross-functional stakeholder meetings to kick off new work scopes, gather requirements, align teams, and resolve technical challenges.',
        'Managed technical teams responsible for producing layered systems documentation, resolving database discrepancies, and maintaining tag/subsystem registers.',
        'Applied R programming to clean, validate, and analyze large project datasets, identifying data discrepancies and generating actionable insights.',
        'Developed commissioning strategies, plans, procedures, and module/subsystem sequencing diagrams.',
        'Developed commissioning estimates for overall project scope and various scope phases.'
      ]
    },
    {
      role: 'Commissioning Coordinator/Manager, Wood. (Monument Chemical)',
      date: 'Dec 2020 - Aug 2021',
      points: ['Led technical team','System testing','Procedure authoring'],
      details: [
        'Led and managed a technical team, strategically planning work scope and ensuring efficient execution to meet client-defined milestones.',
        'Reported project status, resource needs, and milestone progress to senior management, producing structured updates that enabled stakeholder visibility.',
        'Authored, reviewed, and revised detailed technical procedures for system testing, startup, and verification.',
        'Coordinated work scope across engineering, construction, and commissioning teams, providing technical support to ensure quality deliverables were produced on schedule.',
        'Supervised and executed start-to-finish system testing, troubleshooting, and acceptance validation for complex industrial systems prior to client handover.'
      ]
    },
    {
      role: 'Commissioning Lead, Wood. (XTO Cowboy Project)',
      date: 'Jan 2020 - Feb 2021',
      points: ['Technical procedures','Process flow diagrams','Configuration tracking'],
      details: [
        'Executed cause-and-effect testing to validate system logic and control communications, troubleshooting failures and verifying functional behavior.',
        'Conducted thorough system walkthroughs to verify design compliance and construction integrity, generating a prioritized punch list of defects and corrective actions.',
        'Ensured all project handover documentation was completed, verified, signed, filed, and handed over.',
        'Authored, reviewed, and revised comprehensive technical procedures for system testing and startup, iterating through multiple review cycles to ensure accuracy and completeness.',
        'Coordinated work scope and requirements with a dedicated procedure development team, providing ongoing technical support to ensure deliverables were produced on schedule.',
        'Produced and distributed a wide range of technical deliverables to field teams including work-aids, process flow diagrams, test sequencing spreadsheets, issue tracking records, and inspection reports.',
        'Maintained detailed configuration tracking documentation to record current states, required changes, scheduled dates, and precise locations.'
      ]
    }
  ]

  const education = [
    { title: 'M.S. Software Engineering', school: 'University of Houston Clear Lake', note: 'GPA 3.93' },
    { title: 'B.S. Mechanical-Nuclear Engineering', school: 'University of Texas Permian Basin', note: 'GPA 3.62, Cum Laude, Outstanding ME Graduate 2015' },
    { title: 'Full Stack Web Developer Course', school: 'Udemy', note: 'Jan 2025 - Present' },
    { title: "B.S. Mechanical Engineering", school: 'Texas A&M Corpus Christi', note: 'GPA 3.90 — Presidents Honor Roll, Dean\'s Honor Roll' }
  ]

  const certifications = [
    { title: 'Six Sigma Process Improvement Lean', date: '2013' },
    { title: 'Full Stack Web Development - Udemy', date: 'In Progress' }
  ]

  return (
    <main className="relative min-h-screen bg-transparent text-[#999] antialiased">
      {/* Full-viewport NN layer: must stay behind all sections (fixed + low z) */}
      <canvas id="nnCanvas" className="pointer-events-none fixed inset-0 z-0 max-w-none" aria-hidden />

      {/* Fixed Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[#1a1a1a] bg-[#06080c]">
        <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="text-white font-bold">MC</div>
          <div className="flex items-center gap-6">
            {['Skills','Experience'].map((l)=> (
              <a key={l} href={`#${l.toLowerCase()}`} className="text-[#555] hover:text-cyan-400 transition">{l}</a>
            ))}
          </div>
        </div>
      </nav>

      {/* HERO — light glass panel so the neural net stays visible behind */}
      <section id="work" className="relative z-10 flex min-h-screen items-center justify-center overflow-hidden">
        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <div className="rounded-2xl border border-[#22d3ee]/25 bg-[rgba(8,12,16,0.38)] px-8 py-12 shadow-[0_4px_28px_rgba(0,0,0,0.22)]">
            <div className="mb-4">
              <div className="text-xs tracking-widest text-[#22d3ee] drop-shadow-[0_1px_3px_rgba(0,0,0,0.75)]">SOFTWARE ENGINEER &amp; AI DEVELOPER</div>
            </div>

            <h1 className="text-6xl font-black tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.55)]">Michael Chavez</h1>
            <p className="mt-4 text-sm tracking-wide text-[#e8e8e8] drop-shadow-[0_1px_6px_rgba(0,0,0,0.55)]">M.S. Software Engineering · Oil &amp; Gas · AI &amp; Automation</p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a href="#projects" className="rounded-full bg-[#22d3ee] px-5 py-2 font-medium text-black shadow-sm transition hover:bg-cyan-300">Projects</a>
              <a href="/resume.pdf" target="_blank" rel="noreferrer" className="rounded-full border border-[#3a4550] bg-[#0f1418] px-5 py-2 text-[#eee] transition hover:border-cyan-500/50 hover:bg-[#141a20]">Resume</a>
              <a href="#contact" className="rounded-full bg-[#22d3ee] px-5 py-2 font-medium text-black shadow-sm transition hover:bg-cyan-300">Get In Touch</a>
            </div>

            <div className="mt-12">
              <div className="h-px w-full bg-[rgba(34,211,238,0.2)]" />
            </div>
          </div>
        </div>
      </section>

      {/* Remaining sections: alternate backgrounds, keep content */}
      <section id="skills" className="relative z-10 bg-[rgba(13,13,13,0.45)] py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className={sectionTitle}>Technical Skills</h2>
          <p className="mt-2 text-[#b8b8b8]">Technical skills organized by category.</p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-sm font-bold text-[#22d3ee]">Languages</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {skills.languages.map(s=> <span key={s} className="px-3 py-1 bg-[#141414] border border-[#2a2a2a] text-[#e8e8e8] rounded-full text-sm">{s}</span>)}
              </div>

              <h3 className="mt-4 text-sm font-bold text-[#22d3ee]">Web</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {skills.web.map(s=> <span key={s} className="px-3 py-1 bg-[#141414] border border-[#2a2a2a] text-[#e8e8e8] rounded-full text-sm">{s}</span>)}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold text-[#22d3ee]">Data & AI</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {skills.data.map(s=> <span key={s} className="px-3 py-1 bg-[#141414] border border-[#2a2a2a] text-[#e8e8e8] rounded-full text-sm">{s}</span>)}
              </div>

              <h3 className="mt-4 text-sm font-bold text-[#22d3ee]">Tools</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {skills.tools.map(s=> <span key={s} className="px-3 py-1 bg-[#141414] border border-[#2a2a2a] text-[#e8e8e8] rounded-full text-sm">{s}</span>)}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold text-[#22d3ee]">Engineering Tools</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {skills.engineeringTools.map(s=> <span key={s} className="px-3 py-1 bg-[#141414] border border-[#2a2a2a] text-[#e8e8e8] rounded-full text-sm">{s}</span>)}
              </div>

              <h3 className="mt-4 text-sm font-bold text-[#22d3ee]">Engineering Skills</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {skills.engineeringSkills.map(s=> <span key={s} className="px-3 py-1 bg-[#141414] border border-[#2a2a2a] text-[#e8e8e8] rounded-full text-sm">{s}</span>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="relative z-10 bg-[rgba(13,13,13,0.45)] py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className={sectionTitle}>Featured Projects</h2>
          <p className="mt-2 text-[#999]">Featured projects and selected work.</p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProjects.map((p) => (
              <div key={p.title} className="bg-[#0c0c0c] border border-[#2a2a2a] hover:border-cyan-500/40 transition rounded-lg p-6 shadow-[0_4px_24px_rgba(0,0,0,0.45)]">
                <h3 className="text-lg font-bold text-[#22d3ee]">{p.title}</h3>
                <p className="mt-2 text-[#c4c4c4]">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map(t=> <span key={t} className="px-2 py-1 bg-[#141414] border border-[#333] text-[#d0d0d0] rounded-full text-xs">{t}</span>)}
                </div>
                {p.github && (
                  <a href={p.github} target="_blank" rel="noreferrer" className="mt-4 inline-block px-3 py-2 bg-[#22d3ee] text-black text-xs font-medium rounded-md hover:bg-cyan-300 transition shadow-sm">
                    View on GitHub →
                  </a>
                )}
              </div>
            ))}
          </div>

          <div className="mt-10">
            <h4 className="text-sm font-bold text-white">Other Projects</h4>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {udemyProjects.map(p=> (
                <div key={p.title} className="bg-[#0c0c0c] border border-[#2a2a2a] hover:border-cyan-500/40 transition rounded-lg p-4 text-sm shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
                  <strong className="font-bold text-[#22d3ee]">{p.title}</strong>
                  <p className="mt-1 text-[#999]">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="relative z-10 bg-[rgba(13,13,13,0.45)] py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className={sectionTitle}>Experience</h2>
          <div className="mt-8 space-y-8">
            {experience.map((e,i)=> (
              <div key={i} className="flex cursor-pointer gap-6 group" onClick={() => setExpandedExp(expandedExp === i ? null : i)}>
                <div className="flex flex-col items-center">
                  <div className="mt-1 h-3 w-3 rounded-full bg-cyan-400 transition group-hover:scale-125" />
                  <div className="mt-2 w-px flex-1 bg-[#2a2a2a]" />
                </div>
                <div className="flex-1 rounded-xl border border-[#2a2a2a] bg-[rgba(12,12,12,0.95)] p-4 shadow-[0_4px_24px_rgba(0,0,0,0.35)]">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-[#22d3ee] transition group-hover:text-cyan-300">{e.role}</h4>
                    <span className="text-sm text-[#999]">{e.date}</span>
                  </div>
                  <ul className="mt-2 text-[#999] list-disc list-inside space-y-1">
                    {e.points.map((p,pi)=>(<li key={pi}>{p}</li>))}
                  </ul>
                  {expandedExp === i && e.details && e.details.length > 0 && (
                    <div className="mt-4 p-4 bg-[#0c0c0c] border border-[#2a2a2a] rounded-lg text-sm text-[#ddd] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                      <p className="font-semibold text-cyan-400 mb-3">Full Details:</p>
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

      {/* Resume Modal */}
      {showResumeModal && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setShowResumeModal(false)}>
          <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg max-w-2xl w-full max-h-[90vh] overflow-auto" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 flex items-center justify-between p-6 border-b border-[#1a1a1a] bg-[#0f0f0f]">
              <h2 className="text-xl font-bold text-white">My Resume</h2>
              <button onClick={() => setShowResumeModal(false)} className="text-[#999] hover:text-white text-2xl">✕</button>
            </div>
            <div className="p-6 text-center">
              <p className="text-[#999] mb-6">Download or open your resume to view full details about your experience, skills, and education.</p>
              <div className="flex flex-col gap-3">
                <a href="/resume.pdf" download className="px-4 py-3 bg-[#22d3ee] text-black font-semibold rounded-lg hover:bg-cyan-300 transition">
                  ⬇️ Download Resume (PDF)
                </a>
                <a href="/resume.pdf" target="_blank" rel="noreferrer" className="px-4 py-3 border border-[#22d3ee] text-[#22d3ee] font-semibold rounded-lg hover:bg-[#22d3ee]/10 transition">
                  🔗 Open in New Tab
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <section id="education" className="relative z-10 bg-[rgba(13,13,13,0.45)] py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className={sectionTitle}>Education</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((ed,idx)=>(
              <div key={idx} className="bg-[#0c0c0c] border border-[#2a2a2a] hover:border-cyan-500/40 transition rounded-lg p-6 shadow-[0_4px_24px_rgba(0,0,0,0.45)]">
                <h3 className="font-bold text-[#22d3ee]">{ed.title}</h3>
                <p className="mt-1 text-[#999]">{ed.school}</p>
                <p className="mt-2 text-[#999]">{ed.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="certifications" className="relative z-10 bg-[rgba(13,13,13,0.45)] py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className={sectionTitle}>Certifications</h2>
          <div className="mt-4 flex flex-wrap gap-4">
            {certifications.map(c=> (
              <div key={c.title} className="bg-[#0c0c0c] border border-[#2a2a2a] hover:border-cyan-500/40 transition rounded-lg p-4 text-sm shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
                <div className="font-bold text-[#22d3ee]">{c.title}</div>
                <div className="text-sm text-[#999]">{c.date}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative z-10 bg-[rgba(13,13,13,0.45)] py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className={sectionTitle}>Get In Touch</h2>
          <p className="mt-2 text-[#999]">Reach out by email, phone, or connect on LinkedIn and GitHub.</p>
          <div className="mt-6 flex items-center justify-center gap-4">
            <a href="mailto:michaelrchavez@sbcglobal.net" className="px-4 py-2 bg-[#22d3ee] text-black rounded-md font-medium hover:bg-cyan-300 transition">Email</a>
            <a href="tel:+13612055119" className="px-4 py-2 bg-[#0f1418] border border-[#3a4550] text-[#eee] rounded-md hover:bg-[#141a20] hover:border-cyan-500/50 transition">Phone</a>
            <a href="https://linkedin.com/in/michaelrchavez31/" target="_blank" rel="noreferrer" className="px-4 py-2 bg-[#0f1418] border border-[#3a4550] text-[#eee] rounded-md hover:bg-[#141a20] hover:border-cyan-500/50 transition">LinkedIn</a>
            <a href="https://github.com/Mchavez31" target="_blank" rel="noreferrer" className="px-4 py-2 bg-[#0f1418] border border-[#3a4550] text-[#eee] rounded-md hover:bg-[#141a20] hover:border-cyan-500/50 transition">GitHub</a>
          </div>
        </div>
      </section>
    </main>
  )
}