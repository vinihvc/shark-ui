import React from "react";

export const useIsMobile = (mobileBreakpoint = 768) => {
  const [isMobile, setIsMobile] = React.useState(false);

  // biome-ignore lint/correctness/useExhaustiveDependencies: we don't want to re-run the effect when the mobileBreakpoint changes
  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${mobileBreakpoint - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < mobileBreakpoint);
    };
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < mobileBreakpoint);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return !!isMobile;
};
