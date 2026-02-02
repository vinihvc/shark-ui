import { Field as ArkField } from "@ark-ui/react/field";
import type React from "react";
import { cn } from "@/lib/utils";

export const Textarea = (
  props: React.ComponentProps<typeof ArkField.Textarea>
) => {
  const { autoresize = true, className, ...rest } = props;

  return (
    <ArkField.Textarea
      autoresize={autoresize}
      className={cn(
        "field-sizing-content min-h-16 w-full",
        "flex",
        "px-3 py-2",
        "bg-transparent dark:bg-input/30",
        "text-base md:text-sm",
        "rounded-md border border-input shadow-xs",
        "placeholder:text-muted-foreground",
        "outline-none transition-[color,box-shadow]",
        "focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "aria-invalid:border-destructive aria-invalid:ring-destructive/20",
        className
      )}
      data-slot="textarea"
      {...rest}
    />
  );
};
