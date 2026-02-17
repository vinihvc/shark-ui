"use client";

import { Highlight as ArkHighlight } from "@ark-ui/react/highlight";
import type React from "react";
import { cn } from "@/lib/utils";

const highlightMarkClass = cn(
  "rounded-sm bg-primary/20 font-medium text-primary",
  "box-decoration-clone"
);

const Highlight = (props: React.ComponentProps<typeof ArkHighlight>) => {
  const { className, ...rest } = props;
  return (
    <ArkHighlight
      className={cn(highlightMarkClass, className)}
      data-slot="highlight"
      {...rest}
    />
  );
};

export { Highlight };
