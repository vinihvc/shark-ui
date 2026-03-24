"use client";

import React from "react";
import { CircularProgress } from "@/registry/react/components/circular-progress";

const Example = () => {
  const [progress, setProgress] = React.useState(24);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(72), 500);
    return () => clearTimeout(timer);
  }, []);

  return <CircularProgress value={progress} />;
};

export default Example;
