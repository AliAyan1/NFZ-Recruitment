"use client";

import { useReducedMotion } from "framer-motion";

type RoadLineProps = {
  className?: string;
  animated?: boolean;
  horizontal?: boolean;
};

export function RoadLine({
  className = "",
  animated = false,
  horizontal = true,
}: RoadLineProps) {
  const reduce = useReducedMotion();
  const shouldAnimate = animated && !reduce;

  if (horizontal) {
    return (
      <svg
        className={`w-full text-teal-dark/50 ${className}`}
        height="8"
        viewBox="0 0 400 8"
        fill="none"
        aria-hidden
      >
        <line
          x1="0"
          y1="4"
          x2="400"
          y2="4"
          stroke="currentColor"
          strokeWidth="3"
          strokeDasharray="12 10"
          strokeLinecap="round"
          className={shouldAnimate ? "animate-road-dash" : undefined}
        />
      </svg>
    );
  }

  return (
    <svg
      className={`h-full text-teal-dark/40 ${className}`}
      width="8"
      viewBox="0 0 8 200"
      fill="none"
      aria-hidden
    >
      <line
        x1="4"
        y1="0"
        x2="4"
        y2="200"
        stroke="currentColor"
        strokeWidth="3"
        strokeDasharray="12 10"
        strokeLinecap="round"
      />
    </svg>
  );
}
