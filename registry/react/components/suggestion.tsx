"use client";

import type React from "react";
import { useCallback } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/react/components/button";

export const Suggestions = (props: React.ComponentProps<"div">) => {
  const { className, ...rest } = props;

  return (
    <div
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
  onClick?: (suggestion: string) => void;
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

  const handleClick = useCallback(() => {
    onClick?.(suggestion);
  }, [onClick, suggestion]);

  return (
    <Button
      className={cn("font-normal", className)}
      data-slot="suggestion"
      onClick={handleClick}
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
