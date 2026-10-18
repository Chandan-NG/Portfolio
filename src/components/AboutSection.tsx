"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Cpu, Code2, Layers, CheckCircle2 } from "lucide-react";
import { InteractiveAvatar } from "./InteractiveAvatar";

export function AboutSection() {
  return (
    <section id="about" className="py-14 sm:py-18">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="mb-8">
          <div className="text-xs font-mono uppercase tracking-widest text-[var(--mute)] mb-2">
            README.md • 01
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[var(--ink)]">
            About &amp; Philosophy
          </h2>
        </div>

        {/* Twitter/X-Inspired Profile Summary Card */}
        <div className="rounded-xl border border-[var(--hairline)] bg-[var(--surface-soft)] p-5 sm:p-6 mb-8 transition-all">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4 pb-2">
            <div className="flex items-center gap-3.5">
              <InteractiveAvatar className="w-12 h-12 rounded-full shrink-0 shadow-xs" />
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="font-semibold text-base text-[var(--ink)]">
                    {PORTFOLIO_DATA.personal.name}
                  </h3>
                  <CheckCircle2 className="w-4 h-4 text-sky-500 fill-sky-500 text-white" />
                </div>
                <div className="text-xs font-mono text-[var(--mute)]">
                  {PORTFOLIO_DATA.personal.handle} • {PORTFOLIO_DATA.personal.location}
                </div>
              </div>
            </div>

            {/* Quick action pill */}
            <a
              href={`mailto:${PORTFOLIO_DATA.personal.email}`}
              className="px-4 py-1.5 rounded-full border border-[var(--hairline-strong)] bg-[var(--canvas)] text-xs font-medium text-[var(--ink)] hover:bg-[var(--surface-soft)] transition-colors"
            >
              Contact Me
            </a>
          </div>

          <p className="text-sm sm:text-base text-[var(--charcoal)] leading-relaxed mb-4">
            {PORTFOLIO_DATA.personal.bio}
          </p>

          <div className="flex flex-wrap gap-2 text-xs font-mono">
            <span className="px-3 py-1 rounded-full bg-[var(--canvas)] border border-[var(--hairline)] text-[var(--ink)]">
              🟢 Agentic AI &amp; LangGraph
            </span>
            <span className="px-3 py-1 rounded-full bg-[var(--canvas)] border border-[var(--hairline)] text-[var(--ink)]">
              ⚡ Next.js &amp; TypeScript
            </span>
            <span className="px-3 py-1 rounded-full bg-[var(--canvas)] border border-[var(--hairline)] text-[var(--ink)]">
              📊 Data Analytics &amp; Full-Stack
            </span>
          </div>
        </div>

        {/* Prose Section - Markdown style reading column */}
        <div className="space-y-6 text-base text-[var(--body)] leading-relaxed">
          <p>
            I approach software development with the belief that systems should be as dependable as they are intuitive. Whether designing a self-correcting multi-agent RAG pipeline or fine-tuning fluid interfaces, I value high signal-to-noise code, verifiable results, and clean visual restraint.
          </p>

          <p>
            My current technical focus centers on bridging language model agents with deterministic production systems. Rather than treating AI outputs as opaque, I build architectures that grade context relevance, detect hallucinations, and provide auditable reference trails.
          </p>

          {/* Three Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4">
            <div className="p-4 rounded-xl border border-[var(--hairline)] bg-[var(--canvas)] space-y-2">
              <div className="w-8 h-8 rounded-full bg-[var(--surface-soft)] border border-[var(--hairline)] flex items-center justify-center text-[var(--ink)]">
                <Cpu className="w-4 h-4" />
              </div>
              <h4 className="font-medium text-sm text-[var(--ink)]">Agentic Systems</h4>
              <p className="text-xs text-[var(--body)] leading-relaxed">
                Autonomous query routing, self-reflection loops, and multi-agent workflows with LangGraph and ChromaDB.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-[var(--hairline)] bg-[var(--canvas)] space-y-2">
              <div className="w-8 h-8 rounded-full bg-[var(--surface-soft)] border border-[var(--hairline)] flex items-center justify-center text-[var(--ink)]">
                <Code2 className="w-4 h-4" />
              </div>
              <h4 className="font-medium text-sm text-[var(--ink)]">Full-Stack Craft</h4>
              <p className="text-xs text-[var(--body)] leading-relaxed">
                Next.js App Router, modern TypeScript, performant client-side state, and type-safe APIs.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-[var(--hairline)] bg-[var(--canvas)] space-y-2">
              <div className="w-8 h-8 rounded-full bg-[var(--surface-soft)] border border-[var(--hairline)] flex items-center justify-center text-[var(--ink)]">
                <Layers className="w-4 h-4" />
              </div>
              <h4 className="font-medium text-sm text-[var(--ink)]">Intentional Design</h4>
              <p className="text-xs text-[var(--body)] leading-relaxed">
                Zero gratuitous noise. Clear typography, pill geometry, accessible touch targets, and fluid viewports.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
