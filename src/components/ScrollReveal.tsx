"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  once?: boolean;
  scale?: number;
}

/**
 * ScrollReveal Component
 * Smoothly animates children into view when scrolled into the viewport across all devices.
 * Uses lightweight CSS/hardware-accelerated transforms with touch and mobile safety margins.
 */
export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  duration = 0.5,
  direction = "up",
  distance = 20,
  once = true,
  scale = 1,
}: ScrollRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const getInitialPosition = () => {
    switch (direction) {
      case "up":
        return { y: distance };
      case "down":
        return { y: -distance };
      case "left":
        return { x: distance };
      case "right":
        return { x: -distance };
      case "none":
        return {};
    }
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...getInitialPosition(),
        scale: scale !== 1 ? scale : 1,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once,
        amount: 0.1,
        margin: "0px 0px -30px 0px",
      }}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98] as const,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  delayChildren?: number;
  once?: boolean;
}

/**
 * StaggerContainer Component
 * Orchestrates staggered scroll reveals for groups of elements (e.g. grids, cards, photo collage).
 */
export function StaggerContainer({
  children,
  className = "",
  staggerDelay = 0.08,
  delayChildren = 0.05,
  once = true,
}: StaggerContainerProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{
        once,
        amount: 0.08,
        margin: "0px 0px -30px 0px",
      }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * StaggerItem Component
 * Child of StaggerContainer that smoothly animates upward when container enters viewport.
 */
export function StaggerItem({
  children,
  className = "",
  distance = 18,
}: {
  children: React.ReactNode;
  className?: string;
  distance?: number;
}) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: distance },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            ease: [0.21, 0.47, 0.32, 0.98] as const,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
