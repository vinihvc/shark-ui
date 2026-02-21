"use client";

import React from "react";
import {
  type BorderRadius,
  type GrayColor,
  type PrimaryColor,
  useConfig,
} from "@/store/config";

type ThemesProviderProps = {
  /**
   * The primary color of the theme.
   */
  primaryColor: PrimaryColor;
  /**
   * The background color of the theme.
   */
  grayColor: GrayColor;
  /**
   * The border radius of the theme.
   */
  borderRadius: BorderRadius;
};

const ThemesContext = React.createContext({} as ThemesProviderProps);

export const ThemesProvider = ({ children }: React.PropsWithChildren) => {
  const [{ primaryColor, grayColor, borderRadius }] = useConfig();

  React.useEffect(() => {
    for (const className of Array.from(document.body.classList)) {
      document.body.classList.remove(className);
    }

    document.body.classList.add(`bg-${grayColor}`);
    document.body.classList.add(`radius-${borderRadius}`);
    document.body.classList.add(`theme-${primaryColor}`);
  }, [primaryColor, grayColor, borderRadius]);

  return (
    <ThemesContext value={{ primaryColor, grayColor, borderRadius }}>
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
