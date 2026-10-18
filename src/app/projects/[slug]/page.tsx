import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { ArrowLeft, ExternalLink, Check, Calendar, Tag } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { SkillIcon } from "@/components/SkillIcon";
import { ScrollReveal } from "@/components/ScrollReveal";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return PORTFOLIO_DATA.projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = PORTFOLIO_DATA.projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} | Chandan N G`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = PORTFOLIO_DATA.projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen py-12 sm:py-20 px-4 sm:px-6 max-w-3xl mx-auto">
      {/* Back button */}
      <ScrollReveal className="mb-8">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--hairline)] bg-[var(--surface-soft)] text-xs font-mono text-[var(--ink)] hover:border-[var(--hairline-strong)] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to all projects</span>
        </Link>
      </ScrollReveal>

      {/* Meta tags */}
      <ScrollReveal delay={0.05} className="flex flex-wrap items-center gap-2 text-xs font-mono mb-4">
        <span className="px-3 py-1 rounded-full bg-[var(--surface-soft)] text-[var(--charcoal)] border border-[var(--hairline)]">
          {project.category}
        </span>
        <span className="text-[var(--mute)]">•</span>
        <span className="text-[var(--mute)] flex items-center gap-1">
          <Calendar className="w-3 h-3" />
          {project.date}
        </span>
      </ScrollReveal>

      {/* Project Preview Image & Headline */}
      <ScrollReveal delay={0.08}>
        {project.imageUrl && (
          <div className="relative w-full h-64 sm:h-96 p-4 sm:p-6 rounded-2xl overflow-hidden border border-[var(--hairline)] mb-8 flex items-center justify-center bg-[var(--surface-soft)]">
            {/* Rotated Holographic Background */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/project-card-bg.jpg"
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
            />
            <div className="absolute inset-0 bg-black/25 dark:bg-black/40 pointer-events-none" />

            {/* Embedded Project Screenshot with same border radius as Curated Vibes (rounded-2xl) */}
            <div className="relative z-10 w-full h-full overflow-hidden rounded-2xl shadow-2xl border border-white/30 dark:border-white/15 bg-black/40">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover object-top select-none"
              />
            </div>
          </div>
        )}

        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[var(--ink)] mb-3">
          {project.title}
        </h1>

        <p className="text-base sm:text-lg text-[var(--body)] leading-relaxed mb-8">
          {project.tagline}
        </p>
      </ScrollReveal>

      {/* Action links */}
      <ScrollReveal delay={0.12} className="flex flex-wrap items-center gap-3 mb-8">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 h-9 rounded-full bg-[var(--primary)] text-[var(--on-primary)] text-xs font-medium hover:opacity-90 transition-opacity"
        >
          <GithubIcon className="w-4 h-4" />
          <span>View Source on GitHub</span>
        </a>

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 h-9 rounded-full border border-[var(--hairline-strong)] bg-[var(--canvas)] text-[var(--ink)] text-xs font-medium hover:bg-[var(--surface-soft)] transition-colors"
          >
            <span>Live Deployment</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        )}
      </ScrollReveal>

      {/* Architecture & Solution */}
      <ScrollReveal delay={0.15} className="space-y-8 text-base text-[var(--body)] leading-relaxed">
        <section>
          <h2 className="text-sm font-mono uppercase tracking-wider text-[var(--mute)] mb-3">
            Overview &amp; Purpose
          </h2>
          <p className="text-[var(--charcoal)] leading-relaxed">
            {project.detailedDescription || project.description}
          </p>
        </section>

        {/* Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <section>
            <h2 className="text-sm font-mono uppercase tracking-wider text-[var(--mute)] mb-4">
              Key Engineering Features
            </h2>
            <div className="rounded-xl border border-[var(--hairline)] bg-[var(--surface-soft)] p-5 sm:p-6 space-y-3">
              {project.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm text-[var(--ink)]">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Technical Specs */}
        {project.stats && (
          <section>
            <h2 className="text-sm font-mono uppercase tracking-wider text-[var(--mute)] mb-3">
              Architecture Metrics
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {project.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl border border-[var(--hairline)] bg-[var(--canvas)]"
                >
                  <div className="text-xs font-mono text-[var(--mute)]">{stat.label}</div>
                  <div className="text-base font-semibold text-[var(--ink)] mt-1">
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Technologies */}
        <section className="pt-2">
          <h2 className="text-sm font-mono uppercase tracking-wider text-[var(--mute)] mb-3 flex items-center gap-2">
            <Tag className="w-3.5 h-3.5" />
            <span>Technologies &amp; Libraries</span>
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md text-xs font-mono bg-[var(--surface-soft)] border border-[var(--hairline)] text-[var(--charcoal)]"
              >
                <SkillIcon name={tech} className="w-3.5 h-3.5 shrink-0" />
                <span>{tech}</span>
              </span>
            ))}
          </div>
        </section>
      </ScrollReveal>
    </main>
  );
}
