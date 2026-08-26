"use client";

import { useEffect } from "react";
import {
  applyBodyThemeClasses,
  isManagedThemeClass,
  isPreviewThemeMessage,
} from "@/lib/preview-theme";

export const PreviewThemeSync = () => {
  useEffect(() => {
    const onMessage = (event: MessageEvent<unknown>) => {
      if (
        event.origin !== window.location.origin ||
        !isPreviewThemeMessage(event.data)
      ) {
        return;
      }

      const { mode, primaryColor, grayColor, borderRadius } =
        event.data.payload;
      const html = document.documentElement;
      const htmlManaged = Array.from(html.classList).filter(
        isManagedThemeClass
      );

      if (htmlManaged.length > 0) {
        html.classList.remove(...htmlManaged);
      }

      html.classList.add(mode);
      applyBodyThemeClasses({ borderRadius, grayColor, primaryColor });
    };

    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return null;
};
