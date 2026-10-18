"use client";

import React, { useState, useEffect } from "react";

export function LocalTime() {
  const [timeStr, setTimeStr] = useState<string>("1:00:00 AM");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatted = now.toLocaleTimeString("en-US", {
        timeZone: "Asia/Kolkata",
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      setTimeStr(formatted);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-1.5 text-xs font-mono text-[var(--mute)]">
      <span className="text-[var(--charcoal)] font-medium">{timeStr}</span>
    </div>
  );
}
