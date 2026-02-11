"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/registry/react/components/toggle-group";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/react/components/tooltip";

const FONT_WEIGHTS = [
  { value: "light", label: "Light", className: "font-light" },
  { value: "normal", label: "Normal", className: "font-normal" },
  { value: "medium", label: "Medium", className: "font-medium" },
  { value: "bold", label: "Bold", className: "font-bold" },
] as const;

const CustomFontWeightDemo = () => {
  const [value, setValue] = useState<string[]>(["normal"]);
  const activeWeight = FONT_WEIGHTS.find((w) => value.includes(w.value));

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
            <Tooltip key={weight.value}>
              <TooltipTrigger asChild>
                <ToggleGroupItem
                  aria-label={`Set font weight to ${weight.label}`}
                  className="min-w-16 flex-col gap-1 py-2"
                  value={weight.value}
                >
                  <span className={cn("text-lg", weight.className)}>Aa</span>
                  <span className="text-muted-foreground text-xs">
                    {weight.label}
                  </span>
                </ToggleGroupItem>
              </TooltipTrigger>
              <TooltipContent>Set font weight to {weight.label}</TooltipContent>
            </Tooltip>
          ))}
        </ToggleGroup>
      </div>
      {activeWeight && (
        <p className="text-muted-foreground text-sm">
          Use{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs">
            {activeWeight.className}
          </code>{" "}
          to set the font weight.
        </p>
      )}
    </div>
  );
};

export default CustomFontWeightDemo;
