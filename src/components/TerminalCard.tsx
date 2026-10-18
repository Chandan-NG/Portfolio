"use client";

import React, { useState } from "react";
import { Check, Copy } from "lucide-react";

interface CommandItem {
  id: string;
  name: string;
  cmd: string;
  output: { type: "comment" | "info" | "success" | "command"; text: string }[];
}

const COMMANDS: CommandItem[] = [
  {
    id: "profile",
    name: "whoami",
    cmd: "curl -s https://chandan-ng.dev/profile",
    output: [
      { type: "comment", text: "# Developer Identity & Focus" },
      { type: "info", text: "Name:        Chandan N G" },
      { type: "info", text: "Role:        AI Engineer & Full-Stack Developer" },
      { type: "info", text: "Location:    Bengaluru, India" },
      { type: "info", text: "Specialty:   Agentic RAG, Multimodal AI, Production Web Systems" },
      { type: "success", text: "Status:      🟢 Ready for engineering opportunities" },
    ],
  },
  {
    id: "projects",
    name: "projects",
    cmd: "chandan list-projects",
    output: [
      { type: "comment", text: "# Selected Production & Open Source Projects" },
      { type: "command", text: "1. Agentic-RAG-PDF-Chat   [Autonomous Multi-Agent RAG with ChromaDB]" },
      { type: "command", text: "2. StudyLens-AI          [Multimodal Knowledge & Study Engine]" },
      { type: "command", text: "3. HR-Analytics-Dash     [Business Intelligence Workforce Dashboard]" },
      { type: "info", text: "Total Repositories: 3+ Featured | All open-source on GitHub" },
    ],
  },
];

export function TerminalCard() {
  const [activeTab, setActiveTab] = useState<string>("profile");
  const [copied, setCopied] = useState(false);

  const activeCommand = COMMANDS.find((c) => c.id === activeTab) || COMMANDS[0];

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(activeCommand.cmd);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="w-full rounded-xl border border-[var(--hairline)] bg-[var(--canvas)] overflow-hidden transition-all text-left">
      {/* Terminal Header with macOS traffic lights */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--hairline)] bg-[var(--surface-soft)]">
        <div className="flex items-center gap-2">
          {/* Traffic lights: 12px circles */}
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
          <span className="ml-2 text-xs font-mono text-[var(--mute)] hidden sm:inline">
            terminal ~ chandan-ng
          </span>
        </div>

        {/* Command Switcher Pills */}
        <div className="flex items-center gap-1.5">
          {COMMANDS.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveTab(c.id)}
              className={`px-2.5 py-1 text-xs font-mono rounded-full transition-colors ${
                activeTab === c.id
                  ? "bg-[var(--primary)] text-[var(--on-primary)]"
                  : "text-[var(--charcoal)] hover:text-[var(--ink)] hover:bg-[var(--canvas)]"
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>

        {/* Copy command button */}
        <button
          onClick={handleCopy}
          aria-label="Copy terminal command"
          className="inline-flex items-center justify-center p-1.5 rounded-full text-[var(--mute)] hover:text-[var(--ink)] hover:bg-[var(--canvas)] transition-colors"
        >
          {copied ? (
            <Check className="w-3.5 h-3.5 text-emerald-500" />
          ) : (
            <Copy className="w-3.5 h-3.5" />
          )}
        </button>
      </div>

      {/* Terminal Body */}
      <div className="p-4 sm:p-5 font-mono text-xs sm:text-sm space-y-2 overflow-x-auto">
        <div className="flex items-center gap-2 text-[var(--ink)]">
          <span className="text-[var(--mute)] select-none">$</span>
          <span className="font-semibold select-all">{activeCommand.cmd}</span>
        </div>

        <div className="pt-2 space-y-1.5">
          {activeCommand.output.map((line, idx) => {
            if (line.type === "comment") {
              return (
                <div key={idx} className="text-[var(--mute)] select-none italic">
                  {line.text}
                </div>
              );
            }
            if (line.type === "success") {
              return (
                <div key={idx} className="text-[var(--ink)] font-medium">
                  {line.text}
                </div>
              );
            }
            if (line.type === "command") {
              return (
                <div key={idx} className="text-[var(--charcoal)] pl-2 border-l border-[var(--hairline)]">
                  {line.text}
                </div>
              );
            }
            return (
              <div key={idx} className="text-[var(--charcoal)]">
                {line.text}
              </div>
            );
          })}
        </div>

        {/* Terminal prompt cursor */}
        <div className="flex items-center gap-1.5 pt-2 text-[var(--mute)] select-none">
          <span>chandan@portfolio:~$</span>
          <span className="inline-block w-2 h-4 bg-[var(--ink)] animate-pulse" />
        </div>
      </div>
    </div>
  );
}
