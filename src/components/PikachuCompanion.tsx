"use client";

import React, { useEffect, useRef, useState, useSyncExternalStore } from "react";

interface PikachuCompanionProps {
  assetSrc?: string;
  size?: number;
}

function subscribeToCompanion(callback: () => void) {
  window.addEventListener("toggle-pikachu", callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener("toggle-pikachu", callback);
    window.removeEventListener("storage", callback);
  };
}

function getCompanionSnapshot(): boolean {
  if (typeof window === "undefined") return true;
  const stored = localStorage.getItem("pikachu_companion_active");
  return stored !== "false";
}

function getCompanionServerSnapshot(): boolean {
  return false;
}

function subscribeToViewport(callback: () => void) {
  window.addEventListener("resize", callback);
  return () => window.removeEventListener("resize", callback);
}

function getDesktopSnapshot(): boolean {
  if (typeof window === "undefined") return false;
  const isTouch =
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    window.matchMedia("(pointer: coarse)").matches;
  const isSmallScreen = window.innerWidth < 768;
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  return !isTouch && !isSmallScreen && !prefersReducedMotion;
}

export function PikachuCompanion({
  assetSrc = "/assets/pikachu.svg",
  size = 54,
}: PikachuCompanionProps) {
  const isEnabled = useSyncExternalStore(
    subscribeToCompanion,
    getCompanionSnapshot,
    getCompanionServerSnapshot
  );

  const isDesktopSupported = useSyncExternalStore(
    subscribeToViewport,
    getDesktopSnapshot,
    () => false
  );

  const [isSparking, setIsSparking] = useState<boolean>(false);

  // References for position and animation
  const mousePos = useRef({ x: -100, y: -100 });
  const currentPos = useRef({ x: -100, y: -100 });
  const velocity = useRef({ vx: 0, vy: 0 });
  const facingRight = useRef(true);
  const animFrameId = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isEnabled || !isDesktopSupported) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      // Offset target by 28px bottom-right so Pikachu trots alongside cursor
      mousePos.current = { x: e.clientX + 28, y: e.clientY + 22 };
    };

    const handleMouseDown = () => {
      setIsSparking(true);
      setTimeout(() => setIsSparking(false), 450);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);

    const startTime = performance.now();

    const loop = (currentTime: number) => {
      const elapsed = currentTime - startTime;

      // Lerp (Linear Interpolation) with natural inertia & lag
      const lerpFactor = 0.09;
      const dx = mousePos.current.x - currentPos.current.x;
      const dy = mousePos.current.y - currentPos.current.y;

      velocity.current.vx = dx * lerpFactor;
      velocity.current.vy = dy * lerpFactor;

      currentPos.current.x += velocity.current.vx;
      currentPos.current.y += velocity.current.vy;

      const speed = Math.hypot(velocity.current.vx, velocity.current.vy);

      // Facing orientation
      if (velocity.current.vx > 0.4) {
        facingRight.current = true;
      } else if (velocity.current.vx < -0.4) {
        facingRight.current = false;
      }

      // Dynamic tilt based on horizontal momentum
      const tilt = Math.max(-18, Math.min(18, velocity.current.vx * 1.2));

      // Subtle idle bobbing when stopped
      let idleBobY = 0;
      let idleRotate = 0;
      if (speed < 0.6) {
        idleBobY = Math.sin(elapsed * 0.005) * 3;
        idleRotate = Math.cos(elapsed * 0.003) * 2;
      }

      // Squash and stretch during movement
      const squashScaleX = speed > 1.5 ? 1 + Math.min(speed * 0.012, 0.15) : 1;
      const squashScaleY = speed > 1.5 ? 1 - Math.min(speed * 0.008, 0.12) : 1;

      if (containerRef.current) {
        const x = currentPos.current.x;
        const y = currentPos.current.y + idleBobY;
        const flip = facingRight.current ? 1 : -1;
        const rotation = tilt + idleRotate;

        containerRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(${rotation}deg) scale(${squashScaleX * flip}, ${squashScaleY})`;
      }

      animFrameId.current = requestAnimationFrame(loop);
    };

    animFrameId.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      if (animFrameId.current) {
        cancelAnimationFrame(animFrameId.current);
      }
    };
  }, [isEnabled, isDesktopSupported]);

  if (!isEnabled || !isDesktopSupported) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      role="presentation"
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-50 select-none will-change-transform transition-opacity duration-300"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        marginLeft: `-${size / 2}px`,
        marginTop: `-${size / 2}px`,
      }}
    >
      <div className="relative w-full h-full drop-shadow-sm">
        {/* Pikachu Character Render (supports SVG, GIF, PNG) */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={assetSrc}
          alt="Pikachu companion"
          className="w-full h-full object-contain pointer-events-none select-none transition-transform duration-150"
          draggable={false}
        />

        {/* Electric spark micro-effect on mouse click */}
        {isSparking && (
          <div className="absolute -top-2 -right-1 text-xs select-none animate-ping text-amber-400 font-bold">
            ⚡
          </div>
        )}
      </div>
    </div>
  );
}

export function togglePikachuCompanion() {
  if (typeof window !== "undefined") {
    const current = localStorage.getItem("pikachu_companion_active") !== "false";
    localStorage.setItem("pikachu_companion_active", String(!current));
    window.dispatchEvent(new CustomEvent("toggle-pikachu"));
  }
}
