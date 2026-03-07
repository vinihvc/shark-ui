"use client";

import React from "react";
import { AngleSlider } from "@/registry/react/components/angle-slider";

const Example = () => {
  const [value, setValue] = React.useState(45);

  return (
    <div className="flex flex-col gap-4">
      <div className="text-muted-foreground text-sm">More than: 180</div>
      <AngleSlider
        aria-label="Angle"
        onValueChange={(e) => setValue(e.value)}
        value={value}
      />
      <div className="text-center text-muted-foreground text-sm">
        {value > 180 ? "✅" : "❌"}
      </div>
    </div>
  );
};

export default Example;
