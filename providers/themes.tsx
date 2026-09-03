"use client";

import { createContext } from "@ark-ui/react/utils";
import React from "react";
import { applyBodyThemeClasses } from "@/lib/preview-theme";
import {
  type BorderRadius,
  type GrayColor,
  type PrimaryColor,
  useConfig,
} from "@/store/config";

interface ThemesProviderProps {
  /**
   * The border radius of the theme.
   */
  borderRadius: BorderRadius;
  /**
   * The background color of the theme.
   */
  grayColor: GrayColor;
  /**
   * The primary color of the theme.
   */
  primaryColor: PrimaryColor;
}

const [ThemesContextProvider, useThemes] = createContext<ThemesProviderProps>({
  hookName: "useThemes",
  name: "ThemesContext",
  providerName: "ThemesProvider",
});

export const ThemesProvider = ({ children }: React.PropsWithChildren) => {
  const [{ primaryColor, grayColor, borderRadius }] = useConfig();

  React.useEffect(() => {
    applyBodyThemeClasses({ borderRadius, grayColor, primaryColor });
  }, [primaryColor, grayColor, borderRadius]);

  return (
    <ThemesContextProvider value={{ borderRadius, grayColor, primaryColor }}>
      {children}
    </ThemesContextProvider>
  );
};

export { useThemes };
