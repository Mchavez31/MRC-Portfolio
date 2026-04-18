"use client"
import { resumeContact } from '@/lib/resume-data'

export default function GitHubStats() {
  const { githubUsername } = resumeContact

  return (
    <div className="rounded-xl border border-[#2a2a2a]/90 bg-[rgba(8,8,10,0.63)] p-6 shadow-[0_4px_32px_rgba(0,0,0,0.25)]">
      <div className="mb-4 flex items-center justify-between">
        <div className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
          GitHub Activity
        </div>
        <a
          href={resumeContact.github}
          target="_blank"
          rel="noreferrer"
          className="text-xs text-[#888] transition hover:text-cyan-400"
        >
          View Profile →
        </a>
      </div>

      {/* GitHub Contribution Graph */}
      <div className="overflow-hidden rounded-lg border border-[#2a2a2a]/80 bg-[rgba(6,6,8,0.54)]">
        <img
          src={`https://ghchart.rshah.org/22d3ee/${githubUsername}`}
          alt="GitHub Contribution Graph"
          className="w-full"
          style={{ imageRendering: 'pixelated' }}
        />
      </div>

      {/* GitHub Stats Cards */}
      <div className="mt-4 grid grid-cols-2 gap-3">
        <div className="rounded-lg border border-[#2a2a2a]/80 bg-[rgba(6,6,8,0.54)] p-3 text-center">
          <img
            src={`https://img.shields.io/github/followers/${githubUsername}?label=Followers&style=social`}
            alt="GitHub Followers"
            className="mx-auto"
          />
        </div>
        <div className="rounded-lg border border-[#2a2a2a]/80 bg-[rgba(6,6,8,0.54)] p-3 text-center">
          <a href={resumeContact.github} target="_blank" rel="noreferrer">
            <img
              src={`https://img.shields.io/badge/Profile-${githubUsername}-cyan?style=social&logo=github`}
              alt="GitHub Profile"
              className="mx-auto"
            />
          </a>
        </div>
      </div>

      <p className="mt-3 text-center text-xs text-[#666]">
        Consistent coding activity demonstrates ongoing learning and project development
      </p>
    </div>
  )
}
