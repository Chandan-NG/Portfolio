import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ProjectsCatalog } from "@/components/ProjectsCatalog";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Projects | Chandan N G",
  description:
    "Exploring AI, building intelligent systems, and turning ideas into working products. Projects by Chandan N G.",
};

export default function ProjectsPage() {
  return (
    <main className="w-full py-10 sm:py-16">
      <div className="max-w-3xl mx-auto px-2 sm:px-0 mb-8">
        {/* Back Link */}
        <ScrollReveal className="mb-8 px-3 sm:px-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--hairline)] bg-[var(--surface-soft)] text-xs font-mono text-[var(--ink)] hover:border-[var(--hairline-strong)] hover:text-[var(--ink)] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>
        </ScrollReveal>

        {/* Page Heading */}
        <ScrollReveal delay={0.05} className="mb-8 px-3 sm:px-4 space-y-2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--ink)]">
            Projects
          </h1>
          <p className="text-base sm:text-lg text-[var(--charcoal)] leading-relaxed">
            Exploring AI, building intelligent systems, and turning ideas into working products.
          </p>
        </ScrollReveal>
      </div>

      {/* Projects Catalog with Domain Filters */}
      <ProjectsCatalog />
    </main>
  );
}
