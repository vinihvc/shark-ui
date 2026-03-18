"use client";

import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/registry/react/components/card";

const TOKENS = [
  "background",
  "foreground",
  "primary",
  "secondary",
  "muted",
  "accent",
  "destructive",
  "success",
  "info",
  "warning",
] as const;

export const StyleOverviewExample = (props: React.ComponentProps<"div">) => {
  return (
    <Card {...props}>
      <CardHeader title="Style overview" />
      <CardContent>
        <div className="grid grid-cols-5 gap-4">
          {TOKENS.map((token) => (
            <div
              className="flex flex-col flex-wrap items-center gap-2"
              key={token}
            >
              <div
                aria-label={token}
                className={cn(
                  "relative aspect-square w-full rounded-lg bg-(--color)",
                  "after:absolute after:inset-0 after:rounded-[inherit] after:border after:border-border after:mix-blend-darken dark:after:mix-blend-lighten"
                )}
                role="img"
                style={{ background: `var(--${token})` }}
              />

              <div className="hidden max-w-12 truncate font-mono text-[0.50rem] md:block">
                --{token}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
