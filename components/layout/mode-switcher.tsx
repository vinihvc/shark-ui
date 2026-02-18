"use client";

import { useTheme } from "next-themes";
import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/react/components/button";
import { Kbd } from "@/registry/react/components/kbd";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/registry/react/components/tooltip";
import { ToggleThemeIcon } from "../icons/toggle-theme";

export const ModeSwitcher = () => {
  const { setTheme, resolvedTheme } = useTheme();

  const toggleTheme = React.useCallback(() => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }, [resolvedTheme, setTheme]);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (
        (e.key === "d" || e.key === "D") &&
        !e.metaKey &&
        !e.ctrlKey &&
        !e.altKey
      ) {
        if (
          (e.target instanceof HTMLElement && e.target.isContentEditable) ||
          e.target instanceof HTMLInputElement ||
          e.target instanceof HTMLTextAreaElement ||
          e.target instanceof HTMLSelectElement
        ) {
          return;
        }

        e.preventDefault();
        toggleTheme();
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [toggleTheme]);

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          aria-label="Toggle theme"
          className={cn("group", "extend-touch-target")}
          data-mode={resolvedTheme ?? "light"}
          onClick={toggleTheme}
          size="icon-md"
          suppressHydrationWarning
          variant="ghost"
        >
          <span className="group-data-[mode=dark]:[&_svg]:rotate-180">
            <ToggleThemeIcon className="transition-transform duration-500" />
          </span>
        </Button>
      </TooltipTrigger>

      <TooltipContent className="flex items-center gap-2 pr-2">
        Toggle mode <Kbd>D</Kbd>
      </TooltipContent>
    </Tooltip>
  );
};
