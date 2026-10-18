import React from "react";
import { Quote } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export function QuoteSection() {
  return (
    <section id="quote" className="relative py-8 sm:py-12 max-w-3xl mx-auto px-4 sm:px-6">
      <ScrollReveal distance={20} duration={0.6} className="flex flex-col items-center justify-center text-center gap-3">
        <Quote className="w-5 h-5 text-[var(--mute)] shrink-0 opacity-80" />

        <blockquote className="text-base sm:text-lg md:text-xl font-sans text-[var(--charcoal)] leading-relaxed tracking-tight max-w-xl">
          &ldquo;Just because you don&apos;t know how to{" "}
          <span className="font-bold text-[var(--ink)]">code</span>{" "}
          doesn&apos;t mean you can&apos;t{" "}
          <span className="font-bold text-[var(--ink)]">win in this world</span>.&rdquo;
        </blockquote>

        <div className="pt-1">
          <span className="text-xs sm:text-sm font-mono text-[var(--mute)] tracking-wide italic">
            — Vaibhav Sisinty
          </span>
        </div>
      </ScrollReveal>
    </section>
  );
}
