"use client";

import React from "react";
import { cn } from "@/lib/utils";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/registry/react/components/toggle-group";

const Example = () => {
  const [value, setValue] = React.useState<string[]>(["normal"]);

  return (
    <div className="flex flex-col gap-4">
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

const FONT_WEIGHTS = [
  { className: "font-light", label: "Light", value: "light" },
  { className: "font-normal", label: "Normal", value: "normal" },
  { className: "font-medium", label: "Medium", value: "medium" },
  { className: "font-bold", label: "Bold", value: "bold" },
] as const;

export default Example;
