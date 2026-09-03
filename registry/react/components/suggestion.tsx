"use client";

import { ark } from "@ark-ui/react/factory";
import type React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/react/components/button";

export const Suggestions = (props: React.ComponentProps<typeof ark.div>) => {
  const { className, ...rest } = props;

  return (
    <ark.div
      className={cn(
        "flex w-full flex-wrap items-center justify-center gap-2",
        className
      )}
      data-slot="suggestions"
      {...rest}
    />
  );
};

interface SuggestionProps
  extends Omit<React.ComponentProps<typeof Button>, "onClick"> {
  /**
   * The function to call when the suggestion is clicked.
   */
  onClick?: (suggestion: string) => void;
  /**
   * The suggestion to display.
   */
  suggestion: string;
}

export const Suggestion = (props: SuggestionProps) => {
  const {
    children,
    className,
    onClick,
    suggestion,
    type = "button",
    variant = "outline",
    size = "sm",
    pill = true,
    ...rest
  } = props;

  return (
    <Button
      className={cn("font-normal", className)}
      data-slot="suggestion"
      onClick={() => onClick?.(suggestion)}
      pill={pill}
      size={size}
      type={type}
      variant={variant}
      {...rest}
    >
      {children ?? suggestion}
    </Button>
  );
};
