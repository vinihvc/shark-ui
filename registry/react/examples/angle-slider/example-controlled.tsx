"use client";

import React from "react";
import {
  AngleSlider,
  AngleSliderControl,
  AngleSliderProgressRing,
  AngleSliderThumb,
  AngleSliderValueDisplay,
} from "@/registry/react/components/angle-slider";

const Example = () => {
  const [value, setValue] = React.useState(45);

  return (
    <AngleSlider
      aria-label="Angle"
      onValueChange={(e) => setValue(e.value)}
      value={value}
    >
      <AngleSliderControl>
        <AngleSliderProgressRing />
        <AngleSliderThumb />
      </AngleSliderControl>
      <AngleSliderValueDisplay />
    </AngleSlider>
  );
};

export default Example;
