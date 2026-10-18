"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Calendar, MapPin } from "lucide-react";

export function ExperienceSection() {
  return (
    <section id="experience" className="relative py-10 sm:py-14 max-w-3xl mx-auto px-2 sm:px-0 text-left">
      {/* Header */}
      <div className="mb-8 px-3 sm:px-4">
        <div className="text-xs font-mono uppercase tracking-widest text-[var(--mute)] mb-2">
          TIMELINE
        </div>
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[var(--ink)]">
          Experience &amp; Engineering Track
        </h2>
        <p className="text-sm sm:text-base text-[var(--body)] mt-1.5">
          Timeline of software engineering roles, independent systems development, and collaborative projects.
        </p>
      </div>

      {/* Feed / Timeline Container */}
      <div className="relative pl-6 sm:pl-8 border-l border-[var(--hairline-strong)] space-y-10 px-2 sm:px-0">
          {PORTFOLIO_DATA.experience.map((item) => (
            <div key={item.id} className="relative group">
              {/* Timeline dot */}
              <div
                className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-[var(--canvas)] ${
                  item.current ? "bg-emerald-500 ring-4 ring-emerald-500/20" : "bg-[var(--mute)]"
                }`}
              />

              {/* Feed Card */}
              <div className="rounded-xl border border-[var(--hairline)] bg-[var(--canvas)] p-5 sm:p-6 transition-colors hover:border-[var(--hairline-strong)]">
                {/* Meta pills */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-base sm:text-lg font-semibold text-[var(--ink)]">
                      {item.role}
                    </span>
                    {item.current && (
                      <span className="px-2 py-0.5 rounded-full text-[11px] font-mono font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                        Present
                      </span>
                    )}
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-[var(--charcoal)] bg-[var(--surface-soft)] border border-[var(--hairline)]">
                    <Calendar className="w-3 h-3 text-[var(--mute)]" />
                    <span>{item.period}</span>
                  </div>
                </div>

                {/* Company & Location */}
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[var(--mute)] mb-4">
                  <span className="text-[var(--charcoal)] font-medium">{item.company}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {item.location}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-[var(--body)] leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Key Achievements */}
                <ul className="space-y-2 mb-5">
                  {item.achievements.map((ach, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[var(--charcoal)]">
                      <span className="text-[var(--mute)] mt-0.5 select-none font-mono">→</span>
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-[var(--surface-soft)] text-[var(--charcoal)] border border-[var(--hairline)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
    </section>
  );
}
