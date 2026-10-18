"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { GraduationCap, Award, ExternalLink } from "lucide-react";

export function EducationCertifications() {
  return (
    <section id="education" className="relative py-10 sm:py-14 max-w-3xl mx-auto px-2 sm:px-0 text-left">
      {/* Header */}
      <div className="mb-8 px-3 sm:px-4">
        <div className="text-xs font-mono uppercase tracking-widest text-[var(--mute)] mb-2">
          ACADEMICS &amp; CREDENTIALS
        </div>
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[var(--ink)]">
          Education &amp; Certifications
        </h2>
        <p className="text-sm sm:text-base text-[var(--body)] mt-1.5 max-w-xl">
          Formal foundations in computer science and targeted specializations in machine learning systems.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-2 sm:px-0">
          {/* Education Column */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[var(--mute)] mb-2 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-[var(--ink)]" />
              <span>Higher Education</span>
            </h3>

            {PORTFOLIO_DATA.education.map((edu) => (
              <div
                key={edu.id}
                className="p-5 sm:p-6 rounded-xl border border-[var(--hairline)] bg-[var(--canvas)] hover:border-[var(--hairline-strong)] transition-all"
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-[var(--surface-soft)] text-[var(--charcoal)] border border-[var(--hairline)]">
                    {edu.period}
                  </span>
                </div>

                <h4 className="text-base font-semibold text-[var(--ink)] mb-1">
                  {edu.degree}
                </h4>

                <div className="text-xs font-mono text-[var(--mute)] mb-4">
                  {edu.institution}
                </div>

                <ul className="space-y-2 text-xs text-[var(--body)] leading-relaxed">
                  {edu.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[var(--mute)] font-mono select-none">→</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Certifications Column */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[var(--mute)] mb-2 flex items-center gap-2">
              <Award className="w-4 h-4 text-[var(--ink)]" />
              <span>Certifications &amp; Courses</span>
            </h3>

            {PORTFOLIO_DATA.certifications.map((cert) => (
              <div
                key={cert.id}
                className="p-5 sm:p-6 rounded-xl border border-[var(--hairline)] bg-[var(--canvas)] hover:border-[var(--hairline-strong)] transition-all"
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-[var(--surface-soft)] text-[var(--charcoal)] border border-[var(--hairline)]">
                    {cert.date}
                  </span>
                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-[var(--mute)] hover:text-[var(--ink)] inline-flex items-center gap-1 transition-colors"
                    >
                      <span>Verify</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>

                <h4 className="text-base font-semibold text-[var(--ink)] mb-1">
                  {cert.title}
                </h4>

                <div className="text-xs font-mono text-[var(--mute)] mb-3">
                  {cert.issuer}
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded-full text-[11px] font-mono bg-[var(--surface-soft)] text-[var(--charcoal)] border border-[var(--hairline)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
    </section>
  );
}
