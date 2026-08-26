"use client";

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

const ThemesContext = React.createContext({} as ThemesProviderProps);

export const ThemesProvider = ({ children }: React.PropsWithChildren) => {
  const [{ primaryColor, grayColor, borderRadius }] = useConfig();

  React.useEffect(() => {
    applyBodyThemeClasses({ borderRadius, grayColor, primaryColor });
  }, [primaryColor, grayColor, borderRadius]);

  return (
    <ThemesContext value={{ borderRadius, grayColor, primaryColor }}>
      {children}
    </ThemesContext>
  );
};

export const useThemes = () => {
  const context = React.useContext(ThemesContext);

  if (!context) {
    throw new Error("useThemes must be used within a ThemesProvider");
  }

  return context;
};
