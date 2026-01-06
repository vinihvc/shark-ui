import { Progress as ArkProgress } from "@ark-ui/react/progress";
import type React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";

export const progressVariants = tv({
  base: ["w-full overflow-hidden rounded-full", "bg-primary/20"],
  variants: {
    variant: {
      primary: ["*:data-[slot=rango]:bg-primary/20", "bg-primary/20"],
      secondary: ["*:data-[slot=range]:bg-secondary", "bg-secondary"],
      success: ["*:data-[slot=range]:bg-success", "bg-success"],
      info: ["*:data-[slot=range]:bg-info", "bg-info"],
      warning: ["*:data-[slot=range]:bg-warning", "bg-warning"],
      destructive: ["*:data-[slot=range]:bg-destructive", "bg-destructive"],
    },
    size: {
      sm: ["h-1"],
      md: ["h-2"],
      lg: ["h-3"],
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

interface ProgressProps
  extends React.ComponentProps<typeof ArkProgress.Root>,
    VariantProps<typeof progressVariants> {}

export const Progress = (props: ProgressProps) => {
  const { variant = "primary", size = "md", className, ...rest } = props;

  return (
    <ArkProgress.Root
      className={cn("w-full", className)}
      data-slot="progress"
      {...rest}
    >
      <ArkProgress.Track
        className={cn(progressVariants({ variant, size }), className)}
        data-slot="progress-track"
      >
        <ArkProgress.Range
          className={cn(
            "h-full bg-primary transition-all duration-300 ease-out"
          )}
          data-slot="progress-range"
        />
      </ArkProgress.Track>
    </ArkProgress.Root>
  );
};
