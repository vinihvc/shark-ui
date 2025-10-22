import type * as React from "react";
import { cn } from "@/lib/utils";

export const Input = (props: React.ComponentProps<"input">) => {
  const { type = "text", className, ...rest } = props;

  return (
    <input
      className={cn(
        "h-9 w-full min-w-0",
        "px-3 py-1",
        "bg-transparent dark:bg-input/30",
        "text-base md:text-sm",
        "rounded-md border border-input shadow-xs",
        "placeholder:text-muted-foreground",
        "file:inline-flex file:h-7 file:border-0 file:bg-transparent",
        "file:font-medium file:text-foreground file:text-sm",
        "transition-[color,box-shadow]",
        "selection:bg-primary selection:text-primary-foreground",
        "outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
        "aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      data-part="input"
      type={type}
      {...rest}
    />
  );
};
