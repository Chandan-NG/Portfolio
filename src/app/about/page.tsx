import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Mail, Phone, FileText } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon, TwitterXIcon } from "@/components/Icons";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "About | Chandan N G",
  description:
    "About Chandan N G — Vibe coder, AI enthusiast, and full-stack developer turning ideas into real, working products.",
};

export default function AboutPage() {
  return (
    <main className="w-full py-10 sm:py-16">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 space-y-16 sm:space-y-20 text-left">
        {/* Back Navigation */}
        <ScrollReveal>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--hairline)] bg-[var(--surface-soft)] text-xs font-mono text-[var(--ink)] hover:border-[var(--hairline-strong)] hover:text-[var(--ink)] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>
        </ScrollReveal>

        {/* 01 Header & Core Persona */}
        <ScrollReveal className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--ink)]">
              From vibes to working software.
            </h1>
            <p className="text-sm sm:text-base font-mono text-[var(--charcoal)] pt-1">
              Curious · Experimental · AI-Powered
            </p>
          </div>

          <div className="space-y-4 text-base sm:text-lg text-[var(--body)] leading-relaxed">
            <p>
              I&apos;m <strong className="text-[var(--ink)] font-semibold">Chandan N G</strong> — a{" "}
              <strong className="text-[var(--ink)] font-semibold">vibe coder</strong>,{" "}
              <strong className="text-[var(--ink)] font-semibold">AI enthusiast</strong>, and{" "}
              <strong className="text-[var(--ink)] font-semibold">full-stack developer</strong> who
              loves turning ideas into real, working products. I experiment with AI tools, explore
              new technologies, and build things that start as random thoughts and end up as actual
              projects.
            </p>
            <p>
              From <strong className="text-[var(--ink)] font-semibold">AI-powered learning tools</strong> to{" "}
              <strong className="text-[var(--ink)] font-semibold">agentic RAG systems</strong> and{" "}
              <strong className="text-[var(--ink)] font-semibold">autonomous coding assistants</strong>, I&apos;m
              interested in seeing how far an idea can go when curiosity meets code.
            </p>
            <p className="text-[var(--ink)] font-medium italic border-l-2 border-[var(--hairline-strong)] pl-4 py-1">
              &ldquo;I don&apos;t need to know everything before I start building. I just need an
              idea, the curiosity to explore it, and the patience to make it work.&rdquo;
            </p>
          </div>

          {/* Cardless Quick Metadata Row */}
          <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 border-y border-[var(--hairline)] py-5 text-xs font-mono">
            <div>
              <span className="text-[var(--mute)] block mb-1">LOCATION</span>
              <span className="text-[var(--ink)] font-medium">
                Bengaluru, India
              </span>
            </div>
            <div>
              <span className="text-[var(--mute)] block mb-1">STATUS</span>
              <span className="text-[var(--ink)] font-medium">
                Open to opportunities
              </span>
            </div>
            <div>
              <span className="text-[var(--mute)] block mb-1">FOCUS</span>
              <span className="text-[var(--ink)] font-medium">
                AI · Web Development · Vibe Coding
              </span>
            </div>
          </div>
        </ScrollReveal>

        {/* 02 How It Started */}
        <ScrollReveal className="space-y-4">
          <div className="text-xs font-mono uppercase tracking-widest text-[var(--mute)]">
            JOURNEY
          </div>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[var(--ink)]">
            How it started
          </h2>
          <div className="space-y-4 text-sm sm:text-base text-[var(--body)] leading-relaxed">
            <p>
              It started with curiosity — wanting to understand how a few lines of code could turn
              into something useful.
            </p>
            <p>
              During my <strong className="text-[var(--ink)] font-semibold">B.E. in Computer Science and Engineering (Data Science)</strong> at{" "}
              <strong className="text-[var(--ink)] font-semibold">AMC Engineering College</strong>, I
              explored programming, web development, data analytics, and the fundamentals of
              software engineering. Over time, I found myself drawn toward something even more
              exciting: building applications with AI.
            </p>
            <p className="text-[var(--ink)] font-medium">That&apos;s where the fun really began.</p>
            <p>
              I started experimenting with <strong className="text-[var(--ink)] font-semibold">LLMs</strong>,{" "}
              <strong className="text-[var(--ink)] font-semibold">retrieval-augmented generation</strong>,{" "}
              <strong className="text-[var(--ink)] font-semibold">AI agents</strong>, and different
              ways to connect intelligent models with real applications. I wasn&apos;t interested in AI
              just because it was trending. I wanted to build things with it, understand its
              possibilities, and discover where it could actually be useful.
            </p>
            <p>
              Today, my approach is a mix of traditional development and{" "}
              <strong className="text-[var(--ink)] font-semibold">vibe coding</strong>. I use
              AI-assisted workflows to explore ideas, speed up implementation, troubleshoot
              problems, and iterate on projects — while learning along the way.
            </p>
            <p className="border-l-2 border-[var(--ink)] pl-4 py-0.5 text-[var(--ink)] font-medium">
              For me, vibe coding isn&apos;t about avoiding the technical details. It&apos;s about lowering
              the barrier between having an idea and making something real.
            </p>
          </div>
        </ScrollReveal>

        {/* 03 Experience (Cardless Section) */}
        <ScrollReveal className="space-y-4">
          <div className="border-b border-[var(--hairline)] pb-3">
            <div className="text-xs font-mono uppercase tracking-widest text-[var(--mute)]">
              CAREER TRACK
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[var(--ink)]">
              Experience
            </h2>
          </div>

          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-[var(--ink)]">
                  Full Stack Development Intern
                </h3>
                <p className="text-xs sm:text-sm font-mono text-[var(--charcoal)]">
                  QSpiders · Bengaluru, India
                </p>
              </div>
              <span className="text-xs font-mono text-[var(--mute)] shrink-0">
                Jan 2026 – May 2026
              </span>
            </div>
          </div>
        </ScrollReveal>

        {/* 04 Education (Cardless Section) */}
        <ScrollReveal className="space-y-4">
          <div className="border-b border-[var(--hairline)] pb-3">
            <div className="text-xs font-mono uppercase tracking-widest text-[var(--mute)]">
              ACADEMICS
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[var(--ink)]">
              Education
            </h2>
          </div>

          <div className="space-y-1.5">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <h3 className="text-base sm:text-lg font-semibold text-[var(--ink)]">
                B.E. in Computer Science &amp; Engineering (Data Science)
              </h3>
              <span className="text-xs font-mono text-[var(--mute)] shrink-0">
                2022 – 2026
              </span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <p className="text-xs sm:text-sm font-mono text-[var(--charcoal)]">
                AMC Engineering College · Bengaluru, India
              </p>
              <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-medium shrink-0">
                CGPA: 8.34 / 10
              </span>
            </div>
          </div>
        </ScrollReveal>

        {/* 05 Connect Card */}
        <ScrollReveal className="pt-2">
          <div className="rounded-2xl border border-[var(--hairline)] bg-[var(--surface-soft)] p-5 sm:p-8 space-y-4">
            <div className="space-y-1.5">
              <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-[var(--ink)]">
                Have an idea? Let&apos;s make it happen.
              </h3>
              <p className="text-sm sm:text-base text-[var(--charcoal)] leading-relaxed">
                Whether it&apos;s a cool idea, an opportunity to collaborate, or just a quick hello — I&apos;d love to hear from you.
              </p>
            </div>

            {/* Social & Contact Icons as in hero section */}
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 pt-2 text-[var(--charcoal)]">
              {/* Email */}
              <a
                href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                title="Email (Gmail)"
                aria-label="Send Email"
                className="hover:text-[var(--ink)] hover:scale-115 active:scale-95 transition-all p-1"
              >
                <Mail className="w-5 h-5 sm:w-5.5 sm:h-5.5" />
              </a>

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

              {/* X / Twitter */}
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
          </div>
        </ScrollReveal>

      </article>
    </main>
  );
}
