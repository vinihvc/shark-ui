"use client";

import React from "react";

import { cn } from "@/lib/utils";

interface DotPatternProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  cr?: number;
  cx?: number;
  cy?: number;
  height?: number;
  width?: number;
  x?: number;
  y?: number;
}

export const DotPattern = (props: DotPatternProps) => {
  const {
    width = 16,
    height = 16,
    x = 0,
    y = 0,
    cx = 1,
    cy = 1,
    cr = 1,
    className,
    ...rest
  } = props;

  const containerRef = React.useRef<SVGSVGElement>(null);
  const [dimensions, setDimensions] = React.useState({ width: 0, height: 0 });

  React.useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { width: w, height: h } =
          containerRef.current.getBoundingClientRect();
        setDimensions({ width: w, height: h });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const cols = Math.ceil(dimensions.width / width) || 1;
  const rows = Math.ceil(dimensions.height / height) || 1;

  const dots = Array.from({ length: cols * rows }, (_, i) => {
    const col = i % cols;
    const row = Math.floor(i / cols);
    return {
      x: col * width + cx + x,
      y: row * height + cy + y,
    };
  });

  return (
    <svg
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 size-full",
        className
      )}
      ref={containerRef}
      {...rest}
    >
      {dots.map((dot) => (
        <circle
          cx={dot.x}
          cy={dot.y}
          fill="currentColor"
          key={`${dot.x}-${dot.y}`}
          r={cr}
        />
      ))}
    </svg>
  );
};
