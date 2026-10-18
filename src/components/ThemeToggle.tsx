"use client";

import React from "react";
import { useTheme } from "./ThemeProvider";
import { useIsMounted } from "@/lib/useIsMounted";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { resolvedTheme, toggleTheme } = useTheme();
  const mounted = useIsMounted();

  if (!mounted) {
    return (
      <div
        className={`w-9 h-9 rounded-full border border-[var(--hairline)] bg-[var(--surface-soft)] ${className}`}
        aria-hidden="true"
      />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} mode`}
      className={`inline-flex items-center justify-center w-9 h-9 rounded-full border border-[var(--hairline)] bg-[var(--surface-soft)] text-[var(--ink)] hover:border-[var(--hairline-strong)] transition-colors ${className}`}
    >
      {resolvedTheme === "dark" ? (
        <Sun className="w-4 h-4 text-amber-300 transition-transform rotate-0" />
      ) : (
        <Moon className="w-4 h-4 text-[var(--charcoal)] transition-transform -rotate-12" />
      )}
    </button>
  );
}
