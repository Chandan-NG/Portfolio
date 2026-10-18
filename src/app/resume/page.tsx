import React from "react";
import Link from "next/link";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Download, ArrowLeft, FileText } from "lucide-react";
import { GoogleDriveIcon } from "@/components/Icons";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function ResumePage() {
  const driveViewUrl = PORTFOLIO_DATA.personal.resumeDriveUrl;
  const driveEmbedUrl = "https://drive.google.com/file/d/1gmWaiAsARkfLWVWWGHjWuei1Fi-REwSK/preview";

  return (
    <main className="w-full py-10 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Top Navigation */}
        <ScrollReveal className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--hairline)] bg-[var(--surface-soft)] text-xs font-mono text-[var(--ink)] hover:border-[var(--hairline-strong)] hover:text-[var(--ink)] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>
        </ScrollReveal>

        {/* Page Heading & Action Button */}
        <ScrollReveal delay={0.06} className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--ink)]">
            Resume
          </h1>

          <div className="flex items-center gap-2">
            <a
              href="/resume.pdf"
              download="Chandan_NG_CV.pdf"
              className="inline-flex items-center gap-2 px-5 h-9 rounded-full bg-[var(--primary)] text-[var(--on-primary)] text-xs font-medium hover:opacity-90 active:scale-[0.98] transition-all shadow-none self-start sm:self-auto"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Resume</span>
            </a>
          </div>
        </ScrollReveal>

        {/* Document Viewer Frame - Embedded actual file itself */}
        <ScrollReveal delay={0.12} scale={0.99}>
          {/* Viewer Toolbar Header */}
          <div className="rounded-t-xl border border-[var(--hairline)] bg-[var(--surface-soft)] px-4 py-3 flex items-center justify-between text-xs font-mono text-[var(--mute)]">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-[var(--ink)]" />
              <span className="text-[var(--ink)] font-medium">Chandan_NG_CV.pdf</span>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={driveViewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--charcoal)] hover:text-[var(--ink)] hover:scale-115 active:scale-95 transition-all p-1 inline-flex items-center"
                title="Open in Google Drive"
                aria-label="Open in Google Drive"
              >
                <GoogleDriveIcon className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
              </a>
            </div>
          </div>

          {/* In-Environment Document Frame */}
          <div className="border-x border-b border-[var(--hairline)] bg-[var(--canvas)] rounded-b-xl overflow-hidden shadow-sm">
            <iframe
              src={driveEmbedUrl}
              className="w-full h-[520px] xs:h-[620px] sm:h-[800px] md:h-[1050px] border-0 bg-white"
              title="Chandan N G Resume"
              allow="autoplay"
            />
          </div>
        </ScrollReveal>
      </div>
    </main>
  );
}
