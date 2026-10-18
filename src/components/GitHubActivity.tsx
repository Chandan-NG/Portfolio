"use client";

import React, { useState, useEffect } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import {
  ContributionDay,
  buildDynamicWeeks,
  VERIFIED_CONTRIBUTIONS,
} from "@/data/github-contributions-2026";
import { GithubIcon } from "./Icons";
import { ScrollReveal } from "./ScrollReveal";

const MONTH_NAMES = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const DAY_LABELS = ["", "Mon", "", "Wed", "", "Fri", ""];

const STATIC_BASELINE_DATE = new Date("2026-10-15T00:00:00Z");

export function GitHubActivity() {
  const [hoveredDay, setHoveredDay] = useState<ContributionDay | null>(null);

  // Initialize with deterministic static baseline for SSR prerender
  const [calendarData, setCalendarData] = useState(() => {
    return buildDynamicWeeks(VERIFIED_CONTRIBUTIONS, STATIC_BASELINE_DATE);
  });

  const [totalContributions, setTotalContributions] = useState(72);
  const [isLive, setIsLive] = useState(false);

  // Live dynamic synchronization with GitHub
  useEffect(() => {
    let mounted = true;

    // Immediately calculate weeks based on the viewer's live current date
    const clientToday = new Date();
    setCalendarData(buildDynamicWeeks(VERIFIED_CONTRIBUTIONS, clientToday));

    async function fetchLiveContributions() {
      try {
        const res = await fetch("/api/github-contributions");
        if (!res.ok) return;
        const data = await res.json();
        if (!mounted || !data.success) return;

        if (Array.isArray(data.contributions) && data.contributions.length > 0) {
          const liveMap: Record<string, { count: number; level: number }> = { ...VERIFIED_CONTRIBUTIONS };
          for (const item of data.contributions) {
            if (item.date && typeof item.count === "number") {
              liveMap[item.date] = {
                count: item.count,
                level: typeof item.level === "number" ? item.level : item.count > 0 ? 1 : 0,
              };
            }
          }
          const dynamicResult = buildDynamicWeeks(liveMap, new Date());
          setCalendarData(dynamicResult);
          if (data.totalContributions) {
            setTotalContributions(data.totalContributions);
          }
          setIsLive(true);
        }
      } catch (err) {
        console.error("Live contributions fetch error:", err);
      }
    }

    fetchLiveContributions();
    return () => {
      mounted = false;
    };
  }, []);

  const { weeks } = calendarData;

  // Month labels placed above the week where the month begins
  const monthOffsets = weeks.map((week, index) => {
    const firstDayOfMonth = week.find((d) => d.inYear && d.date.endsWith("-01"));
    if (firstDayOfMonth) {
      const monthIdx = parseInt(firstDayOfMonth.date.split("-")[1], 10) - 1;
      return MONTH_NAMES[monthIdx];
    }
    if (index === 0) return "Jun";
    return null;
  });

  const getCellColorClass = (level: number, inYear: boolean) => {
    if (!inYear) return "opacity-0 pointer-events-none";
    switch (level) {
      case 1:
        return "bg-[#9be9a8] dark:bg-[#0e4429] border border-[#86efac]/80 dark:border-[#006d32]/40";
      case 2:
        return "bg-[#40c463] dark:bg-[#006d32] border border-[#22c55e]/80 dark:border-[#26a641]/50";
      case 3:
        return "bg-[#30a14e] dark:bg-[#26a641] border border-[#16a34a]/80 dark:border-[#39d353]/50";
      case 4:
        return "bg-[#216e39] dark:bg-[#39d353] border border-[#15803d]/80 dark:border-[#39d353]";
      default:
        return "bg-[var(--surface-soft)] dark:bg-[#161b22] border border-[var(--hairline)]/70 dark:border-white/5";
    }
  };

  const formatDate = (dateStr: string) => {
    const [y, m, d] = dateStr.split("-").map(Number);
    const date = new Date(Date.UTC(y, m - 1, d));
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      timeZone: "UTC",
    });
  };

  return (
    <section id="activity" className="relative py-10 sm:py-14 max-w-3xl mx-auto px-2 sm:px-0 text-left">
      {/* Header: Title on Left, Hero-style borderless GitHub icon on Right */}
      <ScrollReveal className="flex items-center justify-between mb-6 px-3 sm:px-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight text-[var(--ink)]">
          GitHub &amp; Activity Stream
        </h2>

        {/* Hero-style borderless GitHub icon */}
        <a
          href={PORTFOLIO_DATA.personal.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub Profile (@Chandan-NG)"
          aria-label="GitHub Profile (@Chandan-NG)"
          className="text-[var(--charcoal)] hover:text-[var(--ink)] hover:scale-115 active:scale-95 transition-all p-1 shrink-0"
        >
          <GithubIcon className="w-5 h-5 sm:w-5.5 sm:h-5.5" />
        </a>
      </ScrollReveal>

      {/* GitHub Contributions Map Container (Dynamic from Jun 2026 to Present) */}
      <ScrollReveal delay={0.08} scale={0.99} className="rounded-2xl border border-[var(--hairline)] bg-[var(--canvas)] p-4 sm:p-6 transition-all duration-200 hover:border-[var(--hairline-strong)] hover:shadow-xs">
        {/* Top Summary Info */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5 pb-4 border-b border-[var(--hairline)]">
          <div>
            <a
              href={PORTFOLIO_DATA.personal.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm font-mono text-[var(--body)] hover:text-[var(--ink)] transition-colors hover:underline"
              title="GitHub Profile (@Chandan-NG)"
            >
              @Chandan-NG
            </a>
          </div>

          {/* Live hover tracker (supports hover and tap) */}
          <div className="text-xs font-mono text-[var(--body)] sm:text-right min-h-[1.25rem]">
            {hoveredDay && hoveredDay.inYear ? (
              <span className="text-[var(--ink)] font-medium">
                {hoveredDay.count === 0 ? "No contributions" : `${hoveredDay.count} contribution${hoveredDay.count > 1 ? "s" : ""}`} on {formatDate(hoveredDay.date)}
              </span>
            ) : (
              <span className="text-[var(--mute)]">Hover or tap on any day to inspect</span>
            )}
          </div>
        </div>

        {/* Contribution Calendar Map Grid */}
        <div className="overflow-x-auto pb-2 scrollbar-thin [-webkit-overflow-scrolling:touch]">
          <div className="inline-block min-w-full">
            {/* Month Labels Row */}
            <div className="flex relative h-4 pl-8 mb-2 text-[10px] font-mono text-[var(--mute)] select-none">
              {monthOffsets.map((month, idx) => (
                <div key={idx} className="w-[14px] sm:w-[15.5px] shrink-0 relative">
                  {month && <span className="absolute left-0 top-0 whitespace-nowrap">{month}</span>}
                </div>
              ))}
            </div>

            {/* Grid with Weekday Labels on Left */}
            <div className="flex gap-2">
              {/* Day Labels (Mon, Wed, Fri) */}
              <div className="flex flex-col justify-between py-[1px] text-[9px] sm:text-[10px] font-mono text-[var(--mute)] select-none pr-1 w-6 shrink-0">
                {DAY_LABELS.map((day, idx) => (
                  <span key={idx} className="h-[11px] sm:h-[12px] leading-[11px] sm:leading-[12px]">
                    {day}
                  </span>
                ))}
              </div>

              {/* Weeks Columns */}
              <div className="flex gap-[3px] sm:gap-[3.5px]">
                {weeks.map((week, wIdx) => (
                  <div key={wIdx} className="flex flex-col gap-[3px] sm:gap-[3.5px]">
                    {week.map((day) => {
                      const tooltip = day.inYear
                        ? `${day.count === 0 ? "No" : day.count} contribution${day.count === 1 ? "" : "s"} on ${formatDate(day.date)}`
                        : "";

                      return (
                        <div
                          key={day.date}
                          title={tooltip}
                          onMouseEnter={() => setHoveredDay(day)}
                          onMouseLeave={() => setHoveredDay(null)}
                          onClick={() => setHoveredDay(day)}
                          className={`w-[11px] h-[11px] sm:w-[12px] sm:h-[12px] rounded-[2.5px] transition-all cursor-pointer ${getCellColorClass(
                            day.level,
                            day.inYear
                          )} ${day.inYear ? "hover:scale-130 active:scale-130 hover:z-10" : ""}`}
                        />
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer: Count in opposite corner (left) to Legend (right) */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-3 mt-3 border-t border-[var(--hairline)]/70 text-xs font-mono text-[var(--mute)]">
          {/* Total Contributions on left */}
          <span className="text-xs sm:text-sm font-semibold text-[var(--ink)] font-mono">
            {totalContributions} Total Contributions
          </span>

          {/* Legend on right */}
          <div className="flex items-center gap-1.5 select-none self-end sm:self-auto">
            <span className="text-[11px]">Less</span>
            <div className="w-[10px] h-[10px] rounded-[2px] bg-[var(--surface-soft)] dark:bg-[#161b22] border border-[var(--hairline)]/70 dark:border-white/5" />
            <div className="w-[10px] h-[10px] rounded-[2px] bg-[#9be9a8] dark:bg-[#0e4429] border border-[#86efac]/80 dark:border-[#006d32]/40" />
            <div className="w-[10px] h-[10px] rounded-[2px] bg-[#40c463] dark:bg-[#006d32] border border-[#22c55e]/80 dark:border-[#26a641]/50" />
            <div className="w-[10px] h-[10px] rounded-[2px] bg-[#30a14e] dark:bg-[#26a641] border border-[#16a34a]/80 dark:border-[#39d353]/50" />
            <div className="w-[10px] h-[10px] rounded-[2px] bg-[#216e39] dark:bg-[#39d353] border border-[#15803d]/80 dark:border-[#39d353]" />
            <span className="text-[11px]">More</span>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
