import { NextResponse } from "next/server";
import { VERIFIED_CONTRIBUTIONS } from "@/data/github-contributions-2026";

export async function GET() {
  try {
    // 1. Direct real-time fetch from GitHub's official contributions endpoint
    const ghResponse = await fetch("https://github.com/users/Chandan-NG/contributions", {
      cache: "no-store",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
      },
    });

    if (ghResponse.ok) {
      const html = await ghResponse.text();

      // Parse contribution cells
      const tdRegex = /<td[^>]*data-date="(\d{4}-\d{2}-\d{2})"[^>]*id="([^"]*)"[^>]*data-level="(\d+)"[^>]*>/g;
      let m;
      const items: { date: string; id: string; level: number }[] = [];
      while ((m = tdRegex.exec(html)) !== null) {
        items.push({ date: m[1], id: m[2], level: parseInt(m[3], 10) });
      }

      // Parse tooltips containing exact contribution counts
      const tooltipRegex = /<tool-tip[^>]*for="([^"]+)"[^>]*>([^<]+)<\/tool-tip>/g;
      const tooltips: Record<string, string> = {};
      while ((m = tooltipRegex.exec(html)) !== null) {
        tooltips[m[1]] = m[2].trim();
      }

      if (items.length > 0) {
        const contributions = items.map((it) => {
          const text = tooltips[it.id] || "";
          const countMatch = text.match(/^(\d+)\s+contribution/i);
          const count = countMatch ? parseInt(countMatch[1], 10) : it.level > 0 ? it.level : 0;
          return {
            date: it.date,
            count,
            level: it.level,
          };
        });

        // Parse total contributions in 2026 from header
        const h2Match = html.match(/([\d,]+)\s+contributions?\s+in/i);
        const total2026 = h2Match
          ? parseInt(h2Match[1].replace(/,/g, ""), 10)
          : contributions
              .filter((c) => c.date.startsWith("2026"))
              .reduce((s, c) => s + c.count, 0);

        // 73 contributions in 2026 + 1 in 2023 = 74 all time
        const allTimeTotal = total2026 + 1;

        return NextResponse.json(
          {
            success: true,
            totalContributions: allTimeTotal,
            total2026,
            contributions,
            source: "github-live",
            updatedAt: new Date().toISOString(),
          },
          {
            headers: {
              "Cache-Control": "no-store, no-cache, must-revalidate",
            },
          }
        );
      }
    }

    // 2. Fallback to jogruber API if GitHub HTML scraping is temporarily unavailable
    const fallbackResponse = await fetch(
      "https://github-contributions-api.jogruber.de/v4/Chandan-NG",
      { cache: "no-store" }
    );
    if (fallbackResponse.ok) {
      const data = await fallbackResponse.json();
      const contributions = data.contributions || [];
      const total2026 =
        typeof data.total?.["2026"] === "number"
          ? data.total["2026"]
          : contributions
              .filter((d: { date: string }) => d.date?.startsWith("2026"))
              .reduce((acc: number, d: { count: number }) => acc + (d.count || 0), 0);

      const allTimeTotal = total2026 + 1;

      return NextResponse.json(
        {
          success: true,
          totalContributions: allTimeTotal,
          total2026,
          contributions,
          source: "jogruber-live",
          updatedAt: new Date().toISOString(),
        },
        {
          headers: {
            "Cache-Control": "no-store, no-cache, must-revalidate",
          },
        }
      );
    }

    throw new Error("Both live sources failed");
  } catch (error) {
    console.error("Error fetching live GitHub contributions:", error);
    // Baseline fallback
    const fallbackContributions = Object.entries(VERIFIED_CONTRIBUTIONS).map(([date, val]) => ({
      date,
      count: val.count,
      level: val.level,
    }));

    return NextResponse.json(
      {
        success: false,
        totalContributions: 74,
        total2026: 73,
        contributions: fallbackContributions,
        source: "baseline-fallback",
        updatedAt: new Date().toISOString(),
      },
      {
        status: 200,
        headers: {
          "Cache-Control": "no-store, no-cache, must-revalidate",
        },
      }
    );
  }
}
