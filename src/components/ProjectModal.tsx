"use client";

import React, { useEffect } from "react";
import { Project } from "@/data/portfolio";
import { X, ExternalLink, Check } from "lucide-react";
import { GithubIcon } from "./Icons";
import { SkillIcon } from "./SkillIcon";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-xl border border-[var(--hairline)] bg-[var(--canvas)] p-6 sm:p-8 text-[var(--body)] shadow-2xl transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 w-8 h-8 rounded-full border border-[var(--hairline)] bg-[var(--surface-soft)] flex items-center justify-center text-[var(--charcoal)] hover:text-[var(--ink)] transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="mb-6 pr-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--hairline)] bg-[var(--surface-soft)] text-xs font-mono text-[var(--charcoal)] mb-3">
            <span>{project.category}</span>
            <span>•</span>
            <span>{project.date}</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-semibold text-[var(--ink)] tracking-tight mb-2">
            {project.title}
          </h3>

          <p className="text-sm sm:text-base text-[var(--charcoal)] leading-relaxed">
            {project.tagline}
          </p>
        </div>

        {/* Project Preview Image */}
        {project.imageUrl && (
          <div className="w-full h-48 sm:h-56 rounded-xl overflow-hidden border border-[var(--hairline)] mb-6 bg-[var(--surface-soft)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-full object-cover object-top"
            />
          </div>
        )}

        {/* Detailed Overview */}
        <div className="space-y-6 text-sm sm:text-base pt-2">
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--mute)] mb-2">
              System Architecture &amp; Solution
            </h4>
            <p className="leading-relaxed text-[var(--body)]">
              {project.detailedDescription || project.description}
            </p>
          </div>

          {/* Key Engineering Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--mute)] mb-3">
                Key Engineering Deliverables
              </h4>
              <ul className="space-y-2">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-[var(--charcoal)]">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Metrics / Technical Specs */}
          {project.stats && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2">
              {project.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-lg border border-[var(--hairline)] bg-[var(--surface-soft)]"
                >
                  <div className="text-xs text-[var(--mute)] font-mono">{stat.label}</div>
                  <div className="text-sm font-semibold text-[var(--ink)] mt-0.5">
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Tech Stack Pills with Icons */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-[var(--mute)] mb-2.5">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono bg-[var(--surface-soft)] border border-[var(--hairline)] text-[var(--charcoal)]"
                >
                  <SkillIcon name={tech} className="w-3.5 h-3.5 shrink-0" />
                  <span>{tech}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-3 pt-4">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 h-9 rounded-full bg-[var(--primary)] text-[var(--on-primary)] text-xs font-medium hover:opacity-90 transition-opacity"
            >
              <GithubIcon className="w-4 h-4" />
              <span>View Repository on GitHub</span>
            </a>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 h-9 rounded-full border border-[var(--hairline-strong)] bg-[var(--canvas)] text-[var(--ink)] text-xs font-medium hover:bg-[var(--surface-soft)] transition-colors"
              >
                <span>Live Project</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
