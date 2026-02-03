import { FieldInput } from "@ark-ui/react/field";
import type React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";

export const inputVariants = tv({
  base: [
    "peer",
    "w-full min-w-0",
    "px-3",
    "bg-transparent dark:bg-input/30",
    "text-base md:text-sm",
    "rounded-md border border-input shadow-xs",
    "placeholder:text-muted-foreground",
    "file:inline-flex file:h-7 file:items-center file:border-0",
    "file:font-medium file:text-foreground file:text-sm",
    "transition-[color,box-shadow]",
    "outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
    "aria-invalid:border-destructive aria-invalid:ring-[3px] aria-invalid:ring-destructive/20 data-invalid:text-destructive",
    "dark:data-invalid:text-destructive-foreground dark:aria-invalid:border-destructive-foreground dark:aria-invalid:ring-destructive-foreground/40",
    "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
  ],
  variants: {
    size: {
      xs: ["h-6"],
      sm: ["h-7"],
      md: ["h-8"],
      lg: ["h-9"],
      xl: ["h-10"],
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export interface InputProps
  extends Omit<React.ComponentProps<typeof FieldInput>, "size">,
    VariantProps<typeof inputVariants> {}

export const Input = (props: InputProps) => {
  const { size = "md", type = "text", className, ...rest } = props;

  return (
    <FieldInput
      className={cn(inputVariants({ size }), className)}
      data-size={size}
      data-slot="input"
      type={type}
      {...rest}
    />
  );
};
