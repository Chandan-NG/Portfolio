"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Mail, Copy, Check, Send, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterXIcon } from "./Icons";

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    setSubmitted(true);
    // Construct mailto link fallback
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formState.name}`);
    const body = encodeURIComponent(`From: ${formState.name} (${formState.email})\n\nMessage:\n${formState.message}`);
    window.location.href = `mailto:${PORTFOLIO_DATA.personal.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative py-10 sm:py-14 max-w-3xl mx-auto px-2 sm:px-0 text-left">
      {/* Section Header */}
      <div className="mb-8 px-3 sm:px-4">
        <div className="text-xs font-mono uppercase tracking-widest text-[var(--mute)] mb-2">
          CONNECT
        </div>
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[var(--ink)]">
          Initiate Conversation
        </h2>
        <p className="text-sm sm:text-base text-[var(--body)] mt-1.5 max-w-xl">
          Interested in collaborating on AI agents, full-stack systems, or discussing open engineering opportunities?
        </p>
      </div>

      <div className="px-2 sm:px-0 space-y-8">
        {/* Quick Action Email Pill Strip */}
        <div className="rounded-xl border border-[var(--hairline)] bg-[var(--surface-soft)] p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[var(--canvas)] border border-[var(--hairline)] flex items-center justify-center text-[var(--ink)] shrink-0">
              <Mail className="w-4 h-4" />
            </div>
            <div className="text-left">
              <div className="text-xs font-mono text-[var(--mute)]">Direct Electronic Mail</div>
              <div className="text-sm sm:text-base font-semibold text-[var(--ink)] font-mono truncate select-all">
                {PORTFOLIO_DATA.personal.email}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={handleCopyEmail}
              type="button"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 h-9 rounded-full border border-[var(--hairline)] bg-[var(--canvas)] text-xs font-medium text-[var(--ink)] hover:border-[var(--hairline-strong)] transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[var(--mute)]" />
                  <span>Copy Address</span>
                </>
              )}
            </button>

            <a
              href={`mailto:${PORTFOLIO_DATA.personal.email}`}
              className="flex-1 sm:flex-none inline-flex items-center justify-center px-4 h-9 rounded-full bg-[var(--primary)] text-[var(--on-primary)] text-xs font-medium hover:opacity-90 transition-opacity"
            >
              Open Mail
            </a>
          </div>
        </div>

        {/* Contact Message Form */}
        <div className="rounded-xl border border-[var(--hairline)] bg-[var(--canvas)] p-6 sm:p-8">
          <h3 className="text-base font-semibold text-[var(--ink)] mb-4">
            Send a Direct Dispatch
          </h3>

          {submitted ? (
            <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-sm flex items-center gap-2">
              <Check className="w-4 h-4 shrink-0" />
              <span>Thank you! Your email client has been opened with your pre-filled dispatch.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-[var(--mute)] mb-1.5">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="Ada Lovelace"
                    className="w-full h-10 px-4 rounded-full border border-[var(--hairline)] bg-[var(--surface-soft)] text-sm text-[var(--ink)] placeholder:text-[var(--mute)] focus:bg-[var(--canvas)] focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring)] transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-[var(--mute)] mb-1.5">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="ada@example.com"
                    className="w-full h-10 px-4 rounded-full border border-[var(--hairline)] bg-[var(--surface-soft)] text-sm text-[var(--ink)] placeholder:text-[var(--mute)] focus:bg-[var(--canvas)] focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring)] transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-mono text-[var(--mute)] mb-1.5">
                  Message / Project Scope
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  placeholder="Tell me about your project, team, or opportunity..."
                  className="w-full p-4 rounded-xl border border-[var(--hairline)] bg-[var(--surface-soft)] text-sm text-[var(--ink)] placeholder:text-[var(--mute)] focus:bg-[var(--canvas)] focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring)] transition-all resize-none"
                />
              </div>

              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 h-10 rounded-full bg-[var(--primary)] text-[var(--on-primary)] text-sm font-medium hover:opacity-90 active:scale-[0.98] transition-all"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message</span>
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Social Presence Links Strip */}
        <div className="mt-8 pt-4 flex flex-wrap items-center justify-center gap-3">
          <a
            href={PORTFOLIO_DATA.personal.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--hairline)] bg-[var(--surface-soft)] text-xs font-medium text-[var(--charcoal)] hover:text-[var(--ink)] hover:border-[var(--hairline-strong)] transition-colors"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>GitHub</span>
            <ArrowUpRight className="w-3 h-3 text-[var(--mute)]" />
          </a>

          <a
            href={PORTFOLIO_DATA.personal.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--hairline)] bg-[var(--surface-soft)] text-xs font-medium text-[var(--charcoal)] hover:text-[var(--ink)] hover:border-[var(--hairline-strong)] transition-colors"
          >
            <LinkedinIcon className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
            <ArrowUpRight className="w-3 h-3 text-[var(--mute)]" />
          </a>

          <a
            href={PORTFOLIO_DATA.personal.twitterUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--hairline)] bg-[var(--surface-soft)] text-xs font-medium text-[var(--charcoal)] hover:text-[var(--ink)] hover:border-[var(--hairline-strong)] transition-colors"
          >
            <TwitterXIcon className="w-3.5 h-3.5" />
            <span>X / Twitter</span>
            <ArrowUpRight className="w-3 h-3 text-[var(--mute)]" />
          </a>
        </div>
      </div>
    </section>
  );
}
