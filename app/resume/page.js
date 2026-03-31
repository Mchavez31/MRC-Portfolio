import Link from "next/link";
import NeuralNetworkCanvas from "@/app/components/NeuralNetworkCanvas";
import {
  RESUME_PDF_PATH,
  certifications,
  education,
  experience,
  profile,
  resumeContact,
  skillGroups,
} from "@/lib/resume-data";

export const metadata = {
  title: "Resume | Michael Chavez",
  description:
    "Professional resume — experience, education, skills, and certifications. View as PDF or on the web.",
};

const sectionHeading =
  "font-display text-lg font-bold tracking-tight text-white border-b border-white/[0.12] pb-2";

/** Same section order as the portfolio (skills → experience → education → certifications). */
const bodyText = "text-[#d0d4d8]";
const mutedText = "text-[#9ca3af]";
const panelBlock =
  "rounded-xl border border-white/[0.06] bg-[rgba(2,4,7,0.10)] p-4 sm:p-5";

export default function ResumePage() {
  return (
    <div className="relative min-h-screen bg-transparent font-sans antialiased">
      <NeuralNetworkCanvas />
      <div className="relative z-10">
        <header className="sticky top-0 z-40 border-b border-[#1f2428] bg-[rgba(4,6,10,0.55)] backdrop-blur-xl supports-[backdrop-filter]:bg-[rgba(4,6,10,0.55)]">
          <div className="mx-auto flex w-full max-w-5xl flex-wrap items-center justify-between gap-3 px-6 py-3">
            <Link
              href="/"
              className="text-sm font-medium text-[#c4c4c4] transition hover:text-[#22d3ee]"
            >
              ← Back to portfolio
            </Link>
            <div className="flex flex-wrap items-center gap-2">
              <a
                href={RESUME_PDF_PATH}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg border border-[#3a4550] bg-[#0f1418] px-4 py-2 text-sm font-medium text-[#eee] transition hover:border-[#22d3ee] hover:bg-[#22d3ee] hover:text-black"
              >
                View PDF
              </a>
              <a
                href={RESUME_PDF_PATH}
                download="Michael-Chavez-Resume.pdf"
                className="inline-flex items-center justify-center rounded-lg border border-[#22d3ee]/50 bg-[#22d3ee]/10 px-4 py-2 text-sm font-semibold text-[#22d3ee] transition hover:bg-[#22d3ee]/20"
              >
                Download PDF
              </a>
            </div>
          </div>
        </header>

        <div className="mx-auto w-full max-w-3xl px-4 py-8 pb-24 sm:px-6">
          <article
            className={`rounded-2xl border border-[rgba(34,211,238,0.08)] bg-[rgba(2,4,8,0.20)] shadow-[0_8px_48px_rgba(0,0,0,0.3)] ring-1 ring-white/[0.05] backdrop-blur-sm ${bodyText}`}
          >
            <div className="border-b border-white/[0.06] px-6 pb-8 pt-8 sm:px-10 sm:pt-10">
              <h1 className="font-display text-4xl font-bold tracking-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)] sm:text-5xl">
                {profile.name}
              </h1>
              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.22em] text-[#22d3ee]">
                {profile.headline}
              </p>
              <p className={`mt-2 text-sm ${mutedText}`}>{profile.tagline}</p>
              <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-[#e2e4e8]">
                <a
                  className="hover:text-[#22d3ee]"
                  href={`mailto:${resumeContact.email}`}
                >
                  {resumeContact.email}
                </a>
                <a
                  className="hover:text-[#22d3ee]"
                  href={`tel:${resumeContact.phoneTel}`}
                >
                  {resumeContact.phoneDisplay}
                </a>
                <a
                  className="hover:text-[#22d3ee]"
                  href={resumeContact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  className="hover:text-[#22d3ee]"
                  href={resumeContact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>

            <div className="space-y-12 px-6 py-10 sm:px-10 sm:py-12">
              {/* Order matches portfolio: Technical Skills → Experience → Education → Certifications */}
              <section>
                <h2 className={sectionHeading}>Technical skills</h2>
                <div className="mt-6 space-y-5">
                  {skillGroups.map((group) => (
                    <div key={group.title} className={panelBlock}>
                      <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#22d3ee]">
                        {group.title}
                      </h3>
                      <p className={`mt-2 text-sm leading-relaxed ${bodyText}`}>
                        {group.items.join(" · ")}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className={sectionHeading}>Professional experience</h2>
                <ul className="mt-6 space-y-8">
                  {experience.map((job) => (
                    <li key={job.role} className={panelBlock}>
                      <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                        <h3 className="text-base font-bold leading-snug text-white">
                          {job.role}
                        </h3>
                        <span className="shrink-0 text-xs font-medium uppercase tracking-wider text-[#94a3b8]">
                          {job.date}
                        </span>
                      </div>
                      <ul
                        className={`mt-3 list-inside list-disc space-y-1.5 text-sm leading-relaxed ${bodyText}`}
                      >
                        {job.points.map((p) => (
                          <li key={p}>{p}</li>
                        ))}
                      </ul>
                      {job.details?.length > 0 && (
                        <ul
                          className={`mt-4 list-disc space-y-2 border-t border-white/[0.06] pt-4 pl-5 text-sm leading-relaxed marker:text-[#22d3ee]/80 ${mutedText}`}
                        >
                          {job.details.map((d, di) => (
                            <li key={di}>{d}</li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className={sectionHeading}>Education</h2>
                <ul className="mt-6 space-y-5">
                  {education.map((ed) => (
                    <li
                      key={`${ed.title}-${ed.school}`}
                      className={panelBlock}
                    >
                      <h3 className="text-base font-bold text-white">
                        {ed.title}
                      </h3>
                      <p className={`mt-1 text-sm ${bodyText}`}>{ed.school}</p>
                      <p className={`mt-1 text-sm ${mutedText}`}>{ed.note}</p>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className={sectionHeading}>Certifications</h2>
                <ul className="mt-6 space-y-3">
                  {certifications.map((c) => (
                    <li
                      key={c.title}
                      className={`flex flex-wrap items-baseline justify-between gap-2 ${panelBlock}`}
                    >
                      <span className="font-medium text-white">{c.title}</span>
                      <span className="text-xs font-medium uppercase tracking-wider text-[#94a3b8]">
                        {c.date}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            <p
              className={`border-t border-white/[0.08] px-6 py-6 text-center text-xs sm:px-10 ${mutedText}`}
            >
              Prefer a printable file? Use{" "}
              <a
                href={RESUME_PDF_PATH}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[#22d3ee] underline-offset-2 hover:underline"
              >
                View PDF
              </a>{" "}
              or{" "}
              <a
                href={RESUME_PDF_PATH}
                download="Michael-Chavez-Resume.pdf"
                className="font-medium text-[#22d3ee] underline-offset-2 hover:underline"
              >
                Download PDF
              </a>
              .
            </p>
          </article>
        </div>
        <footer className="border-t border-[#1f2428] bg-[rgba(2,4,8,0.18)] px-6 py-8 text-center">
          <p className="text-sm text-[#c6c8cb]">Copyright © 2026 Michael Chavez</p>
          <p className="mt-2 text-xs uppercase tracking-[0.18em] text-[#808892]">
            Software Engineer • AI Developer • Commissioning Engineer
          </p>
        </footer>
      </div>
    </div>
  );
}
