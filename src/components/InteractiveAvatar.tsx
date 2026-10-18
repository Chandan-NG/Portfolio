"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

interface InteractiveAvatarProps {
  className?: string;
  imgClassName?: string;
}

/**
 * InteractiveAvatar
 * Displays the anime character profile picture by default.
 * Seamlessly transitions to Chandan's original real photo on hover (desktop) or tap (mobile/touch)
 * using a refined focal crossfade with smooth scale transformation.
 */
export function InteractiveAvatar({
  className = "w-24 h-24 sm:w-28 sm:h-28",
  imgClassName = "",
}: InteractiveAvatarProps) {
  const [isTapped, setIsTapped] = useState(false);

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label="Profile photo of Chandan N G (hover or tap to toggle real photo)"
      title="Hover or tap to reveal original photo"
      onClick={() => setIsTapped((prev) => !prev)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setIsTapped((prev) => !prev);
        }
      }}
      className={`group relative rounded-full overflow-hidden select-none cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ink)] ${className}`}
    >
      {/* 1. Anime Illustrated Profile Picture (Default view) */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={PORTFOLIO_DATA.personal.avatarAnimeUrl}
        alt={`${PORTFOLIO_DATA.personal.name} (Illustrated Avatar)`}
        className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-500 ease-out ${
          isTapped
            ? "opacity-0 scale-105"
            : "opacity-100 scale-100 group-hover:opacity-0 group-hover:scale-105"
        } ${imgClassName}`}
      />

      {/* 2. Original Real Photo (Revealed on hover / tap) */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={PORTFOLIO_DATA.personal.avatarRealUrl}
        alt={`${PORTFOLIO_DATA.personal.name} (Original Photo)`}
        className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-500 ease-out ${
          isTapped
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100"
        } ${imgClassName}`}
      />

      {/* Subtle depth inner ring */}
      <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-black/10 dark:ring-white/10 pointer-events-none" />
    </div>
  );
}
