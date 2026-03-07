"use client";

import { Provider as JotaiProvider } from "jotai";
import { ThemeProvider } from "next-themes";
import type React from "react";
import { ThemesProvider } from "@/providers/themes";

export const Providers = ({ children }: React.PropsWithChildren) => {
  return (
    <JotaiProvider>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <ThemesProvider>{children}</ThemesProvider>
      </ThemeProvider>
    </JotaiProvider>
  );
};
