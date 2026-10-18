"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";
import { PORTFOLIO_DATA } from "@/data/portfolio";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Resume", href: "/resume" },
];

export function Navbar() {
  const pathname = usePathname();

  const isLinkActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="fixed top-2.5 sm:top-4 left-0 right-0 z-50 flex justify-center px-2 xs:px-3 sm:px-4 pointer-events-none">
      <nav
        aria-label="Main Navigation"
        className="pointer-events-auto max-w-fit rounded-full border border-[var(--hairline)] bg-[var(--canvas)]/90 backdrop-blur-md shadow-md p-1 xs:p-1.5 sm:p-2 flex items-center gap-1 xs:gap-1.5 sm:gap-2 transition-all text-xs"
      >
        {/* Fixed Profile Picture in Corner with Hover Reveal */}
        <Link
          href="/"
          aria-label="Home - Chandan N G"
          title="Chandan N G"
          className="group relative w-7 h-7 sm:w-8 sm:h-8 rounded-full ring-1 ring-[var(--hairline)] overflow-hidden shrink-0 hover:scale-110 active:scale-95 transition-transform"
        >
          {/* Anime Avatar (Default) */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={PORTFOLIO_DATA.personal.avatarAnimeUrl}
            alt={PORTFOLIO_DATA.personal.name}
            className="absolute inset-0 w-full h-full object-cover object-center transition-all duration-500 ease-out group-hover:opacity-0 group-hover:scale-105"
          />
          {/* Real Photo (On Hover) */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={PORTFOLIO_DATA.personal.avatarRealUrl}
            alt={PORTFOLIO_DATA.personal.name}
            className="absolute inset-0 w-full h-full object-cover object-center transition-all duration-500 ease-out opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100"
          />
        </Link>

        {/* Hyperlinked Pages with Smooth Spring Animation Pill */}
        <div className="flex items-center gap-0.5 sm:gap-1">
          {NAV_LINKS.map((link) => {
            const active = isLinkActive(link.href);
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`relative px-2 xs:px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-medium transition-colors ${
                  active
                    ? "text-[var(--on-primary)] font-semibold"
                    : "text-[var(--charcoal)] hover:text-[var(--ink)] hover:bg-[var(--surface-soft)]"
                }`}
              >
                {active && (
                  <motion.div
                    layoutId="active-nav-pill"
                    className="absolute inset-0 rounded-full bg-[var(--primary)] -z-10 shadow-xs"
                    transition={{ type: "spring", stiffness: 420, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </Link>
            );
          })}
        </div>

        {/* Theme Switch (With Sound) */}
        <div className="shrink-0 pl-0.5">
          <ThemeToggle className="w-7 h-7 sm:w-8 sm:h-8" />
        </div>
      </nav>
    </header>
  );
}
