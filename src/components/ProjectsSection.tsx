"use client";

import React from "react";
import Link from "next/link";
import { PORTFOLIO_DATA, Project } from "@/data/portfolio";
import { ProjectCard } from "./ProjectCard";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./ScrollReveal";

interface ProjectsSectionProps {
  showAllButton?: boolean;
}

const FEATURED_ORDER = [
  "studylens-ai",
  "agentic-rag-pdf-chat",
  "meridian-7x",
  "hr-analytics-dashboard",
];

export function ProjectsSection({
  showAllButton = true,
}: ProjectsSectionProps) {
  // Ordered 4 featured projects requested by user
  const featuredProjects = FEATURED_ORDER
    .map((id) => PORTFOLIO_DATA.projects.find((p) => p.id === id))
    .filter((p): p is Project => Boolean(p));

  return (
    <section id="projects" className="relative py-10 sm:py-14 max-w-3xl mx-auto px-2 sm:px-0 text-left scroll-mt-20">
      {/* Section Header: FEATURED in DISPATCH style & Projects heading */}
      <ScrollReveal className="mb-8 px-3 sm:px-4">
        <div className="text-xs font-mono uppercase tracking-widest text-[var(--mute)] mb-2">
          FEATURED
        </div>
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[var(--ink)]">
          Projects
        </h2>
      </ScrollReveal>

      {/* 4 Featured Projects Grid with Staggered Scroll Reveal */}
      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-5 px-2 sm:px-0">
        {featuredProjects.map((project) => (
          <StaggerItem key={project.id}>
            <ProjectCard project={project} />
          </StaggerItem>
        ))}
      </StaggerContainer>

      {/* Explore All Projects button (Styled as button-33 with spinning gradient border & NO icon inside) */}
      {showAllButton && (
        <ScrollReveal delay={0.15} className="flex justify-center pt-8 sm:pt-10">
          <Link
            href="/projects"
            className="group relative inline-flex h-11 items-center justify-center overflow-hidden rounded-full p-[1.5px] cursor-pointer transition-transform duration-200 active:scale-95 shadow-xs"
          >
            {/* Continuously animated gradient border */}
            <div className="absolute inset-0 z-0 overflow-hidden rounded-full bg-[var(--hairline)]">
              <div
                className="absolute top-1/2 left-1/2 size-48 -translate-x-1/2 -translate-y-1/2 animate-spin bg-[conic-gradient(from_0deg,transparent_0%,transparent_35%,#3b82f6_50%,transparent_65%,transparent_85%,#f97316_100%)]"
                style={{ animationDuration: "2.5s" }}
              />
              <div className="absolute inset-[1.5px] rounded-full bg-[var(--canvas)] transition-colors group-hover:bg-[var(--surface-soft)]" />
            </div>

            {/* Button label with NO icon inside */}
            <span className="relative z-10 px-7 py-2.5 font-mono text-xs sm:text-sm font-semibold tracking-wide text-[var(--ink)] select-none">
              Explore All Projects
            </span>
          </Link>
        </ScrollReveal>
      )}
    </section>
  );
}
