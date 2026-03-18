import React from "react";

export const useIsMac = () => {
  const [isMac, setIsMac] = React.useState(true);

  React.useEffect(() => {
    setIsMac(navigator.userAgent.toUpperCase().includes("MAC"));
  }, []);

  return isMac;
};
