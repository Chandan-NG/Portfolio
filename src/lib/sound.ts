/**
 * Tactile audio synthesizer for theme switches using Web Audio API.
 * Produces an instant, crisp mechanical switch pop without network latency or missing asset errors.
 */
export function playThemeSwitchSound(toTheme: "light" | "dark") {
  if (typeof window === "undefined") return;

  try {
    const AudioCtxClass =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof window.AudioContext }).webkitAudioContext;
    if (!AudioCtxClass) return;

    const ctx = new AudioCtxClass();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    const now = ctx.currentTime;
    osc.type = "sine";

    if (toTheme === "dark") {
      // Gentle descending click for turning off the lights (Dark mode)
      osc.frequency.setValueAtTime(580, now);
      osc.frequency.exponentialRampToValueAtTime(260, now + 0.06);
    } else {
      // Crisp ascending chime for turning on the lights (Light mode)
      osc.frequency.setValueAtTime(320, now);
      osc.frequency.exponentialRampToValueAtTime(720, now + 0.06);
    }

    gain.gain.setValueAtTime(0.12, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.07);

    // Clean up context
    setTimeout(() => {
      ctx.close().catch(() => {});
    }, 120);
  } catch {
    // Audio context was blocked or not supported
  }
}
