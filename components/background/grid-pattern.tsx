"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface GridPatternProps extends React.ComponentProps<"svg"> {
  height?: number;
  strokeDasharray?: string;
  width?: number;
  x?: number;
  y?: number;
}

export const GridPattern = (props: GridPatternProps) => {
  const {
    width = 40,
    height = 40,
    x = -1,
    y = -1,
    strokeDasharray = "0",
    className,
    ...rest
  } = props;

  const id = React.useId();

  return (
    <svg
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full fill-gray-400/30 stroke-gray-400/30",
        className
      )}
      {...rest}
    >
      <defs>
        <pattern
          height={height}
          id={id}
          patternUnits="userSpaceOnUse"
          width={width}
          x={x}
          y={y}
        >
          <path
            d={`M.5 ${height}V.5H${width}`}
            fill="none"
            strokeDasharray={strokeDasharray}
          />
        </pattern>
      </defs>
      <rect fill={`url(#${id})`} height="100%" strokeWidth={0} width="100%" />
    </svg>
  );
};
