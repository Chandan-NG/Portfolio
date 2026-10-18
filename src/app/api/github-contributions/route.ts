import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch("https://github-contributions-api.jogruber.de/v4/Chandan-NG?y=2026", {
      next: { revalidate: 3600 },
      headers: {
        "User-Agent": "Mozilla/5.0 (Portfolio)",
      },
    });

    if (!response.ok) {
      throw new Error(`Upstream API failed: ${response.status}`);
    }

    const data = await response.json();
    const contributions = data.contributions || [];

    // Sum 2026 contributions
    const total2026 = typeof data.total?.["2026"] === "number"
      ? data.total["2026"]
      : contributions.reduce((acc: number, d: { count: number }) => acc + (d.count || 0), 0);

    // Total contributions across all time (71 in 2026 + 1 in 2023 = 72 base, plus any newly added)
    // 1 contribution verified from 2023
    const allTimeTotal = total2026 + 1;

    return NextResponse.json({
      success: true,
      totalContributions: allTimeTotal,
      total2026,
      contributions,
      source: "live",
      updatedAt: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Error fetching live GitHub contributions:", error);
    // Return graceful fallback
    return NextResponse.json(
      {
        success: false,
        totalContributions: 72,
        total2026: 71,
        contributions: [],
        source: "fallback",
        updatedAt: new Date().toISOString(),
      },
      { status: 200 }
    );
  }
}
