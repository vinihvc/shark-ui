"use client";

import { useTheme } from "next-themes";
import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/registry/react/components/button";
import { ToggleThemeIcon } from "../icons/toggle-theme";

export const ModeSwitcher = () => {
  const { setTheme, resolvedTheme } = useTheme();

  const toggleTheme = React.useCallback(() => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }, [resolvedTheme, setTheme]);

  return (
    <Button
      aria-label="Toggle theme"
      className={cn(
        "data-[mode=dark]:[&_svg]:rotate-180",
        "transition-transform duration-500",
        "extend-touch-target"
      )}
      data-mode={resolvedTheme ?? "light"}
      onClick={toggleTheme}
      size="icon-md"
      variant="ghost"
    >
      <ToggleThemeIcon />
    </Button>
  );
};
