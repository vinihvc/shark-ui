"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const ComponentsExamples = dynamic(
  () =>
    import("./components-examples").then((module) => module.ComponentsExamples),
  { ssr: false }
);

const desktopMediaQuery = "(min-width: 768px)";

export const ComponentsExamplesLoader = (
  props: React.ComponentProps<"div">
) => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(desktopMediaQuery);
    const updateMatch = () => setIsDesktop(mediaQuery.matches);

    updateMatch();
    mediaQuery.addEventListener("change", updateMatch);
    return () => mediaQuery.removeEventListener("change", updateMatch);
  }, []);

  return isDesktop ? <ComponentsExamples {...props} /> : null;
};
