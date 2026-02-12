import type React from "react";
import { cn } from "@/lib/utils";

export const ThumbPlaceholder = ({
  className,
  ...rest
}: React.ComponentProps<"div">) => (
  <div className={cn("rounded-md bg-muted", className)} {...rest} />
);

export const ThumbPlaceholderCircle = ({
  className,
  ...rest
}: React.ComponentProps<"div">) => (
  <div className={cn("shrink-0 rounded-full bg-muted", className)} {...rest} />
);

interface ThumbPlaceholderTextProps extends React.ComponentProps<"div"> {
  lines?: number;
}

export const ThumbPlaceholderText = ({
  className,
  lines = 2,
  ...rest
}: ThumbPlaceholderTextProps) => (
  <div className={cn("flex w-full flex-col gap-2", className)} {...rest}>
    {Array.from({ length: lines }, (_, i) => `line-${i}`).map((key) => (
      <div className="h-4 w-full rounded-md bg-muted last:w-3/4" key={key} />
    ))}
  </div>
);
