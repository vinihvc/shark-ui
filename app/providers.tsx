"use client";

import { ThemeProvider } from "next-themes";

interface ProvidersProps extends React.ComponentProps<typeof ThemeProvider> {}

export const Providers = (props: ProvidersProps) => (
  <ThemeProvider
    attribute="class"
    defaultTheme="system"
    enableSystem
    {...props}
  />
);
