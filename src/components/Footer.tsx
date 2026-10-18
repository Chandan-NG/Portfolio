"use client";

import React, { useState, useEffect } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Mail, Phone, FileText } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterXIcon } from "./Icons";
import { ScrollReveal } from "./ScrollReveal";

export function Footer() {
  const [year, setYear] = useState(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="w-full bg-[var(--canvas)] py-8 px-4 sm:px-6 transition-colors border-t border-[var(--hairline)]/60">
      <ScrollReveal distance={14} duration={0.45} className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm font-mono text-[var(--body)]">
        {/* Left side: Highlighted creator name (unlinked, no background, distinct font styling) */}
        <div className="text-center sm:text-left">
          <span>
            Designed &amp; built by{" "}
            <span className="font-sans font-bold text-[var(--ink)] tracking-normal">
              Chandan N G
            </span>
            {" "}&copy; {year}
          </span>
        </div>

        {/* Right side: Contact Icons (Only social/contact, no resume) */}
        <div className="flex flex-wrap items-center justify-center sm:justify-end gap-3 sm:gap-4 text-[var(--charcoal)]">
          {/* GitHub */}
          <a
            href={PORTFOLIO_DATA.personal.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub Profile"
            aria-label="GitHub Profile"
            className="hover:text-[var(--ink)] hover:scale-115 active:scale-95 transition-all p-1"
          >
            <GithubIcon className="w-5 h-5 sm:w-5.5 sm:h-5.5" />
          </a>

          {/* LinkedIn */}
          <a
            href={PORTFOLIO_DATA.personal.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn Profile"
            aria-label="LinkedIn Profile"
            className="hover:text-[var(--ink)] hover:scale-115 active:scale-95 transition-all p-1"
          >
            <LinkedinIcon className="w-5 h-5 sm:w-5.5 sm:h-5.5" />
          </a>

          {/* Twitter / X */}
          <a
            href={PORTFOLIO_DATA.personal.twitterUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="X / Twitter Handle"
            aria-label="X / Twitter Handle"
            className="hover:text-[var(--ink)] hover:scale-115 active:scale-95 transition-all p-1"
          >
            <TwitterXIcon className="w-5 h-5 sm:w-5.5 sm:h-5.5" />
          </a>

          {/* Email */}
          <a
            href={`mailto:${PORTFOLIO_DATA.personal.email}`}
            title="Email (Gmail)"
            aria-label="Send Email"
            className="hover:text-[var(--ink)] hover:scale-115 active:scale-95 transition-all p-1"
          >
            <Mail className="w-5 h-5 sm:w-5.5 sm:h-5.5" />
          </a>

          {/* Phone */}
          <a
            href={`tel:${PORTFOLIO_DATA.personal.phone}`}
            title={`Call: ${PORTFOLIO_DATA.personal.phone}`}
            aria-label={`Call Phone: ${PORTFOLIO_DATA.personal.phone}`}
            className="hover:text-[var(--ink)] hover:scale-115 active:scale-95 transition-all p-1"
          >
            <Phone className="w-5 h-5 sm:w-5.5 sm:h-5.5" />
          </a>

          {/* Resume / CV Document */}
          <a
            href={PORTFOLIO_DATA.personal.resumeDriveUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="View Resume (Google Drive)"
            aria-label="View Resume (Google Drive)"
            className="hover:text-[var(--ink)] hover:scale-115 active:scale-95 transition-all p-1"
          >
            <FileText className="w-5 h-5 sm:w-5.5 sm:h-5.5" />
          </a>
        </div>
      </ScrollReveal>
    </footer>
  );
}
