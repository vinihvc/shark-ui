"use client";

import {
  Highlight as ArkHighlight,
  useHighlight as useArkHighlight,
} from "@ark-ui/react/highlight";
import type React from "react";
import { cn } from "@/lib/utils";

export const useHighlight = useArkHighlight;

export const Highlight = (props: React.ComponentProps<typeof ArkHighlight>) => {
  const { className, ...rest } = props;

  return (
    <ArkHighlight
      className={cn(
        "px-1",
        "bg-primary/20",
        "text-primary",
        "rounded-md",
        "box-decoration-clone",
        className
      )}
      data-slot="highlight"
      {...rest}
    />
  );
};
