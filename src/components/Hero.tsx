"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { LocalTime } from "./LocalTime";
import { InteractiveAvatar } from "./InteractiveAvatar";
import { MapPin, Mail, Phone, FileText } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterXIcon } from "./Icons";

// Display only the specified roles
const ROLES = [
  "AI Engineer",
  "Web Developer",
  "Agentic AI Engineer",
  "Full Stack Developer",
  "Data Analyst",
];

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative pt-2 sm:pt-4 pb-12 sm:pb-16 max-w-3xl mx-auto px-4 sm:px-6 text-left">
      {/* Suitable Background for Hero Section Only */}
      <div
        aria-hidden="true"
        className="absolute inset-x-2 sm:inset-x-0 -top-2 bottom-6 -z-10 rounded-3xl border border-[var(--hairline)]/70 bg-[var(--surface-soft)]/40 backdrop-blur-[2px] shadow-xs overflow-hidden"
      >
        {/* Ambient radial lighting effect */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-4/5 h-72 bg-gradient-to-b from-[var(--ink)]/5 to-transparent blur-3xl pointer-events-none" />
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
        className="p-3 sm:p-5"
      >
        {/* 1. Header Banner (Single Unified Banner for All Themes) */}
        <motion.div
          variants={itemVariants}
          className="relative w-full h-32 sm:h-52 md:h-64 rounded-2xl overflow-hidden border border-[var(--hairline)] bg-[var(--surface-soft)] shadow-sm"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={PORTFOLIO_DATA.personal.bannerDarkUrl || "/assets/banner-dark.png"}
            alt="Profile Header Banner"
            className="w-full h-full object-cover object-center select-none pointer-events-none"
          />
        </motion.div>

        {/* 2. Profile Pic (overlapping banner on left) & Live Clock on right */}
        <motion.div variants={itemVariants} className="flex items-start justify-between px-2 sm:px-3">
          <div className="relative -mt-10 sm:-mt-16 rounded-full ring-4 ring-[var(--canvas)] bg-[var(--canvas)] shadow-sm shrink-0">
            <InteractiveAvatar className="w-20 h-20 sm:w-28 sm:h-28" />
          </div>

          {/* Live Local Time (without 'same time') */}
          <div className="pt-3 sm:pt-4">
            <LocalTime />
          </div>
        </motion.div>

        {/* Hero Details Block */}
        <motion.div variants={itemVariants} className="mt-4 px-2 sm:px-3 space-y-3.5">
          {/* 3. Name with Verified Badge & 5-Second Rotating Role Transition */}
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[var(--ink)] break-words">
                {PORTFOLIO_DATA.personal.name}
              </h1>
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-[#1d9bf0] shrink-0"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-label="Verified developer"
              >
                <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.79-4-4-4-.495 0-.965.084-1.4.238C14.55 2.475 13.18 1.6 11.6 1.6c-1.58 0-2.95.875-3.6 2.148-.435-.154-.905-.238-1.4-.238-2.21 0-4 1.79-4 4 0 .495.084.965.238 1.4C1.575 9.55.7 10.92.7 12.5c0 1.58.875 2.95 2.148 3.6-.154.435-.238.905-.238 1.4 0 2.21 1.79 4 4 4 .495 0 .965-.084 1.4-.238.65 1.273 2.02 2.148 3.6 2.148 1.58 0 2.95-.875 3.6-2.148.435.154.905.238 1.4.238 2.21 0 4-1.79 4-4 0-.495-.084-.965-.238-1.4 1.273-.65 2.148-2.02 2.148-3.6zm-12.87 4.16l-4.14-4.14 1.41-1.41 2.73 2.73 7.13-7.13 1.41 1.41-8.54 8.54z" />
              </svg>
            </div>

            {/* Rotating Role with Smooth Transition every 5 seconds */}
            <div className="h-7 overflow-hidden flex items-center mt-0.5">
              <AnimatePresence mode="wait">
                <motion.span
                  key={ROLES[roleIndex]}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="text-base sm:text-lg text-[var(--charcoal)] font-normal inline-block"
                >
                  {ROLES[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          {/* 4. Bio */}
          <p className="text-sm sm:text-base text-[var(--charcoal)] leading-relaxed max-w-2xl">
            {PORTFOLIO_DATA.personal.bio}
          </p>

          {/* 5. Location (with icon) and Get in touch (email) both in same line */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-1">
            <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-[var(--charcoal)]">
              <MapPin className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-[var(--charcoal)] shrink-0" />
              <span>{PORTFOLIO_DATA.personal.location}</span>
            </div>

            <span className="text-[var(--hairline-strong)] select-none">•</span>

            <a
              href={`mailto:${PORTFOLIO_DATA.personal.email}`}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[var(--primary)] text-[var(--on-primary)] text-xs sm:text-sm font-medium hover:opacity-90 active:scale-[0.98] transition-all"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Get in touch</span>
            </a>
          </div>

          {/* 6. Social Media Handles: Larger, Borderless, Theme-Matched Icons */}
          <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 pt-3 text-[var(--charcoal)]">
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

            {/* Twitter / X */}
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

            {/* Gmail / Direct Mail */}
            <a
              href={`mailto:${PORTFOLIO_DATA.personal.email}`}
              title="Email (Gmail)"
              aria-label="Send Email"
              className="hover:text-[var(--ink)] hover:scale-115 active:scale-95 transition-all p-1"
            >
              <Mail className="w-5 h-5 sm:w-5.5 sm:h-5.5" />
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
        </motion.div>
      </motion.div>
    </section>
  );
}
