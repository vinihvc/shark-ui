"use client";

import { RootProvider } from "fumadocs-ui/provider/next";
import { ThemeProvider } from "next-themes";
import type React from "react";
import { ThemesProvider } from "@/providers/themes";

export const Providers = (props: React.PropsWithChildren) => {
  const { children } = props;

  return (
    <RootProvider
      search={{
        enabled: false,
      }}
    >
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <ThemesProvider>{children}</ThemesProvider>
      </ThemeProvider>
    </RootProvider>
  );
};
