"use client";

import { Field as ArkField } from "@ark-ui/react/field";
import type React from "react";
import { cn } from "@/lib/utils";

export const Textarea = (
  props: React.ComponentProps<typeof ArkField.Textarea>
) => {
  const { className, ...rest } = props;

  return (
    <ArkField.Textarea
      className={cn(
        "field-sizing-content min-h-16 w-full",
        "flex",
        "px-3 py-2",
        "bg-transparent dark:bg-input/30",
        "text-base md:text-sm",
        "rounded-xl border border-input shadow-md/5",
        "placeholder:text-muted-foreground/64",
        "transition-[color,box-shadow]",
        "outline-none focus-visible:border-primary focus-visible:ring-[3px] focus-visible:ring-ring/32",
        "aria-invalid:border-destructive aria-invalid:ring-[3px] aria-invalid:ring-destructive/24 data-invalid:text-destructive",
        "dark:data-invalid:text-destructive-foreground dark:aria-invalid:border-destructive-foreground dark:aria-invalid:ring-destructive-foreground/40",
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-64",
        className
      )}
      data-slot="textarea"
      {...rest}
    />
  );
};
