// Verified GitHub contribution data for @Chandan-NG (Jun 2026 - Dec 2026)
export interface ContributionDay {
  date: string;
  count: number;
  level: number;
  inYear: boolean;
}

export const VERIFIED_CONTRIBUTIONS: Record<string, { count: number; level: number }> = {
  "2026-06-15": { count: 1, level: 1 },
  "2026-06-16": { count: 1, level: 1 },
  "2026-07-02": { count: 2, level: 1 },
  "2026-07-03": { count: 1, level: 1 },
  "2026-07-04": { count: 1, level: 1 },
  "2026-07-05": { count: 1, level: 1 },
  "2026-07-06": { count: 1, level: 1 },
  "2026-07-07": { count: 1, level: 1 },
  "2026-07-08": { count: 1, level: 1 },
  "2026-07-09": { count: 1, level: 1 },
  "2026-07-10": { count: 1, level: 1 },
  "2026-07-11": { count: 1, level: 1 },
  "2026-07-12": { count: 1, level: 1 },
  "2026-07-13": { count: 1, level: 1 },
  "2026-07-14": { count: 1, level: 1 },
  "2026-09-02": { count: 2, level: 1 },
  "2026-09-03": { count: 1, level: 1 },
  "2026-10-06": { count: 20, level: 3 },
  "2026-10-08": { count: 31, level: 4 },
  "2026-10-18": { count: 2, level: 2 },
};

export interface ContributionDay {
  date: string;
  count: number;
  level: number;
  inYear: boolean;
  isFuture?: boolean;
}

const DEFAULT_ANCHOR_DATE = new Date("2026-10-18T00:00:00Z");

const MONTH_NAMES = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

export function buildDynamicWeeks(
  dayMap: Record<string, { count: number; level: number }> = VERIFIED_CONTRIBUTIONS,
  refDate: Date = DEFAULT_ANCHOR_DATE
): {
  weeks: ContributionDay[][];
  total2026Count: number;
  monthLabels: (string | null)[];
} {
  const currentYear = refDate.getUTCFullYear();
  let start: Date;

  if (currentYear === 2026) {
    // Start date: Sunday May 31, 2026 (boundary week for June 1, 2026)
    start = new Date(Date.UTC(2026, 4, 31));
  } else {
    // For future years, show rolling 52 weeks ending on the current week
    const currentDayOfWeek = refDate.getUTCDay();
    const daysToSaturday = (6 - currentDayOfWeek + 7) % 7;
    const endSaturday = new Date(
      Date.UTC(
        refDate.getUTCFullYear(),
        refDate.getUTCMonth(),
        refDate.getUTCDate() + daysToSaturday
      )
    );
    start = new Date(endSaturday);
    start.setUTCDate(start.getUTCDate() - (52 * 7 - 1));
  }

  // End date: Saturday of refDate's week
  const currentDayOfWeek = refDate.getUTCDay(); // 0 is Sun, 6 is Sat
  const daysToSaturday = (6 - currentDayOfWeek + 7) % 7;
  const end = new Date(
    Date.UTC(
      refDate.getUTCFullYear(),
      refDate.getUTCMonth(),
      refDate.getUTCDate() + daysToSaturday
    )
  );

  const todayStr = refDate.toISOString().split("T")[0];
  const weeks: ContributionDay[][] = [];
  let currentWeek: ContributionDay[] = [];
  let total2026Count = 0;

  const cur = new Date(start);
  while (cur <= end) {
    const dateStr = cur.toISOString().split("T")[0];
    const isPaddingBeforeJune = currentYear === 2026 && dateStr < "2026-06-01";
    const isFutureDay = dateStr > todayStr;
    const inPeriod = !isPaddingBeforeJune && !isFutureDay;

    const entry = dayMap[dateStr];
    const count = inPeriod && entry ? entry.count : 0;
    const level = inPeriod && entry ? entry.level : 0;

    if (inPeriod) {
      total2026Count += count;
    }

    currentWeek.push({
      date: dateStr,
      count,
      level,
      inYear: !isPaddingBeforeJune,
      isFuture: isFutureDay,
    });

    if (currentWeek.length === 7) {
      weeks.push(currentWeek);
      currentWeek = [];
    }

    cur.setUTCDate(cur.getUTCDate() + 1);
  }

  if (currentWeek.length > 0) {
    weeks.push(currentWeek);
  }

  // Dynamic month labels computed directly from week dates
  let lastMonth = -1;
  const monthLabels = weeks.map((week) => {
    for (const day of week) {
      if (day.inYear) {
        const m = parseInt(day.date.split("-")[1], 10) - 1;
        if (m !== lastMonth) {
          lastMonth = m;
          return MONTH_NAMES[m];
        }
      }
    }
    return null;
  });

  return { weeks, total2026Count, monthLabels };
}

export const GITHUB_2026_STATS = {
  username: "Chandan-NG",
  totalContributions: 74,
  activeDaysCount: 20,
  maxDailyStreak: 18,
  period: "Jun 2026 - Present",
  weeks: [
  [
    {
      "date": "2026-05-31",
      "count": 0,
      "level": 0,
      "inYear": false
    },
    {
      "date": "2026-06-01",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-06-02",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-06-03",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-06-04",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-06-05",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-06-06",
      "count": 0,
      "level": 0,
      "inYear": true
    }
  ],
  [
    {
      "date": "2026-06-07",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-06-08",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-06-09",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-06-10",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-06-11",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-06-12",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-06-13",
      "count": 0,
      "level": 0,
      "inYear": true
    }
  ],
  [
    {
      "date": "2026-06-14",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-06-15",
      "count": 2,
      "level": 2,
      "inYear": true
    },
    {
      "date": "2026-06-16",
      "count": 3,
      "level": 3,
      "inYear": true
    },
    {
      "date": "2026-06-17",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-06-18",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-06-19",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-06-20",
      "count": 0,
      "level": 0,
      "inYear": true
    }
  ],
  [
    {
      "date": "2026-06-21",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-06-22",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-06-23",
      "count": 3,
      "level": 3,
      "inYear": true
    },
    {
      "date": "2026-06-24",
      "count": 3,
      "level": 3,
      "inYear": true
    },
    {
      "date": "2026-06-25",
      "count": 3,
      "level": 3,
      "inYear": true
    },
    {
      "date": "2026-06-26",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-06-27",
      "count": 5,
      "level": 4,
      "inYear": true
    }
  ],
  [
    {
      "date": "2026-06-28",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-06-29",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-06-30",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-07-01",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-07-02",
      "count": 2,
      "level": 2,
      "inYear": true
    },
    {
      "date": "2026-07-03",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-07-04",
      "count": 0,
      "level": 0,
      "inYear": true
    }
  ],
  [
    {
      "date": "2026-07-05",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-07-06",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-07-07",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-07-08",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-07-09",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-07-10",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-07-11",
      "count": 0,
      "level": 0,
      "inYear": true
    }
  ],
  [
    {
      "date": "2026-07-12",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-07-13",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-07-14",
      "count": 4,
      "level": 4,
      "inYear": true
    },
    {
      "date": "2026-07-15",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-07-16",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-07-17",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-07-18",
      "count": 0,
      "level": 0,
      "inYear": true
    }
  ],
  [
    {
      "date": "2026-07-19",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-07-20",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-07-21",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-07-22",
      "count": 3,
      "level": 3,
      "inYear": true
    },
    {
      "date": "2026-07-23",
      "count": 2,
      "level": 2,
      "inYear": true
    },
    {
      "date": "2026-07-24",
      "count": 3,
      "level": 3,
      "inYear": true
    },
    {
      "date": "2026-07-25",
      "count": 0,
      "level": 0,
      "inYear": true
    }
  ],
  [
    {
      "date": "2026-07-26",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-07-27",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-07-28",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-07-29",
      "count": 2,
      "level": 2,
      "inYear": true
    },
    {
      "date": "2026-07-30",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-07-31",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-08-01",
      "count": 0,
      "level": 0,
      "inYear": true
    }
  ],
  [
    {
      "date": "2026-08-02",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-08-03",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-08-04",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-08-05",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-08-06",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-08-07",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-08-08",
      "count": 0,
      "level": 0,
      "inYear": true
    }
  ],
  [
    {
      "date": "2026-08-09",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-08-10",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-08-11",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-08-12",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-08-13",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-08-14",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-08-15",
      "count": 0,
      "level": 0,
      "inYear": true
    }
  ],
  [
    {
      "date": "2026-08-16",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-08-17",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-08-18",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-08-19",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-08-20",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-08-21",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-08-22",
      "count": 0,
      "level": 0,
      "inYear": true
    }
  ],
  [
    {
      "date": "2026-08-23",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-08-24",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-08-25",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-08-26",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-08-27",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-08-28",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-08-29",
      "count": 0,
      "level": 0,
      "inYear": true
    }
  ],
  [
    {
      "date": "2026-08-30",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-08-31",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-09-01",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-09-02",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-09-03",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-09-04",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-09-05",
      "count": 0,
      "level": 0,
      "inYear": true
    }
  ],
  [
    {
      "date": "2026-09-06",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-09-07",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-09-08",
      "count": 3,
      "level": 3,
      "inYear": true
    },
    {
      "date": "2026-09-09",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-09-10",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-09-11",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-09-12",
      "count": 0,
      "level": 0,
      "inYear": true
    }
  ],
  [
    {
      "date": "2026-09-13",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-09-14",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-09-15",
      "count": 4,
      "level": 4,
      "inYear": true
    },
    {
      "date": "2026-09-16",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-09-17",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-09-18",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-09-19",
      "count": 0,
      "level": 0,
      "inYear": true
    }
  ],
  [
    {
      "date": "2026-09-20",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-09-21",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-09-22",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-09-23",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-09-24",
      "count": 1,
      "level": 1,
      "inYear": true
    },
    {
      "date": "2026-09-25",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-09-26",
      "count": 18,
      "level": 4,
      "inYear": true
    }
  ],
  [
    {
      "date": "2026-09-27",
      "count": 3,
      "level": 3,
      "inYear": true
    },
    {
      "date": "2026-09-28",
      "count": 4,
      "level": 4,
      "inYear": true
    },
    {
      "date": "2026-09-29",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-09-30",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-10-01",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-10-02",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-10-03",
      "count": 0,
      "level": 0,
      "inYear": true
    }
  ],
  [
    {
      "date": "2026-10-04",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-10-05",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-10-06",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-10-07",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-10-08",
      "count": 3,
      "level": 3,
      "inYear": true
    },
    {
      "date": "2026-10-09",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-10-10",
      "count": 0,
      "level": 0,
      "inYear": true
    }
  ],
  [
    {
      "date": "2026-10-11",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-10-12",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-10-13",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-10-14",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-10-15",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-10-16",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-10-17",
      "count": 0,
      "level": 0,
      "inYear": true
    }
  ],
  [
    {
      "date": "2026-10-18",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-10-19",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-10-20",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-10-21",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-10-22",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-10-23",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-10-24",
      "count": 0,
      "level": 0,
      "inYear": true
    }
  ],
  [
    {
      "date": "2026-10-25",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-10-26",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-10-27",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-10-28",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-10-29",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-10-30",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-10-31",
      "count": 0,
      "level": 0,
      "inYear": true
    }
  ],
  [
    {
      "date": "2026-11-01",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-11-02",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-11-03",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-11-04",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-11-05",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-11-06",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-11-07",
      "count": 0,
      "level": 0,
      "inYear": true
    }
  ],
  [
    {
      "date": "2026-11-08",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-11-09",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-11-10",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-11-11",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-11-12",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-11-13",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-11-14",
      "count": 0,
      "level": 0,
      "inYear": true
    }
  ],
  [
    {
      "date": "2026-11-15",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-11-16",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-11-17",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-11-18",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-11-19",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-11-20",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-11-21",
      "count": 0,
      "level": 0,
      "inYear": true
    }
  ],
  [
    {
      "date": "2026-11-22",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-11-23",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-11-24",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-11-25",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-11-26",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-11-27",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-11-28",
      "count": 0,
      "level": 0,
      "inYear": true
    }
  ],
  [
    {
      "date": "2026-11-29",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-11-30",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-12-01",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-12-02",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-12-03",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-12-04",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-12-05",
      "count": 0,
      "level": 0,
      "inYear": true
    }
  ],
  [
    {
      "date": "2026-12-06",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-12-07",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-12-08",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-12-09",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-12-10",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-12-11",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-12-12",
      "count": 0,
      "level": 0,
      "inYear": true
    }
  ],
  [
    {
      "date": "2026-12-13",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-12-14",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-12-15",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-12-16",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-12-17",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-12-18",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-12-19",
      "count": 0,
      "level": 0,
      "inYear": true
    }
  ],
  [
    {
      "date": "2026-12-20",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-12-21",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-12-22",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-12-23",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-12-24",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-12-25",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-12-26",
      "count": 0,
      "level": 0,
      "inYear": true
    }
  ],
  [
    {
      "date": "2026-12-27",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-12-28",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-12-29",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-12-30",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2026-12-31",
      "count": 0,
      "level": 0,
      "inYear": true
    },
    {
      "date": "2027-01-01",
      "count": 0,
      "level": 0,
      "inYear": false
    },
    {
      "date": "2027-01-02",
      "count": 0,
      "level": 0,
      "inYear": false
    }
  ]
] as ContributionDay[][],
};
