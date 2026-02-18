"use client";

import React from "react";
import { cn } from "@/lib/utils";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/registry/react/components/toggle-group";

const FONT_WEIGHTS = [
  { value: "light", label: "Light", className: "font-light" },
  { value: "normal", label: "Normal", className: "font-normal" },
  { value: "medium", label: "Medium", className: "font-medium" },
  { value: "bold", label: "Bold", className: "font-bold" },
] as const;

const Example = () => {
  const [value, setValue] = React.useState<string[]>(["normal"]);

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-2">
        <span className="font-medium text-sm">Font Weight</span>
        <ToggleGroup
          className="flex-wrap"
          multiple={false}
          onValueChange={(e) => setValue(e.value)}
          size="lg"
          spacing={2}
          value={value}
          variant="outline"
        >
          {FONT_WEIGHTS.map((weight) => (
            <ToggleGroupItem
              aria-label={`Set font weight to ${weight.label}`}
              className="size-16 flex-col gap-1 py-2"
              key={weight.value}
              value={weight.value}
            >
              <span className={cn("text-lg", weight.className)}>Aa</span>
              <span className="text-muted-foreground text-xs">
                {weight.label}
              </span>
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>
    </div>
  );
};

export default Example;
