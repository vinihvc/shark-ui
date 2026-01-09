"use client";

import React from "react";
import { Progress } from "@/registry/react/components/progress";

const ProgressDemo = () => {
  const [progress, setProgress] = React.useState(13);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return <Progress value={progress} />;
};

export default ProgressDemo;
