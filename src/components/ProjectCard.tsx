import React from "react";
import { Project } from "@/data/portfolio";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./Icons";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {

  return (
    <article className="group relative rounded-2xl border border-[var(--hairline)] bg-[var(--canvas)] hover:border-[var(--hairline-strong)] hover:shadow-md transition-all duration-200 overflow-hidden flex flex-col justify-between">
      <div>
        {/* 1. Holographic Backdrop with Embedded Project Screenshot */}
        <div className="relative w-full h-48 sm:h-56 p-3 sm:p-3.5 overflow-hidden border-b border-[var(--hairline)] flex items-center justify-center bg-[var(--surface-soft)]">
          {/* Rotated Holographic Background */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/project-card-bg.jpg"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 select-none pointer-events-none"
          />
          {/* Contrast & lighting overlay */}
          <div className="absolute inset-0 bg-black/25 dark:bg-black/40 pointer-events-none transition-opacity duration-300 group-hover:opacity-80" />

          {/* Embedded Project Screenshot with same border radius as Curated Vibes (rounded-2xl) */}
          <div className="relative z-10 w-full h-full overflow-hidden rounded-2xl shadow-[0_8px_20px_rgba(0,0,0,0.35)] border border-white/30 dark:border-white/15 bg-black/40 transition-all duration-300 ease-out group-hover:scale-[1.02] group-hover:-translate-y-0.5 group-hover:shadow-[0_12px_28px_rgba(0,0,0,0.5)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.imageUrl || "/projects/placeholder.svg"}
              alt={`${project.title} Preview`}
              className="w-full h-full object-cover object-top select-none"
              loading="lazy"
            />
          </div>
        </div>

        {/* 2. Project Details Content */}
        <div className="p-4 xs:p-5 sm:p-6 space-y-3">
          {/* Project Name & Actions (Borderless Hero Style for GitHub & Live Demo) */}
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-lg sm:text-xl font-semibold tracking-tight text-[var(--ink)] min-w-0 break-words">
              {project.title}
            </h3>

            {/* Action Icons: Borderless, Hero Section Style */}
            <div className="flex items-center gap-2 shrink-0 text-[var(--charcoal)]">
              {/* GitHub Repo Link (Icon) */}
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub Repository"
                aria-label={`View ${project.title} on GitHub`}
                className="hover:text-[var(--ink)] hover:scale-115 active:scale-95 transition-all p-1"
              >
                <GithubIcon className="w-5 h-5 sm:w-5.5 sm:h-5.5" />
              </a>

              {/* Live Demo (if exists) */}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Live Demo"
                  aria-label={`Open live demo of ${project.title}`}
                  className="hover:text-[var(--ink)] hover:scale-115 active:scale-95 transition-all p-1"
                >
                  <ExternalLink className="w-5 h-5 sm:w-5.5 sm:h-5.5" />
                </a>
              )}
            </div>
          </div>

          {/* One-liner */}
          <p className="text-xs sm:text-sm text-[var(--body)] leading-relaxed">
            {project.tagline}
          </p>
        </div>
      </div>

      {/* 3. Technologies Used: Clean Pills */}
      <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-3.5 border-t border-[var(--hairline)]/70 flex items-center gap-1.5 sm:gap-2 flex-wrap">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] sm:text-xs font-mono font-medium border border-[var(--hairline)] bg-[var(--surface-soft)] text-[var(--charcoal)] hover:text-[var(--ink)] hover:border-[var(--hairline-strong)] transition-all select-none"
          >
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
}
