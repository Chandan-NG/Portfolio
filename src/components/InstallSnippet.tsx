"use client";

import React, { useState } from "react";
import { Copy, Check, Terminal } from "lucide-react";

interface InstallSnippetProps {
  command?: string;
  className?: string;
}

export function InstallSnippet({
  command = "npx chandan-ng",
  className = "",
}: InstallSnippetProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
      setCopied(false);
    }
  };

  return (
    <div
      className={`inline-flex items-center gap-3 px-4 sm:px-5 py-2.5 rounded-full border border-[var(--hairline)] bg-[var(--surface-soft)] text-[var(--ink)] text-sm sm:text-base font-mono transition-colors max-w-full ${className}`}
    >
      <Terminal className="w-4 h-4 text-[var(--mute)] shrink-0" />
      <span className="truncate select-all">{command}</span>
      <button
        onClick={handleCopy}
        type="button"
        aria-label="Copy command to clipboard"
        className="ml-auto inline-flex items-center justify-center w-7 h-7 rounded-full hover:bg-[var(--canvas)] text-[var(--charcoal)] hover:text-[var(--ink)] transition-colors shrink-0"
      >
        {copied ? (
          <Check className="w-3.5 h-3.5 text-emerald-500" />
        ) : (
          <Copy className="w-3.5 h-3.5" />
        )}
      </button>
    </div>
  );
}
