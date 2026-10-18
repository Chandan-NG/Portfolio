"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { ProjectCard } from "./ProjectCard";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./ScrollReveal";

const DOMAINS = [
  "All",
  "AI & Agents",
  "Web Development",
  "Data & Analytics",
  "Developer Tools",
];

export function ProjectsCatalog() {
  const [selectedDomain, setSelectedDomain] = useState<string>("All");

  const filteredProjects =
    selectedDomain === "All"
      ? PORTFOLIO_DATA.projects
      : PORTFOLIO_DATA.projects.filter((p) => p.category === selectedDomain);

  return (
    <div className="space-y-8 max-w-3xl mx-auto px-2 sm:px-0">
      {/* Domain Filter Pills */}
      <ScrollReveal delay={0.06} className="flex flex-wrap items-center justify-center sm:justify-start gap-2 px-3 sm:px-4">
        {DOMAINS.map((domain) => {
          const count =
            domain === "All"
              ? PORTFOLIO_DATA.projects.length
              : PORTFOLIO_DATA.projects.filter((p) => p.category === domain).length;

          const isActive = selectedDomain === domain;

          return (
            <button
              key={domain}
              type="button"
              onClick={() => setSelectedDomain(domain)}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium transition-all cursor-pointer ${
                isActive
                  ? "bg-[var(--primary)] text-[var(--on-primary)] shadow-2xs"
                  : "border border-[var(--hairline)] bg-[var(--surface-soft)] text-[var(--charcoal)] hover:text-[var(--ink)] hover:border-[var(--hairline-strong)]"
              }`}
            >
              <span>{domain}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  isActive
                    ? "bg-white/20 text-white"
                    : "bg-[var(--canvas)] text-[var(--mute)]"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </ScrollReveal>

      {/* Filtered Project Cards Grid with Staggered Scroll Animation */}
      <StaggerContainer key={selectedDomain} staggerDelay={0.06} className="grid grid-cols-1 md:grid-cols-2 gap-5 px-2 sm:px-0">
        {filteredProjects.map((project) => (
          <StaggerItem key={project.id}>
            <ProjectCard project={project} />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  );
}
